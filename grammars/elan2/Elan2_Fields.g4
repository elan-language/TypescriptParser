grammar Elan2_Fields;
import Elan2_Nodes;
import Elan2_Lexer;

//Each of these nodes represents a whole field within an instuction (frame)

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
