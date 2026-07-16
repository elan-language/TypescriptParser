grammar Elan2_Instructions;

// LEXER first

// LANGUAGE-SPECIFIC LEXER RULES
ABSTRACT:      'abstract';
AND:           'and';
AS:			   'as';
ASSERT:		   'assert';
ASSIGN:        'assign';
BE:			   'be';
CALL:		   'call';
CATCH:         'catch';
CLASS:         'class';
CONSTANT:      'constant';
CONSTRUCTOR:   'constructor';
COPY:		   'copy';
DIV: 		   'div';
ELIF:          'elif';
ELSE:          'else';
END:		   'end'; 
ENUM:          'enum';
EVALUATES:     'evaluates';
FOR:           'for';
FROM:		   'from';
FUNCTION:	   'function';
IF:            'if'; 
IN:            'in';
INHERITS:      'inherits';
INPUT:         'input';
IS:            'is';
ISNT:          'isnt';
LAMBDA:		   'lambda';
LET:           'let';
MAIN:		   'main';
MOD:           'mod';
NEW:		   'new';
NOT:           'not';
OF:			   'of';
OR:            'or';
PRINT:		   'print';
PRIVATE:       'private';
PROCEDURE:	   'procedure';
PROPERTY:      'property';
RETURN:        'return';
RETURNS:       'returns';
SET:	 	   'set';
STEP:		   'step';
TEST:		   'test';
THEN: 		   'then';
THIS: 		   'this';
THROW:		   'throw';
TO:			   'to';
TRY:           'try';
VARIABLE:	   'variable';
WHILE:         'while';

COMMENT: '#' ~( '\r' | '\n' )*;

TRUE:           'true';
FALSE:          'false';

EQUAL:          IS;
NOT_EQUAL:      ISNT;
ARROW:          '=>';

THIS_INSTANCE:  THIS;

BINARY_PREFIX:  '0b';
HEX_PREFIX:     '0x';
INTERPOLATED_STRING_PREFIX: '$';

// Then Elan generic lexer rules
WS  :   [ \t]+ -> skip ;
NL: [\r\n\f]+ ;

SINGLE_EQUALS:			 	'=';
OPEN_BRACE:               	'{';
CLOSE_BRACE:              	'}';
OPEN_SQ_BRACKET:          	'[';
CLOSE_SQ_BRACKET:         	']';
OPEN_BRACKET:              	'(';
CLOSE_BRACKET:             	')';
DOT:                      	'.';
COMMA:                    	','; 
COLON:                    	':';
PLUS:                     	'+';
MINUS:                    	'-';
MULT:                     	'*';
DIVIDE:                   	'/';
LT:                       	'<';
GT:                       	'>';
LE:                       	'<=';
GE:                       	'>=';
DOUBLE_QUOTES:			  	'"';

IF_: 'if_'; // Temporary solution - to be replaced by language-specific syntax

NAME_STARTING_LC:			UnicodeClassLL IdentifierPartCharacter*;
NAME_STARTING_UC:         UnicodeClassLU IdentifierPartCharacter*;

