grammar Elan;
import Elan_Lexer;

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
    NL GHOSTED? mainTop
       ordinaryStatement*
    NL mainBottom
    ;

function: 
    NL GHOSTED? functionTop
        (letStatement | ordinaryStatement)* /* statements with side-effects prevented by editor and/or compiler */
        returnStatement
    NL functionBottom
    ;

test: 
    NL GHOSTED? testTop
        (assert | letStatement | variableDefinition | commentStatement)*
    NL testBottom
    ;

procedure: 
    NL GHOSTED? procedureTop
        ordinaryStatement*
    NL procedureBottom
    ;

concreteClass:
    NL GHOSTED? concreteClassTop
        (econstructor | property | functionMethod | procedureMethod | copyMethod | commentMember)*
    NL concreteClassBottom;

abstractClass:
    NL GHOSTED? abstractClassTop
        (property | functionMethod | procedureMethod | copyMethod | abstractFunction | abstractProcedure | commentMember)*
    NL abstractClassBottom;

commentGlobal:
    NL COMMENT
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
    NL GHOSTED? ifStatementTop
        (elseIfClause | elseClause | ordinaryStatement)*
    NL ifStatementBottom
    ;

whileLoop:
    NL GHOSTED? whileLoopTop
       ordinaryStatement*
    NL whileLoopBottom
    ;

forLoop:
    NL GHOSTED? forLoopTop
       ordinaryStatement*
    NL forLoopBottom
    ;

tryStatement:
    NL GHOSTED? tryStatementTop
        ordinaryStatement*
        catchStatement
        ordinaryStatement*
    NL tryStatementBottom
    ;

commentStatement: NL COMMENT; 

// Members
econstructor:

    NL GHOSTED? constructorTop
        ordinaryStatement*
    NL constructorBottom
    ;

functionMethod:
    NL GHOSTED? PRIVATE? functionMethodTop
        (letStatement | ordinaryStatement)*
        returnStatement
    NL functionMethodBottom
    ;

procedureMethod:
    NL GHOSTED? PRIVATE?  procedureMethodTop
        ordinaryStatement*
    NL procedureMethodBottom
    ;

copyMethod:
    NL GHOSTED? PRIVATE? copyMethodTop
        ordinaryStatement*
        returnStatement
    NL copyMethodBottom
    ;

commentMember: NL COMMENT?;
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

constant: NL GHOSTED? CONSTANT identifier SET TO constantValue;
enum: NL GHOSTED? ENUM typeName enumValuesList;

// Statements
assert: NL GHOSTED? ASSERT assertActual EQUAL expression; 
letStatement: NL GHOSTED? LET identifier BE expression;
print: NL GHOSTED? PRINT OPEN_BRACKET argList CLOSE_BRACKET; // TODO argList should really be a single expression. Compiler currently ignores any additional arguments
variableDefinition: NL GHOSTED? VARIABLE identifier SET TO expression; 
assignment: NL GHOSTED? ASSIGN assignable TO expression; 
inputStatement: NL GHOSTED? INPUT identifier SET TO methodName OPEN_BRACKET argList CLOSE_BRACKET; 
procedureCall: NL GHOSTED? CALL procRef OPEN_BRACKET argList CLOSE_BRACKET;
throwStatement: NL GHOSTED? THROW typeName litString; // TODO: currently has typeNameUse 
returnStatement: NL RETURN expression; // not ghostable
elseIfClause:NL GHOSTED? ELIF expression THEN;
elseClause: NL GHOSTED? ELSE; // TODO
catchStatement: NL GHOSTED? CATCH identifier AS typeName;

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

property: NL PRIVATE? PROPERTY identifier AS type;

functionMethodTop: functionTop;
functionMethodBottom: functionBottom;

procedureMethodTop: procedureTop;
procedureMethodBottom: procedureBottom;

copyMethodTop: COPY methodName OPEN_BRACKET paramsList CLOSE_BRACKET RETURNS type;
copyMethodBottom: END COPY;

abstractFunction: NL GHOSTED? ABSTRACT functionTop;
abstractProcedure: NL GHOSTED? ABSTRACT procedureTop;
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
