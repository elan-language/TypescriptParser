grammar RefLang_Instructions; 
import RefLang_Lexer;
import Elan2_Fields;
import Elan2_Lexer;

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
elseIfClause:NL ELSE IF expression;
elseClause: NL ELSE; // TODO
catchStatement: NL CATCH identifier AS expression;

ifStatementTop: IF expression;
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

abstractFunction: NL ABSTRACT functionTop;
abstractProcedure: NL ABSTRACT procedureTop;