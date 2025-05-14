// Generated from c:/GitHub/StandaloneTSCompilerForElan/Elan.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `ElanParser`.
 */
export default class ElanListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ElanParser.file`.
	 * @param ctx the parse tree
	 */
	enterFile?: (ctx: FileContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.file`.
	 * @param ctx the parse tree
	 */
	exitFile?: (ctx: FileContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.importStatement`.
	 * @param ctx the parse tree
	 */
	enterImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.importStatement`.
	 * @param ctx the parse tree
	 */
	exitImportStatement?: (ctx: ImportStatementContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.namespace`.
	 * @param ctx the parse tree
	 */
	enterNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.namespace`.
	 * @param ctx the parse tree
	 */
	exitNamespace?: (ctx: NamespaceContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.main`.
	 * @param ctx the parse tree
	 */
	enterMain?: (ctx: MainContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.main`.
	 * @param ctx the parse tree
	 */
	exitMain?: (ctx: MainContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.test`.
	 * @param ctx the parse tree
	 */
	enterTest?: (ctx: TestContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.test`.
	 * @param ctx the parse tree
	 */
	exitTest?: (ctx: TestContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.statementBlock`.
	 * @param ctx the parse tree
	 */
	enterStatementBlock?: (ctx: StatementBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.statementBlock`.
	 * @param ctx the parse tree
	 */
	exitStatementBlock?: (ctx: StatementBlockContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.testStatements`.
	 * @param ctx the parse tree
	 */
	enterTestStatements?: (ctx: TestStatementsContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.testStatements`.
	 * @param ctx the parse tree
	 */
	exitTestStatements?: (ctx: TestStatementsContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.assert`.
	 * @param ctx the parse tree
	 */
	enterAssert?: (ctx: AssertContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.assert`.
	 * @param ctx the parse tree
	 */
	exitAssert?: (ctx: AssertContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.callStatement`.
	 * @param ctx the parse tree
	 */
	enterCallStatement?: (ctx: CallStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.callStatement`.
	 * @param ctx the parse tree
	 */
	exitCallStatement?: (ctx: CallStatementContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.throwException`.
	 * @param ctx the parse tree
	 */
	enterThrowException?: (ctx: ThrowExceptionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.throwException`.
	 * @param ctx the parse tree
	 */
	exitThrowException?: (ctx: ThrowExceptionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.printStatement`.
	 * @param ctx the parse tree
	 */
	enterPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.printStatement`.
	 * @param ctx the parse tree
	 */
	exitPrintStatement?: (ctx: PrintStatementContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.varDef`.
	 * @param ctx the parse tree
	 */
	enterVarDef?: (ctx: VarDefContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.varDef`.
	 * @param ctx the parse tree
	 */
	exitVarDef?: (ctx: VarDefContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.inlineAsignment`.
	 * @param ctx the parse tree
	 */
	enterInlineAsignment?: (ctx: InlineAsignmentContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.inlineAsignment`.
	 * @param ctx the parse tree
	 */
	exitInlineAsignment?: (ctx: InlineAsignmentContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.assignableValue`.
	 * @param ctx the parse tree
	 */
	enterAssignableValue?: (ctx: AssignableValueContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.assignableValue`.
	 * @param ctx the parse tree
	 */
	exitAssignableValue?: (ctx: AssignableValueContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.procedureCall`.
	 * @param ctx the parse tree
	 */
	enterProcedureCall?: (ctx: ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.procedureCall`.
	 * @param ctx the parse tree
	 */
	exitProcedureCall?: (ctx: ProcedureCallContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.systemCall`.
	 * @param ctx the parse tree
	 */
	enterSystemCall?: (ctx: SystemCallContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.systemCall`.
	 * @param ctx the parse tree
	 */
	exitSystemCall?: (ctx: SystemCallContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.input`.
	 * @param ctx the parse tree
	 */
	enterInput?: (ctx: InputContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.input`.
	 * @param ctx the parse tree
	 */
	exitInput?: (ctx: InputContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.procedureDef`.
	 * @param ctx the parse tree
	 */
	enterProcedureDef?: (ctx: ProcedureDefContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.procedureDef`.
	 * @param ctx the parse tree
	 */
	exitProcedureDef?: (ctx: ProcedureDefContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.procedureSignature`.
	 * @param ctx the parse tree
	 */
	enterProcedureSignature?: (ctx: ProcedureSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.procedureSignature`.
	 * @param ctx the parse tree
	 */
	exitProcedureSignature?: (ctx: ProcedureSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.procedureParameterList`.
	 * @param ctx the parse tree
	 */
	enterProcedureParameterList?: (ctx: ProcedureParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.procedureParameterList`.
	 * @param ctx the parse tree
	 */
	exitProcedureParameterList?: (ctx: ProcedureParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.procedureParameter`.
	 * @param ctx the parse tree
	 */
	enterProcedureParameter?: (ctx: ProcedureParameterContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.procedureParameter`.
	 * @param ctx the parse tree
	 */
	exitProcedureParameter?: (ctx: ProcedureParameterContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.functionDef`.
	 * @param ctx the parse tree
	 */
	enterFunctionDef?: (ctx: FunctionDefContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.functionDef`.
	 * @param ctx the parse tree
	 */
	exitFunctionDef?: (ctx: FunctionDefContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.functionSignature`.
	 * @param ctx the parse tree
	 */
	enterFunctionSignature?: (ctx: FunctionSignatureContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.functionSignature`.
	 * @param ctx the parse tree
	 */
	exitFunctionSignature?: (ctx: FunctionSignatureContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.constantDef`.
	 * @param ctx the parse tree
	 */
	enterConstantDef?: (ctx: ConstantDefContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.constantDef`.
	 * @param ctx the parse tree
	 */
	exitConstantDef?: (ctx: ConstantDefContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.enumDef`.
	 * @param ctx the parse tree
	 */
	enterEnumDef?: (ctx: EnumDefContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.enumDef`.
	 * @param ctx the parse tree
	 */
	exitEnumDef?: (ctx: EnumDefContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.enumType`.
	 * @param ctx the parse tree
	 */
	enterEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.enumType`.
	 * @param ctx the parse tree
	 */
	exitEnumType?: (ctx: EnumTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.enumValue`.
	 * @param ctx the parse tree
	 */
	enterEnumValue?: (ctx: EnumValueContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.enumValue`.
	 * @param ctx the parse tree
	 */
	exitEnumValue?: (ctx: EnumValueContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.classDef`.
	 * @param ctx the parse tree
	 */
	enterClassDef?: (ctx: ClassDefContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.classDef`.
	 * @param ctx the parse tree
	 */
	exitClassDef?: (ctx: ClassDefContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.mutableClass`.
	 * @param ctx the parse tree
	 */
	enterMutableClass?: (ctx: MutableClassContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.mutableClass`.
	 * @param ctx the parse tree
	 */
	exitMutableClass?: (ctx: MutableClassContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.abstractClass`.
	 * @param ctx the parse tree
	 */
	enterAbstractClass?: (ctx: AbstractClassContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.abstractClass`.
	 * @param ctx the parse tree
	 */
	exitAbstractClass?: (ctx: AbstractClassContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.immutableClass`.
	 * @param ctx the parse tree
	 */
	enterImmutableClass?: (ctx: ImmutableClassContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.immutableClass`.
	 * @param ctx the parse tree
	 */
	exitImmutableClass?: (ctx: ImmutableClassContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.abstractImmutableClass`.
	 * @param ctx the parse tree
	 */
	enterAbstractImmutableClass?: (ctx: AbstractImmutableClassContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.abstractImmutableClass`.
	 * @param ctx the parse tree
	 */
	exitAbstractImmutableClass?: (ctx: AbstractImmutableClassContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.inherits`.
	 * @param ctx the parse tree
	 */
	enterInherits?: (ctx: InheritsContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.inherits`.
	 * @param ctx the parse tree
	 */
	exitInherits?: (ctx: InheritsContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.constructor`.
	 * @param ctx the parse tree
	 */
	enterConstructor?: (ctx: ConstructorContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.constructor`.
	 * @param ctx the parse tree
	 */
	exitConstructor?: (ctx: ConstructorContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.newInstance`.
	 * @param ctx the parse tree
	 */
	enterNewInstance?: (ctx: NewInstanceContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.newInstance`.
	 * @param ctx the parse tree
	 */
	exitNewInstance?: (ctx: NewInstanceContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.withClause`.
	 * @param ctx the parse tree
	 */
	enterWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.withClause`.
	 * @param ctx the parse tree
	 */
	exitWithClause?: (ctx: WithClauseContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.proceduralControlFlow`.
	 * @param ctx the parse tree
	 */
	enterProceduralControlFlow?: (ctx: ProceduralControlFlowContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.proceduralControlFlow`.
	 * @param ctx the parse tree
	 */
	exitProceduralControlFlow?: (ctx: ProceduralControlFlowContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.if`.
	 * @param ctx the parse tree
	 */
	enterIf?: (ctx: IfContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.if`.
	 * @param ctx the parse tree
	 */
	exitIf?: (ctx: IfContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.for`.
	 * @param ctx the parse tree
	 */
	enterFor?: (ctx: ForContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.for`.
	 * @param ctx the parse tree
	 */
	exitFor?: (ctx: ForContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.each`.
	 * @param ctx the parse tree
	 */
	enterEach?: (ctx: EachContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.each`.
	 * @param ctx the parse tree
	 */
	exitEach?: (ctx: EachContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.while`.
	 * @param ctx the parse tree
	 */
	enterWhile?: (ctx: WhileContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.while`.
	 * @param ctx the parse tree
	 */
	exitWhile?: (ctx: WhileContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.repeat`.
	 * @param ctx the parse tree
	 */
	enterRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.repeat`.
	 * @param ctx the parse tree
	 */
	exitRepeat?: (ctx: RepeatContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.try`.
	 * @param ctx the parse tree
	 */
	enterTry?: (ctx: TryContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.try`.
	 * @param ctx the parse tree
	 */
	exitTry?: (ctx: TryContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.switch`.
	 * @param ctx the parse tree
	 */
	enterSwitch?: (ctx: SwitchContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.switch`.
	 * @param ctx the parse tree
	 */
	exitSwitch?: (ctx: SwitchContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.case`.
	 * @param ctx the parse tree
	 */
	enterCase?: (ctx: CaseContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.case`.
	 * @param ctx the parse tree
	 */
	exitCase?: (ctx: CaseContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.caseDefault`.
	 * @param ctx the parse tree
	 */
	enterCaseDefault?: (ctx: CaseDefaultContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.caseDefault`.
	 * @param ctx the parse tree
	 */
	exitCaseDefault?: (ctx: CaseDefaultContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.bracketedExpression`.
	 * @param ctx the parse tree
	 */
	enterBracketedExpression?: (ctx: BracketedExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.bracketedExpression`.
	 * @param ctx the parse tree
	 */
	exitBracketedExpression?: (ctx: BracketedExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	enterIfExpression?: (ctx: IfExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.ifExpression`.
	 * @param ctx the parse tree
	 */
	exitIfExpression?: (ctx: IfExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.elseExpression`.
	 * @param ctx the parse tree
	 */
	enterElseExpression?: (ctx: ElseExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.elseExpression`.
	 * @param ctx the parse tree
	 */
	exitElseExpression?: (ctx: ElseExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.lambda`.
	 * @param ctx the parse tree
	 */
	enterLambda?: (ctx: LambdaContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.lambda`.
	 * @param ctx the parse tree
	 */
	exitLambda?: (ctx: LambdaContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.index`.
	 * @param ctx the parse tree
	 */
	enterIndex?: (ctx: IndexContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.index`.
	 * @param ctx the parse tree
	 */
	exitIndex?: (ctx: IndexContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.scopeQualifier`.
	 * @param ctx the parse tree
	 */
	enterScopeQualifier?: (ctx: ScopeQualifierContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.scopeQualifier`.
	 * @param ctx the parse tree
	 */
	exitScopeQualifier?: (ctx: ScopeQualifierContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.literalValue`.
	 * @param ctx the parse tree
	 */
	enterLiteralValue?: (ctx: LiteralValueContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.literalValue`.
	 * @param ctx the parse tree
	 */
	exitLiteralValue?: (ctx: LiteralValueContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.dataStructureDefinition`.
	 * @param ctx the parse tree
	 */
	enterDataStructureDefinition?: (ctx: DataStructureDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.dataStructureDefinition`.
	 * @param ctx the parse tree
	 */
	exitDataStructureDefinition?: (ctx: DataStructureDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.literalDataStructure`.
	 * @param ctx the parse tree
	 */
	enterLiteralDataStructure?: (ctx: LiteralDataStructureContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.literalDataStructure`.
	 * @param ctx the parse tree
	 */
	exitLiteralDataStructure?: (ctx: LiteralDataStructureContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.tupleDefinition`.
	 * @param ctx the parse tree
	 */
	enterTupleDefinition?: (ctx: TupleDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.tupleDefinition`.
	 * @param ctx the parse tree
	 */
	exitTupleDefinition?: (ctx: TupleDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.literalTuple`.
	 * @param ctx the parse tree
	 */
	enterLiteralTuple?: (ctx: LiteralTupleContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.literalTuple`.
	 * @param ctx the parse tree
	 */
	exitLiteralTuple?: (ctx: LiteralTupleContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.deconstructedTuple`.
	 * @param ctx the parse tree
	 */
	enterDeconstructedTuple?: (ctx: DeconstructedTupleContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.deconstructedTuple`.
	 * @param ctx the parse tree
	 */
	exitDeconstructedTuple?: (ctx: DeconstructedTupleContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.listDefinition`.
	 * @param ctx the parse tree
	 */
	enterListDefinition?: (ctx: ListDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.listDefinition`.
	 * @param ctx the parse tree
	 */
	exitListDefinition?: (ctx: ListDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.literalList`.
	 * @param ctx the parse tree
	 */
	enterLiteralList?: (ctx: LiteralListContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.literalList`.
	 * @param ctx the parse tree
	 */
	exitLiteralList?: (ctx: LiteralListContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.listDecomp`.
	 * @param ctx the parse tree
	 */
	enterListDecomp?: (ctx: ListDecompContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.listDecomp`.
	 * @param ctx the parse tree
	 */
	exitListDecomp?: (ctx: ListDecompContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.arrayDefinition`.
	 * @param ctx the parse tree
	 */
	enterArrayDefinition?: (ctx: ArrayDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.arrayDefinition`.
	 * @param ctx the parse tree
	 */
	exitArrayDefinition?: (ctx: ArrayDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.dictionaryDefinition`.
	 * @param ctx the parse tree
	 */
	enterDictionaryDefinition?: (ctx: DictionaryDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.dictionaryDefinition`.
	 * @param ctx the parse tree
	 */
	exitDictionaryDefinition?: (ctx: DictionaryDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.literalDictionary`.
	 * @param ctx the parse tree
	 */
	enterLiteralDictionary?: (ctx: LiteralDictionaryContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.literalDictionary`.
	 * @param ctx the parse tree
	 */
	exitLiteralDictionary?: (ctx: LiteralDictionaryContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.kvp`.
	 * @param ctx the parse tree
	 */
	enterKvp?: (ctx: KvpContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.kvp`.
	 * @param ctx the parse tree
	 */
	exitKvp?: (ctx: KvpContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.literalKvp`.
	 * @param ctx the parse tree
	 */
	enterLiteralKvp?: (ctx: LiteralKvpContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.literalKvp`.
	 * @param ctx the parse tree
	 */
	exitLiteralKvp?: (ctx: LiteralKvpContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	enterUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.unaryOp`.
	 * @param ctx the parse tree
	 */
	exitUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	enterBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.binaryOp`.
	 * @param ctx the parse tree
	 */
	exitBinaryOp?: (ctx: BinaryOpContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.arithmeticOp`.
	 * @param ctx the parse tree
	 */
	enterArithmeticOp?: (ctx: ArithmeticOpContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.arithmeticOp`.
	 * @param ctx the parse tree
	 */
	exitArithmeticOp?: (ctx: ArithmeticOpContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.logicalOp`.
	 * @param ctx the parse tree
	 */
	enterLogicalOp?: (ctx: LogicalOpContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.logicalOp`.
	 * @param ctx the parse tree
	 */
	exitLogicalOp?: (ctx: LogicalOpContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.conditionalOp`.
	 * @param ctx the parse tree
	 */
	enterConditionalOp?: (ctx: ConditionalOpContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.conditionalOp`.
	 * @param ctx the parse tree
	 */
	exitConditionalOp?: (ctx: ConditionalOpContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.dataStructureType`.
	 * @param ctx the parse tree
	 */
	enterDataStructureType?: (ctx: DataStructureTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.dataStructureType`.
	 * @param ctx the parse tree
	 */
	exitDataStructureType?: (ctx: DataStructureTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.genericSpecifier`.
	 * @param ctx the parse tree
	 */
	enterGenericSpecifier?: (ctx: GenericSpecifierContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.genericSpecifier`.
	 * @param ctx the parse tree
	 */
	exitGenericSpecifier?: (ctx: GenericSpecifierContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.tupleType`.
	 * @param ctx the parse tree
	 */
	enterTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.tupleType`.
	 * @param ctx the parse tree
	 */
	exitTupleType?: (ctx: TupleTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.typeList`.
	 * @param ctx the parse tree
	 */
	enterTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.typeList`.
	 * @param ctx the parse tree
	 */
	exitTypeList?: (ctx: TypeListContext) => void;
	/**
	 * Enter a parse tree produced by `ElanParser.funcType`.
	 * @param ctx the parse tree
	 */
	enterFuncType?: (ctx: FuncTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ElanParser.funcType`.
	 * @param ctx the parse tree
	 */
	exitFuncType?: (ctx: FuncTypeContext) => void;
}

