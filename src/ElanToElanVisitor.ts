import ElanVisitor from "./generated/ElanVisitor";
import antlr4 from "antlr4";



class ElanToElanVisitor extends ElanVisitor<void> {

  visitChildren(ctx: antlr4.ParserRuleContext) {
    if (!ctx) {
      return;
    }
    if (ctx.children) {
      return ctx.children.map(child => {
        if (child.children && child.children.length != 0) {
          return (child as any).accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

tree.accept(new ElanToElanVisitor());