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
	public static readonly RULE_application = 2;
	public static readonly RULE_objects = 3;
	public static readonly RULE_aliasBody = 4;
	public static readonly RULE_alias = 5;
	public static readonly RULE_standalonePatternMatchingBody = 6;
	public static readonly RULE_standalonePatternMatching = 7;
	public static readonly RULE_multiplePatternMatchingBody = 8;
	public static readonly RULE_multiplePatternMatching = 9;
	public static readonly RULE_patternMatching = 10;
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
		"parameters", "object", "application", "objects", "aliasBody", "alias", 
		"standalonePatternMatchingBody", "standalonePatternMatching", "multiplePatternMatchingBody", 
		"multiplePatternMatching", "patternMatching", "rule", "definition", "definitionClause", 
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
			this.state = 52;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===2) {
				{
				{
				this.state = 49;
				this.application();
				}
				}
				this.state = 54;
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
	public application(): ApplicationContext {
		let localctx: ApplicationContext = new ApplicationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, x_proofParser.RULE_application);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 55;
			this.match(x_proofParser.T__1);
			this.state = 57;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 56;
				this.objects();
				}
			}

			this.state = 59;
			this.match(x_proofParser.T__2);
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
		this.enterRule(localctx, 6, x_proofParser.RULE_objects);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 61;
			this.object();
			this.state = 66;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 62;
				this.match(x_proofParser.T__0);
				this.state = 63;
				this.object();
				}
				}
				this.state = 68;
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
		this.enterRule(localctx, 8, x_proofParser.RULE_aliasBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 70;
			this.match(x_proofParser.T__3);
			this.state = 71;
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
		this.enterRule(localctx, 10, x_proofParser.RULE_alias);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 73;
			this.match(x_proofParser.T__4);
			this.state = 74;
			this.aliasBody();
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 75;
				this.match(x_proofParser.T__0);
				this.state = 76;
				this.aliasBody();
				}
				}
				this.state = 81;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 82;
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
		this.enterRule(localctx, 12, x_proofParser.RULE_standalonePatternMatchingBody);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 84;
			this.object();
			this.state = 85;
			this.match(x_proofParser.T__3);
			this.state = 86;
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
		this.enterRule(localctx, 14, x_proofParser.RULE_standalonePatternMatching);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 88;
			this.match(x_proofParser.T__6);
			this.state = 89;
			this.standalonePatternMatchingBody();
			this.state = 94;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 90;
				this.match(x_proofParser.T__0);
				this.state = 91;
				this.standalonePatternMatching();
				}
				}
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 97;
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
		this.enterRule(localctx, 16, x_proofParser.RULE_multiplePatternMatchingBody);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 101;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				{
				this.state = 99;
				this.object();
				}
				break;
			case 8:
				{
				this.state = 100;
				this.match(x_proofParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 103;
			this.match(x_proofParser.T__8);
			this.state = 104;
			this.match(x_proofParser.T__9);
			this.state = 108;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 105;
				this.rule();
				}
				}
				this.state = 110;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 111;
			this.match(x_proofParser.T__10);
			this.state = 112;
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
		this.enterRule(localctx, 18, x_proofParser.RULE_multiplePatternMatching);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 114;
			this.match(x_proofParser.T__6);
			this.state = 115;
			this.match(x_proofParser.T__1);
			this.state = 116;
			this.object();
			this.state = 117;
			this.match(x_proofParser.T__2);
			this.state = 118;
			this.match(x_proofParser.T__9);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===8 || _la===19) {
				{
				{
				this.state = 119;
				this.multiplePatternMatchingBody();
				}
				}
				this.state = 124;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 125;
			this.match(x_proofParser.T__10);
			this.state = 126;
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
		this.enterRule(localctx, 20, x_proofParser.RULE_patternMatching);
		try {
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 128;
				this.standalonePatternMatching();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 129;
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
		this.enterRule(localctx, 22, x_proofParser.RULE_rule);
		try {
			this.state = 137;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 19:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 132;
				this.object();
				this.state = 133;
				this.match(x_proofParser.T__5);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 135;
				this.patternMatching();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 136;
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
		this.enterRule(localctx, 24, x_proofParser.RULE_definition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 139;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===2) {
				{
				this.state = 140;
				this.match(x_proofParser.T__1);
				this.state = 142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 141;
					this.parameters();
					}
				}

				this.state = 144;
				this.match(x_proofParser.T__2);
				this.state = 154;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===12) {
					{
					this.state = 145;
					this.match(x_proofParser.T__11);
					this.state = 146;
					this.match(x_proofParser.T__9);
					this.state = 150;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
						{
						{
						this.state = 147;
						this.rule();
						}
						}
						this.state = 152;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 153;
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
			this.state = 158;
			this.match(x_proofParser.T__12);
			this.state = 159;
			this.definition();
			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 160;
				this.match(x_proofParser.T__0);
				this.state = 161;
				this.definition();
				}
				}
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 167;
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
			this.state = 196;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 169;
				this.object();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 170;
				this.match(x_proofParser.IDENTIFIER);
				this.state = 171;
				this.match(x_proofParser.T__1);
				this.state = 173;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 172;
					this.parameters();
					}
				}

				this.state = 175;
				this.match(x_proofParser.T__2);
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===14) {
					{
					this.state = 176;
					this.match(x_proofParser.T__13);
					this.state = 177;
					this.match(x_proofParser.T__9);
					this.state = 181;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
						{
						{
						this.state = 178;
						this.rule();
						}
						}
						this.state = 183;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 184;
					this.match(x_proofParser.T__10);
					}
				}

				{
				this.state = 187;
				this.match(x_proofParser.T__14);
				this.state = 188;
				this.match(x_proofParser.T__9);
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
					{
					{
					this.state = 189;
					this.rule();
					}
					}
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 195;
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
		this.enterRule(localctx, 30, x_proofParser.RULE_axiomClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 198;
			this.match(x_proofParser.T__15);
			this.state = 199;
			this.axiom();
			this.state = 204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 200;
				this.match(x_proofParser.T__0);
				this.state = 201;
				this.axiom();
				}
				}
				this.state = 206;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 207;
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
			this.state = 209;
			this.match(x_proofParser.IDENTIFIER);
			this.state = 210;
			this.match(x_proofParser.T__1);
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 211;
				this.parameters();
				}
			}

			this.state = 214;
			this.match(x_proofParser.T__2);
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 215;
				this.match(x_proofParser.T__13);
				this.state = 216;
				this.match(x_proofParser.T__9);
				this.state = 220;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
					{
					{
					this.state = 217;
					this.rule();
					}
					}
					this.state = 222;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 223;
				this.match(x_proofParser.T__10);
				}
			}

			this.state = 226;
			this.match(x_proofParser.T__14);
			this.state = 227;
			this.match(x_proofParser.T__9);
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 228;
				this.rule();
				}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 234;
			this.match(x_proofParser.T__10);
			this.state = 235;
			this.match(x_proofParser.T__16);
			this.state = 236;
			this.match(x_proofParser.T__9);
			this.state = 240;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 524448) !== 0)) {
				{
				{
				this.state = 237;
				this.rule();
				}
				}
				this.state = 242;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 243;
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
			this.state = 245;
			this.match(x_proofParser.T__17);
			this.state = 246;
			this.theorem();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 247;
				this.match(x_proofParser.T__0);
				this.state = 248;
				this.theorem();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 254;
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
			this.state = 259;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 13:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 256;
				this.definitionClause();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 257;
				this.axiomClause();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 258;
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
			this.state = 262;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 261;
				this.clause();
				}
				}
				this.state = 264;
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

	public static readonly _serializedATN: number[] = [4,1,23,267,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,1,0,1,0,1,0,5,0,44,8,0,10,0,12,0,47,9,0,1,1,1,
	1,5,1,51,8,1,10,1,12,1,54,9,1,1,2,1,2,3,2,58,8,2,1,2,1,2,1,3,1,3,1,3,5,
	3,65,8,3,10,3,12,3,68,9,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,78,8,5,10,
	5,12,5,81,9,5,1,5,1,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,93,8,7,10,7,12,
	7,96,9,7,1,7,1,7,1,8,1,8,3,8,102,8,8,1,8,1,8,1,8,5,8,107,8,8,10,8,12,8,
	110,9,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,121,8,9,10,9,12,9,124,9,
	9,1,9,1,9,1,9,1,10,1,10,3,10,131,8,10,1,11,1,11,1,11,1,11,1,11,3,11,138,
	8,11,1,12,1,12,1,12,3,12,143,8,12,1,12,1,12,1,12,1,12,5,12,149,8,12,10,
	12,12,12,152,9,12,1,12,3,12,155,8,12,3,12,157,8,12,1,13,1,13,1,13,1,13,
	5,13,163,8,13,10,13,12,13,166,9,13,1,13,1,13,1,14,1,14,1,14,1,14,3,14,174,
	8,14,1,14,1,14,1,14,1,14,5,14,180,8,14,10,14,12,14,183,9,14,1,14,3,14,186,
	8,14,1,14,1,14,1,14,5,14,191,8,14,10,14,12,14,194,9,14,1,14,3,14,197,8,
	14,1,15,1,15,1,15,1,15,5,15,203,8,15,10,15,12,15,206,9,15,1,15,1,15,1,16,
	1,16,1,16,3,16,213,8,16,1,16,1,16,1,16,1,16,5,16,219,8,16,10,16,12,16,222,
	9,16,1,16,3,16,225,8,16,1,16,1,16,1,16,5,16,230,8,16,10,16,12,16,233,9,
	16,1,16,1,16,1,16,1,16,5,16,239,8,16,10,16,12,16,242,9,16,1,16,1,16,1,17,
	1,17,1,17,1,17,5,17,250,8,17,10,17,12,17,253,9,17,1,17,1,17,1,18,1,18,1,
	18,3,18,260,8,18,1,19,4,19,263,8,19,11,19,12,19,264,1,19,0,0,20,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,0,0,278,0,40,1,0,0,0,2,48,
	1,0,0,0,4,55,1,0,0,0,6,61,1,0,0,0,8,69,1,0,0,0,10,73,1,0,0,0,12,84,1,0,
	0,0,14,88,1,0,0,0,16,101,1,0,0,0,18,114,1,0,0,0,20,130,1,0,0,0,22,137,1,
	0,0,0,24,139,1,0,0,0,26,158,1,0,0,0,28,196,1,0,0,0,30,198,1,0,0,0,32,209,
	1,0,0,0,34,245,1,0,0,0,36,259,1,0,0,0,38,262,1,0,0,0,40,45,5,19,0,0,41,
	42,5,1,0,0,42,44,5,19,0,0,43,41,1,0,0,0,44,47,1,0,0,0,45,43,1,0,0,0,45,
	46,1,0,0,0,46,1,1,0,0,0,47,45,1,0,0,0,48,52,5,19,0,0,49,51,3,4,2,0,50,49,
	1,0,0,0,51,54,1,0,0,0,52,50,1,0,0,0,52,53,1,0,0,0,53,3,1,0,0,0,54,52,1,
	0,0,0,55,57,5,2,0,0,56,58,3,6,3,0,57,56,1,0,0,0,57,58,1,0,0,0,58,59,1,0,
	0,0,59,60,5,3,0,0,60,5,1,0,0,0,61,66,3,2,1,0,62,63,5,1,0,0,63,65,3,2,1,
	0,64,62,1,0,0,0,65,68,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,7,1,0,0,0,
	68,66,1,0,0,0,69,70,5,19,0,0,70,71,5,4,0,0,71,72,3,2,1,0,72,9,1,0,0,0,73,
	74,5,5,0,0,74,79,3,8,4,0,75,76,5,1,0,0,76,78,3,8,4,0,77,75,1,0,0,0,78,81,
	1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,83,5,
	6,0,0,83,11,1,0,0,0,84,85,3,2,1,0,85,86,5,4,0,0,86,87,3,2,1,0,87,13,1,0,
	0,0,88,89,5,7,0,0,89,94,3,12,6,0,90,91,5,1,0,0,91,93,3,14,7,0,92,90,1,0,
	0,0,93,96,1,0,0,0,94,92,1,0,0,0,94,95,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,
	0,97,98,5,6,0,0,98,15,1,0,0,0,99,102,3,2,1,0,100,102,5,8,0,0,101,99,1,0,
	0,0,101,100,1,0,0,0,102,103,1,0,0,0,103,104,5,9,0,0,104,108,5,10,0,0,105,
	107,3,22,11,0,106,105,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,108,109,1,
	0,0,0,109,111,1,0,0,0,110,108,1,0,0,0,111,112,5,11,0,0,112,113,5,6,0,0,
	113,17,1,0,0,0,114,115,5,7,0,0,115,116,5,2,0,0,116,117,3,2,1,0,117,118,
	5,3,0,0,118,122,5,10,0,0,119,121,3,16,8,0,120,119,1,0,0,0,121,124,1,0,0,
	0,122,120,1,0,0,0,122,123,1,0,0,0,123,125,1,0,0,0,124,122,1,0,0,0,125,126,
	5,11,0,0,126,127,5,6,0,0,127,19,1,0,0,0,128,131,3,14,7,0,129,131,3,18,9,
	0,130,128,1,0,0,0,130,129,1,0,0,0,131,21,1,0,0,0,132,133,3,2,1,0,133,134,
	5,6,0,0,134,138,1,0,0,0,135,138,3,20,10,0,136,138,3,10,5,0,137,132,1,0,
	0,0,137,135,1,0,0,0,137,136,1,0,0,0,138,23,1,0,0,0,139,156,5,19,0,0,140,
	142,5,2,0,0,141,143,3,0,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,
	0,0,144,154,5,3,0,0,145,146,5,12,0,0,146,150,5,10,0,0,147,149,3,22,11,0,
	148,147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,153,
	1,0,0,0,152,150,1,0,0,0,153,155,5,11,0,0,154,145,1,0,0,0,154,155,1,0,0,
	0,155,157,1,0,0,0,156,140,1,0,0,0,156,157,1,0,0,0,157,25,1,0,0,0,158,159,
	5,13,0,0,159,164,3,24,12,0,160,161,5,1,0,0,161,163,3,24,12,0,162,160,1,
	0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,167,1,0,0,0,166,
	164,1,0,0,0,167,168,5,6,0,0,168,27,1,0,0,0,169,197,3,2,1,0,170,171,5,19,
	0,0,171,173,5,2,0,0,172,174,3,0,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,
	175,1,0,0,0,175,185,5,3,0,0,176,177,5,14,0,0,177,181,5,10,0,0,178,180,3,
	22,11,0,179,178,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,181,182,1,0,0,0,
	182,184,1,0,0,0,183,181,1,0,0,0,184,186,5,11,0,0,185,176,1,0,0,0,185,186,
	1,0,0,0,186,187,1,0,0,0,187,188,5,15,0,0,188,192,5,10,0,0,189,191,3,22,
	11,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,
	195,1,0,0,0,194,192,1,0,0,0,195,197,5,11,0,0,196,169,1,0,0,0,196,170,1,
	0,0,0,197,29,1,0,0,0,198,199,5,16,0,0,199,204,3,28,14,0,200,201,5,1,0,0,
	201,203,3,28,14,0,202,200,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,
	1,0,0,0,205,207,1,0,0,0,206,204,1,0,0,0,207,208,5,6,0,0,208,31,1,0,0,0,
	209,210,5,19,0,0,210,212,5,2,0,0,211,213,3,0,0,0,212,211,1,0,0,0,212,213,
	1,0,0,0,213,214,1,0,0,0,214,224,5,3,0,0,215,216,5,14,0,0,216,220,5,10,0,
	0,217,219,3,22,11,0,218,217,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,
	221,1,0,0,0,221,223,1,0,0,0,222,220,1,0,0,0,223,225,5,11,0,0,224,215,1,
	0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,5,15,0,0,227,231,5,10,0,0,
	228,230,3,22,11,0,229,228,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,232,
	1,0,0,0,232,234,1,0,0,0,233,231,1,0,0,0,234,235,5,11,0,0,235,236,5,17,0,
	0,236,240,5,10,0,0,237,239,3,22,11,0,238,237,1,0,0,0,239,242,1,0,0,0,240,
	238,1,0,0,0,240,241,1,0,0,0,241,243,1,0,0,0,242,240,1,0,0,0,243,244,5,11,
	0,0,244,33,1,0,0,0,245,246,5,18,0,0,246,251,3,32,16,0,247,248,5,1,0,0,248,
	250,3,32,16,0,249,247,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,
	0,0,0,252,254,1,0,0,0,253,251,1,0,0,0,254,255,5,6,0,0,255,35,1,0,0,0,256,
	260,3,26,13,0,257,260,3,30,15,0,258,260,3,34,17,0,259,256,1,0,0,0,259,257,
	1,0,0,0,259,258,1,0,0,0,260,37,1,0,0,0,261,263,3,36,18,0,262,261,1,0,0,
	0,263,264,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,39,1,0,0,0,30,45,
	52,57,66,79,94,101,108,122,130,137,142,150,154,156,164,173,181,185,192,
	196,204,212,220,224,231,240,251,259,264];

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
	public application_list(): ApplicationContext[] {
		return this.getTypedRuleContexts(ApplicationContext) as ApplicationContext[];
	}
	public application(i: number): ApplicationContext {
		return this.getTypedRuleContext(ApplicationContext, i) as ApplicationContext;
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


export class ApplicationContext extends ParserRuleContext {
	constructor(parser?: x_proofParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public objects(): ObjectsContext {
		return this.getTypedRuleContext(ObjectsContext, 0) as ObjectsContext;
	}
    public get ruleIndex(): number {
    	return x_proofParser.RULE_application;
	}
	// @Override
	public accept<Result>(visitor: x_proofVisitor<Result>): Result {
		if (visitor.visitApplication) {
			return visitor.visitApplication(this);
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
