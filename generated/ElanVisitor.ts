// Generated from c:/GitHub/StandaloneTSCompilerForElan/Elan.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { FileContext } from "./ElanParser.js";
import { ImportStatementContext } from "./ElanParser.js";
import { NamespaceContext } from "./ElanParser.js";
import { MainContext } from "./ElanParser.js";
import { TestContext } from "./ElanParser.js";
import { StatementBlockContext } from "./ElanParser.js";
import { TestStatementsContext } from "./ElanParser.js";
import { AssertContext } from "./ElanParser.js";
import { CallStatementContext } from "./ElanParser.js";
import { ThrowExceptionContext } from "./ElanParser.js";
import { PrintStatementContext } from "./ElanParser.js";
import { VarDefContext } from "./ElanParser.js";
import { AssignmentContext } from "./ElanParser.js";
import { InlineAsignmentContext } from "./ElanParser.js";
import { AssignableValueContext } from "./ElanParser.js";
import { ProcedureCallContext } from "./ElanParser.js";
import { FunctionCallContext } from "./ElanParser.js";
import { SystemCallContext } from "./ElanParser.js";
import { InputContext } from "./ElanParser.js";
import { ArgumentContext } from "./ElanParser.js";
import { ArgumentListContext } from "./ElanParser.js";
import { ProcedureDefContext } from "./ElanParser.js";
import { ProcedureSignatureContext } from "./ElanParser.js";
import { ProcedureParameterListContext } from "./ElanParser.js";
import { ParameterListContext } from "./ElanParser.js";
import { ParameterContext } from "./ElanParser.js";
import { ProcedureParameterContext } from "./ElanParser.js";
import { FunctionDefContext } from "./ElanParser.js";
import { FunctionSignatureContext } from "./ElanParser.js";
import { ConstantDefContext } from "./ElanParser.js";
import { EnumDefContext } from "./ElanParser.js";
import { EnumTypeContext } from "./ElanParser.js";
import { EnumValueContext } from "./ElanParser.js";
import { ClassDefContext } from "./ElanParser.js";
import { MutableClassContext } from "./ElanParser.js";
import { AbstractClassContext } from "./ElanParser.js";
import { ImmutableClassContext } from "./ElanParser.js";
import { AbstractImmutableClassContext } from "./ElanParser.js";
import { InheritsContext } from "./ElanParser.js";
import { PropertyContext } from "./ElanParser.js";
import { ConstructorContext } from "./ElanParser.js";
import { NewInstanceContext } from "./ElanParser.js";
import { WithClauseContext } from "./ElanParser.js";
import { ProceduralControlFlowContext } from "./ElanParser.js";
import { IfContext } from "./ElanParser.js";
import { ForContext } from "./ElanParser.js";
import { EachContext } from "./ElanParser.js";
import { WhileContext } from "./ElanParser.js";
import { RepeatContext } from "./ElanParser.js";
import { TryContext } from "./ElanParser.js";
import { SwitchContext } from "./ElanParser.js";
import { CaseContext } from "./ElanParser.js";
import { CaseDefaultContext } from "./ElanParser.js";
import { ExpressionContext } from "./ElanParser.js";
import { BracketedExpressionContext } from "./ElanParser.js";
import { IfExpressionContext } from "./ElanParser.js";
import { ElseExpressionContext } from "./ElanParser.js";
import { LambdaContext } from "./ElanParser.js";
import { IndexContext } from "./ElanParser.js";
import { RangeContext } from "./ElanParser.js";
import { ValueContext } from "./ElanParser.js";
import { ScopeQualifierContext } from "./ElanParser.js";
import { LiteralContext } from "./ElanParser.js";
import { LiteralValueContext } from "./ElanParser.js";
import { DataStructureDefinitionContext } from "./ElanParser.js";
import { LiteralDataStructureContext } from "./ElanParser.js";
import { TupleDefinitionContext } from "./ElanParser.js";
import { LiteralTupleContext } from "./ElanParser.js";
import { DeconstructedTupleContext } from "./ElanParser.js";
import { ListDefinitionContext } from "./ElanParser.js";
import { LiteralListContext } from "./ElanParser.js";
import { ListDecompContext } from "./ElanParser.js";
import { ArrayDefinitionContext } from "./ElanParser.js";
import { DictionaryDefinitionContext } from "./ElanParser.js";
import { LiteralDictionaryContext } from "./ElanParser.js";
import { KvpContext } from "./ElanParser.js";
import { LiteralKvpContext } from "./ElanParser.js";
import { UnaryOpContext } from "./ElanParser.js";
import { BinaryOpContext } from "./ElanParser.js";
import { ArithmeticOpContext } from "./ElanParser.js";
import { LogicalOpContext } from "./ElanParser.js";
import { ConditionalOpContext } from "./ElanParser.js";
import { TypeContext } from "./ElanParser.js";
import { DataStructureTypeContext } from "./ElanParser.js";
import { GenericSpecifierContext } from "./ElanParser.js";
import { TupleTypeContext } from "./ElanParser.js";
import { TypeListContext } from "./ElanParser.js";
import { FuncTypeContext } from "./ElanParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ElanParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class ElanVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ElanParser.file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile?: (ctx: FileContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.importStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportStatement?: (ctx: ImportStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.namespace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNamespace?: (ctx: NamespaceContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.main`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMain?: (ctx: MainContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTest?: (ctx: TestContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.statementBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementBlock?: (ctx: StatementBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.testStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestStatements?: (ctx: TestStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.assert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert?: (ctx: AssertContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.callStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallStatement?: (ctx: CallStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.throwException`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowException?: (ctx: ThrowExceptionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.varDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDef?: (ctx: VarDefContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.inlineAsignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineAsignment?: (ctx: InlineAsignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.assignableValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignableValue?: (ctx: AssignableValueContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.procedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureCall?: (ctx: ProcedureCallContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.systemCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSystemCall?: (ctx: SystemCallContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInput?: (ctx: InputContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.procedureDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureDef?: (ctx: ProcedureDefContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.procedureSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureSignature?: (ctx: ProcedureSignatureContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.procedureParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureParameterList?: (ctx: ProcedureParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.procedureParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedureParameter?: (ctx: ProcedureParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.functionDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDef?: (ctx: FunctionDefContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.functionSignature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionSignature?: (ctx: FunctionSignatureContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.constantDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDef?: (ctx: ConstantDefContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.enumDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDef?: (ctx: EnumDefContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.enumType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumType?: (ctx: EnumTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.enumValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumValue?: (ctx: EnumValueContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.classDef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDef?: (ctx: ClassDefContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.mutableClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMutableClass?: (ctx: MutableClassContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.abstractClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractClass?: (ctx: AbstractClassContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.immutableClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImmutableClass?: (ctx: ImmutableClassContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.abstractImmutableClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractImmutableClass?: (ctx: AbstractImmutableClassContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.inherits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInherits?: (ctx: InheritsContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.property`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProperty?: (ctx: PropertyContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.constructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructor?: (ctx: ConstructorContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.newInstance`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNewInstance?: (ctx: NewInstanceContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.withClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithClause?: (ctx: WithClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.proceduralControlFlow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProceduralControlFlow?: (ctx: ProceduralControlFlowContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf?: (ctx: IfContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor?: (ctx: ForContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.each`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEach?: (ctx: EachContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.while`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile?: (ctx: WhileContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.repeat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRepeat?: (ctx: RepeatContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.try`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry?: (ctx: TryContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.switch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch?: (ctx: SwitchContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase?: (ctx: CaseContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.caseDefault`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseDefault?: (ctx: CaseDefaultContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.bracketedExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketedExpression?: (ctx: BracketedExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.ifExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExpression?: (ctx: IfExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.elseExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElseExpression?: (ctx: ElseExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.lambda`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambda?: (ctx: LambdaContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex?: (ctx: IndexContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.range`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRange?: (ctx: RangeContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.scopeQualifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScopeQualifier?: (ctx: ScopeQualifierContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.literalValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralValue?: (ctx: LiteralValueContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.dataStructureDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStructureDefinition?: (ctx: DataStructureDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.literalDataStructure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralDataStructure?: (ctx: LiteralDataStructureContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.tupleDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleDefinition?: (ctx: TupleDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.literalTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralTuple?: (ctx: LiteralTupleContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.deconstructedTuple`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeconstructedTuple?: (ctx: DeconstructedTupleContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.listDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListDefinition?: (ctx: ListDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.literalList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralList?: (ctx: LiteralListContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.listDecomp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListDecomp?: (ctx: ListDecompContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.arrayDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayDefinition?: (ctx: ArrayDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.dictionaryDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryDefinition?: (ctx: DictionaryDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.literalDictionary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralDictionary?: (ctx: LiteralDictionaryContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.kvp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKvp?: (ctx: KvpContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.literalKvp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralKvp?: (ctx: LiteralKvpContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.unaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOp?: (ctx: UnaryOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.binaryOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryOp?: (ctx: BinaryOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.arithmeticOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArithmeticOp?: (ctx: ArithmeticOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.logicalOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOp?: (ctx: LogicalOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.conditionalOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOp?: (ctx: ConditionalOpContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.dataStructureType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataStructureType?: (ctx: DataStructureTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.genericSpecifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenericSpecifier?: (ctx: GenericSpecifierContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.tupleType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleType?: (ctx: TupleTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.typeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeList?: (ctx: TypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `ElanParser.funcType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncType?: (ctx: FuncTypeContext) => Result;
}

