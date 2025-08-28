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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly IDENTIFIER = 19;
	public static readonly Whitespace = 20;
	public static readonly Newline = 21;
	public static readonly BlockComment = 22;
	public static readonly LineComment = 23;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_parameters = 0;
	public static readonly RULE_object = 1;
	public static readonly RULE_objects = 2;
	public static readonly RULE_aliasBody = 3;
	public static readonly RULE_alias = 4;
	public static readonly RULE_standalonePatternMatchingBody = 5;
	public static readonly RULE_standalonePatternMatching = 6;
	public static readonly RULE_multiplePatternMatchingBody = 7;
	public static readonly RULE_multiplePatternMatching = 8;
	public static readonly RULE_patternMatching = 9;
	public static readonly RULE_ruleBody = 10;
	public static readonly RULE_rule = 11;
	public static readonly RULE_definition = 12;
	public static readonly RULE_definitionClause = 13;
	public static readonly RULE_axiom = 14;
	public static readonly RULE_axiomClause = 15;
	public static readonly RULE_theorem = 16;
	public static readonly RULE_theoremClause = 17;
	public static readonly RULE_clause = 18;
	public static readonly RULE_x_proof = 19;
	public static readonly literalNames: (string | null)[] = [ null, "','", 
                                                            "'('", "')'", 
                                                            "'='", "'alias'", 
                                                            "';'", "'match'", 
                                                            "'default'", 
                                                            "'=>'", "'{'", 
                                                            "'}'", "'conform'", 
                                                            "'define'", 
                                                            "'premise'", 
                                                            "'conclusion'", 
                                                            "'axiom'", "'proof'", 
                                                            "'theorem'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "IDENTIFIER", 
                                                             "Whitespace", 
                                                             "Newline", 
                                                             "BlockComment", 
                                                             "LineComment" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"parameters", "object", "objects", "aliasBody", "alias", "standalonePatternMatchingBody", 
		"standalonePatternMatching", "multiplePatternMatchingBody", "multiplePatternMatching", 
		"patternMatching", "ruleBody", "rule", "definition", "definitionClause", 
		"axiom", "axiomClause", "theorem", "theoremClause", "clause", "x_proof",
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
	public parameters(): ParametersContext {
		let localctx: ParametersContext = new ParametersContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, x_proofParser.RULE_parameters);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 40;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 41;
				this.match(x_proofParser.T__0);
				this.state = 42;
				this.match(x_proofParser.IDENTIFIER);
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public object(): ObjectContext {
		let localctx: ObjectContext = new ObjectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, x_proofParser.RULE_object);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 48;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 54;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 49;
				this.match(x_proofParser.T__1);
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 50;
					this.objects();
					}
				}

				this.state = 53;
				this.match(x_proofParser.T__2);
				}
			}

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
	// @RuleVersion(0)
	public objects(): ObjectsContext {
		let localctx: ObjectsContext = new ObjectsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, x_proofParser.RULE_objects);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 56;
			this.object();
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 57;
				this.match(x_proofParser.T__0);
				this.state = 58;
				this.object();
				}
				}
				this.state = 63;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
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
	// @RuleVersion(0)
	public aliasBody(): AliasBodyContext {
		let localctx: AliasBodyContext = new AliasBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, x_proofParser.RULE_aliasBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 64;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 65;
			this.match(x_proofParser.T__3);
			this.state = 66;
			this.object();
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
	// @RuleVersion(0)
	public alias(): AliasContext {
		let localctx: AliasContext = new AliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, x_proofParser.RULE_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 68;
			this.match(x_proofParser.T__4);
			this.state = 69;
			this.aliasBody();
			this.state = 74;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 70;
				this.match(x_proofParser.T__0);
				this.state = 71;
				this.aliasBody();
				}
				}
				this.state = 76;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 77;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public standalonePatternMatchingBody(): StandalonePatternMatchingBodyContext {
		let localctx: StandalonePatternMatchingBodyContext = new StandalonePatternMatchingBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, x_proofParser.RULE_standalonePatternMatchingBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.object();
			this.state = 80;
			this.match(x_proofParser.T__3);
			this.state = 81;
			this.object();
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
	// @RuleVersion(0)
	public standalonePatternMatching(): StandalonePatternMatchingContext {
		let localctx: StandalonePatternMatchingContext = new StandalonePatternMatchingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, x_proofParser.RULE_standalonePatternMatching);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 83;
			this.match(x_proofParser.T__6);
			this.state = 84;
			this.standalonePatternMatchingBody();
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 85;
				this.match(x_proofParser.T__0);
				this.state = 86;
				this.standalonePatternMatching();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public multiplePatternMatchingBody(): MultiplePatternMatchingBodyContext {
		let localctx: MultiplePatternMatchingBodyContext = new MultiplePatternMatchingBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, x_proofParser.RULE_multiplePatternMatchingBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				{
				this.state = 94;
				this.object();
				}
				break;
			case 8:
				{
				this.state = 95;
				this.match(x_proofParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 98;
			this.match(x_proofParser.T__8);
			this.state = 99;
			this.match(x_proofParser.T__9);
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 100;
				this.rule();
				}
				}
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 106;
			this.match(x_proofParser.T__10);
			this.state = 107;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public multiplePatternMatching(): MultiplePatternMatchingContext {
		let localctx: MultiplePatternMatchingContext = new MultiplePatternMatchingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, x_proofParser.RULE_multiplePatternMatching);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 109;
			this.match(x_proofParser.T__6);
			this.state = 110;
			this.match(x_proofParser.T__1);
			this.state = 111;
			this.object();
			this.state = 112;
			this.match(x_proofParser.T__2);
			this.state = 113;
			this.match(x_proofParser.T__9);
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8 || _la===19) {
				{
				{
				this.state = 114;
				this.multiplePatternMatchingBody();
				}
				}
				this.state = 119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 120;
			this.match(x_proofParser.T__10);
			this.state = 121;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public patternMatching(): PatternMatchingContext {
		let localctx: PatternMatchingContext = new PatternMatchingContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, x_proofParser.RULE_patternMatching);
		try {
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 123;
				this.standalonePatternMatching();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 124;
				this.multiplePatternMatching();
				}
				break;
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
	// @RuleVersion(0)
	public ruleBody(): RuleBodyContext {
		let localctx: RuleBodyContext = new RuleBodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, x_proofParser.RULE_ruleBody);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 127;
				this.object();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 128;
				this.patternMatching();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 129;
				this.alias();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public rule(): RuleContext {
		let localctx: RuleContext = new RuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, x_proofParser.RULE_rule);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.ruleBody();
			this.state = 133;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public definition(): DefinitionContext {
		let localctx: DefinitionContext = new DefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, x_proofParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 135;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 136;
				this.match(x_proofParser.T__1);
				this.state = 138;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 137;
					this.parameters();
					}
				}

				this.state = 140;
				this.match(x_proofParser.T__2);
				this.state = 150;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 141;
					this.match(x_proofParser.T__11);
					this.state = 142;
					this.match(x_proofParser.T__9);
					this.state = 146;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
						{
						{
						this.state = 143;
						this.rule();
						}
						}
						this.state = 148;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 149;
					this.match(x_proofParser.T__10);
					}
				}

				}
			}

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
	// @RuleVersion(0)
	public definitionClause(): DefinitionClauseContext {
		let localctx: DefinitionClauseContext = new DefinitionClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, x_proofParser.RULE_definitionClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 154;
			this.match(x_proofParser.T__12);
			this.state = 155;
			this.definition();
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 156;
				this.match(x_proofParser.T__0);
				this.state = 157;
				this.definition();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public axiom(): AxiomContext {
		let localctx: AxiomContext = new AxiomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, x_proofParser.RULE_axiom);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 165;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 166;
			this.match(x_proofParser.T__1);
			this.state = 168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 167;
				this.parameters();
				}
			}

			this.state = 170;
			this.match(x_proofParser.T__2);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 171;
				this.match(x_proofParser.T__13);
				this.state = 172;
				this.match(x_proofParser.T__9);
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
					{
					{
					this.state = 173;
					this.rule();
					}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 179;
				this.match(x_proofParser.T__10);
				}
			}

			this.state = 182;
			this.match(x_proofParser.T__14);
			this.state = 183;
			this.match(x_proofParser.T__9);
			this.state = 187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 184;
				this.rule();
				}
				}
				this.state = 189;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 190;
			this.match(x_proofParser.T__10);
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
	// @RuleVersion(0)
	public axiomClause(): AxiomClauseContext {
		let localctx: AxiomClauseContext = new AxiomClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, x_proofParser.RULE_axiomClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this.match(x_proofParser.T__15);
			this.state = 193;
			this.axiom();
			this.state = 198;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 194;
				this.match(x_proofParser.T__0);
				this.state = 195;
				this.axiom();
				}
				}
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 201;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public theorem(): TheoremContext {
		let localctx: TheoremContext = new TheoremContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, x_proofParser.RULE_theorem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 203;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 204;
			this.match(x_proofParser.T__1);
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 205;
				this.parameters();
				}
			}

			this.state = 208;
			this.match(x_proofParser.T__2);
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 209;
				this.match(x_proofParser.T__13);
				this.state = 210;
				this.match(x_proofParser.T__9);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
					{
					{
					this.state = 211;
					this.rule();
					}
					}
					this.state = 216;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 217;
				this.match(x_proofParser.T__10);
				}
			}

			this.state = 220;
			this.match(x_proofParser.T__14);
			this.state = 221;
			this.match(x_proofParser.T__9);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 222;
				this.rule();
				}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 228;
			this.match(x_proofParser.T__10);
			this.state = 229;
			this.match(x_proofParser.T__16);
			this.state = 230;
			this.match(x_proofParser.T__9);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 231;
				this.rule();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.match(x_proofParser.T__10);
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
	// @RuleVersion(0)
	public theoremClause(): TheoremClauseContext {
		let localctx: TheoremClauseContext = new TheoremClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, x_proofParser.RULE_theoremClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this.match(x_proofParser.T__17);
			this.state = 240;
			this.theorem();
			this.state = 245;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 241;
				this.match(x_proofParser.T__0);
				this.state = 242;
				this.theorem();
				}
				}
				this.state = 247;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 248;
			this.match(x_proofParser.T__5);
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
	// @RuleVersion(0)
	public clause(): ClauseContext {
		let localctx: ClauseContext = new ClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, x_proofParser.RULE_clause);
		try {
			this.state = 253;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 250;
				this.definitionClause();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 251;
				this.axiomClause();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 252;
				this.theoremClause();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	// @RuleVersion(0)
	public x_proof(): X_proofContext {
		let localctx: X_proofContext = new X_proofContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, x_proofParser.RULE_x_proof);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 256;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 255;
				this.clause();
				}
				}
				this.state = 258;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 335872) !== 0));
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

	public static readonly _serializedATN: number[] = [4,1,23,261,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,1,1,
	1,1,1,3,1,52,8,1,1,1,3,1,55,8,1,1,2,1,2,1,2,5,2,60,8,2,10,2,12,2,63,9,2,
	1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,5,4,73,8,4,10,4,12,4,76,9,4,1,4,1,4,1,5,
	1,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,88,8,6,10,6,12,6,91,9,6,1,6,1,6,1,7,1,7,
	3,7,97,8,7,1,7,1,7,1,7,5,7,102,8,7,10,7,12,7,105,9,7,1,7,1,7,1,7,1,8,1,
	8,1,8,1,8,1,8,1,8,5,8,116,8,8,10,8,12,8,119,9,8,1,8,1,8,1,8,1,9,1,9,3,9,
	126,8,9,1,10,1,10,1,10,3,10,131,8,10,1,11,1,11,1,11,1,12,1,12,1,12,3,12,
	139,8,12,1,12,1,12,1,12,1,12,5,12,145,8,12,10,12,12,12,148,9,12,1,12,3,
	12,151,8,12,3,12,153,8,12,1,13,1,13,1,13,1,13,5,13,159,8,13,10,13,12,13,
	162,9,13,1,13,1,13,1,14,1,14,1,14,3,14,169,8,14,1,14,1,14,1,14,1,14,5,14,
	175,8,14,10,14,12,14,178,9,14,1,14,3,14,181,8,14,1,14,1,14,1,14,5,14,186,
	8,14,10,14,12,14,189,9,14,1,14,1,14,1,15,1,15,1,15,1,15,5,15,197,8,15,10,
	15,12,15,200,9,15,1,15,1,15,1,16,1,16,1,16,3,16,207,8,16,1,16,1,16,1,16,
	1,16,5,16,213,8,16,10,16,12,16,216,9,16,1,16,3,16,219,8,16,1,16,1,16,1,
	16,5,16,224,8,16,10,16,12,16,227,9,16,1,16,1,16,1,16,1,16,5,16,233,8,16,
	10,16,12,16,236,9,16,1,16,1,16,1,17,1,17,1,17,1,17,5,17,244,8,17,10,17,
	12,17,247,9,17,1,17,1,17,1,18,1,18,1,18,3,18,254,8,18,1,19,4,19,257,8,19,
	11,19,12,19,258,1,19,0,0,20,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
	32,34,36,38,0,0,271,0,40,1,0,0,0,2,48,1,0,0,0,4,56,1,0,0,0,6,64,1,0,0,0,
	8,68,1,0,0,0,10,79,1,0,0,0,12,83,1,0,0,0,14,96,1,0,0,0,16,109,1,0,0,0,18,
	125,1,0,0,0,20,130,1,0,0,0,22,132,1,0,0,0,24,135,1,0,0,0,26,154,1,0,0,0,
	28,165,1,0,0,0,30,192,1,0,0,0,32,203,1,0,0,0,34,239,1,0,0,0,36,253,1,0,
	0,0,38,256,1,0,0,0,40,45,5,19,0,0,41,42,5,1,0,0,42,44,5,19,0,0,43,41,1,
	0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,46,1,0,0,0,46,1,1,0,0,0,47,45,1,0,
	0,0,48,54,5,19,0,0,49,51,5,2,0,0,50,52,3,4,2,0,51,50,1,0,0,0,51,52,1,0,
	0,0,52,53,1,0,0,0,53,55,5,3,0,0,54,49,1,0,0,0,54,55,1,0,0,0,55,3,1,0,0,
	0,56,61,3,2,1,0,57,58,5,1,0,0,58,60,3,2,1,0,59,57,1,0,0,0,60,63,1,0,0,0,
	61,59,1,0,0,0,61,62,1,0,0,0,62,5,1,0,0,0,63,61,1,0,0,0,64,65,5,19,0,0,65,
	66,5,4,0,0,66,67,3,2,1,0,67,7,1,0,0,0,68,69,5,5,0,0,69,74,3,6,3,0,70,71,
	5,1,0,0,71,73,3,6,3,0,72,70,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,
	0,0,0,75,77,1,0,0,0,76,74,1,0,0,0,77,78,5,6,0,0,78,9,1,0,0,0,79,80,3,2,
	1,0,80,81,5,4,0,0,81,82,3,2,1,0,82,11,1,0,0,0,83,84,5,7,0,0,84,89,3,10,
	5,0,85,86,5,1,0,0,86,88,3,12,6,0,87,85,1,0,0,0,88,91,1,0,0,0,89,87,1,0,
	0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,93,5,6,0,0,93,13,1,0,0,
	0,94,97,3,2,1,0,95,97,5,8,0,0,96,94,1,0,0,0,96,95,1,0,0,0,97,98,1,0,0,0,
	98,99,5,9,0,0,99,103,5,10,0,0,100,102,3,22,11,0,101,100,1,0,0,0,102,105,
	1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,106,1,0,0,0,105,103,1,0,0,0,
	106,107,5,11,0,0,107,108,5,6,0,0,108,15,1,0,0,0,109,110,5,7,0,0,110,111,
	5,2,0,0,111,112,3,2,1,0,112,113,5,3,0,0,113,117,5,10,0,0,114,116,3,14,7,
	0,115,114,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,0,0,118,120,
	1,0,0,0,119,117,1,0,0,0,120,121,5,11,0,0,121,122,5,6,0,0,122,17,1,0,0,0,
	123,126,3,12,6,0,124,126,3,16,8,0,125,123,1,0,0,0,125,124,1,0,0,0,126,19,
	1,0,0,0,127,131,3,2,1,0,128,131,3,18,9,0,129,131,3,8,4,0,130,127,1,0,0,
	0,130,128,1,0,0,0,130,129,1,0,0,0,131,21,1,0,0,0,132,133,3,20,10,0,133,
	134,5,6,0,0,134,23,1,0,0,0,135,152,5,19,0,0,136,138,5,2,0,0,137,139,3,0,
	0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,150,5,3,0,0,141,
	142,5,12,0,0,142,146,5,10,0,0,143,145,3,22,11,0,144,143,1,0,0,0,145,148,
	1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,148,146,1,0,0,0,
	149,151,5,11,0,0,150,141,1,0,0,0,150,151,1,0,0,0,151,153,1,0,0,0,152,136,
	1,0,0,0,152,153,1,0,0,0,153,25,1,0,0,0,154,155,5,13,0,0,155,160,3,24,12,
	0,156,157,5,1,0,0,157,159,3,24,12,0,158,156,1,0,0,0,159,162,1,0,0,0,160,
	158,1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,160,1,0,0,0,163,164,5,6,
	0,0,164,27,1,0,0,0,165,166,5,19,0,0,166,168,5,2,0,0,167,169,3,0,0,0,168,
	167,1,0,0,0,168,169,1,0,0,0,169,170,1,0,0,0,170,180,5,3,0,0,171,172,5,14,
	0,0,172,176,5,10,0,0,173,175,3,22,11,0,174,173,1,0,0,0,175,178,1,0,0,0,
	176,174,1,0,0,0,176,177,1,0,0,0,177,179,1,0,0,0,178,176,1,0,0,0,179,181,
	5,11,0,0,180,171,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,183,5,15,0,
	0,183,187,5,10,0,0,184,186,3,22,11,0,185,184,1,0,0,0,186,189,1,0,0,0,187,
	185,1,0,0,0,187,188,1,0,0,0,188,190,1,0,0,0,189,187,1,0,0,0,190,191,5,11,
	0,0,191,29,1,0,0,0,192,193,5,16,0,0,193,198,3,28,14,0,194,195,5,1,0,0,195,
	197,3,28,14,0,196,194,1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,
	0,0,0,199,201,1,0,0,0,200,198,1,0,0,0,201,202,5,6,0,0,202,31,1,0,0,0,203,
	204,5,19,0,0,204,206,5,2,0,0,205,207,3,0,0,0,206,205,1,0,0,0,206,207,1,
	0,0,0,207,208,1,0,0,0,208,218,5,3,0,0,209,210,5,14,0,0,210,214,5,10,0,0,
	211,213,3,22,11,0,212,211,1,0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,
	1,0,0,0,215,217,1,0,0,0,216,214,1,0,0,0,217,219,5,11,0,0,218,209,1,0,0,
	0,218,219,1,0,0,0,219,220,1,0,0,0,220,221,5,15,0,0,221,225,5,10,0,0,222,
	224,3,22,11,0,223,222,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,
	0,0,0,226,228,1,0,0,0,227,225,1,0,0,0,228,229,5,11,0,0,229,230,5,17,0,0,
	230,234,5,10,0,0,231,233,3,22,11,0,232,231,1,0,0,0,233,236,1,0,0,0,234,
	232,1,0,0,0,234,235,1,0,0,0,235,237,1,0,0,0,236,234,1,0,0,0,237,238,5,11,
	0,0,238,33,1,0,0,0,239,240,5,18,0,0,240,245,3,32,16,0,241,242,5,1,0,0,242,
	244,3,32,16,0,243,241,1,0,0,0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,
	0,0,0,246,248,1,0,0,0,247,245,1,0,0,0,248,249,5,6,0,0,249,35,1,0,0,0,250,
	254,3,26,13,0,251,254,3,30,15,0,252,254,3,34,17,0,253,250,1,0,0,0,253,251,
	1,0,0,0,253,252,1,0,0,0,254,37,1,0,0,0,255,257,3,36,18,0,256,255,1,0,0,
	0,257,258,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,39,1,0,0,0,29,45,
	51,54,61,74,89,96,103,117,125,130,138,146,150,152,160,168,176,180,187,198,
	206,214,218,225,234,245,253,258];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!x_proofParser.__ATN) {
			x_proofParser.__ATN = new ATNDeserializer().deserialize(x_proofParser._serializedATN);
		}

		return x_proofParser.__ATN;
	}


	static DecisionsToDFA = x_proofParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ParametersContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(x_proofParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(x_proofParser.IDENTIFIER, i);
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_parameters;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterParameters) {
	 		listener.enterParameters(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitParameters) {
	 		listener.exitParameters(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(x_proofParser.IDENTIFIER, 0);
	}
	public objects(): ObjectsContext {
		return this.getTypedRuleContext(ObjectsContext, 0) as ObjectsContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_object;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterObject) {
	 		listener.enterObject(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitObject) {
	 		listener.exitObject(this);
		}
	}
}


export class ObjectsContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object_list(): ObjectContext[] {
		return this.getTypedRuleContexts(ObjectContext) as ObjectContext[];
	}
	public object(i: number): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, i) as ObjectContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_objects;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterObjects) {
	 		listener.enterObjects(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitObjects) {
	 		listener.exitObjects(this);
		}
	}
}


