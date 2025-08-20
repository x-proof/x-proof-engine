// Generated from x_proof.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import x_proofListener from "./x_proofListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class x_proofParser extends Parser {
	public static readonly Identifier = 1;
	public static readonly Parameters = 2;
	public static readonly Rule = 3;
	public static readonly Definition = 4;
	public static readonly DefinitionClause = 5;
	public static readonly Axiom = 6;
	public static readonly AxiomClause = 7;
	public static readonly Theorem = 8;
	public static readonly TheoremClause = 9;
	public static readonly BlockComment = 10;
	public static readonly LineComment = 11;
	public static readonly Clause = 12;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_x_proof = 0;
	public static readonly literalNames: (string | null)[] = [  ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Identifier", 
                                                             "Parameters", 
                                                             "Rule", "Definition", 
                                                             "DefinitionClause", 
                                                             "Axiom", "AxiomClause", 
                                                             "Theorem", 
                                                             "TheoremClause", 
                                                             "BlockComment", 
                                                             "LineComment", 
                                                             "Clause" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"x_proof",
	];
	public get grammarFileName(): string { return "x_proof.g4"; }
	public get literalNames(): (string | null)[] { return x_proofParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return x_proofParser.symbolicNames; }
	public get ruleNames(): string[] { return x_proofParser.ruleNames; }
	public get serializedATN(): number[] { return x_proofParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, x_proofParser._ATN, x_proofParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public x_proof(): X_proofContext {
		let localctx: X_proofContext = new X_proofContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, x_proofParser.RULE_x_proof);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 3;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2;
				this.match(x_proofParser.Clause);
				}
				}
				this.state = 5;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,12,8,2,0,7,0,1,0,
	4,0,4,8,0,11,0,12,0,5,1,0,0,0,1,0,0,0,7,0,3,1,0,0,0,2,4,5,12,0,0,3,2,1,
	0,0,0,4,5,1,0,0,0,5,3,1,0,0,0,5,6,1,0,0,0,6,1,1,0,0,0,1,5];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!x_proofParser.__ATN) {
			x_proofParser.__ATN = new ATNDeserializer().deserialize(x_proofParser._serializedATN);
		}

		return x_proofParser.__ATN;
	}


	static DecisionsToDFA = x_proofParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class X_proofContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Clause_list(): TerminalNode[] {
	    	return this.getTokens(x_proofParser.Clause);
	}
	public Clause(i: number): TerminalNode {
		return this.getToken(x_proofParser.Clause, i);
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_x_proof;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterX_proof) {
	 		listener.enterX_proof(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitX_proof) {
	 		listener.exitX_proof(this);
		}
	}
}
