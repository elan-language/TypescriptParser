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
    GHOSTED? mainTop NL
       ordinaryStatement*
    mainBottom NL
    ;

function: 
    GHOSTED? functionTop NL
        (letStatement | ordinaryStatement)* /* statements with side-effects prevented by editor and/or compiler */
        returnStatement
    functionBottom NL
    ;

test: 
    GHOSTED? testTop NL
        (assert | letStatement | variableDefinition | commentStatement)*
    testBottom NL
    ;

procedure: 
     GHOSTED? procedureTop NL
        ordinaryStatement*
    procedureBottom NL
    ;

concreteClass:
    GHOSTED? concreteClassTop NL
        (constructor | property | functionMethod | procedureMethod | copyMethod | commentMember)*
    concreteClassBottom NL;

abstractClass:
    GHOSTED? abstractClassTop NL
        (property | functionMethod | procedureMethod | copyMethod | abstractFunction | abstractProcedure | commentMember)*
    abstractClassBottom NL;

commentGlobal:
    COMMENT NL
    ;  

// Statements
ordinaryStatement:
    print 
   | variableDefinition 
   | assignment 
   | inputStatement 
   | ifStatement 
   | whileLoop 
   | forLoop 
   | procedureCall 
   | tryStatement 
   | throwStatement 
   | commentStatement
   ;
   
ifStatement:
    GHOSTED? ifStatementTop NL
        (elseIfClause | elseClause | ordinaryStatement)*
    ifStatementBottom NL
    ;

whileLoop:
    GHOSTED? whileLoopTop NL
       ordinaryStatement*
    whileLoopBottom NL
    ;

forLoop:
    GHOSTED? forLoopTop NL
       ordinaryStatement*
    forLoopBottom NL
    ;

tryStatement:
    GHOSTED? tryStatementTop NL
        ordinaryStatement*
        catchStatement
        ordinaryStatement*
    tryStatementBottom NL
    ;

commentStatement: COMMENT NL; 

// Members
constructor:

    GHOSTED? constructorTop NL
        ordinaryStatement*
    constructorBottom NL
    ;

functionMethod:
    GHOSTED? PRIVATE? functionMethodTop NL
        (letStatement | ordinaryStatement)*
        returnStatement
    functionMethodBottom NL
    ;

procedureMethod:
    GHOSTED? PRIVATE?  procedureMethodTop NL
        ordinaryStatement*
    procedureMethodBottom NL
    ;

copyMethod:
    GHOSTED? PRIVATE? copyMethodTop NL
        ordinaryStatement*
        returnStatement
    copyMethodBottom NL
    ;

commentMember: COMMENT? NL;
// END Elan2_Frames

// START RefLang_Frames
// Globals
mainTop: MAIN;
mainBottom: END MAIN;

functionTop: FUNCTION methodName OPEN_BRACKET paramsList? CLOSE_BRACKET RETURNS type;
functionBottom: END FUNCTION;

testTop: TEST testName;
testBottom: END TEST;

procedureTop: PROCEDURE methodName OPEN_BRACKET paramsList? CLOSE_BRACKET; 
procedureBottom: END PROCEDURE;

concreteClassTop: CLASS typeName (INHERITS typeName)?; 
concreteClassBottom: END CLASS;

abstractClassTop: ABSTRACT CLASS typeName (INHERITS typeName)?;  
abstractClassBottom: END ABSTRACT CLASS;

constant: GHOSTED? CONSTANT identifier SET TO constantValue NL;
enum: GHOSTED? ENUM typeName enumValuesList NL;