export class AliasBodyContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(x_proofParser.IDENTIFIER, 0);
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_aliasBody;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterAliasBody) {
	 		listener.enterAliasBody(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitAliasBody) {
	 		listener.exitAliasBody(this);
		}
	}
}


export class AliasContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public aliasBody_list(): AliasBodyContext[] {
		return this.getTypedRuleContexts(AliasBodyContext) as AliasBodyContext[];
	}
	public aliasBody(i: number): AliasBodyContext {
		return this.getTypedRuleContext(AliasBodyContext, i) as AliasBodyContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_alias;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterAlias) {
	 		listener.enterAlias(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitAlias) {
	 		listener.exitAlias(this);
		}
	}
}


export class StandalonePatternMatchingBodyContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object_list(): ObjectContext[] {
		return this.getTypedRuleContexts(ObjectContext) as ObjectContext[];
	}
	public object(i: number): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, i) as ObjectContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_standalonePatternMatchingBody;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterStandalonePatternMatchingBody) {
	 		listener.enterStandalonePatternMatchingBody(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitStandalonePatternMatchingBody) {
	 		listener.exitStandalonePatternMatchingBody(this);
		}
	}
}


export class StandalonePatternMatchingContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public standalonePatternMatchingBody(): StandalonePatternMatchingBodyContext {
		return this.getTypedRuleContext(StandalonePatternMatchingBodyContext, 0) as StandalonePatternMatchingBodyContext;
	}
	public standalonePatternMatching_list(): StandalonePatternMatchingContext[] {
		return this.getTypedRuleContexts(StandalonePatternMatchingContext) as StandalonePatternMatchingContext[];
	}
	public standalonePatternMatching(i: number): StandalonePatternMatchingContext {
		return this.getTypedRuleContext(StandalonePatternMatchingContext, i) as StandalonePatternMatchingContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_standalonePatternMatching;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterStandalonePatternMatching) {
	 		listener.enterStandalonePatternMatching(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitStandalonePatternMatching) {
	 		listener.exitStandalonePatternMatching(this);
		}
	}
}


export class MultiplePatternMatchingBodyContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
	public rule_list(): RuleContext[] {
		return this.getTypedRuleContexts(RuleContext) as RuleContext[];
	}
	public rule(i: number): RuleContext {
		return this.getTypedRuleContext(RuleContext, i) as RuleContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_multiplePatternMatchingBody;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterMultiplePatternMatchingBody) {
	 		listener.enterMultiplePatternMatchingBody(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitMultiplePatternMatchingBody) {
	 		listener.exitMultiplePatternMatchingBody(this);
		}
	}
}


export class MultiplePatternMatchingContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
	public multiplePatternMatchingBody_list(): MultiplePatternMatchingBodyContext[] {
		return this.getTypedRuleContexts(MultiplePatternMatchingBodyContext) as MultiplePatternMatchingBodyContext[];
	}
	public multiplePatternMatchingBody(i: number): MultiplePatternMatchingBodyContext {
		return this.getTypedRuleContext(MultiplePatternMatchingBodyContext, i) as MultiplePatternMatchingBodyContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_multiplePatternMatching;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterMultiplePatternMatching) {
	 		listener.enterMultiplePatternMatching(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitMultiplePatternMatching) {
	 		listener.exitMultiplePatternMatching(this);
		}
	}
}


export class PatternMatchingContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public standalonePatternMatching(): StandalonePatternMatchingContext {
		return this.getTypedRuleContext(StandalonePatternMatchingContext, 0) as StandalonePatternMatchingContext;
	}
	public multiplePatternMatching(): MultiplePatternMatchingContext {
		return this.getTypedRuleContext(MultiplePatternMatchingContext, 0) as MultiplePatternMatchingContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_patternMatching;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterPatternMatching) {
	 		listener.enterPatternMatching(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitPatternMatching) {
	 		listener.exitPatternMatching(this);
		}
	}
}


