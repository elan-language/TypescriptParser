import { ParserRuleContext} from 'antlr4';
import ElanVisitor from '../generated/ElanVisitor'


class ElanToElanVisitor extends ElanVisitor<void> {

  visitChildren(ctx: ParserRuleContext) {
    if (!ctx) {
      return;
    }
    if (ctx.children) {
      return ctx.children.map(child => {
        if (child instanceof  ParserRuleContext && child.children && child.children.length != 0) {
          return (child as any).accept(this);
        } else {
          return child.getText();
        }
      });
    }
  }
}

tree.accept(new ElanToElanVisitor());