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
import x_proofVisitor from "./x_proofVisitor.js";

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
	public static readonly RULE_rule = 10;
	public static readonly RULE_definition = 11;
	public static readonly RULE_definitionClause = 12;
	public static readonly RULE_axiom = 13;
	public static readonly RULE_axiomClause = 14;
	public static readonly RULE_theorem = 15;
	public static readonly RULE_theoremClause = 16;
	public static readonly RULE_clause = 17;
	public static readonly RULE_x_proof = 18;
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
		"patternMatching", "rule", "definition", "definitionClause", "axiom", 
		"axiomClause", "theorem", "theoremClause", "clause", "x_proof",
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
			this.state = 38;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 39;
				this.match(x_proofParser.T__0);
				this.state = 40;
				this.match(x_proofParser.IDENTIFIER);
				}
				}
				this.state = 45;
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
			this.state = 46;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 47;
				this.match(x_proofParser.T__1);
				this.state = 49;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 48;
					this.objects();
					}
				}

				this.state = 51;
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
			this.state = 54;
			this.object();
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 55;
				this.match(x_proofParser.T__0);
				this.state = 56;
				this.object();
				}
				}
				this.state = 61;
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
			this.state = 62;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 63;
			this.match(x_proofParser.T__3);
			this.state = 64;
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
			this.state = 66;
			this.match(x_proofParser.T__4);
			this.state = 67;
			this.aliasBody();
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 68;
				this.match(x_proofParser.T__0);
				this.state = 69;
				this.aliasBody();
				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
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
			this.state = 77;
			this.object();
			this.state = 78;
			this.match(x_proofParser.T__3);
			this.state = 79;
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
			this.state = 81;
			this.match(x_proofParser.T__6);
			this.state = 82;
			this.standalonePatternMatchingBody();
			this.state = 87;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 83;
				this.match(x_proofParser.T__0);
				this.state = 84;
				this.standalonePatternMatching();
				}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 90;
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
			this.state = 94;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				{
				this.state = 92;
				this.object();
				}
				break;
			case 8:
				{
				this.state = 93;
				this.match(x_proofParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 96;
			this.match(x_proofParser.T__8);
			this.state = 97;
			this.match(x_proofParser.T__9);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 98;
				this.rule();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
			this.match(x_proofParser.T__10);
			this.state = 105;
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
			this.state = 107;
			this.match(x_proofParser.T__6);
			this.state = 108;
			this.match(x_proofParser.T__1);
			this.state = 109;
			this.object();
			this.state = 110;
			this.match(x_proofParser.T__2);
			this.state = 111;
			this.match(x_proofParser.T__9);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8 || _la===19) {
				{
				{
				this.state = 112;
				this.multiplePatternMatchingBody();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
			this.match(x_proofParser.T__10);
			this.state = 119;
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
			this.state = 123;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 121;
				this.standalonePatternMatching();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 122;
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
	public rule(): RuleContext {
		let localctx: RuleContext = new RuleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, x_proofParser.RULE_rule);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 125;
				this.object();
				this.state = 126;
				this.match(x_proofParser.T__5);
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
	public definition(): DefinitionContext {
		let localctx: DefinitionContext = new DefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, x_proofParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 149;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 133;
				this.match(x_proofParser.T__1);
				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 134;
					this.parameters();
					}
				}

				this.state = 137;
				this.match(x_proofParser.T__2);
				this.state = 147;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 138;
					this.match(x_proofParser.T__11);
					this.state = 139;
					this.match(x_proofParser.T__9);
					this.state = 143;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
						{
						{
						this.state = 140;
						this.rule();
						}
						}
						this.state = 145;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 146;
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
		this.enterRule(localctx, 24, x_proofParser.RULE_definitionClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.match(x_proofParser.T__12);
			this.state = 152;
			this.definition();
			this.state = 157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 153;
				this.match(x_proofParser.T__0);
				this.state = 154;
				this.definition();
				}
				}
				this.state = 159;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 160;
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
		this.enterRule(localctx, 26, x_proofParser.RULE_axiom);
		let _la: number;
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 162;
				this.object();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 163;
				this.match(x_proofParser.IDENTIFIER);
				this.state = 164;
				this.match(x_proofParser.T__1);
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 165;
					this.parameters();
					}
				}

				this.state = 168;
				this.match(x_proofParser.T__2);
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 169;
					this.match(x_proofParser.T__13);
					this.state = 170;
					this.match(x_proofParser.T__9);
					this.state = 174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
						{
						{
						this.state = 171;
						this.rule();
						}
						}
						this.state = 176;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 177;
					this.match(x_proofParser.T__10);
					}
				}

				{
				this.state = 180;
				this.match(x_proofParser.T__14);
				this.state = 181;
				this.match(x_proofParser.T__9);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
					{
					{
					this.state = 182;
					this.rule();
					}
					}
					this.state = 187;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 188;
				this.match(x_proofParser.T__10);
				}
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
	public axiomClause(): AxiomClauseContext {
		let localctx: AxiomClauseContext = new AxiomClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, x_proofParser.RULE_axiomClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
			this.match(x_proofParser.T__15);
			this.state = 192;
			this.axiom();
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 193;
				this.match(x_proofParser.T__0);
				this.state = 194;
				this.axiom();
				}
				}
				this.state = 199;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 200;
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
		this.enterRule(localctx, 30, x_proofParser.RULE_theorem);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 202;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 203;
			this.match(x_proofParser.T__1);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 204;
				this.parameters();
				}
			}

			this.state = 207;
			this.match(x_proofParser.T__2);
			this.state = 217;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 208;
				this.match(x_proofParser.T__13);
				this.state = 209;
				this.match(x_proofParser.T__9);
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
					{
					{
					this.state = 210;
					this.rule();
					}
					}
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 216;
				this.match(x_proofParser.T__10);
				}
			}

			this.state = 219;
			this.match(x_proofParser.T__14);
			this.state = 220;
			this.match(x_proofParser.T__9);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 221;
				this.rule();
				}
				}
				this.state = 226;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 227;
			this.match(x_proofParser.T__10);
			this.state = 228;
			this.match(x_proofParser.T__16);
			this.state = 229;
			this.match(x_proofParser.T__9);
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 230;
				this.rule();
				}
				}
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 236;
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
		this.enterRule(localctx, 32, x_proofParser.RULE_theoremClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this.match(x_proofParser.T__17);
			this.state = 239;
			this.theorem();
			this.state = 244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 240;
				this.match(x_proofParser.T__0);
				this.state = 241;
				this.theorem();
				}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 247;
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
		this.enterRule(localctx, 34, x_proofParser.RULE_clause);
		try {
			this.state = 252;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 249;
				this.definitionClause();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 250;
				this.axiomClause();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 251;
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
		this.enterRule(localctx, 36, x_proofParser.RULE_x_proof);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 254;
				this.clause();
				}
				}
				this.state = 257;
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

	public static readonly _serializedATN: number[] = [4,1,23,260,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,1,0,1,0,1,0,5,0,42,8,0,10,0,12,0,45,9,0,1,1,1,1,1,1,3,1,
	50,8,1,1,1,3,1,53,8,1,1,2,1,2,1,2,5,2,58,8,2,10,2,12,2,61,9,2,1,3,1,3,1,
	3,1,3,1,4,1,4,1,4,1,4,5,4,71,8,4,10,4,12,4,74,9,4,1,4,1,4,1,5,1,5,1,5,1,
	5,1,6,1,6,1,6,1,6,5,6,86,8,6,10,6,12,6,89,9,6,1,6,1,6,1,7,1,7,3,7,95,8,
	7,1,7,1,7,1,7,5,7,100,8,7,10,7,12,7,103,9,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,
	1,8,1,8,5,8,114,8,8,10,8,12,8,117,9,8,1,8,1,8,1,8,1,9,1,9,3,9,124,8,9,1,
	10,1,10,1,10,1,10,1,10,3,10,131,8,10,1,11,1,11,1,11,3,11,136,8,11,1,11,
	1,11,1,11,1,11,5,11,142,8,11,10,11,12,11,145,9,11,1,11,3,11,148,8,11,3,
	11,150,8,11,1,12,1,12,1,12,1,12,5,12,156,8,12,10,12,12,12,159,9,12,1,12,
	1,12,1,13,1,13,1,13,1,13,3,13,167,8,13,1,13,1,13,1,13,1,13,5,13,173,8,13,
	10,13,12,13,176,9,13,1,13,3,13,179,8,13,1,13,1,13,1,13,5,13,184,8,13,10,
	13,12,13,187,9,13,1,13,3,13,190,8,13,1,14,1,14,1,14,1,14,5,14,196,8,14,
	10,14,12,14,199,9,14,1,14,1,14,1,15,1,15,1,15,3,15,206,8,15,1,15,1,15,1,
	15,1,15,5,15,212,8,15,10,15,12,15,215,9,15,1,15,3,15,218,8,15,1,15,1,15,
	1,15,5,15,223,8,15,10,15,12,15,226,9,15,1,15,1,15,1,15,1,15,5,15,232,8,
	15,10,15,12,15,235,9,15,1,15,1,15,1,16,1,16,1,16,1,16,5,16,243,8,16,10,
	16,12,16,246,9,16,1,16,1,16,1,17,1,17,1,17,3,17,253,8,17,1,18,4,18,256,
	8,18,11,18,12,18,257,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
	30,32,34,36,0,0,272,0,38,1,0,0,0,2,46,1,0,0,0,4,54,1,0,0,0,6,62,1,0,0,0,
	8,66,1,0,0,0,10,77,1,0,0,0,12,81,1,0,0,0,14,94,1,0,0,0,16,107,1,0,0,0,18,
	123,1,0,0,0,20,130,1,0,0,0,22,132,1,0,0,0,24,151,1,0,0,0,26,189,1,0,0,0,
	28,191,1,0,0,0,30,202,1,0,0,0,32,238,1,0,0,0,34,252,1,0,0,0,36,255,1,0,
	0,0,38,43,5,19,0,0,39,40,5,1,0,0,40,42,5,19,0,0,41,39,1,0,0,0,42,45,1,0,
	0,0,43,41,1,0,0,0,43,44,1,0,0,0,44,1,1,0,0,0,45,43,1,0,0,0,46,52,5,19,0,
	0,47,49,5,2,0,0,48,50,3,4,2,0,49,48,1,0,0,0,49,50,1,0,0,0,50,51,1,0,0,0,
	51,53,5,3,0,0,52,47,1,0,0,0,52,53,1,0,0,0,53,3,1,0,0,0,54,59,3,2,1,0,55,
	56,5,1,0,0,56,58,3,2,1,0,57,55,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,
	1,0,0,0,60,5,1,0,0,0,61,59,1,0,0,0,62,63,5,19,0,0,63,64,5,4,0,0,64,65,3,
	2,1,0,65,7,1,0,0,0,66,67,5,5,0,0,67,72,3,6,3,0,68,69,5,1,0,0,69,71,3,6,
	3,0,70,68,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,75,1,0,0,
	0,74,72,1,0,0,0,75,76,5,6,0,0,76,9,1,0,0,0,77,78,3,2,1,0,78,79,5,4,0,0,
	79,80,3,2,1,0,80,11,1,0,0,0,81,82,5,7,0,0,82,87,3,10,5,0,83,84,5,1,0,0,
	84,86,3,12,6,0,85,83,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,
	88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,6,0,0,91,13,1,0,0,0,92,95,3,2,1,0,93,
	95,5,8,0,0,94,92,1,0,0,0,94,93,1,0,0,0,95,96,1,0,0,0,96,97,5,9,0,0,97,101,
	5,10,0,0,98,100,3,20,10,0,99,98,1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,
	101,102,1,0,0,0,102,104,1,0,0,0,103,101,1,0,0,0,104,105,5,11,0,0,105,106,
	5,6,0,0,106,15,1,0,0,0,107,108,5,7,0,0,108,109,5,2,0,0,109,110,3,2,1,0,
	110,111,5,3,0,0,111,115,5,10,0,0,112,114,3,14,7,0,113,112,1,0,0,0,114,117,
	1,0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,115,1,0,0,0,
	118,119,5,11,0,0,119,120,5,6,0,0,120,17,1,0,0,0,121,124,3,12,6,0,122,124,
	3,16,8,0,123,121,1,0,0,0,123,122,1,0,0,0,124,19,1,0,0,0,125,126,3,2,1,0,
	126,127,5,6,0,0,127,131,1,0,0,0,128,131,3,18,9,0,129,131,3,8,4,0,130,125,
	1,0,0,0,130,128,1,0,0,0,130,129,1,0,0,0,131,21,1,0,0,0,132,149,5,19,0,0,
	133,135,5,2,0,0,134,136,3,0,0,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,
	1,0,0,0,137,147,5,3,0,0,138,139,5,12,0,0,139,143,5,10,0,0,140,142,3,20,
	10,0,141,140,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,
	146,1,0,0,0,145,143,1,0,0,0,146,148,5,11,0,0,147,138,1,0,0,0,147,148,1,
	0,0,0,148,150,1,0,0,0,149,133,1,0,0,0,149,150,1,0,0,0,150,23,1,0,0,0,151,
	152,5,13,0,0,152,157,3,22,11,0,153,154,5,1,0,0,154,156,3,22,11,0,155,153,
	1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,
	159,157,1,0,0,0,160,161,5,6,0,0,161,25,1,0,0,0,162,190,3,2,1,0,163,164,
	5,19,0,0,164,166,5,2,0,0,165,167,3,0,0,0,166,165,1,0,0,0,166,167,1,0,0,
	0,167,168,1,0,0,0,168,178,5,3,0,0,169,170,5,14,0,0,170,174,5,10,0,0,171,
	173,3,20,10,0,172,171,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,174,175,1,
	0,0,0,175,177,1,0,0,0,176,174,1,0,0,0,177,179,5,11,0,0,178,169,1,0,0,0,
	178,179,1,0,0,0,179,180,1,0,0,0,180,181,5,15,0,0,181,185,5,10,0,0,182,184,
	3,20,10,0,183,182,1,0,0,0,184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,
	0,186,188,1,0,0,0,187,185,1,0,0,0,188,190,5,11,0,0,189,162,1,0,0,0,189,
	163,1,0,0,0,190,27,1,0,0,0,191,192,5,16,0,0,192,197,3,26,13,0,193,194,5,
	1,0,0,194,196,3,26,13,0,195,193,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,
	197,198,1,0,0,0,198,200,1,0,0,0,199,197,1,0,0,0,200,201,5,6,0,0,201,29,
	1,0,0,0,202,203,5,19,0,0,203,205,5,2,0,0,204,206,3,0,0,0,205,204,1,0,0,
	0,205,206,1,0,0,0,206,207,1,0,0,0,207,217,5,3,0,0,208,209,5,14,0,0,209,
	213,5,10,0,0,210,212,3,20,10,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,
	1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,218,5,11,0,
	0,217,208,1,0,0,0,217,218,1,0,0,0,218,219,1,0,0,0,219,220,5,15,0,0,220,
	224,5,10,0,0,221,223,3,20,10,0,222,221,1,0,0,0,223,226,1,0,0,0,224,222,
	1,0,0,0,224,225,1,0,0,0,225,227,1,0,0,0,226,224,1,0,0,0,227,228,5,11,0,
	0,228,229,5,17,0,0,229,233,5,10,0,0,230,232,3,20,10,0,231,230,1,0,0,0,232,
	235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,236,1,0,0,0,235,233,1,0,
	0,0,236,237,5,11,0,0,237,31,1,0,0,0,238,239,5,18,0,0,239,244,3,30,15,0,
	240,241,5,1,0,0,241,243,3,30,15,0,242,240,1,0,0,0,243,246,1,0,0,0,244,242,
	1,0,0,0,244,245,1,0,0,0,245,247,1,0,0,0,246,244,1,0,0,0,247,248,5,6,0,0,
	248,33,1,0,0,0,249,253,3,24,12,0,250,253,3,28,14,0,251,253,3,32,16,0,252,
	249,1,0,0,0,252,250,1,0,0,0,252,251,1,0,0,0,253,35,1,0,0,0,254,256,3,34,
	17,0,255,254,1,0,0,0,256,257,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,
	37,1,0,0,0,30,43,49,52,59,72,87,94,101,115,123,130,135,143,147,149,157,
	166,174,178,185,189,197,205,213,217,224,233,244,252,257];

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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitParameters) {
			return visitor.visitParameters(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitObjects) {
			return visitor.visitObjects(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitAliasBody) {
			return visitor.visitAliasBody(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitAlias) {
			return visitor.visitAlias(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitStandalonePatternMatchingBody) {
			return visitor.visitStandalonePatternMatchingBody(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitStandalonePatternMatching) {
			return visitor.visitStandalonePatternMatching(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitMultiplePatternMatchingBody) {
			return visitor.visitMultiplePatternMatchingBody(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitMultiplePatternMatching) {
			return visitor.visitMultiplePatternMatching(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitPatternMatching) {
			return visitor.visitPatternMatching(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RuleContext extends ParserRuleContext {
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
    	return x_proofParser.RULE_rule;
	}
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitRule) {
			return visitor.visitRule(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitDefinition) {
			return visitor.visitDefinition(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitDefinitionClause) {
			return visitor.visitDefinitionClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AxiomContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public object(): ObjectContext {
		return this.getTypedRuleContext(ObjectContext, 0) as ObjectContext;
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitAxiom) {
			return visitor.visitAxiom(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitAxiomClause) {
			return visitor.visitAxiomClause(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitTheorem) {
			return visitor.visitTheorem(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitTheoremClause) {
			return visitor.visitTheoremClause(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitClause) {
			return visitor.visitClause(this);
		} else {
			return visitor.visitChildren(this);
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
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitX_proof) {
			return visitor.visitX_proof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