export class RuleBodyContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
	}
	public patternMatching(): PatternMatchingContext {
		return this.getTypedRuleContext(PatternMatchingContext, 0) as PatternMatchingContext;
	}
	public alias(): AliasContext {
		return this.getTypedRuleContext(AliasContext, 0) as AliasContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_ruleBody;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterRuleBody) {
	 		listener.enterRuleBody(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitRuleBody) {
	 		listener.exitRuleBody(this);
		}
	}
}


export class RuleContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ruleBody(): RuleBodyContext {
		return this.getTypedRuleContext(RuleBodyContext, 0) as RuleBodyContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_rule;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterRule) {
	 		listener.enterRule(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitRule) {
	 		listener.exitRule(this);
		}
	}
}


export class DefinitionContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(x_proofParser.IDENTIFIER, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public rule_list(): RuleContext[] {
		return this.getTypedRuleContexts(RuleContext) as RuleContext[];
	}
	public rule(i: number): RuleContext {
		return this.getTypedRuleContext(RuleContext, i) as RuleContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_definition;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterDefinition) {
	 		listener.enterDefinition(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitDefinition) {
	 		listener.exitDefinition(this);
		}
	}
}


export class DefinitionClauseContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public definition_list(): DefinitionContext[] {
		return this.getTypedRuleContexts(DefinitionContext) as DefinitionContext[];
	}
	public definition(i: number): DefinitionContext {
		return this.getTypedRuleContext(DefinitionContext, i) as DefinitionContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_definitionClause;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterDefinitionClause) {
	 		listener.enterDefinitionClause(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitDefinitionClause) {
	 		listener.exitDefinitionClause(this);
		}
	}
}


