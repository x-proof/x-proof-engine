// Generated from x_proof.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ParametersContext } from "./x_proofParser.js";
import { ObjectContext } from "./x_proofParser.js";
import { ObjectsContext } from "./x_proofParser.js";
import { AliasBodyContext } from "./x_proofParser.js";
import { AliasContext } from "./x_proofParser.js";
import { StandalonePatternMatchingBodyContext } from "./x_proofParser.js";
import { StandalonePatternMatchingContext } from "./x_proofParser.js";
import { MultiplePatternMatchingBodyContext } from "./x_proofParser.js";
import { MultiplePatternMatchingContext } from "./x_proofParser.js";
import { PatternMatchingContext } from "./x_proofParser.js";
import { RuleBodyContext } from "./x_proofParser.js";
import { RuleContext } from "./x_proofParser.js";
import { DefinitionContext } from "./x_proofParser.js";
import { DefinitionClauseContext } from "./x_proofParser.js";
import { AxiomContext } from "./x_proofParser.js";
import { AxiomClauseContext } from "./x_proofParser.js";
import { TheoremContext } from "./x_proofParser.js";
import { TheoremClauseContext } from "./x_proofParser.js";
import { ClauseContext } from "./x_proofParser.js";
import { X_proofContext } from "./x_proofParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `x_proofParser`.
 */
export default class x_proofListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `x_proofParser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.object`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.object`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.objects`.
	 * @param ctx the parse tree
	 */
	enterObjects?: (ctx: ObjectsContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.objects`.
	 * @param ctx the parse tree
	 */
	exitObjects?: (ctx: ObjectsContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.aliasBody`.
	 * @param ctx the parse tree
	 */
	enterAliasBody?: (ctx: AliasBodyContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.aliasBody`.
	 * @param ctx the parse tree
	 */
	exitAliasBody?: (ctx: AliasBodyContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.alias`.
	 * @param ctx the parse tree
	 */
	enterAlias?: (ctx: AliasContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.alias`.
	 * @param ctx the parse tree
	 */
	exitAlias?: (ctx: AliasContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.standalonePatternMatchingBody`.
	 * @param ctx the parse tree
	 */
	enterStandalonePatternMatchingBody?: (ctx: StandalonePatternMatchingBodyContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.standalonePatternMatchingBody`.
	 * @param ctx the parse tree
	 */
	exitStandalonePatternMatchingBody?: (ctx: StandalonePatternMatchingBodyContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.standalonePatternMatching`.
	 * @param ctx the parse tree
	 */
	enterStandalonePatternMatching?: (ctx: StandalonePatternMatchingContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.standalonePatternMatching`.
	 * @param ctx the parse tree
	 */
	exitStandalonePatternMatching?: (ctx: StandalonePatternMatchingContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.multiplePatternMatchingBody`.
	 * @param ctx the parse tree
	 */
	enterMultiplePatternMatchingBody?: (ctx: MultiplePatternMatchingBodyContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.multiplePatternMatchingBody`.
	 * @param ctx the parse tree
	 */
	exitMultiplePatternMatchingBody?: (ctx: MultiplePatternMatchingBodyContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.multiplePatternMatching`.
	 * @param ctx the parse tree
	 */
	enterMultiplePatternMatching?: (ctx: MultiplePatternMatchingContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.multiplePatternMatching`.
	 * @param ctx the parse tree
	 */
	exitMultiplePatternMatching?: (ctx: MultiplePatternMatchingContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.patternMatching`.
	 * @param ctx the parse tree
	 */
	enterPatternMatching?: (ctx: PatternMatchingContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.patternMatching`.
	 * @param ctx the parse tree
	 */
	exitPatternMatching?: (ctx: PatternMatchingContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.ruleBody`.
	 * @param ctx the parse tree
	 */
	enterRuleBody?: (ctx: RuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.ruleBody`.
	 * @param ctx the parse tree
	 */
	exitRuleBody?: (ctx: RuleBodyContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.rule`.
	 * @param ctx the parse tree
	 */
	enterRule?: (ctx: RuleContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.rule`.
	 * @param ctx the parse tree
	 */
	exitRule?: (ctx: RuleContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.definition`.
	 * @param ctx the parse tree
	 */
	enterDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.definition`.
	 * @param ctx the parse tree
	 */
	exitDefinition?: (ctx: DefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.definitionClause`.
	 * @param ctx the parse tree
	 */
	enterDefinitionClause?: (ctx: DefinitionClauseContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.definitionClause`.
	 * @param ctx the parse tree
	 */
	exitDefinitionClause?: (ctx: DefinitionClauseContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.axiom`.
	 * @param ctx the parse tree
	 */
	enterAxiom?: (ctx: AxiomContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.axiom`.
	 * @param ctx the parse tree
	 */
	exitAxiom?: (ctx: AxiomContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.axiomClause`.
	 * @param ctx the parse tree
	 */
	enterAxiomClause?: (ctx: AxiomClauseContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.axiomClause`.
	 * @param ctx the parse tree
	 */
	exitAxiomClause?: (ctx: AxiomClauseContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.theorem`.
	 * @param ctx the parse tree
	 */
	enterTheorem?: (ctx: TheoremContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.theorem`.
	 * @param ctx the parse tree
	 */
	exitTheorem?: (ctx: TheoremContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.theoremClause`.
	 * @param ctx the parse tree
	 */
	enterTheoremClause?: (ctx: TheoremClauseContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.theoremClause`.
	 * @param ctx the parse tree
	 */
	exitTheoremClause?: (ctx: TheoremClauseContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.clause`.
	 * @param ctx the parse tree
	 */
	enterClause?: (ctx: ClauseContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.clause`.
	 * @param ctx the parse tree
	 */
	exitClause?: (ctx: ClauseContext) => void;
	/**
	 * Enter a parse tree produced by `x_proofParser.x_proof`.
	 * @param ctx the parse tree
	 */
	enterX_proof?: (ctx: X_proofContext) => void;
	/**
	 * Exit a parse tree produced by `x_proofParser.x_proof`.
	 * @param ctx the parse tree
	 */
	exitX_proof?: (ctx: X_proofContext) => void;
}

