// Generated from c:/Users/Juani/Desktop/proyectos/antlr-calculator/calculator/Calculator.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CalculatorListener from './CalculatorListener.js';
import CalculatorVisitor from './CalculatorVisitor.js';

const serializedATN = [4,1,13,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,4,0,12,8,0,11,0,12,0,13,1,1,1,1,1,1,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,1,
2,3,2,27,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
43,8,4,1,4,1,4,1,4,1,4,1,4,1,4,5,4,51,8,4,10,4,12,4,54,9,4,1,4,0,1,8,5,0,
2,4,6,8,0,3,1,0,1,2,1,0,7,8,1,0,5,6,58,0,11,1,0,0,0,2,20,1,0,0,0,4,22,1,
0,0,0,6,30,1,0,0,0,8,42,1,0,0,0,10,12,3,2,1,0,11,10,1,0,0,0,12,13,1,0,0,
0,13,11,1,0,0,0,13,14,1,0,0,0,14,1,1,0,0,0,15,21,3,4,2,0,16,21,3,6,3,0,17,
18,3,8,4,0,18,19,5,4,0,0,19,21,1,0,0,0,20,15,1,0,0,0,20,16,1,0,0,0,20,17,
1,0,0,0,21,3,1,0,0,0,22,23,7,0,0,0,23,26,5,11,0,0,24,25,5,3,0,0,25,27,3,
8,4,0,26,24,1,0,0,0,26,27,1,0,0,0,27,28,1,0,0,0,28,29,5,4,0,0,29,5,1,0,0,
0,30,31,5,11,0,0,31,32,5,3,0,0,32,33,3,8,4,0,33,34,5,4,0,0,34,7,1,0,0,0,
35,36,6,4,-1,0,36,37,5,9,0,0,37,38,3,8,4,0,38,39,5,10,0,0,39,43,1,0,0,0,
40,43,5,11,0,0,41,43,5,12,0,0,42,35,1,0,0,0,42,40,1,0,0,0,42,41,1,0,0,0,
43,52,1,0,0,0,44,45,10,5,0,0,45,46,7,1,0,0,46,51,3,8,4,6,47,48,10,4,0,0,
48,49,7,2,0,0,49,51,3,8,4,5,50,44,1,0,0,0,50,47,1,0,0,0,51,54,1,0,0,0,52,
50,1,0,0,0,52,53,1,0,0,0,53,9,1,0,0,0,54,52,1,0,0,0,6,13,20,26,42,50,52];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalculatorParser extends antlr4.Parser {

    static grammarFileName = "Calculator.g4";
    static literalNames = [ null, "'let'", "'var'", "'='", "';'", "'+'", 
                            "'-'", "'*'", "'/'", "'('", "')'" ];
    static symbolicNames = [ null, "LET", "VAR", "ASSIGN", "SEMI", "ADD", 
                             "SUB", "MUL", "DIV", "LPAREN", "RPAREN", "ID", 
                             "NUMBER", "WS" ];
    static ruleNames = [ "program", "statement", "declaration", "assignment", 
                         "expression" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalculatorParser.ruleNames;
        this.literalNames = CalculatorParser.literalNames;
        this.symbolicNames = CalculatorParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalculatorParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 11; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.statement();
	            this.state = 13; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 6662) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalculatorParser.RULE_statement);
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 15;
	            this.declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 16;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 17;
	            this.expression(0);
	            this.state = 18;
	            this.match(CalculatorParser.SEMI);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalculatorParser.RULE_declaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 23;
	        this.match(CalculatorParser.ID);
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 24;
	            this.match(CalculatorParser.ASSIGN);
	            this.state = 25;
	            this.expression(0);
	        }

	        this.state = 28;
	        this.match(CalculatorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalculatorParser.RULE_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        this.match(CalculatorParser.ID);
	        this.state = 31;
	        this.match(CalculatorParser.ASSIGN);
	        this.state = 32;
	        this.expression(0);
	        this.state = 33;
	        this.match(CalculatorParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, CalculatorParser.RULE_expression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 36;
	            this.match(CalculatorParser.LPAREN);
	            this.state = 37;
	            this.expression(0);
	            this.state = 38;
	            this.match(CalculatorParser.RPAREN);
	            break;
	        case 11:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 40;
	            this.match(CalculatorParser.ID);
	            break;
	        case 12:
	            localctx = new NumContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 41;
	            this.match(CalculatorParser.NUMBER);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 50;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
	                    this.state = 44;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 45;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 46;
	                    this.expression(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CalculatorParser.RULE_expression);
	                    this.state = 47;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 48;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===5 || _la===6)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 49;
	                    this.expression(5);
	                    break;

	                } 
	            }
	            this.state = 54;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

CalculatorParser.EOF = antlr4.Token.EOF;
CalculatorParser.LET = 1;
CalculatorParser.VAR = 2;
CalculatorParser.ASSIGN = 3;
CalculatorParser.SEMI = 4;
CalculatorParser.ADD = 5;
CalculatorParser.SUB = 6;
CalculatorParser.MUL = 7;
CalculatorParser.DIV = 8;
CalculatorParser.LPAREN = 9;
CalculatorParser.RPAREN = 10;
CalculatorParser.ID = 11;
CalculatorParser.NUMBER = 12;
CalculatorParser.WS = 13;

CalculatorParser.RULE_program = 0;
CalculatorParser.RULE_statement = 1;
CalculatorParser.RULE_declaration = 2;
CalculatorParser.RULE_assignment = 3;
CalculatorParser.RULE_expression = 4;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_program;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_statement;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(CalculatorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_declaration;
    }

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	SEMI() {
	    return this.getToken(CalculatorParser.SEMI, 0);
	};

	LET() {
	    return this.getToken(CalculatorParser.LET, 0);
	};

	VAR() {
	    return this.getToken(CalculatorParser.VAR, 0);
	};

	ASSIGN() {
	    return this.getToken(CalculatorParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_assignment;
    }

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	ASSIGN() {
	    return this.getToken(CalculatorParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	SEMI() {
	    return this.getToken(CalculatorParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalculatorParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MulDivContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CalculatorParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CalculatorParser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.MulDivContext = MulDivContext;

class AddSubContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	ADD() {
	    return this.getToken(CalculatorParser.ADD, 0);
	};

	SUB() {
	    return this.getToken(CalculatorParser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.AddSubContext = AddSubContext;

class ParensContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(CalculatorParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(CalculatorParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.ParensContext = ParensContext;

class NumContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NUMBER() {
	    return this.getToken(CalculatorParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterNum(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitNum(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitNum(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.NumContext = NumContext;

class IdContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(CalculatorParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalculatorListener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalculatorVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CalculatorParser.IdContext = IdContext;


CalculatorParser.ProgramContext = ProgramContext; 
CalculatorParser.StatementContext = StatementContext; 
CalculatorParser.DeclarationContext = DeclarationContext; 
CalculatorParser.AssignmentContext = AssignmentContext; 
CalculatorParser.ExpressionContext = ExpressionContext; 
