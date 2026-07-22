import { CharStream, CommonTokenStream } from "antlr4";
import assert from "assert";
import ElanLexer from "../src/generatedElan2/Elan2Lexer.js";
import ElanParser from "../src/generatedElan2/Elan2Parser.js";
import { ElanElanVisitor, parseExpression, parseLitValue, parsePythonType } from "../src/elan-elan-visitor.js";


describe("python parse", () => {
 

  it("parses type", async () => {
    const input = "Int"
    const tree = parsePythonType(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses generic type", async () => {
    const input = "Foo<of Int>"
    const tree = parsePythonType(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses type name", async () => {
    const input = "Foo"
    const tree = parsePythonType(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

   it("parses tuple", async () => {
    const input = "(Int, Int)"
    const tree = parsePythonType(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

//  it("parses func", async () => {
//     const input = "Func<of Int => Int>"
//     const tree = parseType(input);
//     assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
//   });
});