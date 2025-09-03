export type Program = {
	clauses: Clause[];
};

export type Clause = DefinitionClause | AxiomClause | TheoremClause;

export type DefinitionClause = {
	kind: 'definitionClause';
	definitions: Definition[];
};

export type Definition = {
	name: string;
	params: string[];
	conformRules: Rule[];
};

export type AxiomClause = {
	kind: 'axiomClause';
	axioms: Axiom[];
};

export type Axiom =
	| { kind: 'axiomObject'; object: Term }
	| {
		kind: 'axiomNamed';
		name: string;
		params: string[];
		premiseRules: Rule[];
		conclusionRules: Rule[];
	};

export type TheoremClause = {
	kind: 'theoremClause';
	theorems: Theorem[];
};

export type Theorem = {
	name: string;
	params: string[];
	premiseRules: Rule[];
	conclusionRules: Rule[];
	proofRules: Rule[];
};

export type Rule =
	| ObjectRule
	| AliasRule
	| StandalonePatternMatchRule
	| MultiplePatternMatchRule;

export type ObjectRule = {
	kind: 'object';
	object: Term;
};

export type AliasAssignment = {
	name: string;
	value: Term;
};

export type AliasRule = {
	kind: 'alias';
	assignments: AliasAssignment[];
};

export type StandalonePatternMatchCase = {
	pattern: Term;
	value: Term;
};

export type StandalonePatternMatchRule = {
	kind: 'matchStandalone';
	cases: StandalonePatternMatchCase[];
};

export type MultiplePatternMatchCase = {
	isDefault: boolean;
	pattern: Term | null;
	rules: Rule[];
};

export type MultiplePatternMatchRule = {
	kind: 'matchMultiple';
	input: Term;
	cases: MultiplePatternMatchCase[];
};

export type Term = {
	name: string;
	args: Term[];
};