export class AxiomContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(x_proofParser.IDENTIFIER, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public rule_list(): RuleContext[] {
		return this.getTypedRuleContexts(RuleContext) as RuleContext[];
	}
	public rule(i: number): RuleContext {
		return this.getTypedRuleContext(RuleContext, i) as RuleContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_axiom;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterAxiom) {
	 		listener.enterAxiom(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitAxiom) {
	 		listener.exitAxiom(this);
		}
	}
}


export class AxiomClauseContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public axiom_list(): AxiomContext[] {
		return this.getTypedRuleContexts(AxiomContext) as AxiomContext[];
	}
	public axiom(i: number): AxiomContext {
		return this.getTypedRuleContext(AxiomContext, i) as AxiomContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_axiomClause;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterAxiomClause) {
	 		listener.enterAxiomClause(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitAxiomClause) {
	 		listener.exitAxiomClause(this);
		}
	}
}


export class TheoremContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(x_proofParser.IDENTIFIER, 0);
	}
	public parameters(): ParametersContext {
		return this.getTypedRuleContext(ParametersContext, 0) as ParametersContext;
	}
	public rule_list(): RuleContext[] {
		return this.getTypedRuleContexts(RuleContext) as RuleContext[];
	}
	public rule(i: number): RuleContext {
		return this.getTypedRuleContext(RuleContext, i) as RuleContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_theorem;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterTheorem) {
	 		listener.enterTheorem(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitTheorem) {
	 		listener.exitTheorem(this);
		}
	}
}


