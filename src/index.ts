import { CharStream, CommonTokenStream }  from 'antlr4';
import ElanLexer from '../generated/ElanLexer';
import ElanParser from '../generated/ElanParser';


const input = "your text to parse here"
const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new ElanLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new ElanParser(tokens);
const tree = parser.expression();