import ElanVisitor from "./generatedElan/ElanVisitor.js";
import { CharStream, CommonTokenStream } from "antlr4";
import ElanLexer from "../src/generatedElan/ElanLexer.js";
import ElanParser from "../src/generatedElan/ElanParser.js";

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

export function parseLiteralValue(input) {
	const parser = getParser(input);
	const tree = parser.literalValue();
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