// Statements
assert: GHOSTED? ASSERT assertActual EQUAL expression NL; 
letStatement: GHOSTED? LET identifier BE expression NL;
print: GHOSTED? PRINT OPEN_BRACKET argList CLOSE_BRACKET NL; // TODO argList should really be a single expression. Compiler currently ignores any additional arguments
variableDefinition: GHOSTED? VARIABLE identifier SET TO expression NL; 
assignment: GHOSTED? ASSIGN assignable TO expression NL; 
inputStatement: GHOSTED? INPUT identifier SET TO methodName OPEN_BRACKET argList CLOSE_BRACKET NL; 
procedureCall: GHOSTED? CALL procRef OPEN_BRACKET argList CLOSE_BRACKET NL;
throwStatement: GHOSTED? THROW typeName litString NL; // TODO: currently has typeNameUse 
returnStatement: RETURN expression NL; // not ghostable
elseIfClause: GHOSTED? ELIF expression THEN NL;
elseClause: GHOSTED? ELSE NL; // TODO
catchStatement: GHOSTED? CATCH identifier AS typeName NL;

ifStatementTop: IF expression THEN;
ifStatementBottom: END IF;

whileLoopTop: WHILE expression;
whileLoopBottom: END WHILE;

forLoopTop: FOR identifier IN expression;
forLoopBottom: END FOR;

tryStatementTop: TRY; 
tryStatementBottom: END TRY;

// Members
constructorTop: CONSTRUCTOR OPEN_BRACKET paramsList? CLOSE_BRACKET;
constructorBottom: END CONSTRUCTOR;

property: PRIVATE? PROPERTY identifier AS type NL;

functionMethodTop: functionTop;
functionMethodBottom: functionBottom;

procedureMethodTop: procedureTop;
procedureMethodBottom: procedureBottom;

copyMethodTop: COPY methodName OPEN_BRACKET paramsList CLOSE_BRACKET RETURNS type;
copyMethodBottom: END COPY;

abstractFunction: GHOSTED? ABSTRACT functionTop;
abstractProcedure: GHOSTED? ABSTRACT procedureTop;
// END RefLang_Frames

// START Elan2_Fields
identifier: NAME_STARTING_LC;
assignable: identifierWithOptIndexes | propertyRef;

methodName: NAME_STARTING_LC;
testName: NAME_STARTING_TEST_;
typeName:  INT_NAME | FLOAT_NAME | BOOL_NAME | STRING_NAME | LIST_NAME | NAME_STARTING_UC;

constantValue: litValue | identifier;

argList: argument (COMMA argument)*;
argument: lambda | expression;
paramsList: paramDef (COMMA paramDef)*;

type: typeTuple | typeName | typeGeneric ; 

enumValuesList:  identifier (COMMA identifier)*;

procRef: (thisInstance DOT)? (identifierWithOptIndexes DOT)? methodName; 

assertActual: expression;
// END Elan2_Fields

// START Elan2_SubNodes
litValue: LIT_BOOLEAN | litInt | litFloat | litString | enumValue | litRegExp;
litInt: LITERAL_INTEGER | LITERAL_BINARY | LITERAL_HEX;
litFloat: LITERAL_FLOAT;
enumValue: typeName DOT identifier;
litRegExp:;
litString: LITERAL_STRING | INTERPOLATED_STRING;

thisInstance: THIS;

index: OPEN_SQ_BRACKET expression CLOSE_SQ_BRACKET;

identifierWithOptIndexes: identifier index*;

propertyRef: thisInstance DOT identifierWithOptIndexes;

expression:
      newInstance
    | ifExpression
    | unaryExpression
    | term
    | binaryExpression
    ;

term:  
    (thisInstance | chainable) (DOT chainable)*
    ; 

chainable:
    (
      identifier
    | methodCall
    | bracketedExpression
    | tuple
    | litValue
    | list
    )
    index*
    ;

bracketedExpression: OPEN_BRACKET expression CLOSE_BRACKET;
unaryExpression: (MINUS | NOT) term;
binaryExpression: term binaryOperator expression; // ? expression binaryOperator expression ?
tuple: OPEN_BRACKET expression COMMA expression (COMMA expression)* CLOSE_BRACKET;
methodCall: methodName OPEN_BRACKET argList CLOSE_BRACKET;

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
