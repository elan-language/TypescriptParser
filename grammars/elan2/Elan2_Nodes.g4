grammar Elan2_Nodes;
import Elan2_Lexer;
//import Ref_Lang_Lexer; // To be replaced by e.g. Python_Lexer
import RefLang_Nodes; // To be replaced by e.g. Python_Nodes

litValue: litBoolean | litInt | litFloat | litString | enumValue | litRegExp;
litBoolean: TRUE | FALSE;
litInt: LITERAL_INTEGER | (BINARY_PREFIX LITERAL_BINARY) | (HEX_PREFIX LITERAL_HEX);
litFloat: LITERAL_FLOAT;
enumValue:;
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

binaryOperator: EQUAL | NOT_EQUAL | GT | LT | GE | LE | MULT | DIVIDE | PLUS | MINUS | AND | OR | MOD;
     
ifExpression: IF_ OPEN_BRACKET expression COMMA expression COMMA expression CLOSE_BRACKET;

