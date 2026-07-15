grammar Elan2_Instructions;
import Elan2_Lexer;
import Any_Lang_Instructions; /* Dynamically overwritten to import target-language-specific grammar e.g. Python*/
import Any_Lang_Lexer; 

file: global*;

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

// constant & enum defined in lang-specific grammar

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
    NL COMMENT_MARKER TEXT?
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

commentStatement: NL COMMENT_MARKER TEXT?; 

/* Members */
constructor:
    NL constructorTop
        ordinaryStatement*
    NL constructorBottom
    ;

procedureMethod:;
functionMethod:;
abstractProcedure:;
abstractFunction:;
copyMethod:;

commentMember: NL COMMENT_MARKER TEXT?;  