export class TheoremClauseContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public theorem_list(): TheoremContext[] {
		return this.getTypedRuleContexts(TheoremContext) as TheoremContext[];
	}
	public theorem(i: number): TheoremContext {
		return this.getTypedRuleContext(TheoremContext, i) as TheoremContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_theoremClause;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterTheoremClause) {
	 		listener.enterTheoremClause(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitTheoremClause) {
	 		listener.exitTheoremClause(this);
		}
	}
}


export class ClauseContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public definitionClause(): DefinitionClauseContext {
		return this.getTypedRuleContext(DefinitionClauseContext, 0) as DefinitionClauseContext;
	}
	public axiomClause(): AxiomClauseContext {
		return this.getTypedRuleContext(AxiomClauseContext, 0) as AxiomClauseContext;
	}
	public theoremClause(): TheoremClauseContext {
		return this.getTypedRuleContext(TheoremClauseContext, 0) as TheoremClauseContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_clause;
	}
	public enterRule(listener: x_proofListener): void {
	    if(listener.enterClause) {
	 		listener.enterClause(this);
		}
	}
	public exitRule(listener: x_proofListener): void {
	    if(listener.exitClause) {
	 		listener.exitClause(this);
		}
	}
}


export class X_proofContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public clause_list(): ClauseContext[] {
		return this.getTypedRuleContexts(ClauseContext) as ClauseContext[];
	}
	public clause(i: number): ClauseContext {
		return this.getTypedRuleContext(ClauseContext, i) as ClauseContext;
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
