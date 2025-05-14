// Generated from c:/GitHub/StandaloneTSCompilerForElan/Elan.g4 by ANTLR 4.13.2
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
import ElanListener from "./ElanListener.js";
import ElanVisitor from "./ElanVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class ElanParser extends Parser {
	public static readonly NL = 1;
	public static readonly SINGLE_LINE_COMMENT = 2;
	public static readonly COMMENT_MARKER = 3;
	public static readonly ABSTRACT = 4;
	public static readonly AND = 5;
	public static readonly AS = 6;
	public static readonly ASSERT = 7;
	public static readonly CALL = 8;
	public static readonly CASE = 9;
	public static readonly CATCH = 10;
	public static readonly CLASS = 11;
	public static readonly CONSTANT = 12;
	public static readonly CONSTRUCTOR = 13;
	public static readonly CURRY = 14;
	public static readonly DEFAULT = 15;
	public static readonly DIV = 16;
	public static readonly EACH = 17;
	public static readonly ELSE = 18;
	public static readonly END = 19;
	public static readonly ENUM = 20;
	public static readonly FOR = 21;
	public static readonly FROM = 22;
	public static readonly FUNCTION = 23;
	public static readonly GLOBAL = 24;
	public static readonly IF = 25;
	public static readonly IMMUTABLE = 26;
	public static readonly IMPORT = 27;
	public static readonly IN = 28;
	public static readonly INHERITS = 29;
	public static readonly INPUT = 30;
	public static readonly LAMBDA = 31;
	public static readonly LET = 32;
	public static readonly LIBRARY = 33;
	public static readonly MAIN = 34;
	public static readonly MOD = 35;
	public static readonly NEW = 36;
	public static readonly NOT = 37;
	public static readonly OF = 38;
	public static readonly IS = 39;
	public static readonly OR = 40;
	public static readonly OUT = 41;
	public static readonly PACKAGE = 42;
	public static readonly PARTIAL = 43;
	public static readonly PRINT = 44;
	public static readonly PRIVATE = 45;
	public static readonly PROCEDURE = 46;
	public static readonly PROPERTY = 47;
	public static readonly REPEAT = 48;
	public static readonly RETURN = 49;
	public static readonly SET = 50;
	public static readonly STEP = 51;
	public static readonly SWITCH = 52;
	public static readonly SYSTEM = 53;
	public static readonly TEST = 54;
	public static readonly THIS = 55;
	public static readonly THROW = 56;
	public static readonly TO = 57;
	public static readonly TRY = 58;
	public static readonly VAR = 59;
	public static readonly WHEN = 60;
	public static readonly WHILE = 61;
	public static readonly WITH = 62;
	public static readonly XOR = 63;
	public static readonly BOOL_VALUE = 64;
	public static readonly VALUE_TYPE = 65;
	public static readonly ARRAY = 66;
	public static readonly LIST = 67;
	public static readonly DICTIONARY = 68;
	public static readonly ITERABLE = 69;
	public static readonly EQUALS = 70;
	public static readonly ARROW = 71;
	public static readonly OPEN_BRACE = 72;
	public static readonly CLOSE_BRACE = 73;
	public static readonly OPEN_SQ_BRACKET = 74;
	public static readonly CLOSE_SQ_BRACKET = 75;
	public static readonly OPEN_BRACKET = 76;
	public static readonly CLOSE_BRACKET = 77;
	public static readonly DOUBLE_DOT = 78;
	public static readonly DOT = 79;
	public static readonly COMMA = 80;
	public static readonly COLON = 81;
	public static readonly PLUS = 82;
	public static readonly MINUS = 83;
	public static readonly MULT = 84;
	public static readonly DIVIDE = 85;
	public static readonly POWER = 86;
	public static readonly LT = 87;
	public static readonly GT = 88;
	public static readonly LE = 89;
	public static readonly GE = 90;
	public static readonly IS_NOT = 91;
	public static readonly TYPENAME = 92;
	public static readonly IDENTIFIER = 93;
	public static readonly LITERAL_INTEGER = 94;
	public static readonly LITERAL_FLOAT = 95;
	public static readonly LITERAL_CHAR = 96;
	public static readonly LITERAL_STRING = 97;
	public static readonly WHITESPACES = 98;
	public static readonly NEWLINE = 99;
	public static readonly WS = 100;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_file = 0;
	public static readonly RULE_importStatement = 1;
	public static readonly RULE_namespace = 2;
	public static readonly RULE_main = 3;
	public static readonly RULE_test = 4;
	public static readonly RULE_statementBlock = 5;
	public static readonly RULE_testStatements = 6;
	public static readonly RULE_assert = 7;
	public static readonly RULE_callStatement = 8;
	public static readonly RULE_throwException = 9;
	public static readonly RULE_printStatement = 10;
	public static readonly RULE_varDef = 11;
	public static readonly RULE_assignment = 12;
	public static readonly RULE_inlineAsignment = 13;
	public static readonly RULE_assignableValue = 14;
	public static readonly RULE_procedureCall = 15;
	public static readonly RULE_functionCall = 16;
	public static readonly RULE_systemCall = 17;
	public static readonly RULE_input = 18;
	public static readonly RULE_argument = 19;
	public static readonly RULE_argumentList = 20;
	public static readonly RULE_procedureDef = 21;
	public static readonly RULE_procedureSignature = 22;
	public static readonly RULE_procedureParameterList = 23;
	public static readonly RULE_parameterList = 24;
	public static readonly RULE_parameter = 25;
	public static readonly RULE_procedureParameter = 26;
	public static readonly RULE_functionDef = 27;
	public static readonly RULE_functionSignature = 28;
	public static readonly RULE_constantDef = 29;
	public static readonly RULE_enumDef = 30;
	public static readonly RULE_enumType = 31;
	public static readonly RULE_enumValue = 32;
	public static readonly RULE_classDef = 33;
	public static readonly RULE_mutableClass = 34;
	public static readonly RULE_abstractClass = 35;
	public static readonly RULE_immutableClass = 36;
	public static readonly RULE_abstractImmutableClass = 37;
	public static readonly RULE_inherits = 38;
	public static readonly RULE_property = 39;
	public static readonly RULE_constructor = 40;
	public static readonly RULE_newInstance = 41;
	public static readonly RULE_withClause = 42;
	public static readonly RULE_proceduralControlFlow = 43;
	public static readonly RULE_if = 44;
	public static readonly RULE_for = 45;
	public static readonly RULE_each = 46;
	public static readonly RULE_while = 47;
	public static readonly RULE_repeat = 48;
	public static readonly RULE_try = 49;
	public static readonly RULE_switch = 50;
	public static readonly RULE_case = 51;
	public static readonly RULE_caseDefault = 52;
	public static readonly RULE_expression = 53;
	public static readonly RULE_bracketedExpression = 54;
	public static readonly RULE_ifExpression = 55;
	public static readonly RULE_elseExpression = 56;
	public static readonly RULE_lambda = 57;
	public static readonly RULE_index = 58;
	public static readonly RULE_range = 59;
	public static readonly RULE_value = 60;
	public static readonly RULE_scopeQualifier = 61;
	public static readonly RULE_literal = 62;
	public static readonly RULE_literalValue = 63;
	public static readonly RULE_dataStructureDefinition = 64;
	public static readonly RULE_literalDataStructure = 65;
	public static readonly RULE_tupleDefinition = 66;
	public static readonly RULE_literalTuple = 67;
	public static readonly RULE_deconstructedTuple = 68;
	public static readonly RULE_listDefinition = 69;
	public static readonly RULE_literalList = 70;
	public static readonly RULE_listDecomp = 71;
	public static readonly RULE_arrayDefinition = 72;
	public static readonly RULE_dictionaryDefinition = 73;
	public static readonly RULE_literalDictionary = 74;
	public static readonly RULE_kvp = 75;
	public static readonly RULE_literalKvp = 76;
	public static readonly RULE_unaryOp = 77;
	public static readonly RULE_binaryOp = 78;
	public static readonly RULE_arithmeticOp = 79;
	public static readonly RULE_logicalOp = 80;
	public static readonly RULE_conditionalOp = 81;
	public static readonly RULE_type = 82;
	public static readonly RULE_dataStructureType = 83;
	public static readonly RULE_genericSpecifier = 84;
	public static readonly RULE_tupleType = 85;
	public static readonly RULE_typeList = 86;
	public static readonly RULE_funcType = 87;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            null, "'#'", 
                                                            "'abstract'", 
                                                            "'and'", "'as'", 
                                                            "'assert'", 
                                                            "'call'", "'case'", 
                                                            "'catch'", "'class'", 
                                                            "'constant'", 
                                                            "'constructor'", 
                                                            "'curry'", "'default'", 
                                                            "'div'", "'each'", 
                                                            "'else'", "'end'", 
                                                            "'enum'", "'for'", 
                                                            "'from'", "'function'", 
                                                            "'global'", 
                                                            "'if'", "'immutable'", 
                                                            "'import'", 
                                                            "'in'", "'inherits'", 
                                                            "'input'", "'lambda'", 
                                                            "'let'", "'library'", 
                                                            "'main'", "'mod'", 
                                                            "'new'", "'not'", 
                                                            "'of'", "'is'", 
                                                            "'or'", "'out'", 
                                                            "'package'", 
                                                            "'partial'", 
                                                            "'print'", "'private'", 
                                                            "'procedure'", 
                                                            "'property'", 
                                                            "'repeat'", 
                                                            "'return'", 
                                                            "'set'", "'step'", 
                                                            "'switch'", 
                                                            "'system'", 
                                                            "'test'", "'this'", 
                                                            "'throw'", "'to'", 
                                                            "'try'", "'var'", 
                                                            "'when'", "'while'", 
                                                            "'with'", "'xor'", 
                                                            null, null, 
                                                            "'Array'", "'List'", 
                                                            "'Dictionary'", 
                                                            "'Iter'", "'='", 
                                                            "'->'", "'{'", 
                                                            "'}'", "'['", 
                                                            "']'", "'('", 
                                                            "')'", "'..'", 
                                                            "'.'", "','", 
                                                            "':'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'^'", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "NL", 
                                                             "SINGLE_LINE_COMMENT", 
                                                             "COMMENT_MARKER", 
                                                             "ABSTRACT", 
                                                             "AND", "AS", 
                                                             "ASSERT", "CALL", 
                                                             "CASE", "CATCH", 
                                                             "CLASS", "CONSTANT", 
                                                             "CONSTRUCTOR", 
                                                             "CURRY", "DEFAULT", 
                                                             "DIV", "EACH", 
                                                             "ELSE", "END", 
                                                             "ENUM", "FOR", 
                                                             "FROM", "FUNCTION", 
                                                             "GLOBAL", "IF", 
                                                             "IMMUTABLE", 
                                                             "IMPORT", "IN", 
                                                             "INHERITS", 
                                                             "INPUT", "LAMBDA", 
                                                             "LET", "LIBRARY", 
                                                             "MAIN", "MOD", 
                                                             "NEW", "NOT", 
                                                             "OF", "IS", 
                                                             "OR", "OUT", 
                                                             "PACKAGE", 
                                                             "PARTIAL", 
                                                             "PRINT", "PRIVATE", 
                                                             "PROCEDURE", 
                                                             "PROPERTY", 
                                                             "REPEAT", "RETURN", 
                                                             "SET", "STEP", 
                                                             "SWITCH", "SYSTEM", 
                                                             "TEST", "THIS", 
                                                             "THROW", "TO", 
                                                             "TRY", "VAR", 
                                                             "WHEN", "WHILE", 
                                                             "WITH", "XOR", 
                                                             "BOOL_VALUE", 
                                                             "VALUE_TYPE", 
                                                             "ARRAY", "LIST", 
                                                             "DICTIONARY", 
                                                             "ITERABLE", 
                                                             "EQUALS", "ARROW", 
                                                             "OPEN_BRACE", 
                                                             "CLOSE_BRACE", 
                                                             "OPEN_SQ_BRACKET", 
                                                             "CLOSE_SQ_BRACKET", 
                                                             "OPEN_BRACKET", 
                                                             "CLOSE_BRACKET", 
                                                             "DOUBLE_DOT", 
                                                             "DOT", "COMMA", 
                                                             "COLON", "PLUS", 
                                                             "MINUS", "MULT", 
                                                             "DIVIDE", "POWER", 
                                                             "LT", "GT", 
                                                             "LE", "GE", 
                                                             "IS_NOT", "TYPENAME", 
                                                             "IDENTIFIER", 
                                                             "LITERAL_INTEGER", 
                                                             "LITERAL_FLOAT", 
                                                             "LITERAL_CHAR", 
                                                             "LITERAL_STRING", 
                                                             "WHITESPACES", 
                                                             "NEWLINE", 
                                                             "WS" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"file", "importStatement", "namespace", "main", "test", "statementBlock", 
		"testStatements", "assert", "callStatement", "throwException", "printStatement", 
		"varDef", "assignment", "inlineAsignment", "assignableValue", "procedureCall", 
		"functionCall", "systemCall", "input", "argument", "argumentList", "procedureDef", 
		"procedureSignature", "procedureParameterList", "parameterList", "parameter", 
		"procedureParameter", "functionDef", "functionSignature", "constantDef", 
		"enumDef", "enumType", "enumValue", "classDef", "mutableClass", "abstractClass", 
		"immutableClass", "abstractImmutableClass", "inherits", "property", "constructor", 
		"newInstance", "withClause", "proceduralControlFlow", "if", "for", "each", 
		"while", "repeat", "try", "switch", "case", "caseDefault", "expression", 
		"bracketedExpression", "ifExpression", "elseExpression", "lambda", "index", 
		"range", "value", "scopeQualifier", "literal", "literalValue", "dataStructureDefinition", 
		"literalDataStructure", "tupleDefinition", "literalTuple", "deconstructedTuple", 
		"listDefinition", "literalList", "listDecomp", "arrayDefinition", "dictionaryDefinition", 
		"literalDictionary", "kvp", "literalKvp", "unaryOp", "binaryOp", "arithmeticOp", 
		"logicalOp", "conditionalOp", "type", "dataStructureType", "genericSpecifier", 
		"tupleType", "typeList", "funcType",
	];
	public get grammarFileName(): string { return "Elan.g4"; }
	public get literalNames(): (string | null)[] { return ElanParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ElanParser.symbolicNames; }
	public get ruleNames(): string[] { return ElanParser.ruleNames; }
	public get serializedATN(): number[] { return ElanParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ElanParser._ATN, ElanParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public file(): FileContext {
		let localctx: FileContext = new FileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ElanParser.RULE_file);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 184;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 0, this._ctx) ) {
					case 1:
						{
						this.state = 176;
						this.main();
						}
						break;
					case 2:
						{
						this.state = 177;
						this.procedureDef();
						}
						break;
					case 3:
						{
						this.state = 178;
						this.functionDef();
						}
						break;
					case 4:
						{
						this.state = 179;
						this.constantDef();
						}
						break;
					case 5:
						{
						this.state = 180;
						this.enumDef();
						}
						break;
					case 6:
						{
						this.state = 181;
						this.classDef();
						}
						break;
					case 7:
						{
						this.state = 182;
						this.test();
						}
						break;
					case 8:
						{
						this.state = 183;
						this.importStatement();
						}
						break;
					}
					}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===1) {
				{
				{
				this.state = 189;
				this.match(ElanParser.NL);
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 195;
			this.match(ElanParser.EOF);
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
	public importStatement(): ImportStatementContext {
		let localctx: ImportStatementContext = new ImportStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ElanParser.RULE_importStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 197;
			this.match(ElanParser.IMPORT);
			this.state = 198;
			this.namespace();
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
	public namespace(): NamespaceContext {
		let localctx: NamespaceContext = new NamespaceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ElanParser.RULE_namespace);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			_la = this._input.LA(1);
			if(!(_la===92 || _la===93)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 201;
					this.match(ElanParser.DOT);
					this.state = 202;
					_la = this._input.LA(1);
					if(!(_la===92 || _la===93)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
					}
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
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
	public main(): MainContext {
		let localctx: MainContext = new MainContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ElanParser.RULE_main);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 208;
			this.match(ElanParser.NL);
			this.state = 209;
			this.match(ElanParser.MAIN);
			this.state = 210;
			this.statementBlock();
			this.state = 211;
			this.match(ElanParser.NL);
			this.state = 212;
			this.match(ElanParser.END);
			this.state = 213;
			this.match(ElanParser.MAIN);
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
	public test(): TestContext {
		let localctx: TestContext = new TestContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ElanParser.RULE_test);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 215;
			this.match(ElanParser.NL);
			this.state = 216;
			this.match(ElanParser.TEST);
			this.state = 217;
			this.match(ElanParser.IDENTIFIER);
			this.state = 218;
			this.testStatements();
			this.state = 219;
			this.match(ElanParser.NL);
			this.state = 220;
			this.match(ElanParser.END);
			this.state = 221;
			this.match(ElanParser.TEST);
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
	public statementBlock(): StatementBlockContext {
		let localctx: StatementBlockContext = new StatementBlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ElanParser.RULE_statementBlock);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 229;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
					case 1:
						{
						this.state = 223;
						this.varDef();
						}
						break;
					case 2:
						{
						this.state = 224;
						this.assignment();
						}
						break;
					case 3:
						{
						this.state = 225;
						this.proceduralControlFlow();
						}
						break;
					case 4:
						{
						this.state = 226;
						this.callStatement();
						}
						break;
					case 5:
						{
						this.state = 227;
						this.throwException();
						}
						break;
					case 6:
						{
						this.state = 228;
						this.printStatement();
						}
						break;
					}
					}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 5, this._ctx);
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
	public testStatements(): TestStatementsContext {
		let localctx: TestStatementsContext = new TestStatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ElanParser.RULE_testStatements);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 237;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						this.state = 234;
						this.assert();
						}
						break;
					case 2:
						{
						this.state = 235;
						this.varDef();
						}
						break;
					case 3:
						{
						this.state = 236;
						this.callStatement();
						}
						break;
					}
					}
				}
				this.state = 241;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
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
	public assert(): AssertContext {
		let localctx: AssertContext = new AssertContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ElanParser.RULE_assert);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
			this.match(ElanParser.NL);
			this.state = 243;
			this.match(ElanParser.ASSERT);
			this.state = 244;
			this.expression(0);
			this.state = 245;
			this.match(ElanParser.IS);
			this.state = 246;
			this.value();
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
	public callStatement(): CallStatementContext {
		let localctx: CallStatementContext = new CallStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, ElanParser.RULE_callStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 248;
			this.match(ElanParser.NL);
			this.state = 249;
			this.match(ElanParser.CALL);
			this.state = 255;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 250;
				this.procedureCall();
				}
				break;
			case 2:
				{
				{
				this.state = 251;
				this.assignableValue();
				this.state = 252;
				this.match(ElanParser.DOT);
				this.state = 253;
				this.procedureCall();
				}
				}
				break;
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
	public throwException(): ThrowExceptionContext {
		let localctx: ThrowExceptionContext = new ThrowExceptionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, ElanParser.RULE_throwException);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 257;
			this.match(ElanParser.NL);
			this.state = 258;
			this.match(ElanParser.THROW);
			this.state = 259;
			_la = this._input.LA(1);
			if(!(_la===93 || _la===97)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public printStatement(): PrintStatementContext {
		let localctx: PrintStatementContext = new PrintStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, ElanParser.RULE_printStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 261;
			this.match(ElanParser.NL);
			this.state = 262;
			this.match(ElanParser.PRINT);
			this.state = 264;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1090551808) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2152743449) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4227990593) !== 0)) {
				{
				this.state = 263;
				this.expression(0);
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
	public varDef(): VarDefContext {
		let localctx: VarDefContext = new VarDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, ElanParser.RULE_varDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			this.match(ElanParser.NL);
			this.state = 267;
			this.match(ElanParser.VAR);
			this.state = 268;
			this.assignableValue();
			this.state = 269;
			this.match(ElanParser.SET);
			this.state = 270;
			this.match(ElanParser.TO);
			this.state = 271;
			this.expression(0);
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
	public assignment(): AssignmentContext {
		let localctx: AssignmentContext = new AssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, ElanParser.RULE_assignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 273;
			this.match(ElanParser.NL);
			this.state = 274;
			this.match(ElanParser.SET);
			this.state = 275;
			this.assignableValue();
			this.state = 276;
			this.match(ElanParser.TO);
			this.state = 277;
			this.expression(0);
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
	public inlineAsignment(): InlineAsignmentContext {
		let localctx: InlineAsignmentContext = new InlineAsignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, ElanParser.RULE_inlineAsignment);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.assignableValue();
			this.state = 280;
			this.match(ElanParser.SET);
			this.state = 281;
			this.match(ElanParser.TO);
			this.state = 282;
			this.expression(0);
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
	public assignableValue(): AssignableValueContext {
		let localctx: AssignableValueContext = new AssignableValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, ElanParser.RULE_assignableValue);
		let _la: number;
		try {
			this.state = 293;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 24:
			case 33:
			case 42:
			case 47:
			case 93:
				this.enterOuterAlt(localctx, 1);
				{
				{
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 8651265) !== 0)) {
					{
					this.state = 284;
					this.scopeQualifier();
					}
				}

				this.state = 287;
				this.match(ElanParser.IDENTIFIER);
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===74) {
					{
					this.state = 288;
					this.index();
					}
				}

				}
				}
				break;
			case 76:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 291;
				this.deconstructedTuple();
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 292;
				this.listDecomp();
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
	public procedureCall(): ProcedureCallContext {
		let localctx: ProcedureCallContext = new ProcedureCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, ElanParser.RULE_procedureCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 296;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 8651265) !== 0)) {
				{
				this.state = 295;
				this.scopeQualifier();
				}
			}

			this.state = 298;
			this.match(ElanParser.IDENTIFIER);
			this.state = 299;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3238035456) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2152743449) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4227990593) !== 0)) {
				{
				this.state = 300;
				this.argumentList();
				}
			}

			this.state = 303;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public functionCall(): FunctionCallContext {
		let localctx: FunctionCallContext = new FunctionCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, ElanParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 8651265) !== 0)) {
				{
				this.state = 305;
				this.scopeQualifier();
				}
			}

			this.state = 308;
			this.match(ElanParser.IDENTIFIER);
			this.state = 309;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3238035456) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2152743449) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4227990593) !== 0)) {
				{
				this.state = 310;
				this.argumentList();
				}
			}

			this.state = 313;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public systemCall(): SystemCallContext {
		let localctx: SystemCallContext = new SystemCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, ElanParser.RULE_systemCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
			this.match(ElanParser.SYSTEM);
			this.state = 316;
			this.match(ElanParser.DOT);
			this.state = 317;
			this.match(ElanParser.IDENTIFIER);
			this.state = 318;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3238035456) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2152743449) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4227990593) !== 0)) {
				{
				this.state = 319;
				this.argumentList();
				}
			}

			this.state = 322;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public input(): InputContext {
		let localctx: InputContext = new InputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, ElanParser.RULE_input);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			this.match(ElanParser.INPUT);
			this.state = 326;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 325;
				this.match(ElanParser.LITERAL_STRING);
				}
				break;
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
	public argument(): ArgumentContext {
		let localctx: ArgumentContext = new ArgumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, ElanParser.RULE_argument);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
			case 24:
			case 30:
			case 33:
			case 36:
			case 37:
			case 42:
			case 47:
			case 53:
			case 55:
			case 64:
			case 66:
			case 72:
			case 76:
			case 83:
			case 92:
			case 93:
			case 94:
			case 95:
			case 96:
			case 97:
				{
				this.state = 328;
				this.expression(0);
				}
				break;
			case 31:
				{
				this.state = 329;
				this.lambda();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, ElanParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 332;
			this.argument();
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 333;
				this.match(ElanParser.COMMA);
				this.state = 334;
				this.argument();
				}
				}
				this.state = 339;
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
	public procedureDef(): ProcedureDefContext {
		let localctx: ProcedureDefContext = new ProcedureDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, ElanParser.RULE_procedureDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 340;
			this.match(ElanParser.NL);
			this.state = 341;
			this.match(ElanParser.PROCEDURE);
			this.state = 342;
			this.procedureSignature();
			this.state = 343;
			this.statementBlock();
			this.state = 344;
			this.match(ElanParser.NL);
			this.state = 345;
			this.match(ElanParser.END);
			this.state = 346;
			this.match(ElanParser.PROCEDURE);
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
	public procedureSignature(): ProcedureSignatureContext {
		let localctx: ProcedureSignatureContext = new ProcedureSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, ElanParser.RULE_procedureSignature);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 348;
			this.match(ElanParser.IDENTIFIER);
			this.state = 349;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41 || _la===93) {
				{
				this.state = 350;
				this.procedureParameterList();
				}
			}

			this.state = 353;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public procedureParameterList(): ProcedureParameterListContext {
		let localctx: ProcedureParameterListContext = new ProcedureParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, ElanParser.RULE_procedureParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 355;
			this.procedureParameter();
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 356;
				this.match(ElanParser.COMMA);
				this.state = 357;
				this.procedureParameter();
				}
				}
				this.state = 362;
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
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, ElanParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 363;
			this.parameter();
			this.state = 368;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 364;
				this.match(ElanParser.COMMA);
				this.state = 365;
				this.parameter();
				}
				}
				this.state = 370;
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
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, ElanParser.RULE_parameter);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 371;
			this.match(ElanParser.IDENTIFIER);
			this.state = 372;
			this.type_();
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
	public procedureParameter(): ProcedureParameterContext {
		let localctx: ProcedureParameterContext = new ProcedureParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, ElanParser.RULE_procedureParameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 375;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 374;
				this.match(ElanParser.OUT);
				}
			}

			this.state = 377;
			this.match(ElanParser.IDENTIFIER);
			this.state = 378;
			this.type_();
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
	public functionDef(): FunctionDefContext {
		let localctx: FunctionDefContext = new FunctionDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, ElanParser.RULE_functionDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
			this.match(ElanParser.NL);
			this.state = 381;
			this.match(ElanParser.FUNCTION);
			this.state = 382;
			this.functionSignature();
			this.state = 383;
			this.statementBlock();
			this.state = 384;
			this.match(ElanParser.NL);
			this.state = 385;
			this.match(ElanParser.RETURN);
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 386;
				this.expression(0);
				}
				break;
			case 2:
				{
				this.state = 387;
				this.match(ElanParser.DEFAULT);
				}
				break;
			}
			this.state = 390;
			this.match(ElanParser.NL);
			this.state = 391;
			this.match(ElanParser.END);
			this.state = 392;
			this.match(ElanParser.FUNCTION);
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
	public functionSignature(): FunctionSignatureContext {
		let localctx: FunctionSignatureContext = new FunctionSignatureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, ElanParser.RULE_functionSignature);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 394;
			this.match(ElanParser.IDENTIFIER);
			this.state = 395;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 396;
				this.parameterList();
				}
			}

			this.state = 399;
			this.match(ElanParser.CLOSE_BRACKET);
			this.state = 400;
			this.match(ElanParser.AS);
			this.state = 401;
			this.type_();
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
	public constantDef(): ConstantDefContext {
		let localctx: ConstantDefContext = new ConstantDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, ElanParser.RULE_constantDef);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 403;
			this.match(ElanParser.NL);
			this.state = 404;
			this.match(ElanParser.CONSTANT);
			this.state = 405;
			this.match(ElanParser.IDENTIFIER);
			this.state = 406;
			this.match(ElanParser.SET);
			this.state = 407;
			this.match(ElanParser.TO);
			this.state = 410;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 64:
			case 72:
			case 76:
			case 92:
			case 94:
			case 95:
			case 96:
			case 97:
				{
				this.state = 408;
				this.literal();
				}
				break;
			case 36:
			case 93:
				{
				this.state = 409;
				this.newInstance();
				}
				break;
			default:
				throw new NoViableAltException(this);
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
	public enumDef(): EnumDefContext {
		let localctx: EnumDefContext = new EnumDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, ElanParser.RULE_enumDef);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 412;
			this.match(ElanParser.NL);
			this.state = 413;
			this.match(ElanParser.ENUM);
			this.state = 414;
			this.enumType();
			this.state = 415;
			this.match(ElanParser.NL);
			this.state = 416;
			this.match(ElanParser.IDENTIFIER);
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 417;
				this.match(ElanParser.COMMA);
				this.state = 418;
				this.match(ElanParser.IDENTIFIER);
				}
				}
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 424;
			this.match(ElanParser.NL);
			this.state = 425;
			this.match(ElanParser.END);
			this.state = 426;
			this.match(ElanParser.ENUM);
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
	public enumType(): EnumTypeContext {
		let localctx: EnumTypeContext = new EnumTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, ElanParser.RULE_enumType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 428;
			this.match(ElanParser.TYPENAME);
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
	public enumValue(): EnumValueContext {
		let localctx: EnumValueContext = new EnumValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, ElanParser.RULE_enumValue);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 430;
			this.enumType();
			this.state = 431;
			this.match(ElanParser.DOT);
			this.state = 432;
			this.match(ElanParser.IDENTIFIER);
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
	public classDef(): ClassDefContext {
		let localctx: ClassDefContext = new ClassDefContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, ElanParser.RULE_classDef);
		try {
			this.state = 438;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 434;
				this.mutableClass();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 435;
				this.abstractClass();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 436;
				this.immutableClass();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 437;
				this.abstractImmutableClass();
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
	public mutableClass(): MutableClassContext {
		let localctx: MutableClassContext = new MutableClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, ElanParser.RULE_mutableClass);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 440;
			this.match(ElanParser.NL);
			this.state = 441;
			this.match(ElanParser.CLASS);
			this.state = 442;
			this.match(ElanParser.TYPENAME);
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 443;
				this.inherits();
				}
			}

			this.state = 446;
			this.constructor_();
			this.state = 453;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 451;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
					case 1:
						{
						this.state = 447;
						this.match(ElanParser.NL);
						this.state = 448;
						this.property();
						}
						break;
					case 2:
						{
						this.state = 449;
						this.functionDef();
						}
						break;
					case 3:
						{
						this.state = 450;
						this.procedureDef();
						}
						break;
					}
					}
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
			}
			this.state = 456;
			this.match(ElanParser.NL);
			this.state = 457;
			this.match(ElanParser.END);
			this.state = 458;
			this.match(ElanParser.CLASS);
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
	public abstractClass(): AbstractClassContext {
		let localctx: AbstractClassContext = new AbstractClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, ElanParser.RULE_abstractClass);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 460;
			this.match(ElanParser.NL);
			this.state = 461;
			this.match(ElanParser.ABSTRACT);
			this.state = 462;
			this.match(ElanParser.CLASS);
			this.state = 463;
			this.match(ElanParser.TYPENAME);
			this.state = 465;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 464;
				this.inherits();
				}
			}

			this.state = 480;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 478;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
					case 1:
						{
						this.state = 467;
						this.match(ElanParser.NL);
						this.state = 468;
						this.match(ElanParser.ABSTRACT);
						this.state = 469;
						this.property();
						}
						break;
					case 2:
						{
						this.state = 470;
						this.match(ElanParser.NL);
						this.state = 471;
						this.match(ElanParser.ABSTRACT);
						this.state = 472;
						this.match(ElanParser.FUNCTION);
						this.state = 473;
						this.functionSignature();
						}
						break;
					case 3:
						{
						this.state = 474;
						this.match(ElanParser.NL);
						this.state = 475;
						this.match(ElanParser.ABSTRACT);
						this.state = 476;
						this.match(ElanParser.PROCEDURE);
						this.state = 477;
						this.procedureSignature();
						}
						break;
					}
					}
				}
				this.state = 482;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 35, this._ctx);
			}
			this.state = 483;
			this.match(ElanParser.NL);
			this.state = 484;
			this.match(ElanParser.END);
			this.state = 485;
			this.match(ElanParser.CLASS);
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
	public immutableClass(): ImmutableClassContext {
		let localctx: ImmutableClassContext = new ImmutableClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, ElanParser.RULE_immutableClass);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 487;
			this.match(ElanParser.NL);
			this.state = 488;
			this.match(ElanParser.IMMUTABLE);
			this.state = 489;
			this.match(ElanParser.CLASS);
			this.state = 490;
			this.match(ElanParser.TYPENAME);
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 491;
				this.inherits();
				}
			}

			this.state = 494;
			this.constructor_();
			this.state = 500;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 498;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
					case 1:
						{
						this.state = 495;
						this.match(ElanParser.NL);
						this.state = 496;
						this.property();
						}
						break;
					case 2:
						{
						this.state = 497;
						this.functionDef();
						}
						break;
					}
					}
				}
				this.state = 502;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 38, this._ctx);
			}
			this.state = 503;
			this.match(ElanParser.NL);
			this.state = 504;
			this.match(ElanParser.END);
			this.state = 505;
			this.match(ElanParser.CLASS);
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
	public abstractImmutableClass(): AbstractImmutableClassContext {
		let localctx: AbstractImmutableClassContext = new AbstractImmutableClassContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, ElanParser.RULE_abstractImmutableClass);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 507;
			this.match(ElanParser.NL);
			this.state = 508;
			this.match(ElanParser.ABSTRACT);
			this.state = 509;
			this.match(ElanParser.IMMUTABLE);
			this.state = 510;
			this.match(ElanParser.CLASS);
			this.state = 511;
			this.match(ElanParser.TYPENAME);
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===29) {
				{
				this.state = 512;
				this.inherits();
				}
			}

			this.state = 524;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 522;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 40, this._ctx) ) {
					case 1:
						{
						this.state = 515;
						this.match(ElanParser.NL);
						this.state = 516;
						this.match(ElanParser.ABSTRACT);
						this.state = 517;
						this.property();
						}
						break;
					case 2:
						{
						this.state = 518;
						this.match(ElanParser.NL);
						this.state = 519;
						this.match(ElanParser.ABSTRACT);
						this.state = 520;
						this.match(ElanParser.FUNCTION);
						this.state = 521;
						this.functionSignature();
						}
						break;
					}
					}
				}
				this.state = 526;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
			}
			this.state = 527;
			this.match(ElanParser.NL);
			this.state = 528;
			this.match(ElanParser.END);
			this.state = 529;
			this.match(ElanParser.CLASS);
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
	public inherits(): InheritsContext {
		let localctx: InheritsContext = new InheritsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, ElanParser.RULE_inherits);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 531;
			this.match(ElanParser.INHERITS);
			this.state = 532;
			this.type_();
			this.state = 537;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 533;
				this.match(ElanParser.COMMA);
				this.state = 534;
				this.type_();
				}
				}
				this.state = 539;
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
	public property(): PropertyContext {
		let localctx: PropertyContext = new PropertyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, ElanParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 540;
				this.match(ElanParser.PRIVATE);
				}
			}

			this.state = 543;
			this.match(ElanParser.PROPERTY);
			this.state = 544;
			this.match(ElanParser.IDENTIFIER);
			this.state = 545;
			this.type_();
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
	public constructor_(): ConstructorContext {
		let localctx: ConstructorContext = new ConstructorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, ElanParser.RULE_constructor);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 547;
			this.match(ElanParser.NL);
			this.state = 548;
			this.match(ElanParser.CONSTRUCTOR);
			this.state = 549;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 550;
				this.parameterList();
				}
			}

			this.state = 553;
			this.match(ElanParser.CLOSE_BRACKET);
			this.state = 554;
			this.statementBlock();
			this.state = 555;
			this.match(ElanParser.NL);
			this.state = 556;
			this.match(ElanParser.END);
			this.state = 557;
			this.match(ElanParser.CONSTRUCTOR);
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
	public newInstance(): NewInstanceContext {
		let localctx: NewInstanceContext = new NewInstanceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, ElanParser.RULE_newInstance);
		let _la: number;
		try {
			this.state = 571;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 36:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 559;
				this.match(ElanParser.NEW);
				this.state = 560;
				this.type_();
				this.state = 561;
				this.match(ElanParser.OPEN_BRACKET);
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3238035456) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 2152743449) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 4227990593) !== 0)) {
					{
					this.state = 562;
					this.argumentList();
					}
				}

				this.state = 565;
				this.match(ElanParser.CLOSE_BRACKET);
				this.state = 567;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 566;
					this.withClause();
					}
					break;
				}
				}
				break;
			case 93:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 569;
				this.match(ElanParser.IDENTIFIER);
				this.state = 570;
				this.withClause();
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
	public withClause(): WithClauseContext {
		let localctx: WithClauseContext = new WithClauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, ElanParser.RULE_withClause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 573;
			this.match(ElanParser.WITH);
			this.state = 574;
			this.match(ElanParser.OPEN_BRACE);
			this.state = 575;
			this.inlineAsignment();
			this.state = 580;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 576;
				this.match(ElanParser.COMMA);
				this.state = 577;
				this.inlineAsignment();
				}
				}
				this.state = 582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 583;
			this.match(ElanParser.CLOSE_BRACE);
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
	public proceduralControlFlow(): ProceduralControlFlowContext {
		let localctx: ProceduralControlFlowContext = new ProceduralControlFlowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, ElanParser.RULE_proceduralControlFlow);
		try {
			this.state = 592;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 585;
				this.if_();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 586;
				this.for_();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 587;
				this.each();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 588;
				this.while_();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 589;
				this.repeat();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 590;
				this.try_();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 591;
				this.switch_();
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
	public if_(): IfContext {
		let localctx: IfContext = new IfContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, ElanParser.RULE_if);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 594;
			this.match(ElanParser.NL);
			this.state = 595;
			this.match(ElanParser.IF);
			this.state = 596;
			this.expression(0);
			this.state = 597;
			this.statementBlock();
			this.state = 606;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 598;
					this.match(ElanParser.NL);
					this.state = 599;
					this.match(ElanParser.ELSE);
					this.state = 600;
					this.match(ElanParser.IF);
					this.state = 601;
					this.expression(0);
					this.state = 602;
					this.statementBlock();
					}
					}
				}
				this.state = 608;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 50, this._ctx);
			}
			this.state = 612;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 609;
				this.match(ElanParser.NL);
				this.state = 610;
				this.match(ElanParser.ELSE);
				this.state = 611;
				this.statementBlock();
				}
				break;
			}
			this.state = 614;
			this.match(ElanParser.NL);
			this.state = 615;
			this.match(ElanParser.END);
			this.state = 616;
			this.match(ElanParser.IF);
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
	public for_(): ForContext {
		let localctx: ForContext = new ForContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, ElanParser.RULE_for);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 618;
			this.match(ElanParser.NL);
			this.state = 619;
			this.match(ElanParser.FOR);
			this.state = 620;
			this.match(ElanParser.IDENTIFIER);
			this.state = 621;
			this.match(ElanParser.FROM);
			this.state = 622;
			this.expression(0);
			this.state = 623;
			this.match(ElanParser.TO);
			this.state = 624;
			this.expression(0);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===51) {
				{
				this.state = 625;
				this.match(ElanParser.STEP);
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===83) {
					{
					this.state = 626;
					this.match(ElanParser.MINUS);
					}
				}

				this.state = 629;
				this.match(ElanParser.LITERAL_INTEGER);
				}
			}

			this.state = 632;
			this.statementBlock();
			this.state = 633;
			this.match(ElanParser.NL);
			this.state = 634;
			this.match(ElanParser.END);
			this.state = 635;
			this.match(ElanParser.FOR);
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
	public each(): EachContext {
		let localctx: EachContext = new EachContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, ElanParser.RULE_each);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 637;
			this.match(ElanParser.NL);
			this.state = 638;
			this.match(ElanParser.EACH);
			this.state = 639;
			this.match(ElanParser.IDENTIFIER);
			this.state = 640;
			this.match(ElanParser.IN);
			this.state = 641;
			this.expression(0);
			this.state = 642;
			this.statementBlock();
			this.state = 643;
			this.match(ElanParser.NL);
			this.state = 644;
			this.match(ElanParser.END);
			this.state = 645;
			this.match(ElanParser.EACH);
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
	public while_(): WhileContext {
		let localctx: WhileContext = new WhileContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, ElanParser.RULE_while);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 647;
			this.match(ElanParser.NL);
			this.state = 648;
			this.match(ElanParser.WHILE);
			this.state = 649;
			this.expression(0);
			this.state = 650;
			this.statementBlock();
			this.state = 651;
			this.match(ElanParser.NL);
			this.state = 652;
			this.match(ElanParser.END);
			this.state = 653;
			this.match(ElanParser.WHILE);
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
	public repeat(): RepeatContext {
		let localctx: RepeatContext = new RepeatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, ElanParser.RULE_repeat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 655;
			this.match(ElanParser.NL);
			{
			this.state = 656;
			this.match(ElanParser.REPEAT);
			}
			this.state = 657;
			this.statementBlock();
			this.state = 658;
			this.match(ElanParser.NL);
			this.state = 659;
			this.match(ElanParser.END);
			this.state = 660;
			this.match(ElanParser.REPEAT);
			this.state = 661;
			this.match(ElanParser.WHEN);
			this.state = 662;
			this.expression(0);
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
	public try_(): TryContext {
		let localctx: TryContext = new TryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, ElanParser.RULE_try);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 664;
			this.match(ElanParser.NL);
			this.state = 665;
			this.match(ElanParser.TRY);
			this.state = 666;
			this.statementBlock();
			this.state = 667;
			this.match(ElanParser.NL);
			this.state = 668;
			this.match(ElanParser.CATCH);
			this.state = 669;
			this.match(ElanParser.IDENTIFIER);
			this.state = 670;
			this.statementBlock();
			this.state = 671;
			this.match(ElanParser.NL);
			this.state = 672;
			this.match(ElanParser.END);
			this.state = 673;
			this.match(ElanParser.TRY);
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
	public switch_(): SwitchContext {
		let localctx: SwitchContext = new SwitchContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, ElanParser.RULE_switch);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 675;
			this.match(ElanParser.NL);
			this.state = 676;
			this.match(ElanParser.SWITCH);
			this.state = 677;
			this.expression(0);
			this.state = 679;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 678;
					this.case_();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 681;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 54, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 683;
			this.caseDefault();
			this.state = 684;
			this.match(ElanParser.NL);
			this.state = 685;
			this.match(ElanParser.END);
			this.state = 686;
			this.match(ElanParser.SWITCH);
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
	public case_(): CaseContext {
		let localctx: CaseContext = new CaseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, ElanParser.RULE_case);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 688;
			this.match(ElanParser.NL);
			this.state = 689;
			this.match(ElanParser.CASE);
			this.state = 691;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===83) {
				{
				this.state = 690;
				this.match(ElanParser.MINUS);
				}
			}

			this.state = 693;
			this.literalValue();
			this.state = 694;
			this.statementBlock();
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
	public caseDefault(): CaseDefaultContext {
		let localctx: CaseDefaultContext = new CaseDefaultContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, ElanParser.RULE_caseDefault);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 696;
			this.match(ElanParser.NL);
			this.state = 697;
			this.match(ElanParser.DEFAULT);
			this.state = 698;
			this.statementBlock();
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

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 106;
		this.enterRecursionRule(localctx, 106, ElanParser.RULE_expression, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 710;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 701;
				this.bracketedExpression();
				}
				break;
			case 2:
				{
				this.state = 702;
				this.functionCall();
				}
				break;
			case 3:
				{
				this.state = 703;
				this.value();
				}
				break;
			case 4:
				{
				this.state = 704;
				this.unaryOp();
				this.state = 705;
				this.expression(8);
				}
				break;
			case 5:
				{
				this.state = 707;
				this.newInstance();
				}
				break;
			case 6:
				{
				this.state = 708;
				this.input();
				}
				break;
			case 7:
				{
				this.state = 709;
				this.systemCall();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 735;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 733;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
					case 1:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ElanParser.RULE_expression);
						this.state = 712;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 713;
						this.match(ElanParser.POWER);
						this.state = 714;
						this.expression(8);
						}
						break;
					case 2:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ElanParser.RULE_expression);
						this.state = 715;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 716;
						this.binaryOp();
						this.state = 717;
						this.expression(7);
						}
						break;
					case 3:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ElanParser.RULE_expression);
						this.state = 719;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 720;
						this.index();
						}
						break;
					case 4:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ElanParser.RULE_expression);
						this.state = 721;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 722;
						this.match(ElanParser.DOT);
						this.state = 723;
						this.functionCall();
						}
						break;
					case 5:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ElanParser.RULE_expression);
						this.state = 724;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 725;
						this.match(ElanParser.DOT);
						this.state = 726;
						this.match(ElanParser.IDENTIFIER);
						}
						break;
					case 6:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ElanParser.RULE_expression);
						this.state = 727;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 728;
						this.ifExpression();
						this.state = 729;
						this.elseExpression();
						}
						break;
					case 7:
						{
						localctx = new ExpressionContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, ElanParser.RULE_expression);
						this.state = 731;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 732;
						this.withClause();
						}
						break;
					}
					}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 58, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bracketedExpression(): BracketedExpressionContext {
		let localctx: BracketedExpressionContext = new BracketedExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, ElanParser.RULE_bracketedExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 738;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 739;
			this.expression(0);
			this.state = 740;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public ifExpression(): IfExpressionContext {
		let localctx: IfExpressionContext = new IfExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, ElanParser.RULE_ifExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 742;
			this.match(ElanParser.IF);
			this.state = 743;
			this.expression(0);
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
	public elseExpression(): ElseExpressionContext {
		let localctx: ElseExpressionContext = new ElseExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, ElanParser.RULE_elseExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 745;
			this.match(ElanParser.ELSE);
			this.state = 746;
			this.expression(0);
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
	public lambda(): LambdaContext {
		let localctx: LambdaContext = new LambdaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, ElanParser.RULE_lambda);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 748;
			this.match(ElanParser.LAMBDA);
			this.state = 749;
			this.argumentList();
			this.state = 750;
			this.match(ElanParser.ARROW);
			this.state = 751;
			this.expression(0);
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
	public index(): IndexContext {
		let localctx: IndexContext = new IndexContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, ElanParser.RULE_index);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 753;
			this.match(ElanParser.OPEN_SQ_BRACKET);
			this.state = 760;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 59, this._ctx) ) {
			case 1:
				{
				this.state = 754;
				this.expression(0);
				}
				break;
			case 2:
				{
				this.state = 755;
				this.expression(0);
				this.state = 756;
				this.match(ElanParser.COMMA);
				this.state = 757;
				this.expression(0);
				}
				break;
			case 3:
				{
				this.state = 759;
				this.range();
				}
				break;
			}
			this.state = 762;
			this.match(ElanParser.CLOSE_SQ_BRACKET);
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
	public range(): RangeContext {
		let localctx: RangeContext = new RangeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, ElanParser.RULE_range);
		try {
			this.state = 773;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 764;
				this.expression(0);
				this.state = 765;
				this.match(ElanParser.DOUBLE_DOT);
				this.state = 766;
				this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 768;
				this.expression(0);
				this.state = 769;
				this.match(ElanParser.DOUBLE_DOT);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 771;
				this.match(ElanParser.DOUBLE_DOT);
				this.state = 772;
				this.expression(0);
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
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, ElanParser.RULE_value);
		let _la: number;
		try {
			this.state = 784;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 775;
				this.literal();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 777;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 8651265) !== 0)) {
					{
					this.state = 776;
					this.scopeQualifier();
					}
				}

				this.state = 779;
				this.match(ElanParser.IDENTIFIER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 780;
				this.dataStructureDefinition();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 781;
				this.match(ElanParser.THIS);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 782;
				this.match(ElanParser.DEFAULT);
				this.state = 783;
				this.type_();
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
	public scopeQualifier(): ScopeQualifierContext {
		let localctx: ScopeQualifierContext = new ScopeQualifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, ElanParser.RULE_scopeQualifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 792;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				{
				this.state = 786;
				this.match(ElanParser.PROPERTY);
				}
				break;
			case 24:
				{
				this.state = 787;
				this.match(ElanParser.GLOBAL);
				}
				break;
			case 33:
				{
				this.state = 788;
				this.match(ElanParser.LIBRARY);
				}
				break;
			case 42:
				{
				{
				this.state = 789;
				this.match(ElanParser.PACKAGE);
				this.state = 790;
				this.match(ElanParser.DOT);
				this.state = 791;
				this.namespace();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 794;
			this.match(ElanParser.DOT);
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
	public literal(): LiteralContext {
		let localctx: LiteralContext = new LiteralContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, ElanParser.RULE_literal);
		try {
			this.state = 798;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 64:
			case 92:
			case 94:
			case 95:
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 796;
				this.literalValue();
				}
				break;
			case 72:
			case 76:
			case 97:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 797;
				this.literalDataStructure();
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
	public literalValue(): LiteralValueContext {
		let localctx: LiteralValueContext = new LiteralValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, ElanParser.RULE_literalValue);
		try {
			this.state = 805;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 64:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 800;
				this.match(ElanParser.BOOL_VALUE);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 801;
				this.match(ElanParser.LITERAL_INTEGER);
				}
				break;
			case 95:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 802;
				this.match(ElanParser.LITERAL_FLOAT);
				}
				break;
			case 96:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 803;
				this.match(ElanParser.LITERAL_CHAR);
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 804;
				this.enumValue();
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
	public dataStructureDefinition(): DataStructureDefinitionContext {
		let localctx: DataStructureDefinitionContext = new DataStructureDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, ElanParser.RULE_dataStructureDefinition);
		try {
			this.state = 811;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 807;
				this.listDefinition();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 808;
				this.arrayDefinition();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 809;
				this.tupleDefinition();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 810;
				this.dictionaryDefinition();
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
	public literalDataStructure(): LiteralDataStructureContext {
		let localctx: LiteralDataStructureContext = new LiteralDataStructureContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, ElanParser.RULE_literalDataStructure);
		try {
			this.state = 817;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 813;
				this.match(ElanParser.LITERAL_STRING);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 814;
				this.literalTuple();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 815;
				this.literalList();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 816;
				this.literalDictionary();
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
	public tupleDefinition(): TupleDefinitionContext {
		let localctx: TupleDefinitionContext = new TupleDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, ElanParser.RULE_tupleDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 820;
			this.expression(0);
			this.state = 821;
			this.match(ElanParser.COMMA);
			this.state = 822;
			this.expression(0);
			this.state = 827;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 823;
				this.match(ElanParser.COMMA);
				this.state = 824;
				this.expression(0);
				}
				}
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 830;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public literalTuple(): LiteralTupleContext {
		let localctx: LiteralTupleContext = new LiteralTupleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, ElanParser.RULE_literalTuple);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 832;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 833;
			this.literal();
			this.state = 834;
			this.match(ElanParser.COMMA);
			this.state = 835;
			this.literal();
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 836;
				this.match(ElanParser.COMMA);
				this.state = 837;
				this.literal();
				}
				}
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 843;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public deconstructedTuple(): DeconstructedTupleContext {
		let localctx: DeconstructedTupleContext = new DeconstructedTupleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, ElanParser.RULE_deconstructedTuple);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 845;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 846;
			this.match(ElanParser.IDENTIFIER);
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 847;
				this.match(ElanParser.COMMA);
				this.state = 848;
				this.match(ElanParser.IDENTIFIER);
				}
				}
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===80);
			this.state = 853;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public listDefinition(): ListDefinitionContext {
		let localctx: ListDefinitionContext = new ListDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, ElanParser.RULE_listDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 855;
			this.match(ElanParser.OPEN_BRACE);
			{
			this.state = 856;
			this.expression(0);
			this.state = 861;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 857;
				this.match(ElanParser.COMMA);
				this.state = 858;
				this.expression(0);
				}
				}
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 864;
			this.match(ElanParser.CLOSE_BRACE);
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
	public literalList(): LiteralListContext {
		let localctx: LiteralListContext = new LiteralListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, ElanParser.RULE_literalList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 866;
			this.match(ElanParser.OPEN_BRACE);
			{
			this.state = 867;
			this.literal();
			this.state = 872;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 868;
				this.match(ElanParser.COMMA);
				this.state = 869;
				this.literal();
				}
				}
				this.state = 874;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 875;
			this.match(ElanParser.CLOSE_BRACE);
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
	public listDecomp(): ListDecompContext {
		let localctx: ListDecompContext = new ListDecompContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, ElanParser.RULE_listDecomp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 877;
			this.match(ElanParser.OPEN_BRACE);
			this.state = 878;
			this.match(ElanParser.IDENTIFIER);
			this.state = 879;
			this.match(ElanParser.COLON);
			this.state = 880;
			this.match(ElanParser.IDENTIFIER);
			this.state = 881;
			this.match(ElanParser.CLOSE_BRACE);
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
	public arrayDefinition(): ArrayDefinitionContext {
		let localctx: ArrayDefinitionContext = new ArrayDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, ElanParser.RULE_arrayDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 883;
			this.match(ElanParser.ARRAY);
			this.state = 884;
			this.genericSpecifier();
			this.state = 885;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 887;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===94) {
				{
				this.state = 886;
				this.match(ElanParser.LITERAL_INTEGER);
				}
			}

			this.state = 889;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public dictionaryDefinition(): DictionaryDefinitionContext {
		let localctx: DictionaryDefinitionContext = new DictionaryDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, ElanParser.RULE_dictionaryDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 891;
			this.match(ElanParser.OPEN_BRACE);
			{
			this.state = 892;
			this.kvp();
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 893;
				this.match(ElanParser.COMMA);
				this.state = 894;
				this.kvp();
				}
				}
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 900;
			this.match(ElanParser.CLOSE_BRACE);
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
	public literalDictionary(): LiteralDictionaryContext {
		let localctx: LiteralDictionaryContext = new LiteralDictionaryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, ElanParser.RULE_literalDictionary);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 902;
			this.match(ElanParser.OPEN_BRACE);
			{
			this.state = 903;
			this.literalKvp();
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 904;
				this.match(ElanParser.COMMA);
				this.state = 905;
				this.literalKvp();
				}
				}
				this.state = 910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
			this.state = 911;
			this.match(ElanParser.CLOSE_BRACE);
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
	public kvp(): KvpContext {
		let localctx: KvpContext = new KvpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, ElanParser.RULE_kvp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			this.expression(0);
			this.state = 914;
			this.match(ElanParser.COLON);
			this.state = 915;
			this.expression(0);
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
	public literalKvp(): LiteralKvpContext {
		let localctx: LiteralKvpContext = new LiteralKvpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 152, ElanParser.RULE_literalKvp);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 917;
			this.literal();
			this.state = 918;
			this.match(ElanParser.COLON);
			this.state = 919;
			this.literal();
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
	public unaryOp(): UnaryOpContext {
		let localctx: UnaryOpContext = new UnaryOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, ElanParser.RULE_unaryOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 921;
			_la = this._input.LA(1);
			if(!(_la===37 || _la===83)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public binaryOp(): BinaryOpContext {
		let localctx: BinaryOpContext = new BinaryOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, ElanParser.RULE_binaryOp);
		try {
			this.state = 926;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 16:
			case 35:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 923;
				this.arithmeticOp();
				}
				break;
			case 5:
			case 40:
			case 63:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 924;
				this.logicalOp();
				}
				break;
			case 39:
			case 87:
			case 88:
			case 89:
			case 90:
			case 91:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 925;
				this.conditionalOp();
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
	public arithmeticOp(): ArithmeticOpContext {
		let localctx: ArithmeticOpContext = new ArithmeticOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, ElanParser.RULE_arithmeticOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 928;
			_la = this._input.LA(1);
			if(!(_la===16 || _la===35 || ((((_la - 82)) & ~0x1F) === 0 && ((1 << (_la - 82)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public logicalOp(): LogicalOpContext {
		let localctx: LogicalOpContext = new LogicalOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, ElanParser.RULE_logicalOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 930;
			_la = this._input.LA(1);
			if(!(_la===5 || _la===40 || _la===63)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public conditionalOp(): ConditionalOpContext {
		let localctx: ConditionalOpContext = new ConditionalOpContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, ElanParser.RULE_conditionalOp);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 932;
			_la = this._input.LA(1);
			if(!(_la===39 || ((((_la - 87)) & ~0x1F) === 0 && ((1 << (_la - 87)) & 31) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
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
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, ElanParser.RULE_type);
		try {
			this.state = 941;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 934;
				this.match(ElanParser.VALUE_TYPE);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 935;
				this.dataStructureType();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 936;
				this.match(ElanParser.TYPENAME);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 937;
				this.match(ElanParser.TYPENAME);
				this.state = 938;
				this.genericSpecifier();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 939;
				this.tupleType();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 940;
				this.funcType();
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
	public dataStructureType(): DataStructureTypeContext {
		let localctx: DataStructureTypeContext = new DataStructureTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, ElanParser.RULE_dataStructureType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 943;
			_la = this._input.LA(1);
			if(!(((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 944;
			this.genericSpecifier();
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
	public genericSpecifier(): GenericSpecifierContext {
		let localctx: GenericSpecifierContext = new GenericSpecifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, ElanParser.RULE_genericSpecifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 946;
			this.match(ElanParser.LT);
			this.state = 947;
			this.match(ElanParser.OF);
			this.state = 948;
			this.type_();
			this.state = 953;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 949;
				this.match(ElanParser.COMMA);
				this.state = 950;
				this.type_();
				}
				}
				this.state = 955;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 956;
			this.match(ElanParser.GT);
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
	public tupleType(): TupleTypeContext {
		let localctx: TupleTypeContext = new TupleTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, ElanParser.RULE_tupleType);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 958;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 959;
			this.type_();
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 960;
				this.match(ElanParser.COMMA);
				this.state = 961;
				this.type_();
				}
				}
				this.state = 964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la===80);
			this.state = 966;
			this.match(ElanParser.CLOSE_BRACKET);
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
	public typeList(): TypeListContext {
		let localctx: TypeListContext = new TypeListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, ElanParser.RULE_typeList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 968;
			this.type_();
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 969;
				this.match(ElanParser.COMMA);
				this.state = 970;
				this.type_();
				}
				}
				this.state = 975;
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
	public funcType(): FuncTypeContext {
		let localctx: FuncTypeContext = new FuncTypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, ElanParser.RULE_funcType);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 976;
			this.match(ElanParser.OPEN_BRACKET);
			this.state = 977;
			this.typeList();
			this.state = 978;
			this.match(ElanParser.ARROW);
			this.state = 979;
			this.type_();
			this.state = 980;
			this.match(ElanParser.CLOSE_BRACKET);
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 53:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 7);
		case 1:
			return this.precpred(this._ctx, 6);
		case 2:
			return this.precpred(this._ctx, 11);
		case 3:
			return this.precpred(this._ctx, 10);
		case 4:
			return this.precpred(this._ctx, 9);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,100,983,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,1,0,1,0,1,0,1,0,
	1,0,1,0,1,0,1,0,5,0,185,8,0,10,0,12,0,188,9,0,1,0,5,0,191,8,0,10,0,12,0,
	194,9,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,5,2,204,8,2,10,2,12,2,207,9,2,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,
	5,1,5,1,5,5,5,230,8,5,10,5,12,5,233,9,5,1,6,1,6,1,6,5,6,238,8,6,10,6,12,
	6,241,9,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,256,8,
	8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,3,10,265,8,10,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,3,
	14,286,8,14,1,14,1,14,3,14,290,8,14,1,14,1,14,3,14,294,8,14,1,15,3,15,297,
	8,15,1,15,1,15,1,15,3,15,302,8,15,1,15,1,15,1,16,3,16,307,8,16,1,16,1,16,
	1,16,3,16,312,8,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,3,17,321,8,17,1,17,
	1,17,1,18,1,18,3,18,327,8,18,1,19,1,19,3,19,331,8,19,1,20,1,20,1,20,5,20,
	336,8,20,10,20,12,20,339,9,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
	22,1,22,1,22,3,22,352,8,22,1,22,1,22,1,23,1,23,1,23,5,23,359,8,23,10,23,
	12,23,362,9,23,1,24,1,24,1,24,5,24,367,8,24,10,24,12,24,370,9,24,1,25,1,
	25,1,25,1,26,3,26,376,8,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,
	1,27,1,27,3,27,389,8,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,3,28,398,8,28,
	1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,411,8,29,1,
	30,1,30,1,30,1,30,1,30,1,30,1,30,5,30,420,8,30,10,30,12,30,423,9,30,1,30,
	1,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,33,3,33,439,
	8,33,1,34,1,34,1,34,1,34,3,34,445,8,34,1,34,1,34,1,34,1,34,1,34,5,34,452,
	8,34,10,34,12,34,455,9,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,
	3,35,466,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,
	35,479,8,35,10,35,12,35,482,9,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,
	1,36,3,36,493,8,36,1,36,1,36,1,36,1,36,5,36,499,8,36,10,36,12,36,502,9,
	36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,3,37,514,8,37,1,37,
	1,37,1,37,1,37,1,37,1,37,1,37,5,37,523,8,37,10,37,12,37,526,9,37,1,37,1,
	37,1,37,1,37,1,38,1,38,1,38,1,38,5,38,536,8,38,10,38,12,38,539,9,38,1,39,
	3,39,542,8,39,1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,3,40,552,8,40,1,40,
	1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,3,41,564,8,41,1,41,1,41,3,
	41,568,8,41,1,41,1,41,3,41,572,8,41,1,42,1,42,1,42,1,42,1,42,5,42,579,8,
	42,10,42,12,42,582,9,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,
	43,593,8,43,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,605,
	8,44,10,44,12,44,608,9,44,1,44,1,44,1,44,3,44,613,8,44,1,44,1,44,1,44,1,
	44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,628,8,45,1,45,3,45,
	631,8,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,
	46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,
	1,48,1,48,1,48,1,48,1,48,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,1,50,1,50,1,50,1,50,4,50,680,8,50,11,50,12,50,681,1,50,1,50,1,50,
	1,50,1,50,1,51,1,51,1,51,3,51,692,8,51,1,51,1,51,1,51,1,52,1,52,1,52,1,
	52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,711,8,53,1,53,
	1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,
	53,1,53,1,53,1,53,1,53,1,53,5,53,734,8,53,10,53,12,53,737,9,53,1,54,1,54,
	1,54,1,54,1,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,58,1,
	58,1,58,1,58,1,58,1,58,1,58,3,58,761,8,58,1,58,1,58,1,59,1,59,1,59,1,59,
	1,59,1,59,1,59,1,59,1,59,3,59,774,8,59,1,60,1,60,3,60,778,8,60,1,60,1,60,
	1,60,1,60,1,60,3,60,785,8,60,1,61,1,61,1,61,1,61,1,61,1,61,3,61,793,8,61,
	1,61,1,61,1,62,1,62,3,62,799,8,62,1,63,1,63,1,63,1,63,1,63,3,63,806,8,63,
	1,64,1,64,1,64,1,64,3,64,812,8,64,1,65,1,65,1,65,1,65,3,65,818,8,65,1,66,
	1,66,1,66,1,66,1,66,1,66,5,66,826,8,66,10,66,12,66,829,9,66,1,66,1,66,1,
	67,1,67,1,67,1,67,1,67,1,67,5,67,839,8,67,10,67,12,67,842,9,67,1,67,1,67,
	1,68,1,68,1,68,1,68,4,68,850,8,68,11,68,12,68,851,1,68,1,68,1,69,1,69,1,
	69,1,69,5,69,860,8,69,10,69,12,69,863,9,69,1,69,1,69,1,70,1,70,1,70,1,70,
	5,70,871,8,70,10,70,12,70,874,9,70,1,70,1,70,1,71,1,71,1,71,1,71,1,71,1,
	71,1,72,1,72,1,72,1,72,3,72,888,8,72,1,72,1,72,1,73,1,73,1,73,1,73,5,73,
	896,8,73,10,73,12,73,899,9,73,1,73,1,73,1,74,1,74,1,74,1,74,5,74,907,8,
	74,10,74,12,74,910,9,74,1,74,1,74,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,
	76,1,77,1,77,1,78,1,78,1,78,3,78,927,8,78,1,79,1,79,1,80,1,80,1,81,1,81,
	1,82,1,82,1,82,1,82,1,82,1,82,1,82,3,82,942,8,82,1,83,1,83,1,83,1,84,1,
	84,1,84,1,84,1,84,5,84,952,8,84,10,84,12,84,955,9,84,1,84,1,84,1,85,1,85,
	1,85,1,85,4,85,963,8,85,11,85,12,85,964,1,85,1,85,1,86,1,86,1,86,5,86,972,
	8,86,10,86,12,86,975,9,86,1,87,1,87,1,87,1,87,1,87,1,87,1,87,0,1,106,88,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,
	52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,
	100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,
	136,138,140,142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,
	172,174,0,7,1,0,92,93,2,0,93,93,97,97,2,0,37,37,83,83,3,0,16,16,35,35,82,
	86,3,0,5,5,40,40,63,63,2,0,39,39,87,91,1,0,66,69,1025,0,186,1,0,0,0,2,197,
	1,0,0,0,4,200,1,0,0,0,6,208,1,0,0,0,8,215,1,0,0,0,10,231,1,0,0,0,12,239,
	1,0,0,0,14,242,1,0,0,0,16,248,1,0,0,0,18,257,1,0,0,0,20,261,1,0,0,0,22,
	266,1,0,0,0,24,273,1,0,0,0,26,279,1,0,0,0,28,293,1,0,0,0,30,296,1,0,0,0,
	32,306,1,0,0,0,34,315,1,0,0,0,36,324,1,0,0,0,38,330,1,0,0,0,40,332,1,0,
	0,0,42,340,1,0,0,0,44,348,1,0,0,0,46,355,1,0,0,0,48,363,1,0,0,0,50,371,
	1,0,0,0,52,375,1,0,0,0,54,380,1,0,0,0,56,394,1,0,0,0,58,403,1,0,0,0,60,
	412,1,0,0,0,62,428,1,0,0,0,64,430,1,0,0,0,66,438,1,0,0,0,68,440,1,0,0,0,
	70,460,1,0,0,0,72,487,1,0,0,0,74,507,1,0,0,0,76,531,1,0,0,0,78,541,1,0,
	0,0,80,547,1,0,0,0,82,571,1,0,0,0,84,573,1,0,0,0,86,592,1,0,0,0,88,594,
	1,0,0,0,90,618,1,0,0,0,92,637,1,0,0,0,94,647,1,0,0,0,96,655,1,0,0,0,98,
	664,1,0,0,0,100,675,1,0,0,0,102,688,1,0,0,0,104,696,1,0,0,0,106,710,1,0,
	0,0,108,738,1,0,0,0,110,742,1,0,0,0,112,745,1,0,0,0,114,748,1,0,0,0,116,
	753,1,0,0,0,118,773,1,0,0,0,120,784,1,0,0,0,122,792,1,0,0,0,124,798,1,0,
	0,0,126,805,1,0,0,0,128,811,1,0,0,0,130,817,1,0,0,0,132,819,1,0,0,0,134,
	832,1,0,0,0,136,845,1,0,0,0,138,855,1,0,0,0,140,866,1,0,0,0,142,877,1,0,
	0,0,144,883,1,0,0,0,146,891,1,0,0,0,148,902,1,0,0,0,150,913,1,0,0,0,152,
	917,1,0,0,0,154,921,1,0,0,0,156,926,1,0,0,0,158,928,1,0,0,0,160,930,1,0,
	0,0,162,932,1,0,0,0,164,941,1,0,0,0,166,943,1,0,0,0,168,946,1,0,0,0,170,
	958,1,0,0,0,172,968,1,0,0,0,174,976,1,0,0,0,176,185,3,6,3,0,177,185,3,42,
	21,0,178,185,3,54,27,0,179,185,3,58,29,0,180,185,3,60,30,0,181,185,3,66,
	33,0,182,185,3,8,4,0,183,185,3,2,1,0,184,176,1,0,0,0,184,177,1,0,0,0,184,
	178,1,0,0,0,184,179,1,0,0,0,184,180,1,0,0,0,184,181,1,0,0,0,184,182,1,0,
	0,0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,
	192,1,0,0,0,188,186,1,0,0,0,189,191,5,1,0,0,190,189,1,0,0,0,191,194,1,0,
	0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,195,1,0,0,0,194,192,1,0,0,0,195,
	196,5,0,0,1,196,1,1,0,0,0,197,198,5,27,0,0,198,199,3,4,2,0,199,3,1,0,0,
	0,200,205,7,0,0,0,201,202,5,79,0,0,202,204,7,0,0,0,203,201,1,0,0,0,204,
	207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,5,1,0,0,0,207,205,1,0,0,
	0,208,209,5,1,0,0,209,210,5,34,0,0,210,211,3,10,5,0,211,212,5,1,0,0,212,
	213,5,19,0,0,213,214,5,34,0,0,214,7,1,0,0,0,215,216,5,1,0,0,216,217,5,54,
	0,0,217,218,5,93,0,0,218,219,3,12,6,0,219,220,5,1,0,0,220,221,5,19,0,0,
	221,222,5,54,0,0,222,9,1,0,0,0,223,230,3,22,11,0,224,230,3,24,12,0,225,
	230,3,86,43,0,226,230,3,16,8,0,227,230,3,18,9,0,228,230,3,20,10,0,229,223,
	1,0,0,0,229,224,1,0,0,0,229,225,1,0,0,0,229,226,1,0,0,0,229,227,1,0,0,0,
	229,228,1,0,0,0,230,233,1,0,0,0,231,229,1,0,0,0,231,232,1,0,0,0,232,11,
	1,0,0,0,233,231,1,0,0,0,234,238,3,14,7,0,235,238,3,22,11,0,236,238,3,16,
	8,0,237,234,1,0,0,0,237,235,1,0,0,0,237,236,1,0,0,0,238,241,1,0,0,0,239,
	237,1,0,0,0,239,240,1,0,0,0,240,13,1,0,0,0,241,239,1,0,0,0,242,243,5,1,
	0,0,243,244,5,7,0,0,244,245,3,106,53,0,245,246,5,39,0,0,246,247,3,120,60,
	0,247,15,1,0,0,0,248,249,5,1,0,0,249,255,5,8,0,0,250,256,3,30,15,0,251,
	252,3,28,14,0,252,253,5,79,0,0,253,254,3,30,15,0,254,256,1,0,0,0,255,250,
	1,0,0,0,255,251,1,0,0,0,256,17,1,0,0,0,257,258,5,1,0,0,258,259,5,56,0,0,
	259,260,7,1,0,0,260,19,1,0,0,0,261,262,5,1,0,0,262,264,5,44,0,0,263,265,
	3,106,53,0,264,263,1,0,0,0,264,265,1,0,0,0,265,21,1,0,0,0,266,267,5,1,0,
	0,267,268,5,59,0,0,268,269,3,28,14,0,269,270,5,50,0,0,270,271,5,57,0,0,
	271,272,3,106,53,0,272,23,1,0,0,0,273,274,5,1,0,0,274,275,5,50,0,0,275,
	276,3,28,14,0,276,277,5,57,0,0,277,278,3,106,53,0,278,25,1,0,0,0,279,280,
	3,28,14,0,280,281,5,50,0,0,281,282,5,57,0,0,282,283,3,106,53,0,283,27,1,
	0,0,0,284,286,3,122,61,0,285,284,1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,
	0,287,289,5,93,0,0,288,290,3,116,58,0,289,288,1,0,0,0,289,290,1,0,0,0,290,
	294,1,0,0,0,291,294,3,136,68,0,292,294,3,142,71,0,293,285,1,0,0,0,293,291,
	1,0,0,0,293,292,1,0,0,0,294,29,1,0,0,0,295,297,3,122,61,0,296,295,1,0,0,
	0,296,297,1,0,0,0,297,298,1,0,0,0,298,299,5,93,0,0,299,301,5,76,0,0,300,
	302,3,40,20,0,301,300,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,304,5,
	77,0,0,304,31,1,0,0,0,305,307,3,122,61,0,306,305,1,0,0,0,306,307,1,0,0,
	0,307,308,1,0,0,0,308,309,5,93,0,0,309,311,5,76,0,0,310,312,3,40,20,0,311,
	310,1,0,0,0,311,312,1,0,0,0,312,313,1,0,0,0,313,314,5,77,0,0,314,33,1,0,
	0,0,315,316,5,53,0,0,316,317,5,79,0,0,317,318,5,93,0,0,318,320,5,76,0,0,
	319,321,3,40,20,0,320,319,1,0,0,0,320,321,1,0,0,0,321,322,1,0,0,0,322,323,
	5,77,0,0,323,35,1,0,0,0,324,326,5,30,0,0,325,327,5,97,0,0,326,325,1,0,0,
	0,326,327,1,0,0,0,327,37,1,0,0,0,328,331,3,106,53,0,329,331,3,114,57,0,
	330,328,1,0,0,0,330,329,1,0,0,0,331,39,1,0,0,0,332,337,3,38,19,0,333,334,
	5,80,0,0,334,336,3,38,19,0,335,333,1,0,0,0,336,339,1,0,0,0,337,335,1,0,
	0,0,337,338,1,0,0,0,338,41,1,0,0,0,339,337,1,0,0,0,340,341,5,1,0,0,341,
	342,5,46,0,0,342,343,3,44,22,0,343,344,3,10,5,0,344,345,5,1,0,0,345,346,
	5,19,0,0,346,347,5,46,0,0,347,43,1,0,0,0,348,349,5,93,0,0,349,351,5,76,
	0,0,350,352,3,46,23,0,351,350,1,0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,
	354,5,77,0,0,354,45,1,0,0,0,355,360,3,52,26,0,356,357,5,80,0,0,357,359,
	3,52,26,0,358,356,1,0,0,0,359,362,1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,
	0,361,47,1,0,0,0,362,360,1,0,0,0,363,368,3,50,25,0,364,365,5,80,0,0,365,
	367,3,50,25,0,366,364,1,0,0,0,367,370,1,0,0,0,368,366,1,0,0,0,368,369,1,
	0,0,0,369,49,1,0,0,0,370,368,1,0,0,0,371,372,5,93,0,0,372,373,3,164,82,
	0,373,51,1,0,0,0,374,376,5,41,0,0,375,374,1,0,0,0,375,376,1,0,0,0,376,377,
	1,0,0,0,377,378,5,93,0,0,378,379,3,164,82,0,379,53,1,0,0,0,380,381,5,1,
	0,0,381,382,5,23,0,0,382,383,3,56,28,0,383,384,3,10,5,0,384,385,5,1,0,0,
	385,388,5,49,0,0,386,389,3,106,53,0,387,389,5,15,0,0,388,386,1,0,0,0,388,
	387,1,0,0,0,389,390,1,0,0,0,390,391,5,1,0,0,391,392,5,19,0,0,392,393,5,
	23,0,0,393,55,1,0,0,0,394,395,5,93,0,0,395,397,5,76,0,0,396,398,3,48,24,
	0,397,396,1,0,0,0,397,398,1,0,0,0,398,399,1,0,0,0,399,400,5,77,0,0,400,
	401,5,6,0,0,401,402,3,164,82,0,402,57,1,0,0,0,403,404,5,1,0,0,404,405,5,
	12,0,0,405,406,5,93,0,0,406,407,5,50,0,0,407,410,5,57,0,0,408,411,3,124,
	62,0,409,411,3,82,41,0,410,408,1,0,0,0,410,409,1,0,0,0,411,59,1,0,0,0,412,
	413,5,1,0,0,413,414,5,20,0,0,414,415,3,62,31,0,415,416,5,1,0,0,416,421,
	5,93,0,0,417,418,5,80,0,0,418,420,5,93,0,0,419,417,1,0,0,0,420,423,1,0,
	0,0,421,419,1,0,0,0,421,422,1,0,0,0,422,424,1,0,0,0,423,421,1,0,0,0,424,
	425,5,1,0,0,425,426,5,19,0,0,426,427,5,20,0,0,427,61,1,0,0,0,428,429,5,
	92,0,0,429,63,1,0,0,0,430,431,3,62,31,0,431,432,5,79,0,0,432,433,5,93,0,
	0,433,65,1,0,0,0,434,439,3,68,34,0,435,439,3,70,35,0,436,439,3,72,36,0,
	437,439,3,74,37,0,438,434,1,0,0,0,438,435,1,0,0,0,438,436,1,0,0,0,438,437,
	1,0,0,0,439,67,1,0,0,0,440,441,5,1,0,0,441,442,5,11,0,0,442,444,5,92,0,
	0,443,445,3,76,38,0,444,443,1,0,0,0,444,445,1,0,0,0,445,446,1,0,0,0,446,
	453,3,80,40,0,447,448,5,1,0,0,448,452,3,78,39,0,449,452,3,54,27,0,450,452,
	3,42,21,0,451,447,1,0,0,0,451,449,1,0,0,0,451,450,1,0,0,0,452,455,1,0,0,
	0,453,451,1,0,0,0,453,454,1,0,0,0,454,456,1,0,0,0,455,453,1,0,0,0,456,457,
	5,1,0,0,457,458,5,19,0,0,458,459,5,11,0,0,459,69,1,0,0,0,460,461,5,1,0,
	0,461,462,5,4,0,0,462,463,5,11,0,0,463,465,5,92,0,0,464,466,3,76,38,0,465,
	464,1,0,0,0,465,466,1,0,0,0,466,480,1,0,0,0,467,468,5,1,0,0,468,469,5,4,
	0,0,469,479,3,78,39,0,470,471,5,1,0,0,471,472,5,4,0,0,472,473,5,23,0,0,
	473,479,3,56,28,0,474,475,5,1,0,0,475,476,5,4,0,0,476,477,5,46,0,0,477,
	479,3,44,22,0,478,467,1,0,0,0,478,470,1,0,0,0,478,474,1,0,0,0,479,482,1,
	0,0,0,480,478,1,0,0,0,480,481,1,0,0,0,481,483,1,0,0,0,482,480,1,0,0,0,483,
	484,5,1,0,0,484,485,5,19,0,0,485,486,5,11,0,0,486,71,1,0,0,0,487,488,5,
	1,0,0,488,489,5,26,0,0,489,490,5,11,0,0,490,492,5,92,0,0,491,493,3,76,38,
	0,492,491,1,0,0,0,492,493,1,0,0,0,493,494,1,0,0,0,494,500,3,80,40,0,495,
	496,5,1,0,0,496,499,3,78,39,0,497,499,3,54,27,0,498,495,1,0,0,0,498,497,
	1,0,0,0,499,502,1,0,0,0,500,498,1,0,0,0,500,501,1,0,0,0,501,503,1,0,0,0,
	502,500,1,0,0,0,503,504,5,1,0,0,504,505,5,19,0,0,505,506,5,11,0,0,506,73,
	1,0,0,0,507,508,5,1,0,0,508,509,5,4,0,0,509,510,5,26,0,0,510,511,5,11,0,
	0,511,513,5,92,0,0,512,514,3,76,38,0,513,512,1,0,0,0,513,514,1,0,0,0,514,
	524,1,0,0,0,515,516,5,1,0,0,516,517,5,4,0,0,517,523,3,78,39,0,518,519,5,
	1,0,0,519,520,5,4,0,0,520,521,5,23,0,0,521,523,3,56,28,0,522,515,1,0,0,
	0,522,518,1,0,0,0,523,526,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,527,
	1,0,0,0,526,524,1,0,0,0,527,528,5,1,0,0,528,529,5,19,0,0,529,530,5,11,0,
	0,530,75,1,0,0,0,531,532,5,29,0,0,532,537,3,164,82,0,533,534,5,80,0,0,534,
	536,3,164,82,0,535,533,1,0,0,0,536,539,1,0,0,0,537,535,1,0,0,0,537,538,
	1,0,0,0,538,77,1,0,0,0,539,537,1,0,0,0,540,542,5,45,0,0,541,540,1,0,0,0,
	541,542,1,0,0,0,542,543,1,0,0,0,543,544,5,47,0,0,544,545,5,93,0,0,545,546,
	3,164,82,0,546,79,1,0,0,0,547,548,5,1,0,0,548,549,5,13,0,0,549,551,5,76,
	0,0,550,552,3,48,24,0,551,550,1,0,0,0,551,552,1,0,0,0,552,553,1,0,0,0,553,
	554,5,77,0,0,554,555,3,10,5,0,555,556,5,1,0,0,556,557,5,19,0,0,557,558,
	5,13,0,0,558,81,1,0,0,0,559,560,5,36,0,0,560,561,3,164,82,0,561,563,5,76,
	0,0,562,564,3,40,20,0,563,562,1,0,0,0,563,564,1,0,0,0,564,565,1,0,0,0,565,
	567,5,77,0,0,566,568,3,84,42,0,567,566,1,0,0,0,567,568,1,0,0,0,568,572,
	1,0,0,0,569,570,5,93,0,0,570,572,3,84,42,0,571,559,1,0,0,0,571,569,1,0,
	0,0,572,83,1,0,0,0,573,574,5,62,0,0,574,575,5,72,0,0,575,580,3,26,13,0,
	576,577,5,80,0,0,577,579,3,26,13,0,578,576,1,0,0,0,579,582,1,0,0,0,580,
	578,1,0,0,0,580,581,1,0,0,0,581,583,1,0,0,0,582,580,1,0,0,0,583,584,5,73,
	0,0,584,85,1,0,0,0,585,593,3,88,44,0,586,593,3,90,45,0,587,593,3,92,46,
	0,588,593,3,94,47,0,589,593,3,96,48,0,590,593,3,98,49,0,591,593,3,100,50,
	0,592,585,1,0,0,0,592,586,1,0,0,0,592,587,1,0,0,0,592,588,1,0,0,0,592,589,
	1,0,0,0,592,590,1,0,0,0,592,591,1,0,0,0,593,87,1,0,0,0,594,595,5,1,0,0,
	595,596,5,25,0,0,596,597,3,106,53,0,597,606,3,10,5,0,598,599,5,1,0,0,599,
	600,5,18,0,0,600,601,5,25,0,0,601,602,3,106,53,0,602,603,3,10,5,0,603,605,
	1,0,0,0,604,598,1,0,0,0,605,608,1,0,0,0,606,604,1,0,0,0,606,607,1,0,0,0,
	607,612,1,0,0,0,608,606,1,0,0,0,609,610,5,1,0,0,610,611,5,18,0,0,611,613,
	3,10,5,0,612,609,1,0,0,0,612,613,1,0,0,0,613,614,1,0,0,0,614,615,5,1,0,
	0,615,616,5,19,0,0,616,617,5,25,0,0,617,89,1,0,0,0,618,619,5,1,0,0,619,
	620,5,21,0,0,620,621,5,93,0,0,621,622,5,22,0,0,622,623,3,106,53,0,623,624,
	5,57,0,0,624,630,3,106,53,0,625,627,5,51,0,0,626,628,5,83,0,0,627,626,1,
	0,0,0,627,628,1,0,0,0,628,629,1,0,0,0,629,631,5,94,0,0,630,625,1,0,0,0,
	630,631,1,0,0,0,631,632,1,0,0,0,632,633,3,10,5,0,633,634,5,1,0,0,634,635,
	5,19,0,0,635,636,5,21,0,0,636,91,1,0,0,0,637,638,5,1,0,0,638,639,5,17,0,
	0,639,640,5,93,0,0,640,641,5,28,0,0,641,642,3,106,53,0,642,643,3,10,5,0,
	643,644,5,1,0,0,644,645,5,19,0,0,645,646,5,17,0,0,646,93,1,0,0,0,647,648,
	5,1,0,0,648,649,5,61,0,0,649,650,3,106,53,0,650,651,3,10,5,0,651,652,5,
	1,0,0,652,653,5,19,0,0,653,654,5,61,0,0,654,95,1,0,0,0,655,656,5,1,0,0,
	656,657,5,48,0,0,657,658,3,10,5,0,658,659,5,1,0,0,659,660,5,19,0,0,660,
	661,5,48,0,0,661,662,5,60,0,0,662,663,3,106,53,0,663,97,1,0,0,0,664,665,
	5,1,0,0,665,666,5,58,0,0,666,667,3,10,5,0,667,668,5,1,0,0,668,669,5,10,
	0,0,669,670,5,93,0,0,670,671,3,10,5,0,671,672,5,1,0,0,672,673,5,19,0,0,
	673,674,5,58,0,0,674,99,1,0,0,0,675,676,5,1,0,0,676,677,5,52,0,0,677,679,
	3,106,53,0,678,680,3,102,51,0,679,678,1,0,0,0,680,681,1,0,0,0,681,679,1,
	0,0,0,681,682,1,0,0,0,682,683,1,0,0,0,683,684,3,104,52,0,684,685,5,1,0,
	0,685,686,5,19,0,0,686,687,5,52,0,0,687,101,1,0,0,0,688,689,5,1,0,0,689,
	691,5,9,0,0,690,692,5,83,0,0,691,690,1,0,0,0,691,692,1,0,0,0,692,693,1,
	0,0,0,693,694,3,126,63,0,694,695,3,10,5,0,695,103,1,0,0,0,696,697,5,1,0,
	0,697,698,5,15,0,0,698,699,3,10,5,0,699,105,1,0,0,0,700,701,6,53,-1,0,701,
	711,3,108,54,0,702,711,3,32,16,0,703,711,3,120,60,0,704,705,3,154,77,0,
	705,706,3,106,53,8,706,711,1,0,0,0,707,711,3,82,41,0,708,711,3,36,18,0,
	709,711,3,34,17,0,710,700,1,0,0,0,710,702,1,0,0,0,710,703,1,0,0,0,710,704,
	1,0,0,0,710,707,1,0,0,0,710,708,1,0,0,0,710,709,1,0,0,0,711,735,1,0,0,0,
	712,713,10,7,0,0,713,714,5,86,0,0,714,734,3,106,53,8,715,716,10,6,0,0,716,
	717,3,156,78,0,717,718,3,106,53,7,718,734,1,0,0,0,719,720,10,11,0,0,720,
	734,3,116,58,0,721,722,10,10,0,0,722,723,5,79,0,0,723,734,3,32,16,0,724,
	725,10,9,0,0,725,726,5,79,0,0,726,734,5,93,0,0,727,728,10,4,0,0,728,729,
	3,110,55,0,729,730,3,112,56,0,730,734,1,0,0,0,731,732,10,3,0,0,732,734,
	3,84,42,0,733,712,1,0,0,0,733,715,1,0,0,0,733,719,1,0,0,0,733,721,1,0,0,
	0,733,724,1,0,0,0,733,727,1,0,0,0,733,731,1,0,0,0,734,737,1,0,0,0,735,733,
	1,0,0,0,735,736,1,0,0,0,736,107,1,0,0,0,737,735,1,0,0,0,738,739,5,76,0,
	0,739,740,3,106,53,0,740,741,5,77,0,0,741,109,1,0,0,0,742,743,5,25,0,0,
	743,744,3,106,53,0,744,111,1,0,0,0,745,746,5,18,0,0,746,747,3,106,53,0,
	747,113,1,0,0,0,748,749,5,31,0,0,749,750,3,40,20,0,750,751,5,71,0,0,751,
	752,3,106,53,0,752,115,1,0,0,0,753,760,5,74,0,0,754,761,3,106,53,0,755,
	756,3,106,53,0,756,757,5,80,0,0,757,758,3,106,53,0,758,761,1,0,0,0,759,
	761,3,118,59,0,760,754,1,0,0,0,760,755,1,0,0,0,760,759,1,0,0,0,761,762,
	1,0,0,0,762,763,5,75,0,0,763,117,1,0,0,0,764,765,3,106,53,0,765,766,5,78,
	0,0,766,767,3,106,53,0,767,774,1,0,0,0,768,769,3,106,53,0,769,770,5,78,
	0,0,770,774,1,0,0,0,771,772,5,78,0,0,772,774,3,106,53,0,773,764,1,0,0,0,
	773,768,1,0,0,0,773,771,1,0,0,0,774,119,1,0,0,0,775,785,3,124,62,0,776,
	778,3,122,61,0,777,776,1,0,0,0,777,778,1,0,0,0,778,779,1,0,0,0,779,785,
	5,93,0,0,780,785,3,128,64,0,781,785,5,55,0,0,782,783,5,15,0,0,783,785,3,
	164,82,0,784,775,1,0,0,0,784,777,1,0,0,0,784,780,1,0,0,0,784,781,1,0,0,
	0,784,782,1,0,0,0,785,121,1,0,0,0,786,793,5,47,0,0,787,793,5,24,0,0,788,
	793,5,33,0,0,789,790,5,42,0,0,790,791,5,79,0,0,791,793,3,4,2,0,792,786,
	1,0,0,0,792,787,1,0,0,0,792,788,1,0,0,0,792,789,1,0,0,0,793,794,1,0,0,0,
	794,795,5,79,0,0,795,123,1,0,0,0,796,799,3,126,63,0,797,799,3,130,65,0,
	798,796,1,0,0,0,798,797,1,0,0,0,799,125,1,0,0,0,800,806,5,64,0,0,801,806,
	5,94,0,0,802,806,5,95,0,0,803,806,5,96,0,0,804,806,3,64,32,0,805,800,1,
	0,0,0,805,801,1,0,0,0,805,802,1,0,0,0,805,803,1,0,0,0,805,804,1,0,0,0,806,
	127,1,0,0,0,807,812,3,138,69,0,808,812,3,144,72,0,809,812,3,132,66,0,810,
	812,3,146,73,0,811,807,1,0,0,0,811,808,1,0,0,0,811,809,1,0,0,0,811,810,
	1,0,0,0,812,129,1,0,0,0,813,818,5,97,0,0,814,818,3,134,67,0,815,818,3,140,
	70,0,816,818,3,148,74,0,817,813,1,0,0,0,817,814,1,0,0,0,817,815,1,0,0,0,
	817,816,1,0,0,0,818,131,1,0,0,0,819,820,5,76,0,0,820,821,3,106,53,0,821,
	822,5,80,0,0,822,827,3,106,53,0,823,824,5,80,0,0,824,826,3,106,53,0,825,
	823,1,0,0,0,826,829,1,0,0,0,827,825,1,0,0,0,827,828,1,0,0,0,828,830,1,0,
	0,0,829,827,1,0,0,0,830,831,5,77,0,0,831,133,1,0,0,0,832,833,5,76,0,0,833,
	834,3,124,62,0,834,835,5,80,0,0,835,840,3,124,62,0,836,837,5,80,0,0,837,
	839,3,124,62,0,838,836,1,0,0,0,839,842,1,0,0,0,840,838,1,0,0,0,840,841,
	1,0,0,0,841,843,1,0,0,0,842,840,1,0,0,0,843,844,5,77,0,0,844,135,1,0,0,
	0,845,846,5,76,0,0,846,849,5,93,0,0,847,848,5,80,0,0,848,850,5,93,0,0,849,
	847,1,0,0,0,850,851,1,0,0,0,851,849,1,0,0,0,851,852,1,0,0,0,852,853,1,0,
	0,0,853,854,5,77,0,0,854,137,1,0,0,0,855,856,5,72,0,0,856,861,3,106,53,
	0,857,858,5,80,0,0,858,860,3,106,53,0,859,857,1,0,0,0,860,863,1,0,0,0,861,
	859,1,0,0,0,861,862,1,0,0,0,862,864,1,0,0,0,863,861,1,0,0,0,864,865,5,73,
	0,0,865,139,1,0,0,0,866,867,5,72,0,0,867,872,3,124,62,0,868,869,5,80,0,
	0,869,871,3,124,62,0,870,868,1,0,0,0,871,874,1,0,0,0,872,870,1,0,0,0,872,
	873,1,0,0,0,873,875,1,0,0,0,874,872,1,0,0,0,875,876,5,73,0,0,876,141,1,
	0,0,0,877,878,5,72,0,0,878,879,5,93,0,0,879,880,5,81,0,0,880,881,5,93,0,
	0,881,882,5,73,0,0,882,143,1,0,0,0,883,884,5,66,0,0,884,885,3,168,84,0,
	885,887,5,76,0,0,886,888,5,94,0,0,887,886,1,0,0,0,887,888,1,0,0,0,888,889,
	1,0,0,0,889,890,5,77,0,0,890,145,1,0,0,0,891,892,5,72,0,0,892,897,3,150,
	75,0,893,894,5,80,0,0,894,896,3,150,75,0,895,893,1,0,0,0,896,899,1,0,0,
	0,897,895,1,0,0,0,897,898,1,0,0,0,898,900,1,0,0,0,899,897,1,0,0,0,900,901,
	5,73,0,0,901,147,1,0,0,0,902,903,5,72,0,0,903,908,3,152,76,0,904,905,5,
	80,0,0,905,907,3,152,76,0,906,904,1,0,0,0,907,910,1,0,0,0,908,906,1,0,0,
	0,908,909,1,0,0,0,909,911,1,0,0,0,910,908,1,0,0,0,911,912,5,73,0,0,912,
	149,1,0,0,0,913,914,3,106,53,0,914,915,5,81,0,0,915,916,3,106,53,0,916,
	151,1,0,0,0,917,918,3,124,62,0,918,919,5,81,0,0,919,920,3,124,62,0,920,
	153,1,0,0,0,921,922,7,2,0,0,922,155,1,0,0,0,923,927,3,158,79,0,924,927,
	3,160,80,0,925,927,3,162,81,0,926,923,1,0,0,0,926,924,1,0,0,0,926,925,1,
	0,0,0,927,157,1,0,0,0,928,929,7,3,0,0,929,159,1,0,0,0,930,931,7,4,0,0,931,
	161,1,0,0,0,932,933,7,5,0,0,933,163,1,0,0,0,934,942,5,65,0,0,935,942,3,
	166,83,0,936,942,5,92,0,0,937,938,5,92,0,0,938,942,3,168,84,0,939,942,3,
	170,85,0,940,942,3,174,87,0,941,934,1,0,0,0,941,935,1,0,0,0,941,936,1,0,
	0,0,941,937,1,0,0,0,941,939,1,0,0,0,941,940,1,0,0,0,942,165,1,0,0,0,943,
	944,7,6,0,0,944,945,3,168,84,0,945,167,1,0,0,0,946,947,5,87,0,0,947,948,
	5,38,0,0,948,953,3,164,82,0,949,950,5,80,0,0,950,952,3,164,82,0,951,949,
	1,0,0,0,952,955,1,0,0,0,953,951,1,0,0,0,953,954,1,0,0,0,954,956,1,0,0,0,
	955,953,1,0,0,0,956,957,5,88,0,0,957,169,1,0,0,0,958,959,5,76,0,0,959,962,
	3,164,82,0,960,961,5,80,0,0,961,963,3,164,82,0,962,960,1,0,0,0,963,964,
	1,0,0,0,964,962,1,0,0,0,964,965,1,0,0,0,965,966,1,0,0,0,966,967,5,77,0,
	0,967,171,1,0,0,0,968,973,3,164,82,0,969,970,5,80,0,0,970,972,3,164,82,
	0,971,969,1,0,0,0,972,975,1,0,0,0,973,971,1,0,0,0,973,974,1,0,0,0,974,173,
	1,0,0,0,975,973,1,0,0,0,976,977,5,76,0,0,977,978,3,172,86,0,978,979,5,71,
	0,0,979,980,3,164,82,0,980,981,5,77,0,0,981,175,1,0,0,0,81,184,186,192,
	205,229,231,237,239,255,264,285,289,293,296,301,306,311,320,326,330,337,
	351,360,368,375,388,397,410,421,438,444,451,453,465,478,480,492,498,500,
	513,522,524,537,541,551,563,567,571,580,592,606,612,627,630,681,691,710,
	733,735,760,773,777,784,792,798,805,811,817,827,840,851,861,872,887,897,
	908,926,941,953,964,973];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ElanParser.__ATN) {
			ElanParser.__ATN = new ATNDeserializer().deserialize(ElanParser._serializedATN);
		}

		return ElanParser.__ATN;
	}


	static DecisionsToDFA = ElanParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class FileContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(ElanParser.EOF, 0);
	}
	public main_list(): MainContext[] {
		return this.getTypedRuleContexts(MainContext) as MainContext[];
	}
	public main(i: number): MainContext {
		return this.getTypedRuleContext(MainContext, i) as MainContext;
	}
	public procedureDef_list(): ProcedureDefContext[] {
		return this.getTypedRuleContexts(ProcedureDefContext) as ProcedureDefContext[];
	}
	public procedureDef(i: number): ProcedureDefContext {
		return this.getTypedRuleContext(ProcedureDefContext, i) as ProcedureDefContext;
	}
	public functionDef_list(): FunctionDefContext[] {
		return this.getTypedRuleContexts(FunctionDefContext) as FunctionDefContext[];
	}
	public functionDef(i: number): FunctionDefContext {
		return this.getTypedRuleContext(FunctionDefContext, i) as FunctionDefContext;
	}
	public constantDef_list(): ConstantDefContext[] {
		return this.getTypedRuleContexts(ConstantDefContext) as ConstantDefContext[];
	}
	public constantDef(i: number): ConstantDefContext {
		return this.getTypedRuleContext(ConstantDefContext, i) as ConstantDefContext;
	}
	public enumDef_list(): EnumDefContext[] {
		return this.getTypedRuleContexts(EnumDefContext) as EnumDefContext[];
	}
	public enumDef(i: number): EnumDefContext {
		return this.getTypedRuleContext(EnumDefContext, i) as EnumDefContext;
	}
	public classDef_list(): ClassDefContext[] {
		return this.getTypedRuleContexts(ClassDefContext) as ClassDefContext[];
	}
	public classDef(i: number): ClassDefContext {
		return this.getTypedRuleContext(ClassDefContext, i) as ClassDefContext;
	}
	public test_list(): TestContext[] {
		return this.getTypedRuleContexts(TestContext) as TestContext[];
	}
	public test(i: number): TestContext {
		return this.getTypedRuleContext(TestContext, i) as TestContext;
	}
	public importStatement_list(): ImportStatementContext[] {
		return this.getTypedRuleContexts(ImportStatementContext) as ImportStatementContext[];
	}
	public importStatement(i: number): ImportStatementContext {
		return this.getTypedRuleContext(ImportStatementContext, i) as ImportStatementContext;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_file;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterFile) {
	 		listener.enterFile(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitFile) {
	 		listener.exitFile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitFile) {
			return visitor.visitFile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImportStatementContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(ElanParser.IMPORT, 0);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_importStatement;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterImportStatement) {
	 		listener.enterImportStatement(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitImportStatement) {
	 		listener.exitImportStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitImportStatement) {
			return visitor.visitImportStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NamespaceContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPENAME_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.TYPENAME);
	}
	public TYPENAME(i: number): TerminalNode {
		return this.getToken(ElanParser.TYPENAME, i);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(ElanParser.DOT, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_namespace;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterNamespace) {
	 		listener.enterNamespace(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitNamespace) {
	 		listener.exitNamespace(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitNamespace) {
			return visitor.visitNamespace(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MainContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public MAIN_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.MAIN);
	}
	public MAIN(i: number): TerminalNode {
		return this.getToken(ElanParser.MAIN, i);
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_main;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterMain) {
	 		listener.enterMain(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitMain) {
	 		listener.exitMain(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitMain) {
			return visitor.visitMain(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public TEST_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.TEST);
	}
	public TEST(i: number): TerminalNode {
		return this.getToken(ElanParser.TEST, i);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public testStatements(): TestStatementsContext {
		return this.getTypedRuleContext(TestStatementsContext, 0) as TestStatementsContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_test;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterTest) {
	 		listener.enterTest(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitTest) {
	 		listener.exitTest(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitTest) {
			return visitor.visitTest(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementBlockContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDef_list(): VarDefContext[] {
		return this.getTypedRuleContexts(VarDefContext) as VarDefContext[];
	}
	public varDef(i: number): VarDefContext {
		return this.getTypedRuleContext(VarDefContext, i) as VarDefContext;
	}
	public assignment_list(): AssignmentContext[] {
		return this.getTypedRuleContexts(AssignmentContext) as AssignmentContext[];
	}
	public assignment(i: number): AssignmentContext {
		return this.getTypedRuleContext(AssignmentContext, i) as AssignmentContext;
	}
	public proceduralControlFlow_list(): ProceduralControlFlowContext[] {
		return this.getTypedRuleContexts(ProceduralControlFlowContext) as ProceduralControlFlowContext[];
	}
	public proceduralControlFlow(i: number): ProceduralControlFlowContext {
		return this.getTypedRuleContext(ProceduralControlFlowContext, i) as ProceduralControlFlowContext;
	}
	public callStatement_list(): CallStatementContext[] {
		return this.getTypedRuleContexts(CallStatementContext) as CallStatementContext[];
	}
	public callStatement(i: number): CallStatementContext {
		return this.getTypedRuleContext(CallStatementContext, i) as CallStatementContext;
	}
	public throwException_list(): ThrowExceptionContext[] {
		return this.getTypedRuleContexts(ThrowExceptionContext) as ThrowExceptionContext[];
	}
	public throwException(i: number): ThrowExceptionContext {
		return this.getTypedRuleContext(ThrowExceptionContext, i) as ThrowExceptionContext;
	}
	public printStatement_list(): PrintStatementContext[] {
		return this.getTypedRuleContexts(PrintStatementContext) as PrintStatementContext[];
	}
	public printStatement(i: number): PrintStatementContext {
		return this.getTypedRuleContext(PrintStatementContext, i) as PrintStatementContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_statementBlock;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterStatementBlock) {
	 		listener.enterStatementBlock(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitStatementBlock) {
	 		listener.exitStatementBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitStatementBlock) {
			return visitor.visitStatementBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TestStatementsContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assert_list(): AssertContext[] {
		return this.getTypedRuleContexts(AssertContext) as AssertContext[];
	}
	public assert(i: number): AssertContext {
		return this.getTypedRuleContext(AssertContext, i) as AssertContext;
	}
	public varDef_list(): VarDefContext[] {
		return this.getTypedRuleContexts(VarDefContext) as VarDefContext[];
	}
	public varDef(i: number): VarDefContext {
		return this.getTypedRuleContext(VarDefContext, i) as VarDefContext;
	}
	public callStatement_list(): CallStatementContext[] {
		return this.getTypedRuleContexts(CallStatementContext) as CallStatementContext[];
	}
	public callStatement(i: number): CallStatementContext {
		return this.getTypedRuleContext(CallStatementContext, i) as CallStatementContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_testStatements;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterTestStatements) {
	 		listener.enterTestStatements(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitTestStatements) {
	 		listener.exitTestStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitTestStatements) {
			return visitor.visitTestStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssertContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public ASSERT(): TerminalNode {
		return this.getToken(ElanParser.ASSERT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public IS(): TerminalNode {
		return this.getToken(ElanParser.IS, 0);
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_assert;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterAssert) {
	 		listener.enterAssert(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitAssert) {
	 		listener.exitAssert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitAssert) {
			return visitor.visitAssert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallStatementContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public CALL(): TerminalNode {
		return this.getToken(ElanParser.CALL, 0);
	}
	public procedureCall(): ProcedureCallContext {
		return this.getTypedRuleContext(ProcedureCallContext, 0) as ProcedureCallContext;
	}
	public assignableValue(): AssignableValueContext {
		return this.getTypedRuleContext(AssignableValueContext, 0) as AssignableValueContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(ElanParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_callStatement;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterCallStatement) {
	 		listener.enterCallStatement(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitCallStatement) {
	 		listener.exitCallStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitCallStatement) {
			return visitor.visitCallStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ThrowExceptionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public THROW(): TerminalNode {
		return this.getToken(ElanParser.THROW, 0);
	}
	public LITERAL_STRING(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_STRING, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_throwException;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterThrowException) {
	 		listener.enterThrowException(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitThrowException) {
	 		listener.exitThrowException(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitThrowException) {
			return visitor.visitThrowException(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStatementContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public PRINT(): TerminalNode {
		return this.getToken(ElanParser.PRINT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_printStatement;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterPrintStatement) {
	 		listener.enterPrintStatement(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitPrintStatement) {
	 		listener.exitPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDefContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public VAR(): TerminalNode {
		return this.getToken(ElanParser.VAR, 0);
	}
	public assignableValue(): AssignableValueContext {
		return this.getTypedRuleContext(AssignableValueContext, 0) as AssignableValueContext;
	}
	public SET(): TerminalNode {
		return this.getToken(ElanParser.SET, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(ElanParser.TO, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_varDef;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterVarDef) {
	 		listener.enterVarDef(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitVarDef) {
	 		listener.exitVarDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitVarDef) {
			return visitor.visitVarDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(ElanParser.SET, 0);
	}
	public assignableValue(): AssignableValueContext {
		return this.getTypedRuleContext(AssignableValueContext, 0) as AssignableValueContext;
	}
	public TO(): TerminalNode {
		return this.getToken(ElanParser.TO, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_assignment;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterAssignment) {
	 		listener.enterAssignment(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitAssignment) {
	 		listener.exitAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitAssignment) {
			return visitor.visitAssignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InlineAsignmentContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignableValue(): AssignableValueContext {
		return this.getTypedRuleContext(AssignableValueContext, 0) as AssignableValueContext;
	}
	public SET(): TerminalNode {
		return this.getToken(ElanParser.SET, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(ElanParser.TO, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_inlineAsignment;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterInlineAsignment) {
	 		listener.enterInlineAsignment(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitInlineAsignment) {
	 		listener.exitInlineAsignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitInlineAsignment) {
			return visitor.visitInlineAsignment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignableValueContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public scopeQualifier(): ScopeQualifierContext {
		return this.getTypedRuleContext(ScopeQualifierContext, 0) as ScopeQualifierContext;
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
	}
	public deconstructedTuple(): DeconstructedTupleContext {
		return this.getTypedRuleContext(DeconstructedTupleContext, 0) as DeconstructedTupleContext;
	}
	public listDecomp(): ListDecompContext {
		return this.getTypedRuleContext(ListDecompContext, 0) as ListDecompContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_assignableValue;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterAssignableValue) {
	 		listener.enterAssignableValue(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitAssignableValue) {
	 		listener.exitAssignableValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitAssignableValue) {
			return visitor.visitAssignableValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureCallContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public scopeQualifier(): ScopeQualifierContext {
		return this.getTypedRuleContext(ScopeQualifierContext, 0) as ScopeQualifierContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_procedureCall;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterProcedureCall) {
	 		listener.enterProcedureCall(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitProcedureCall) {
	 		listener.exitProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitProcedureCall) {
			return visitor.visitProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public scopeQualifier(): ScopeQualifierContext {
		return this.getTypedRuleContext(ScopeQualifierContext, 0) as ScopeQualifierContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_functionCall;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterFunctionCall) {
	 		listener.enterFunctionCall(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitFunctionCall) {
	 		listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SystemCallContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SYSTEM(): TerminalNode {
		return this.getToken(ElanParser.SYSTEM, 0);
	}
	public DOT(): TerminalNode {
		return this.getToken(ElanParser.DOT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_systemCall;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterSystemCall) {
	 		listener.enterSystemCall(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitSystemCall) {
	 		listener.exitSystemCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitSystemCall) {
			return visitor.visitSystemCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INPUT(): TerminalNode {
		return this.getToken(ElanParser.INPUT, 0);
	}
	public LITERAL_STRING(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_STRING, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_input;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterInput) {
	 		listener.enterInput(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitInput) {
	 		listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public lambda(): LambdaContext {
		return this.getTypedRuleContext(LambdaContext, 0) as LambdaContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_argument;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterArgument) {
	 		listener.enterArgument(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitArgument) {
	 		listener.exitArgument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitArgument) {
			return visitor.visitArgument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public argument_list(): ArgumentContext[] {
		return this.getTypedRuleContexts(ArgumentContext) as ArgumentContext[];
	}
	public argument(i: number): ArgumentContext {
		return this.getTypedRuleContext(ArgumentContext, i) as ArgumentContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_argumentList;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitArgumentList) {
	 		listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureDefContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public PROCEDURE_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.PROCEDURE);
	}
	public PROCEDURE(i: number): TerminalNode {
		return this.getToken(ElanParser.PROCEDURE, i);
	}
	public procedureSignature(): ProcedureSignatureContext {
		return this.getTypedRuleContext(ProcedureSignatureContext, 0) as ProcedureSignatureContext;
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_procedureDef;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterProcedureDef) {
	 		listener.enterProcedureDef(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitProcedureDef) {
	 		listener.exitProcedureDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitProcedureDef) {
			return visitor.visitProcedureDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureSignatureContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public procedureParameterList(): ProcedureParameterListContext {
		return this.getTypedRuleContext(ProcedureParameterListContext, 0) as ProcedureParameterListContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_procedureSignature;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterProcedureSignature) {
	 		listener.enterProcedureSignature(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitProcedureSignature) {
	 		listener.exitProcedureSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitProcedureSignature) {
			return visitor.visitProcedureSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureParameterListContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public procedureParameter_list(): ProcedureParameterContext[] {
		return this.getTypedRuleContexts(ProcedureParameterContext) as ProcedureParameterContext[];
	}
	public procedureParameter(i: number): ProcedureParameterContext {
		return this.getTypedRuleContext(ProcedureParameterContext, i) as ProcedureParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_procedureParameterList;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterProcedureParameterList) {
	 		listener.enterProcedureParameterList(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitProcedureParameterList) {
	 		listener.exitProcedureParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitProcedureParameterList) {
			return visitor.visitProcedureParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_parameterList;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitParameterList) {
	 		listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_parameter;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitParameter) {
	 		listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcedureParameterContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public OUT(): TerminalNode {
		return this.getToken(ElanParser.OUT, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_procedureParameter;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterProcedureParameter) {
	 		listener.enterProcedureParameter(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitProcedureParameter) {
	 		listener.exitProcedureParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitProcedureParameter) {
			return visitor.visitProcedureParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public FUNCTION_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.FUNCTION);
	}
	public FUNCTION(i: number): TerminalNode {
		return this.getToken(ElanParser.FUNCTION, i);
	}
	public functionSignature(): FunctionSignatureContext {
		return this.getTypedRuleContext(FunctionSignatureContext, 0) as FunctionSignatureContext;
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public RETURN(): TerminalNode {
		return this.getToken(ElanParser.RETURN, 0);
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(ElanParser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_functionDef;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterFunctionDef) {
	 		listener.enterFunctionDef(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitFunctionDef) {
	 		listener.exitFunctionDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitFunctionDef) {
			return visitor.visitFunctionDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionSignatureContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public AS(): TerminalNode {
		return this.getToken(ElanParser.AS, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_functionSignature;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterFunctionSignature) {
	 		listener.enterFunctionSignature(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitFunctionSignature) {
	 		listener.exitFunctionSignature(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitFunctionSignature) {
			return visitor.visitFunctionSignature(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstantDefContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public CONSTANT(): TerminalNode {
		return this.getToken(ElanParser.CONSTANT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public SET(): TerminalNode {
		return this.getToken(ElanParser.SET, 0);
	}
	public TO(): TerminalNode {
		return this.getToken(ElanParser.TO, 0);
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public newInstance(): NewInstanceContext {
		return this.getTypedRuleContext(NewInstanceContext, 0) as NewInstanceContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_constantDef;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterConstantDef) {
	 		listener.enterConstantDef(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitConstantDef) {
	 		listener.exitConstantDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitConstantDef) {
			return visitor.visitConstantDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumDefContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public ENUM_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.ENUM);
	}
	public ENUM(i: number): TerminalNode {
		return this.getToken(ElanParser.ENUM, i);
	}
	public enumType(): EnumTypeContext {
		return this.getTypedRuleContext(EnumTypeContext, 0) as EnumTypeContext;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, i);
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_enumDef;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterEnumDef) {
	 		listener.enterEnumDef(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitEnumDef) {
	 		listener.exitEnumDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitEnumDef) {
			return visitor.visitEnumDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumTypeContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TYPENAME(): TerminalNode {
		return this.getToken(ElanParser.TYPENAME, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_enumType;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterEnumType) {
	 		listener.enterEnumType(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitEnumType) {
	 		listener.exitEnumType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitEnumType) {
			return visitor.visitEnumType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumValueContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public enumType(): EnumTypeContext {
		return this.getTypedRuleContext(EnumTypeContext, 0) as EnumTypeContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(ElanParser.DOT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_enumValue;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterEnumValue) {
	 		listener.enterEnumValue(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitEnumValue) {
	 		listener.exitEnumValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitEnumValue) {
			return visitor.visitEnumValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDefContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public mutableClass(): MutableClassContext {
		return this.getTypedRuleContext(MutableClassContext, 0) as MutableClassContext;
	}
	public abstractClass(): AbstractClassContext {
		return this.getTypedRuleContext(AbstractClassContext, 0) as AbstractClassContext;
	}
	public immutableClass(): ImmutableClassContext {
		return this.getTypedRuleContext(ImmutableClassContext, 0) as ImmutableClassContext;
	}
	public abstractImmutableClass(): AbstractImmutableClassContext {
		return this.getTypedRuleContext(AbstractImmutableClassContext, 0) as AbstractImmutableClassContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_classDef;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterClassDef) {
	 		listener.enterClassDef(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitClassDef) {
	 		listener.exitClassDef(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitClassDef) {
			return visitor.visitClassDef(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MutableClassContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public CLASS_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.CLASS);
	}
	public CLASS(i: number): TerminalNode {
		return this.getToken(ElanParser.CLASS, i);
	}
	public TYPENAME(): TerminalNode {
		return this.getToken(ElanParser.TYPENAME, 0);
	}
	public constructor_(): ConstructorContext {
		return this.getTypedRuleContext(ConstructorContext, 0) as ConstructorContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public inherits(): InheritsContext {
		return this.getTypedRuleContext(InheritsContext, 0) as InheritsContext;
	}
	public property_list(): PropertyContext[] {
		return this.getTypedRuleContexts(PropertyContext) as PropertyContext[];
	}
	public property(i: number): PropertyContext {
		return this.getTypedRuleContext(PropertyContext, i) as PropertyContext;
	}
	public functionDef_list(): FunctionDefContext[] {
		return this.getTypedRuleContexts(FunctionDefContext) as FunctionDefContext[];
	}
	public functionDef(i: number): FunctionDefContext {
		return this.getTypedRuleContext(FunctionDefContext, i) as FunctionDefContext;
	}
	public procedureDef_list(): ProcedureDefContext[] {
		return this.getTypedRuleContexts(ProcedureDefContext) as ProcedureDefContext[];
	}
	public procedureDef(i: number): ProcedureDefContext {
		return this.getTypedRuleContext(ProcedureDefContext, i) as ProcedureDefContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_mutableClass;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterMutableClass) {
	 		listener.enterMutableClass(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitMutableClass) {
	 		listener.exitMutableClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitMutableClass) {
			return visitor.visitMutableClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractClassContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public ABSTRACT_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.ABSTRACT);
	}
	public ABSTRACT(i: number): TerminalNode {
		return this.getToken(ElanParser.ABSTRACT, i);
	}
	public CLASS_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.CLASS);
	}
	public CLASS(i: number): TerminalNode {
		return this.getToken(ElanParser.CLASS, i);
	}
	public TYPENAME(): TerminalNode {
		return this.getToken(ElanParser.TYPENAME, 0);
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public inherits(): InheritsContext {
		return this.getTypedRuleContext(InheritsContext, 0) as InheritsContext;
	}
	public property_list(): PropertyContext[] {
		return this.getTypedRuleContexts(PropertyContext) as PropertyContext[];
	}
	public property(i: number): PropertyContext {
		return this.getTypedRuleContext(PropertyContext, i) as PropertyContext;
	}
	public FUNCTION_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.FUNCTION);
	}
	public FUNCTION(i: number): TerminalNode {
		return this.getToken(ElanParser.FUNCTION, i);
	}
	public functionSignature_list(): FunctionSignatureContext[] {
		return this.getTypedRuleContexts(FunctionSignatureContext) as FunctionSignatureContext[];
	}
	public functionSignature(i: number): FunctionSignatureContext {
		return this.getTypedRuleContext(FunctionSignatureContext, i) as FunctionSignatureContext;
	}
	public PROCEDURE_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.PROCEDURE);
	}
	public PROCEDURE(i: number): TerminalNode {
		return this.getToken(ElanParser.PROCEDURE, i);
	}
	public procedureSignature_list(): ProcedureSignatureContext[] {
		return this.getTypedRuleContexts(ProcedureSignatureContext) as ProcedureSignatureContext[];
	}
	public procedureSignature(i: number): ProcedureSignatureContext {
		return this.getTypedRuleContext(ProcedureSignatureContext, i) as ProcedureSignatureContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_abstractClass;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterAbstractClass) {
	 		listener.enterAbstractClass(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitAbstractClass) {
	 		listener.exitAbstractClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitAbstractClass) {
			return visitor.visitAbstractClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImmutableClassContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public IMMUTABLE(): TerminalNode {
		return this.getToken(ElanParser.IMMUTABLE, 0);
	}
	public CLASS_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.CLASS);
	}
	public CLASS(i: number): TerminalNode {
		return this.getToken(ElanParser.CLASS, i);
	}
	public TYPENAME(): TerminalNode {
		return this.getToken(ElanParser.TYPENAME, 0);
	}
	public constructor_(): ConstructorContext {
		return this.getTypedRuleContext(ConstructorContext, 0) as ConstructorContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public inherits(): InheritsContext {
		return this.getTypedRuleContext(InheritsContext, 0) as InheritsContext;
	}
	public property_list(): PropertyContext[] {
		return this.getTypedRuleContexts(PropertyContext) as PropertyContext[];
	}
	public property(i: number): PropertyContext {
		return this.getTypedRuleContext(PropertyContext, i) as PropertyContext;
	}
	public functionDef_list(): FunctionDefContext[] {
		return this.getTypedRuleContexts(FunctionDefContext) as FunctionDefContext[];
	}
	public functionDef(i: number): FunctionDefContext {
		return this.getTypedRuleContext(FunctionDefContext, i) as FunctionDefContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_immutableClass;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterImmutableClass) {
	 		listener.enterImmutableClass(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitImmutableClass) {
	 		listener.exitImmutableClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitImmutableClass) {
			return visitor.visitImmutableClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AbstractImmutableClassContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public ABSTRACT_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.ABSTRACT);
	}
	public ABSTRACT(i: number): TerminalNode {
		return this.getToken(ElanParser.ABSTRACT, i);
	}
	public IMMUTABLE(): TerminalNode {
		return this.getToken(ElanParser.IMMUTABLE, 0);
	}
	public CLASS_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.CLASS);
	}
	public CLASS(i: number): TerminalNode {
		return this.getToken(ElanParser.CLASS, i);
	}
	public TYPENAME(): TerminalNode {
		return this.getToken(ElanParser.TYPENAME, 0);
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public inherits(): InheritsContext {
		return this.getTypedRuleContext(InheritsContext, 0) as InheritsContext;
	}
	public property_list(): PropertyContext[] {
		return this.getTypedRuleContexts(PropertyContext) as PropertyContext[];
	}
	public property(i: number): PropertyContext {
		return this.getTypedRuleContext(PropertyContext, i) as PropertyContext;
	}
	public FUNCTION_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.FUNCTION);
	}
	public FUNCTION(i: number): TerminalNode {
		return this.getToken(ElanParser.FUNCTION, i);
	}
	public functionSignature_list(): FunctionSignatureContext[] {
		return this.getTypedRuleContexts(FunctionSignatureContext) as FunctionSignatureContext[];
	}
	public functionSignature(i: number): FunctionSignatureContext {
		return this.getTypedRuleContext(FunctionSignatureContext, i) as FunctionSignatureContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_abstractImmutableClass;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterAbstractImmutableClass) {
	 		listener.enterAbstractImmutableClass(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitAbstractImmutableClass) {
	 		listener.exitAbstractImmutableClass(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitAbstractImmutableClass) {
			return visitor.visitAbstractImmutableClass(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InheritsContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INHERITS(): TerminalNode {
		return this.getToken(ElanParser.INHERITS, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_inherits;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterInherits) {
	 		listener.enterInherits(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitInherits) {
	 		listener.exitInherits(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitInherits) {
			return visitor.visitInherits(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PROPERTY(): TerminalNode {
		return this.getToken(ElanParser.PROPERTY, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(ElanParser.PRIVATE, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_property;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterProperty) {
	 		listener.enterProperty(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitProperty) {
	 		listener.exitProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitProperty) {
			return visitor.visitProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstructorContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public CONSTRUCTOR_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.CONSTRUCTOR);
	}
	public CONSTRUCTOR(i: number): TerminalNode {
		return this.getToken(ElanParser.CONSTRUCTOR, i);
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_constructor;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterConstructor) {
	 		listener.enterConstructor(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitConstructor) {
	 		listener.exitConstructor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitConstructor) {
			return visitor.visitConstructor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NewInstanceContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NEW(): TerminalNode {
		return this.getToken(ElanParser.NEW, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public withClause(): WithClauseContext {
		return this.getTypedRuleContext(WithClauseContext, 0) as WithClauseContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_newInstance;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterNewInstance) {
	 		listener.enterNewInstance(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitNewInstance) {
	 		listener.exitNewInstance(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitNewInstance) {
			return visitor.visitNewInstance(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithClauseContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WITH(): TerminalNode {
		return this.getToken(ElanParser.WITH, 0);
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACE, 0);
	}
	public inlineAsignment_list(): InlineAsignmentContext[] {
		return this.getTypedRuleContexts(InlineAsignmentContext) as InlineAsignmentContext[];
	}
	public inlineAsignment(i: number): InlineAsignmentContext {
		return this.getTypedRuleContext(InlineAsignmentContext, i) as InlineAsignmentContext;
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACE, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_withClause;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterWithClause) {
	 		listener.enterWithClause(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitWithClause) {
	 		listener.exitWithClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitWithClause) {
			return visitor.visitWithClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProceduralControlFlowContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_(): IfContext {
		return this.getTypedRuleContext(IfContext, 0) as IfContext;
	}
	public for_(): ForContext {
		return this.getTypedRuleContext(ForContext, 0) as ForContext;
	}
	public each(): EachContext {
		return this.getTypedRuleContext(EachContext, 0) as EachContext;
	}
	public while_(): WhileContext {
		return this.getTypedRuleContext(WhileContext, 0) as WhileContext;
	}
	public repeat(): RepeatContext {
		return this.getTypedRuleContext(RepeatContext, 0) as RepeatContext;
	}
	public try_(): TryContext {
		return this.getTypedRuleContext(TryContext, 0) as TryContext;
	}
	public switch_(): SwitchContext {
		return this.getTypedRuleContext(SwitchContext, 0) as SwitchContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_proceduralControlFlow;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterProceduralControlFlow) {
	 		listener.enterProceduralControlFlow(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitProceduralControlFlow) {
	 		listener.exitProceduralControlFlow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitProceduralControlFlow) {
			return visitor.visitProceduralControlFlow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(ElanParser.IF, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public statementBlock_list(): StatementBlockContext[] {
		return this.getTypedRuleContexts(StatementBlockContext) as StatementBlockContext[];
	}
	public statementBlock(i: number): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, i) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public ELSE_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.ELSE);
	}
	public ELSE(i: number): TerminalNode {
		return this.getToken(ElanParser.ELSE, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_if;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterIf) {
	 		listener.enterIf(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitIf) {
	 		listener.exitIf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitIf) {
			return visitor.visitIf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public FOR_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.FOR);
	}
	public FOR(i: number): TerminalNode {
		return this.getToken(ElanParser.FOR, i);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(ElanParser.FROM, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public TO(): TerminalNode {
		return this.getToken(ElanParser.TO, 0);
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public STEP(): TerminalNode {
		return this.getToken(ElanParser.STEP, 0);
	}
	public LITERAL_INTEGER(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_INTEGER, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(ElanParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_for;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterFor) {
	 		listener.enterFor(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitFor) {
	 		listener.exitFor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitFor) {
			return visitor.visitFor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EachContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public EACH_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.EACH);
	}
	public EACH(i: number): TerminalNode {
		return this.getToken(ElanParser.EACH, i);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public IN(): TerminalNode {
		return this.getToken(ElanParser.IN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_each;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterEach) {
	 		listener.enterEach(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitEach) {
	 		listener.exitEach(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitEach) {
			return visitor.visitEach(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public WHILE_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.WHILE);
	}
	public WHILE(i: number): TerminalNode {
		return this.getToken(ElanParser.WHILE, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_while;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterWhile) {
	 		listener.enterWhile(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitWhile) {
	 		listener.exitWhile(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitWhile) {
			return visitor.visitWhile(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RepeatContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public REPEAT_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.REPEAT);
	}
	public REPEAT(i: number): TerminalNode {
		return this.getToken(ElanParser.REPEAT, i);
	}
	public WHEN(): TerminalNode {
		return this.getToken(ElanParser.WHEN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_repeat;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterRepeat) {
	 		listener.enterRepeat(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitRepeat) {
	 		listener.exitRepeat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitRepeat) {
			return visitor.visitRepeat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TryContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public TRY_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.TRY);
	}
	public TRY(i: number): TerminalNode {
		return this.getToken(ElanParser.TRY, i);
	}
	public statementBlock_list(): StatementBlockContext[] {
		return this.getTypedRuleContexts(StatementBlockContext) as StatementBlockContext[];
	}
	public statementBlock(i: number): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, i) as StatementBlockContext;
	}
	public CATCH(): TerminalNode {
		return this.getToken(ElanParser.CATCH, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_try;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterTry) {
	 		listener.enterTry(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitTry) {
	 		listener.exitTry(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitTry) {
			return visitor.visitTry(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SwitchContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.NL);
	}
	public NL(i: number): TerminalNode {
		return this.getToken(ElanParser.NL, i);
	}
	public SWITCH_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.SWITCH);
	}
	public SWITCH(i: number): TerminalNode {
		return this.getToken(ElanParser.SWITCH, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public caseDefault(): CaseDefaultContext {
		return this.getTypedRuleContext(CaseDefaultContext, 0) as CaseDefaultContext;
	}
	public END(): TerminalNode {
		return this.getToken(ElanParser.END, 0);
	}
	public case__list(): CaseContext[] {
		return this.getTypedRuleContexts(CaseContext) as CaseContext[];
	}
	public case_(i: number): CaseContext {
		return this.getTypedRuleContext(CaseContext, i) as CaseContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_switch;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterSwitch) {
	 		listener.enterSwitch(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitSwitch) {
	 		listener.exitSwitch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitSwitch) {
			return visitor.visitSwitch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public CASE(): TerminalNode {
		return this.getToken(ElanParser.CASE, 0);
	}
	public literalValue(): LiteralValueContext {
		return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
	public MINUS(): TerminalNode {
		return this.getToken(ElanParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_case;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterCase) {
	 		listener.enterCase(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitCase) {
	 		listener.exitCase(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitCase) {
			return visitor.visitCase(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CaseDefaultContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NL(): TerminalNode {
		return this.getToken(ElanParser.NL, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(ElanParser.DEFAULT, 0);
	}
	public statementBlock(): StatementBlockContext {
		return this.getTypedRuleContext(StatementBlockContext, 0) as StatementBlockContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_caseDefault;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterCaseDefault) {
	 		listener.enterCaseDefault(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitCaseDefault) {
	 		listener.exitCaseDefault(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitCaseDefault) {
			return visitor.visitCaseDefault(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bracketedExpression(): BracketedExpressionContext {
		return this.getTypedRuleContext(BracketedExpressionContext, 0) as BracketedExpressionContext;
	}
	public functionCall(): FunctionCallContext {
		return this.getTypedRuleContext(FunctionCallContext, 0) as FunctionCallContext;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public unaryOp(): UnaryOpContext {
		return this.getTypedRuleContext(UnaryOpContext, 0) as UnaryOpContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public newInstance(): NewInstanceContext {
		return this.getTypedRuleContext(NewInstanceContext, 0) as NewInstanceContext;
	}
	public input(): InputContext {
		return this.getTypedRuleContext(InputContext, 0) as InputContext;
	}
	public systemCall(): SystemCallContext {
		return this.getTypedRuleContext(SystemCallContext, 0) as SystemCallContext;
	}
	public POWER(): TerminalNode {
		return this.getToken(ElanParser.POWER, 0);
	}
	public binaryOp(): BinaryOpContext {
		return this.getTypedRuleContext(BinaryOpContext, 0) as BinaryOpContext;
	}
	public index(): IndexContext {
		return this.getTypedRuleContext(IndexContext, 0) as IndexContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(ElanParser.DOT, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public ifExpression(): IfExpressionContext {
		return this.getTypedRuleContext(IfExpressionContext, 0) as IfExpressionContext;
	}
	public elseExpression(): ElseExpressionContext {
		return this.getTypedRuleContext(ElseExpressionContext, 0) as ElseExpressionContext;
	}
	public withClause(): WithClauseContext {
		return this.getTypedRuleContext(WithClauseContext, 0) as WithClauseContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_expression;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BracketedExpressionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_bracketedExpression;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterBracketedExpression) {
	 		listener.enterBracketedExpression(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitBracketedExpression) {
	 		listener.exitBracketedExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitBracketedExpression) {
			return visitor.visitBracketedExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfExpressionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(ElanParser.IF, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_ifExpression;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterIfExpression) {
	 		listener.enterIfExpression(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitIfExpression) {
	 		listener.exitIfExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitIfExpression) {
			return visitor.visitIfExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElseExpressionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ELSE(): TerminalNode {
		return this.getToken(ElanParser.ELSE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_elseExpression;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterElseExpression) {
	 		listener.enterElseExpression(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitElseExpression) {
	 		listener.exitElseExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitElseExpression) {
			return visitor.visitElseExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LAMBDA(): TerminalNode {
		return this.getToken(ElanParser.LAMBDA, 0);
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(ElanParser.ARROW, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_lambda;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLambda) {
	 		listener.enterLambda(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLambda) {
	 		listener.exitLambda(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLambda) {
			return visitor.visitLambda(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IndexContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_SQ_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_SQ_BRACKET, 0);
	}
	public CLOSE_SQ_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_SQ_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(ElanParser.COMMA, 0);
	}
	public range(): RangeContext {
		return this.getTypedRuleContext(RangeContext, 0) as RangeContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_index;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterIndex) {
	 		listener.enterIndex(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitIndex) {
	 		listener.exitIndex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitIndex) {
			return visitor.visitIndex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DOUBLE_DOT(): TerminalNode {
		return this.getToken(ElanParser.DOUBLE_DOT, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_range;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterRange) {
	 		listener.enterRange(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitRange) {
	 		listener.exitRange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitRange) {
			return visitor.visitRange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal(): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, 0) as LiteralContext;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, 0);
	}
	public scopeQualifier(): ScopeQualifierContext {
		return this.getTypedRuleContext(ScopeQualifierContext, 0) as ScopeQualifierContext;
	}
	public dataStructureDefinition(): DataStructureDefinitionContext {
		return this.getTypedRuleContext(DataStructureDefinitionContext, 0) as DataStructureDefinitionContext;
	}
	public THIS(): TerminalNode {
		return this.getToken(ElanParser.THIS, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(ElanParser.DEFAULT, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_value;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScopeQualifierContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(ElanParser.DOT, i);
	}
	public PROPERTY(): TerminalNode {
		return this.getToken(ElanParser.PROPERTY, 0);
	}
	public GLOBAL(): TerminalNode {
		return this.getToken(ElanParser.GLOBAL, 0);
	}
	public LIBRARY(): TerminalNode {
		return this.getToken(ElanParser.LIBRARY, 0);
	}
	public PACKAGE(): TerminalNode {
		return this.getToken(ElanParser.PACKAGE, 0);
	}
	public namespace(): NamespaceContext {
		return this.getTypedRuleContext(NamespaceContext, 0) as NamespaceContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_scopeQualifier;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterScopeQualifier) {
	 		listener.enterScopeQualifier(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitScopeQualifier) {
	 		listener.exitScopeQualifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitScopeQualifier) {
			return visitor.visitScopeQualifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literalValue(): LiteralValueContext {
		return this.getTypedRuleContext(LiteralValueContext, 0) as LiteralValueContext;
	}
	public literalDataStructure(): LiteralDataStructureContext {
		return this.getTypedRuleContext(LiteralDataStructureContext, 0) as LiteralDataStructureContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_literal;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLiteral) {
	 		listener.enterLiteral(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLiteral) {
	 		listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralValueContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOL_VALUE(): TerminalNode {
		return this.getToken(ElanParser.BOOL_VALUE, 0);
	}
	public LITERAL_INTEGER(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_INTEGER, 0);
	}
	public LITERAL_FLOAT(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_FLOAT, 0);
	}
	public LITERAL_CHAR(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_CHAR, 0);
	}
	public enumValue(): EnumValueContext {
		return this.getTypedRuleContext(EnumValueContext, 0) as EnumValueContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_literalValue;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLiteralValue) {
	 		listener.enterLiteralValue(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLiteralValue) {
	 		listener.exitLiteralValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLiteralValue) {
			return visitor.visitLiteralValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStructureDefinitionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public listDefinition(): ListDefinitionContext {
		return this.getTypedRuleContext(ListDefinitionContext, 0) as ListDefinitionContext;
	}
	public arrayDefinition(): ArrayDefinitionContext {
		return this.getTypedRuleContext(ArrayDefinitionContext, 0) as ArrayDefinitionContext;
	}
	public tupleDefinition(): TupleDefinitionContext {
		return this.getTypedRuleContext(TupleDefinitionContext, 0) as TupleDefinitionContext;
	}
	public dictionaryDefinition(): DictionaryDefinitionContext {
		return this.getTypedRuleContext(DictionaryDefinitionContext, 0) as DictionaryDefinitionContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_dataStructureDefinition;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterDataStructureDefinition) {
	 		listener.enterDataStructureDefinition(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitDataStructureDefinition) {
	 		listener.exitDataStructureDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitDataStructureDefinition) {
			return visitor.visitDataStructureDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralDataStructureContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LITERAL_STRING(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_STRING, 0);
	}
	public literalTuple(): LiteralTupleContext {
		return this.getTypedRuleContext(LiteralTupleContext, 0) as LiteralTupleContext;
	}
	public literalList(): LiteralListContext {
		return this.getTypedRuleContext(LiteralListContext, 0) as LiteralListContext;
	}
	public literalDictionary(): LiteralDictionaryContext {
		return this.getTypedRuleContext(LiteralDictionaryContext, 0) as LiteralDictionaryContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_literalDataStructure;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLiteralDataStructure) {
	 		listener.enterLiteralDataStructure(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLiteralDataStructure) {
	 		listener.exitLiteralDataStructure(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLiteralDataStructure) {
			return visitor.visitLiteralDataStructure(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleDefinitionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_tupleDefinition;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterTupleDefinition) {
	 		listener.enterTupleDefinition(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitTupleDefinition) {
	 		listener.exitTupleDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitTupleDefinition) {
			return visitor.visitTupleDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralTupleContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_literalTuple;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLiteralTuple) {
	 		listener.enterLiteralTuple(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLiteralTuple) {
	 		listener.exitLiteralTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLiteralTuple) {
			return visitor.visitLiteralTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeconstructedTupleContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, i);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_deconstructedTuple;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterDeconstructedTuple) {
	 		listener.enterDeconstructedTuple(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitDeconstructedTuple) {
	 		listener.exitDeconstructedTuple(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitDeconstructedTuple) {
			return visitor.visitDeconstructedTuple(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListDefinitionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_listDefinition;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterListDefinition) {
	 		listener.enterListDefinition(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitListDefinition) {
	 		listener.exitListDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitListDefinition) {
			return visitor.visitListDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralListContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACE, 0);
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_literalList;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLiteralList) {
	 		listener.enterLiteralList(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLiteralList) {
	 		listener.exitLiteralList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLiteralList) {
			return visitor.visitLiteralList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ListDecompContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACE, 0);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(ElanParser.IDENTIFIER, i);
	}
	public COLON(): TerminalNode {
		return this.getToken(ElanParser.COLON, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACE, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_listDecomp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterListDecomp) {
	 		listener.enterListDecomp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitListDecomp) {
	 		listener.exitListDecomp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitListDecomp) {
			return visitor.visitListDecomp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayDefinitionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(ElanParser.ARRAY, 0);
	}
	public genericSpecifier(): GenericSpecifierContext {
		return this.getTypedRuleContext(GenericSpecifierContext, 0) as GenericSpecifierContext;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public LITERAL_INTEGER(): TerminalNode {
		return this.getToken(ElanParser.LITERAL_INTEGER, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_arrayDefinition;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterArrayDefinition) {
	 		listener.enterArrayDefinition(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitArrayDefinition) {
	 		listener.exitArrayDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitArrayDefinition) {
			return visitor.visitArrayDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryDefinitionContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACE, 0);
	}
	public kvp_list(): KvpContext[] {
		return this.getTypedRuleContexts(KvpContext) as KvpContext[];
	}
	public kvp(i: number): KvpContext {
		return this.getTypedRuleContext(KvpContext, i) as KvpContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_dictionaryDefinition;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterDictionaryDefinition) {
	 		listener.enterDictionaryDefinition(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitDictionaryDefinition) {
	 		listener.exitDictionaryDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitDictionaryDefinition) {
			return visitor.visitDictionaryDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralDictionaryContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACE(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACE, 0);
	}
	public CLOSE_BRACE(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACE, 0);
	}
	public literalKvp_list(): LiteralKvpContext[] {
		return this.getTypedRuleContexts(LiteralKvpContext) as LiteralKvpContext[];
	}
	public literalKvp(i: number): LiteralKvpContext {
		return this.getTypedRuleContext(LiteralKvpContext, i) as LiteralKvpContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_literalDictionary;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLiteralDictionary) {
	 		listener.enterLiteralDictionary(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLiteralDictionary) {
	 		listener.exitLiteralDictionary(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLiteralDictionary) {
			return visitor.visitLiteralDictionary(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KvpContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ElanParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_kvp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterKvp) {
	 		listener.enterKvp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitKvp) {
	 		listener.exitKvp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitKvp) {
			return visitor.visitKvp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralKvpContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_list(): LiteralContext[] {
		return this.getTypedRuleContexts(LiteralContext) as LiteralContext[];
	}
	public literal(i: number): LiteralContext {
		return this.getTypedRuleContext(LiteralContext, i) as LiteralContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ElanParser.COLON, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_literalKvp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLiteralKvp) {
	 		listener.enterLiteralKvp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLiteralKvp) {
	 		listener.exitLiteralKvp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLiteralKvp) {
			return visitor.visitLiteralKvp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOpContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MINUS(): TerminalNode {
		return this.getToken(ElanParser.MINUS, 0);
	}
	public NOT(): TerminalNode {
		return this.getToken(ElanParser.NOT, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_unaryOp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterUnaryOp) {
	 		listener.enterUnaryOp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitUnaryOp) {
	 		listener.exitUnaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinaryOpContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public arithmeticOp(): ArithmeticOpContext {
		return this.getTypedRuleContext(ArithmeticOpContext, 0) as ArithmeticOpContext;
	}
	public logicalOp(): LogicalOpContext {
		return this.getTypedRuleContext(LogicalOpContext, 0) as LogicalOpContext;
	}
	public conditionalOp(): ConditionalOpContext {
		return this.getTypedRuleContext(ConditionalOpContext, 0) as ConditionalOpContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_binaryOp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterBinaryOp) {
	 		listener.enterBinaryOp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitBinaryOp) {
	 		listener.exitBinaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitBinaryOp) {
			return visitor.visitBinaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArithmeticOpContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POWER(): TerminalNode {
		return this.getToken(ElanParser.POWER, 0);
	}
	public MULT(): TerminalNode {
		return this.getToken(ElanParser.MULT, 0);
	}
	public DIVIDE(): TerminalNode {
		return this.getToken(ElanParser.DIVIDE, 0);
	}
	public MOD(): TerminalNode {
		return this.getToken(ElanParser.MOD, 0);
	}
	public DIV(): TerminalNode {
		return this.getToken(ElanParser.DIV, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(ElanParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(ElanParser.MINUS, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_arithmeticOp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterArithmeticOp) {
	 		listener.enterArithmeticOp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitArithmeticOp) {
	 		listener.exitArithmeticOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitArithmeticOp) {
			return visitor.visitArithmeticOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOpContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AND(): TerminalNode {
		return this.getToken(ElanParser.AND, 0);
	}
	public OR(): TerminalNode {
		return this.getToken(ElanParser.OR, 0);
	}
	public XOR(): TerminalNode {
		return this.getToken(ElanParser.XOR, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_logicalOp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterLogicalOp) {
	 		listener.enterLogicalOp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitLogicalOp) {
	 		listener.exitLogicalOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitLogicalOp) {
			return visitor.visitLogicalOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalOpContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public GT(): TerminalNode {
		return this.getToken(ElanParser.GT, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(ElanParser.LT, 0);
	}
	public GE(): TerminalNode {
		return this.getToken(ElanParser.GE, 0);
	}
	public LE(): TerminalNode {
		return this.getToken(ElanParser.LE, 0);
	}
	public IS(): TerminalNode {
		return this.getToken(ElanParser.IS, 0);
	}
	public IS_NOT(): TerminalNode {
		return this.getToken(ElanParser.IS_NOT, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_conditionalOp;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterConditionalOp) {
	 		listener.enterConditionalOp(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitConditionalOp) {
	 		listener.exitConditionalOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitConditionalOp) {
			return visitor.visitConditionalOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VALUE_TYPE(): TerminalNode {
		return this.getToken(ElanParser.VALUE_TYPE, 0);
	}
	public dataStructureType(): DataStructureTypeContext {
		return this.getTypedRuleContext(DataStructureTypeContext, 0) as DataStructureTypeContext;
	}
	public TYPENAME(): TerminalNode {
		return this.getToken(ElanParser.TYPENAME, 0);
	}
	public genericSpecifier(): GenericSpecifierContext {
		return this.getTypedRuleContext(GenericSpecifierContext, 0) as GenericSpecifierContext;
	}
	public tupleType(): TupleTypeContext {
		return this.getTypedRuleContext(TupleTypeContext, 0) as TupleTypeContext;
	}
	public funcType(): FuncTypeContext {
		return this.getTypedRuleContext(FuncTypeContext, 0) as FuncTypeContext;
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_type;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataStructureTypeContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public genericSpecifier(): GenericSpecifierContext {
		return this.getTypedRuleContext(GenericSpecifierContext, 0) as GenericSpecifierContext;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(ElanParser.ARRAY, 0);
	}
	public LIST(): TerminalNode {
		return this.getToken(ElanParser.LIST, 0);
	}
	public DICTIONARY(): TerminalNode {
		return this.getToken(ElanParser.DICTIONARY, 0);
	}
	public ITERABLE(): TerminalNode {
		return this.getToken(ElanParser.ITERABLE, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_dataStructureType;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterDataStructureType) {
	 		listener.enterDataStructureType(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitDataStructureType) {
	 		listener.exitDataStructureType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitDataStructureType) {
			return visitor.visitDataStructureType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GenericSpecifierContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(ElanParser.LT, 0);
	}
	public OF(): TerminalNode {
		return this.getToken(ElanParser.OF, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ElanParser.GT, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_genericSpecifier;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterGenericSpecifier) {
	 		listener.enterGenericSpecifier(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitGenericSpecifier) {
	 		listener.exitGenericSpecifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitGenericSpecifier) {
			return visitor.visitGenericSpecifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TupleTypeContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_tupleType;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterTupleType) {
	 		listener.enterTupleType(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitTupleType) {
	 		listener.exitTupleType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitTupleType) {
			return visitor.visitTupleType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeListContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ElanParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ElanParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_typeList;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterTypeList) {
	 		listener.enterTypeList(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitTypeList) {
	 		listener.exitTypeList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitTypeList) {
			return visitor.visitTypeList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncTypeContext extends ParserRuleContext {
	constructor(parser?: ElanParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OPEN_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.OPEN_BRACKET, 0);
	}
	public typeList(): TypeListContext {
		return this.getTypedRuleContext(TypeListContext, 0) as TypeListContext;
	}
	public ARROW(): TerminalNode {
		return this.getToken(ElanParser.ARROW, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public CLOSE_BRACKET(): TerminalNode {
		return this.getToken(ElanParser.CLOSE_BRACKET, 0);
	}
    public get ruleIndex(): number {
    	return ElanParser.RULE_funcType;
	}
	public enterRule(listener: ElanListener): void {
	    if(listener.enterFuncType) {
	 		listener.enterFuncType(this);
		}
	}
	public exitRule(listener: ElanListener): void {
	    if(listener.exitFuncType) {
	 		listener.exitFuncType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ElanVisitor<Result>): Result {
		if (visitor.visitFuncType) {
			return visitor.visitFuncType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
