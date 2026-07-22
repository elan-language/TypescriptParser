import { CharStream, CommonTokenStream } from "antlr4";
import assert from "assert";
import ElanLexer from "../src/generatedElan2/Elan2Lexer.js";
import ElanParser from "../src/generatedElan2/Elan2Parser.js";
import { ElanElanVisitor, parseExpression, parseLitValue, parseElan2Type } from "../src/elan-elan-visitor.js";


describe("elan2 parse", () => {
  it("parses literal bool", async () => {
    const input = "true"
    const tree = parseLitValue(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

   it("parses literal int", async () => {
    const input = "1"
    const tree = parseLitValue(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses type", async () => {
    const input = "Int"
    const tree = parseElan2Type(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses generic type", async () => {
    const input = "Foo<of Int>"
    const tree = parseElan2Type(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses type name", async () => {
    const input = "Foo"
    const tree = parseElan2Type(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

   it("parses tuple", async () => {
    const input = "(Int, Int)"
    const tree = parseElan2Type(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

//  it("parses func", async () => {
//     const input = "Func<of Int => Int>"
//     const tree = parseType(input);
//     assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
//   });


  it("test1", async () => {
    const input = "1 + 1"
    const tree = parseExpression(input);
    const result = tree.accept(new ElanElanVisitor());

  });
});