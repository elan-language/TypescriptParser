import { CharStream, CommonTokenStream } from "antlr4";
import assert from "assert";
import ElanLexer from "../src/generated/ElanLexer.js";
import ElanParser from "../src/generated/ElanParser.js";


describe("parse", () => {
  it("test1", async () => {


    const input = "your text to parse here"
    const chars = new CharStream(input); // replace this with a FileStream as required
    const lexer = new ElanLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    // const parser = new ElanParser(tokens);
    // const tree = parser.expression();
   
    // assert.strictEqual(1, 1)

  });
});