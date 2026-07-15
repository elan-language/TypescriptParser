grammar RefLang_Nodes;
import RefLang_Lexer;
import Elan2_Nodes;

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

