grammar Elan2;
import Elan2_Lexer;

// START Elan2_Frames
file: COMMENT? global* NL* EOF;

// Globals
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

// Statements
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

// Members
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
// END Elan2_Frames

// START RefLang_Frames
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
letStatement: NL LET identifier BE expression;
print: NL PRINT OPEN_BRACKET argList CLOSE_BRACKET; // TODO argList should really be a single expression. Compiler currently ignores any additional arguments
variableDefinition: NL VARIABLE identifier SET TO expression; 
assignment: NL ASSIGN assignable TO expression; 
inputStatement: NL INPUT identifier SET TO methodName OPEN_BRACKET argList CLOSE_BRACKET; 
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
// END RefLang_Frames

// START Elan2_Fields
identifier: NAME_STARTING_LC;
assignable: identifierWithOptIndexes | propertyRef;

methodName: NAME_STARTING_LC;
testName: NAME_STARTING_LC | NAME_STARTING_UC;
typeName:  INT_NAME | FLOAT_NAME | BOOL_NAME | STRING_NAME | LIST_NAME | NAME_STARTING_UC;

constantValue: litValue | identifier;

argList: argument (COMMA argument)*;
argument: lambda | expression;
paramsList: paramDef (COMMA paramDef)*;

type: typeTuple | typeName | typeGeneric ; 

enumValuesList:  identifier (COMMA identifier)*;

procRef: (THIS_INSTANCE DOT)? (identifier DOT)? methodName; 

assertActual: expression;
// END Elan2_Fields

// START Elan2_SubNodes
litValue: litBoolean | litInt | litFloat | litString | enumValue | litRegExp;
litBoolean: TRUE | FALSE;
litInt: LITERAL_INTEGER | (BINARY_PREFIX LITERAL_BINARY) | (HEX_PREFIX LITERAL_HEX);
litFloat: LITERAL_FLOAT;
enumValue: typeName DOT identifier;
litRegExp:;
litString: LITERAL_STRING | INTERPOLATED_STRING;

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
// END Elan2_SubNodes

// START RefLang_SubNodes
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
// END RefLang_SubNodes
