import ElanVisitor from "./generatedElan/ElanVisitor.js";


export default class ElanElanVisitor extends ElanVisitor {

    visitExpression(ctx) {
	  return this.visitChildren(ctx);
	}

}