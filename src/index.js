"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var antlr4_1 = require("antlr4");
var ElanLexer_1 = require("./generated/ElanLexer");
var ElanParser_1 = require("./generated/ElanParser");
function run() {
    var input = "your text to parse here";
    var chars = new antlr4_1.CharStream(input); // replace this with a FileStream as required
    var lexer = new ElanLexer_1.default(chars);
    var tokens = new antlr4_1.CommonTokenStream(lexer);
    var parser = new ElanParser_1.default(tokens);
    var tree = parser.expression();
}
run();
