import {
	AxiomClauseContext,
	AxiomContext,
	ClauseContext,
	DefinitionClauseContext,
	DefinitionContext,
	MultiplePatternMatchingBodyContext,
	MultiplePatternMatchingContext,
	ObjectContext,
	ObjectsContext,
	ParametersContext,
	StandalonePatternMatchingBodyContext,
	StandalonePatternMatchingContext,
	TheoremClauseContext,
	TheoremContext,
	X_proofContext
} from '../parser/x_proofParser';
import x_proofVisitor from '../parser/x_proofVisitor';
import { AliasAssignment, AliasRule, Axiom, AxiomClause, Definition, DefinitionClause, MultiplePatternMatchCase, MultiplePatternMatchRule, ObjectRule, Program, Rule, StandalonePatternMatchCase, StandalonePatternMatchRule, Term, Theorem, TheoremClause } from './type';

class AstBuilder extends x_proofVisitor<any> {
	override visitX_proof = (ctx: X_proofContext): Program => {
		const clauses = ctx.clause_list().map(c => this.visitClause(c as any));
		return { clauses };
	};

	override visitClause = (ctx: ClauseContext): DefinitionClause | AxiomClause | TheoremClause => {
		if (ctx.definitionClause()) return this.visitDefinitionClause(ctx.definitionClause() as any);
		if (ctx.axiomClause()) return this.visitAxiomClause(ctx.axiomClause() as any);
		return this.visitTheoremClause(ctx.theoremClause() as any);
	};

	override visitDefinitionClause = (ctx: DefinitionClauseContext): DefinitionClause => {
		const definitions = ctx.definition_list().map(d => this.visitDefinition(d as any));
		return { kind: 'definitionClause', definitions };
	};

	override visitDefinition = (ctx: DefinitionContext): Definition => {
		const name = ctx.IDENTIFIER().getText();
		const params = ctx.parameters() ? this.visitParameters(ctx.parameters() as any) : [];
		let conformRules: Rule[] = [];
		const rules = ctx.rule_list() as any[] | undefined;
		if (rules && rules.length > 0) {
			conformRules = rules.map(r => this.visitRule(r));
		}
		return { kind: "definition", name, params, conformRules };
	};

	override visitAxiomClause = (ctx: AxiomClauseContext): AxiomClause => {
		const axioms = ctx.axiom_list().map(a => this.visitAxiom(a as any));
		return { kind: 'axiomClause', axioms };
	};

	override visitAxiom = (ctx: AxiomContext): Axiom => {
		if (ctx.object()) {
			return { kind: 'axiomObject', object: this.visitObject(ctx.object() as any) };
		}
		const name = ctx.IDENTIFIER().getText();
		const params = ctx.parameters() ? this.visitParameters(ctx.parameters() as any) : [];
		const rules = ctx.rule_list() as any[] | undefined;
		const premiseRules: Rule[] = [];
		let conclusionRules: Rule[] = [];
		if (rules && rules.length > 0) {
			conclusionRules = rules.map(r => this.visitRule(r));
		}
		return { kind: 'axiomNamed', name, params, premiseRules, conclusionRules };
	};

	override visitTheoremClause = (ctx: TheoremClauseContext): TheoremClause => {
		const theorems = ctx.theorem_list().map(t => this.visitTheorem(t as any));
		return { kind: 'theoremClause', theorems };
	};

	override visitTheorem = (ctx: TheoremContext): Theorem => {
		const name = ctx.IDENTIFIER().getText();
		const params = ctx.parameters() ? this.visitParameters(ctx.parameters() as any) : [];
		const allRules = (ctx.rule_list() as any[]).map(r => this.visitRule(r));
		return { kind: "theorem", name, params, premiseRules: [], conclusionRules: allRules, proofRules: [] };
	};

	override visitRule = (ctx: any): Rule => {
		if (ctx.object()) {
			return { kind: 'object', object: this.visitObject(ctx.object()) } as ObjectRule;
		}
		if (ctx.patternMatching()) {
			return this.visitPatternMatching(ctx.patternMatching());
		}
		return this.visitAlias(ctx.alias());
	};

	override visitAlias = (ctx: any): AliasRule => {
		const bodies = ctx.aliasBody_list();
		const assignments: AliasAssignment[] = bodies.map((b: any) => this.visitAliasBody(b));
		return { kind: 'alias', assignments };
	};

	override visitAliasBody = (ctx: any): AliasAssignment => {
		const name = ctx.IDENTIFIER().getText();
		const value = this.visitObject(ctx.object());
		return { name, value };
	};

	override visitPatternMatching = (ctx: any): StandalonePatternMatchRule | MultiplePatternMatchRule => {
		if (ctx.standalonePatternMatching()) return this.visitStandalonePatternMatching(ctx.standalonePatternMatching());
		return this.visitMultiplePatternMatching(ctx.multiplePatternMatching());
	};

	override visitStandalonePatternMatching = (ctx: StandalonePatternMatchingContext): StandalonePatternMatchRule => {
		const head = this.visitStandalonePatternMatchingBody(ctx.standalonePatternMatchingBody() as any);
		const tail = ctx.standalonePatternMatching_list().map(c => this.visitStandalonePatternMatchingBody(c.standalonePatternMatchingBody() as any));
		return { kind: 'matchStandalone', cases: [head, ...tail] };
	};

	override visitStandalonePatternMatchingBody = (ctx: StandalonePatternMatchingBodyContext): StandalonePatternMatchCase => {
		const pattern = this.visitObject(ctx.object(0) as any);
		const value = this.visitObject(ctx.object(1) as any);
		return { pattern, value };
	};

	override visitMultiplePatternMatching = (ctx: MultiplePatternMatchingContext): MultiplePatternMatchRule => {
		const input = this.visitObject(ctx.object() as any);
		const cases = ctx.multiplePatternMatchingBody_list().map(b => this.visitMultiplePatternMatchingBody(b as any));
		return { kind: 'matchMultiple', input, cases };
	};

	override visitMultiplePatternMatchingBody = (ctx: MultiplePatternMatchingBodyContext): MultiplePatternMatchCase => {
		const firstText: string | undefined = (ctx as any).children?.[0]?.getText?.();
		const isDefault = firstText === 'default';
		const pattern = isDefault ? null : this.visitObject(ctx.object() as any);
		const rules = (ctx.rule_list() as any[]).map(r => this.visitRule(r));
		return { isDefault, pattern, rules };
	};

	override visitParameters = (ctx: ParametersContext): string[] => {
		const ids: string[] = [];
		ids.push((ctx as any).IDENTIFIER(0).getText());
		let i = 1;
		while ((ctx as any).IDENTIFIER(i)) {
			ids.push((ctx as any).IDENTIFIER(i).getText());
			i += 1;
		}
		return ids;
	};

	override visitObjects = (ctx: ObjectsContext): Term[] => {
		return ctx.object_list().map(o => this.visitObject(o as any));
	};

	override visitObject = (ctx: ObjectContext): Term => {
		const name = ctx.IDENTIFIER().getText();
		const args: Term[] = [];
		// Support chained application: IDENTIFIER application*
		const applications: any[] = (ctx as any).application_list ? (ctx as any).application_list() : [];
		for (const app of applications) {
			if (app.objects && app.objects()) {
				const group = this.visitObjects(app.objects());
				args.push(...group);
			}
		}
		return { name, args };
	};
}

export function parseTreeToAst(tree: X_proofContext): Program {
	const builder = new AstBuilder();
	return builder.visitX_proof(tree);
}

export { AstBuilder }; 