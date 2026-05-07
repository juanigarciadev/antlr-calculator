import CalculatorVisitor from './generated/CalculatorVisitor.js';

export default class CustomCalculatorVisitor extends CalculatorVisitor {
    constructor() {
        super();
        this.memory = new Map(); // Mapa para <ID, valor> [cite: 454]
    }

    visitDeclaration(ctx) {
        const id = ctx.ID().getText();
        const val = ctx.expression() ? this.visit(ctx.expression()) : 0;
        this.memory.set(id, val);
        return val;
    }

    visitAssignment(ctx) {
        const id = ctx.ID().getText();
        const val = this.visit(ctx.expression());
        this.memory.set(id, val);
        return val;
    }

    visitNum(ctx) { return parseInt(ctx.NUMBER().getText()); }
    visitId(ctx) { return this.memory.get(ctx.ID().getText()) || 0; }

    visitMulDiv(ctx) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        return ctx.op.text === '*' ? left * right : left / right;
    }

    visitAddSub(ctx) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        return ctx.op.text === '+' ? left + right : left - right;
    }
}