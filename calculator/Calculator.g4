grammar Calculator;

// --- REGLAS SINTÁCTICAS ---
program     : statement+ ; // <programa> ::= <sentencia> {<sentencia>}+

statement   : declaration
            | assignment
            | expression SEMI
            ;

declaration : (LET | VAR) ID (ASSIGN expression)? SEMI ;

assignment  : ID ASSIGN expression SEMI ;

// Precedencia: Mul/Div (arriba) tiene mayor prioridad que Add/Sub
expression  : expression op=(MUL | DIV) expression    # MulDiv
            | expression op=(ADD | SUB) expression    # AddSub
            | LPAREN expression RPAREN             # Parens
            | ID                                   # Id
            | NUMBER                               # Num
            ;

// --- REGLAS LÉXICAS ---
LET      : 'let' ;
VAR      : 'var' ;
ASSIGN   : '=' ;
SEMI     : ';' ;
ADD      : '+' ;
SUB      : '-' ;
MUL      : '*' ;
DIV      : '/' ;
LPAREN   : '(' ;
RPAREN   : ')' ;

ID       : [a-zA-Z_] [a-zA-Z0-9_]* ; // <identificador>
NUMBER   : [0-9]+ ;                  // <numero>
WS       : [ \t\r\n]+ -> skip ;      // Ignorar espacios