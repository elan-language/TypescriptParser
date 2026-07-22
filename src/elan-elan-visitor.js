import ElanVisitor from "./generatedElan2/Elan2Visitor.js";
import { CharStream, CommonTokenStream } from "antlr4";
import ElanLexer from "../src/generatedElan2/Elan2Lexer.js";
import ElanParser from "../src/generatedElan2/Elan2Parser.js";

function getParser(input) {
	const chars = new CharStream(input); 
	const lexer = new ElanLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new ElanParser(tokens);
	return parser
}

export function parseExpression(input) {
	const parser = getParser(input);
	const tree = parser.expression();
	return tree;
}

export function parseLitValue(input) {
	const parser = getParser(input);
	const tree = parser.litValue();
	return tree;
}

export function parseType(input) {
	const parser = getParser(input);
	const tree = parser.type();
	return tree;
}

export class ElanElanVisitor extends ElanVisitor {

    visitExpression(ctx) {
	  return this.visitChildren(ctx);
	}

}