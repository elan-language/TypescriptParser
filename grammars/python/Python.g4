grammar Python;
import Python_Lexer;

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
    DEF MAIN OPEN_BRACKET CLOSE_BRACKET COMMENT NL
       ordinaryStatement*
    COMMENT NL
    ;

function: 
    DEF methodName OPEN_BRACKET paramsList? CLOSE_BRACKET ARROW type COLON COMMENT NL
        (letStatement | ordinaryStatement)* /* statements with side-effects prevented by editor and/or compiler */
        returnStatement
    COMMENT NL
    ;

test: 
    CLASS testName OPEN_BRACKET TESTCASE CLOSE_BRACKET COMMENT NL
        (assert | letStatement | variableDefinition | commentStatement)*
    COMMENT NL
    ;

procedure: 
    DEF methodName OPEN_BRACKET paramsList? CLOSE_BRACKET ARROW NONE COLON COMMENT NL
        ordinaryStatement*
    COMMENT NL
    ;

constant: identifier EQUAL constantValue COMMENT NL;

// `<el-kw>${this.CLASS}</el-kw> ${frame.name.renderAsHtml()}(<el-type>Enum</el-type>):${frame.values.renderAsHtml()}`
enum: CLASS typeName OPEN_BRACKET ENUM CLOSE_BRACKET COLON NL
        enumValuesList NL
      COMMENT;  // No end comment, currently

concreteClass:
    CLASS typeName (OPEN_BRACKET typeName CLOSE_BRACKET)? NL
        (constructorMember | property | functionMethod | procedureMethod | commentMember)*
    COMMENT NL;

abstractClass:
    CLASS typeName (OPEN_BRACKET typeName | ABC CLOSE_BRACKET) NL
        (property | functionMethod | procedureMethod | abstractFunction | abstractProcedure | commentMember)*
    COMMENT NL;

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
    IF expression COLON NL
        (elseIfClause | elseClause | ordinaryStatement)*
    COMMENT NL
    ;

whileLoop:
    WHILE expression COLON NL
       ordinaryStatement*
    COMMENT NL
    ;

forLoop:
    FOR identifier IN expression COLON NL
       ordinaryStatement*
    COMMENT NL
    ;

tryStatement:
    TRY NL
        ordinaryStatement*
        catchStatement
        ordinaryStatement*
    COMMENT NL
    ;

//self.assertEqual(actual, expected)
assert: THIS_INSTANCE DOT ASSERT_EQUAL OPEN_BRACKET assertActual COMMA expression CLOSE_BRACKET NL; 
letStatement: identifier EQUAL expression COMMENT NL;
print: PRINT OPEN_BRACKET expression? CLOSE_BRACKET NL;
variableDefinition: identifier EQUAL expression COMMENT NL; 
assignment: assignable EQUAL expression COMMENT NL; 
inputStatement: identifier EQUAL INPUT OPEN_BRACKET expression CLOSE_BRACKET NL; 
procedureCall: term COMMENT NL; // Compiler to check that term ends in a methodCall, and that the method is a procedure
throwStatement: RAISE typeName OPEN_BRACKET litString CLOSE_BRACKET NL;
returnStatement: RETURN expression NL; // not ghostable
elseIfClause: ELIF expression COLON NL;
elseClause: ELSE COLON NL;
catchStatement: EXCEPT typeName AS identifier NL;
commentStatement: COMMENT NL; 

// Members
constructorMember:
// `DEF __init__(paramsList) -> None:`;
    DEF INIT OPEN_BRACKET paramsList? CLOSE_BRACKET ARROW NONE COLON NL
        ordinaryStatement*
    COMMENT NL
    ;

property: identifier COLON type NL;

functionMethod:
    DEF methodName OPEN_BRACKET paramsList? CLOSE_BRACKET ARROW type COLON COMMENT NL
        (letStatement | ordinaryStatement)*
        returnStatement
    COMMENT NL
    ;

procedureMethod:
    DEF methodName OPEN_BRACKET paramsList? CLOSE_BRACKET ARROW NONE COLON COMMENT NL
        ordinaryStatement*
    COMMENT NL
    ;

abstractFunction: ABSTRACT_METHOD NL
                  DEF methodName OPEN_BRACKET paramsList? CLOSE_BRACKET ARROW type COLON NL
                    PASS COMMENT NL;


abstractProcedure: ABSTRACT_METHOD NL
                  DEF methodName OPEN_BRACKET paramsList? CLOSE_BRACKET ARROW NONE COLON NL
                    PASS COMMENT NL;

commentMember: COMMENT? NL;
// END Frames

// START Fields
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

assertActual: expression;
// END Fields

// START SubNodes
litValue: LIT_BOOLEAN | litInt | litFloat | litString | enumValue; // litRegExp
litInt: LITERAL_INTEGER | LITERAL_BINARY | LITERAL_HEX;
litFloat: LITERAL_FLOAT;
enumValue: typeName DOT identifier;
// litRegExp:;
litString: LITERAL_STRING | INTERPOLATED_STRING;

index: OPEN_SQ_BRACKET expression CLOSE_SQ_BRACKET;

identifierWithOptIndexes: identifier index*;

propertyRef: THIS_INSTANCE DOT identifierWithOptIndexes;

expression:
      newInstance
    | unaryExpression
    | term
    | expression binaryOperator expression
    | IF_ OPEN_BRACKET expression COMMA expression COMMA expression CLOSE_BRACKET 
      // specified inline anticipating Python's `expression IF expression ( ELIF expression )* ELSE expression
    ;

term: chainHead (DOT chainable)*; 

chainHead: THIS_INSTANCE | bracketedExpression  | tuple | litValue | list| chainable;

chainable: ( identifier | methodCall ) index*;

bracketedExpression: OPEN_BRACKET expression CLOSE_BRACKET;
unaryExpression: (MINUS | NOT) term;
binaryExpression: term binaryOperator expression; // ? expression binaryOperator expression ?
tuple: OPEN_BRACKET expression COMMA expression (COMMA expression)* CLOSE_BRACKET;
methodCall: methodName OPEN_BRACKET argList? CLOSE_BRACKET;

binaryOperator: EQUAL | NOT_EQUAL | GT | LT | GE | LE |  MULT | DIVIDE | PLUS | MINUS | AND | OR | MOD;
     
newInstance:  type OPEN_BRACKET argList? CLOSE_BRACKET;

paramDef: identifier COLON type;

typeGeneric: typeName OPEN_SQ_BRACKET type (COMMA type)* CLOSE_SQ_BRACKET;

typeTuple:  TUPLE OPEN_SQ_BRACKET type (COMMA type)+ CLOSE_SQ_BRACKET;

lambda: LAMBDA argList COLON expression;

list: OPEN_SQ_BRACKET expression (COMMA expression)* CLOSE_SQ_BRACKET;

interpolatedString: INTERPOLATED_STRING_PREFIX LITERAL_STRING;

power: term POWER term;

// END SubNodes
