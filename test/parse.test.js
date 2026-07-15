import { CharStream, CommonTokenStream } from "antlr4";
import assert from "assert";
import ElanLexer from "../src/generatedElan/ElanLexer.js";
import ElanParser from "../src/generatedElan/ElanParser.js";
import { ElanElanVisitor, parseExpression, parseLiteralValue, parseType } from "../src/elan-elan-visitor.js";


describe("parse", () => {
  it("parses literal bool", async () => {
    const input = "true"
    const tree = parseLiteralValue(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

   it("parses literal int", async () => {
    const input = "1"
    const tree = parseLiteralValue(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses type", async () => {
    const input = "Int"
    const tree = parseType(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses generic type", async () => {
    const input = "Foo<of Int>"
    const tree = parseType(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  it("parses type name", async () => {
    const input = "Foo"
    const tree = parseType(input);
    assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  });

  //  it("parses tuple", async () => {
  //   const input = "(Int, Int)"
  //   const tree = parseType(input);
  //   assert.strictEqual(tree.parser.syntaxErrorsCount, 0);
  // });

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