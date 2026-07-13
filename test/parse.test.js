import { CharStream, CommonTokenStream } from "antlr4";
import assert from "assert";
import ElanLexer from "../src/generatedElan/ElanLexer.js";
import ElanParser from "../src/generatedElan/ElanParser.js";
import ElanElanVisitor from "../src/elan-elan-visitor.js";


describe("parse", () => {
  it("test1", async () => {


    const input = "1 + 1"
    const chars = new CharStream(input); // replace this with a FileStream as required
    const lexer = new ElanLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new ElanParser(tokens);
    const tree = parser.expression();

    const result = tree.accept(new ElanElanVisitor());
   
    assert.strictEqual(tree, 1)

  });
});