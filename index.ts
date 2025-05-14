import { CharStream } from "antlr4";
import ElanLexer from "./generated/ElanLexer";
import ElanParser from "./generated/ElanParser";
import antlr4, { CharStreams, CommonTokenStream, TokenSource } from "antlr4ts"
let inputStream = new CharStream("var aa = 1;");
let lexer = new ElanLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer as TokenSource);
let parser = new ElanParser(tokenStream);
console.log(parser)
var tree = parser.program();
console.log(tree)