LITERAL_INTEGER:     	[0-9] [0-9]*;
LITERAL_BINARY: 		[01]+;
LITERAL_HEX: 			[0-9A-Fa-f]+;
LITERAL_FLOAT:        	LITERAL_INTEGER DOT LITERAL_INTEGER ExponentPart?;
LITERAL_STRING:         '"'  (~["\u0085] | CommonCharacter)* '"';

WHITESPACES:   (Whitespace)+  -> skip;
TEXT: CommonCharacter+;

fragment InputCharacter: ~[\r\n\u0085];

fragment NewLineCharacter
	: '\u000D' // Carriage Return
	| '\u000A' // Line Feed 
	| '\u0085' // Next Line 
	;

fragment ExponentPart:   [e] (PLUS | MINUS)? LITERAL_INTEGER;

fragment CommonCharacter
	: SimpleEscapeSequence
	| HexEscapeSequence
	| UnicodeEscapeSequence
	;

fragment SimpleEscapeSequence
	: '\\\''
	| '\\"'
	| '\\\\'
	| '\\0'
	| '\\a'
	| '\\b'
	| '\\f'
	| '\\n'
	| '\\r'
	| '\\t'
	| '\\v'
	;

fragment HexEscapeSequence
	: '\\x' HexDigit
	| '\\x' HexDigit HexDigit
	| '\\x' HexDigit HexDigit HexDigit
	| '\\x' HexDigit HexDigit HexDigit HexDigit
	;

fragment NewLine: '\r\n' | '\r' | '\n'| '\u0085';

fragment Whitespace
	: UnicodeClassZS //'<Any Character With Unicode Class Zs>'
	| '\u0009' // Horizontal Tab 
	| '\u000B' // Vertical Tab
	| '\u000C' // Form Feed
	;

fragment UnicodeClassZS
	: '\u0020' // SPACE
	| '\u00A0' // NO_BREAK SPACE
	;

fragment IdentifierStartingUCorLC: (UnicodeClassLL|UnicodeClassLU) IdentifierPartCharacter*;

fragment IdentifierPartCharacter
	: UnicodeClassLU
	| UnicodeClassLL
	| DecimalDigitCharacter
	| '_'
	;

fragment LetterCharacter
	: UnicodeClassLU
	| UnicodeClassLL
	| UnicodeEscapeSequence
	;

fragment DecimalDigitCharacter
	: UnicodeClassND
	| UnicodeEscapeSequence
	;

fragment ConnectingCharacter:  UnicodeEscapeSequence;

fragment FormattingCharacter: UnicodeEscapeSequence;

fragment UnicodeEscapeSequence
	: '\\u' HexDigit HexDigit HexDigit HexDigit
	| '\\U' HexDigit HexDigit HexDigit HexDigit HexDigit HexDigit HexDigit HexDigit
	;

fragment HexDigit : [0-9] | [A-F] | [a-f];

fragment UnicodeClassLU: '\u0041'..'\u005a';
fragment UnicodeClassLL	: '\u0061'..'\u007A';
fragment UnicodeClassND	: '\u0030'..'\u0039';

// Grammar
file: global* NL* EOF;

/* Globals */
global:
	  main
	| function
 	| test
    | procedure
	| constant
	| enum
	| concreteClass
	| abstractClass
	| commentGlobal
    ; 

main: 
    NL mainTop
       ordinaryStatement*
    NL mainBottom
    ;

function: 
    NL functionTop
        (letStatement | ordinaryStatement)* /* statements with side-effects prevented by editor and/or compiler */
        returnStatement
    NL functionBottom
    ;

test: 
    NL testTop
        (assert | letStatement | variableDefinition | commentStatement)*
    NL testBottom
    ;

procedure: 
    NL procedureTop
        ordinaryStatement*
    NL procedureBottom
    ;

concreteClass:
    NL concreteClassTop
        constructor
        (property | functionMethod | procedureMethod | copyMethod)*
    NL concreteClassBottom;

abstractClass:
    NL abstractClassTop
        (property | functionMethod | procedureMethod | copyMethod | abstractFunction | abstractProcedure)*
    NL abstractClassBottom;

commentGlobal:
    NL COMMENT
    ;  

/* Statements */
ordinaryStatement:
   print | variableDefinition | assignment | inputStatement | ifStatement | whileLoop | forLoop | procedureCall | tryStatement | throwStatement | commentStatement
   ;
   
ifStatement:
    NL ifStatementTop
        (elseIfClause | elseClause | ordinaryStatement)*
    NL ifStatementBottom
    ;

whileLoop:
    NL whileLoopTop
       ordinaryStatement*
    NL whileLoopBottom
    ;

forLoop:
    NL forLoopTop
       ordinaryStatement*
    NL forLoopBottom
    ;

tryStatement:
    NL tryStatementTop
        ordinaryStatement*
        catchStatement
        ordinaryStatement
    NL tryStatementBottom
    ;

commentStatement: NL COMMENT; 

/* Members */
constructor:
    NL constructorTop
        ordinaryStatement*
    NL constructorBottom
    ;

functionMethod:
    NL functionMethodTop
        ordinaryStatement*
    NL functionMethodBottom
    ;

procedureMethod:
    NL procedureMethodTop
        ordinaryStatement*
    NL procedureMethodBottom
    ;

copyMethod:
    NL copyMethodTop
        ordinaryStatement*
    NL copyMethodBottom
    ;

commentMember: NL COMMENT?;

// LANGUAGE-SPECIFIC INSTRUCTIONS:
// Globals
mainTop: MAIN;
mainBottom: END MAIN;

functionTop: FUNCTION methodName OPEN_BRACKET paramsList CLOSE_BRACKET RETURNS type;
functionBottom: END FUNCTION;

testTop: TEST 'test_'testName; // TODO
testBottom: END TEST;

procedureTop: PROCEDURE methodName OPEN_BRACKET paramsList CLOSE_BRACKET; 
procedureBottom: END PROCEDURE;

concreteClassTop: CLASS typeName (INHERITS typeName)?; 
concreteClassBottom: END CLASS;

abstractClassTop: ABSTRACT CLASS typeName (INHERITS typeName)?;  
abstractClassBottom: END ABSTRACT CLASS;

constant: NL CONSTANT identifier SET TO constantValue;
enum: NL ENUM typeName enumValuesList;

// Statements
assert: NL ASSERT assertActual EVALUATES TO expression; 
letStatement: NL identifier LET BE expression;
print: NL PRINT OPEN_BRACKET argList CLOSE_BRACKET; // TODO argList should really be a single expression. Compiler currently ignores any additional arguments
variableDefinition: NL VARIABLE identifier SET TO expression; 
assignment: NL ASSIGN assignable TO expression; 
inputStatement: NL INPUT identifier SET TO 'inputString' OPEN_BRACKET argList CLOSE_BRACKET; 
procedureCall: NL CALL procRef OPEN_BRACKET argList CLOSE_BRACKET;
throwStatement: NL THROW typeName litString; // TODO: currently has typeNameUse 
returnStatement: NL RETURN expression; 
elseIfClause:NL ELIF expression THEN;
elseClause: NL ELSE; // TODO
catchStatement: NL CATCH identifier AS expression;

ifStatementTop: IF expression THEN;
ifStatementBottom: END IF;

whileLoopTop: WHILE expression;
whileLoopBottom: END WHILE;

forLoopTop: FOR identifier IN expression;
forLoopBottom: END FOR;

tryStatementTop: TRY; 
tryStatementBottom: END TRY;

// Members
constructorTop: CONSTRUCTOR OPEN_BRACKET paramsList CLOSE_BRACKET;
constructorBottom: END CONSTRUCTOR;

property: NL PROPERTY identifier AS type;

functionMethodTop: functionTop;
functionMethodBottom: functionBottom;

procedureMethodTop: procedureTop;
procedureMethodBottom: procedureBottom;

copyMethodTop: COPY methodName OPEN_BRACKET paramsList CLOSE_BRACKET RETURNS type;
copyMethodBottom: END COPY;

abstractFunction: NL ABSTRACT functionTop;
abstractProcedure: NL ABSTRACT procedureTop;

// Elan2 fields
identifier: NAME_STARTING_LC;
assignable: identifierWithOptIndexes | propertyRef;

methodName: NAME_STARTING_LC;
testName: NAME_STARTING_LC | NAME_STARTING_UC;
typeName:  NAME_STARTING_UC;

constantValue: litValue | identifier;

argList: argument (COMMA argument)*;
argument: lambda | expression;
paramsList: paramDef (COMMA paramDef)*;

type: typeTuple | typeName | typeGeneric ; 

enumValuesList:  identifier (COMMA identifier)*;

procRef: (THIS_INSTANCE DOT)? (identifier DOT)? methodName; 

assertActual: expression;

// ELAN2 NODES

litValue: litBoolean | litInt | litFloat | litString | enumValue | litRegExp;
litBoolean: TRUE | FALSE;
litInt: LITERAL_INTEGER | (BINARY_PREFIX LITERAL_BINARY) | (HEX_PREFIX LITERAL_HEX);
litFloat: LITERAL_FLOAT;
enumValue: typeName DOT identifier;
litRegExp:;
litString: LITERAL_STRING |  interpolatedString;

index: OPEN_SQ_BRACKET expression CLOSE_SQ_BRACKET;

identifierWithOptIndexes: identifier index*;

propertyRef: THIS_INSTANCE DOT identifierWithOptIndexes;

expression:
      newInstance
    | ifExpression
    | term
    | (MINUS | NOT) term
    | term binaryOperator expression
    ;
  
term:  
    (THIS_INSTANCE | chainable) (DOT chainable)*
    ; 

chainable:
    (
    ( OPEN_BRACKET expression CLOSE_BRACKET)
    | identifier
    | litValue
    | list
    | methodName OPEN_BRACKET argList CLOSE_BRACKET
    )
    index*
    ;

binaryOperator: 
  EQUAL | NOT_EQUAL | GT | LT | GE | LE |
  MULT | DIVIDE | PLUS | MINUS | AND | OR | MOD;
     
ifExpression: IF_ OPEN_BRACKET expression COMMA expression COMMA expression CLOSE_BRACKET;

// LANGUAGE-SPECIFIC NODES

newInstance:  NEW type OPEN_BRACKET argList CLOSE_BRACKET;

paramDef: identifier AS type;

typeGeneric: typeName LT OF type (COMMA type)* GT;

typeTuple: OPEN_BRACKET type (COMMA type)+ CLOSE_BRACKET;

lambda: LAMBDA (paramsList | argList ) ARROW expression;

list: OPEN_SQ_BRACKET expression (COMMA expression)* CLOSE_SQ_BRACKET;

interpolatedString: INTERPOLATED_STRING_PREFIX DOUBLE_QUOTES segment* DOUBLE_QUOTES;

segment: textSegment | fieldSegment;

textSegment: TEXT;

fieldSegment: OPEN_BRACE expression CLOSE_BRACE;
