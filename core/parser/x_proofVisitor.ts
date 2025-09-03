// Generated from x_proof.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `x_proofParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class x_proofVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `x_proofParser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.objects`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObjects?: (ctx: ObjectsContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.aliasBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAliasBody?: (ctx: AliasBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlias?: (ctx: AliasContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.standalonePatternMatchingBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandalonePatternMatchingBody?: (ctx: StandalonePatternMatchingBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.standalonePatternMatching`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStandalonePatternMatching?: (ctx: StandalonePatternMatchingContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.multiplePatternMatchingBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplePatternMatchingBody?: (ctx: MultiplePatternMatchingBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.multiplePatternMatching`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplePatternMatching?: (ctx: MultiplePatternMatchingContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.patternMatching`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatternMatching?: (ctx: PatternMatchingContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRule?: (ctx: RuleContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinition?: (ctx: DefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.definitionClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefinitionClause?: (ctx: DefinitionClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.axiom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxiom?: (ctx: AxiomContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.axiomClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAxiomClause?: (ctx: AxiomClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.theorem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheorem?: (ctx: TheoremContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.theoremClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTheoremClause?: (ctx: TheoremClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClause?: (ctx: ClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `x_proofParser.x_proof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitX_proof?: (ctx: X_proofContext) => Result;
}

