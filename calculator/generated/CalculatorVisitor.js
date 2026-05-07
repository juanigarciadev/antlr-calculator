// Generated from c:/Users/Juani/Desktop/proyectos/antlr-calculator/calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by CalculatorParser.

export default class CalculatorVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by CalculatorParser#program.
	visitProgram(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#statement.
	visitStatement(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#declaration.
	visitDeclaration(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#assignment.
	visitAssignment(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#MulDiv.
	visitMulDiv(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#AddSub.
	visitAddSub(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#Parens.
	visitParens(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#Num.
	visitNum(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by CalculatorParser#Id.
	visitId(ctx) {
	  return this.visitChildren(ctx);
	}



}