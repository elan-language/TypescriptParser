import Elan2Visitor from "./generatedElan2/Elan2Visitor.js";
import PythonVisitor from "./generatedPython/PythonVisitor.js";
import { CharStream, CommonTokenStream } from "antlr4";
import Elan2Lexer from "../src/generatedElan2/Elan2Lexer.js";
import Elan2Parser from "../src/generatedElan2/Elan2Parser.js";
import PythonLexer from "../src/generatedPython/PythonLexer.js";
import PythonParser from "../src/generatedPython/PythonParser.js";

function getElan2Parser(input) {
	const chars = new CharStream(input); 
	const lexer = new Elan2Lexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new Elan2Parser(tokens);
	return parser
}

function getPythonParser(input) {
	const chars = new CharStream(input); 
	const lexer = new PythonLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new PythonParser(tokens);
	return parser
}


export function parseExpression(input) {
	const parser = getElan2Parser(input);
	const tree = parser.expression();
	return tree;
}

export function parseLitValue(input) {
	const parser = getElan2Parser(input);
	const tree = parser.litValue();
	return tree;
}

export function parseElan2Type(input) {
	const parser = getElan2Parser(input);
	const tree = parser.type();
	return tree;
}

export function parsePythonType(input) {
	const parser = getPythonParser(input);
	const tree = parser.type();
	return tree;
}


export class ElanElanVisitor extends Elan2Visitor {
	
}