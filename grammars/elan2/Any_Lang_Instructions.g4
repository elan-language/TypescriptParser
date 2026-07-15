grammar Any_Lang_Instructions;
import Any_Lang_Lexer;
import Elan2_Fields;
import Elan2_Lexer;

// Globals
mainTop: ;
mainBottom: ;

functionTop: ;
functionBottom: ;

testTop: ;
testBottom: ;

procedureTop: ; 
procedureBottom: ;

concreteClassTop: ; 
concreteClassBottom: ;

abstractClassTop: ; 
abstractClassBottom: ;

constant: ;
enum: ;

// Statements
assert: ;
letStatement:;
print: ; // TODO argList should really be a single expression. Compiler currently ignores any additional arguments
variableDefinition: ; 
assignment: ; 
inputStatement: ; 
procedureCall: ;
throwStatement: ; 
returnStatement: ; 
elseIfClause: ;
elseClause: ;
catchStatement: ;

ifStatementTop: ;
ifStatementBottom: ;

whileLoopTop: ;
whileLoopBottom: ;

forLoopTop: ;
forLoopBottom: ;

tryStatementTop: ; 
tryStatementBottom: ;

// Members
constructorTop: ;
constructorBottom: ;

property: ;

functionMethodTop: ;
functionMethodBottom: ;

procedureMethodTop: ;
procedureMethodBottom: ;

abstractFunction: ;
abstractProcedure: ;