import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import CustomCalculatorVisitor from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from 'fs';

async function main() {
    let input;

    // 1. Lectura obligatoria de input.js (según punto D)
    try {
        input = fs.readFileSync('input.js', 'utf8');
    } catch (err) {
        console.error("Error: No se encontró el archivo 'input.js'.");
        return;
    }

    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);

    // 2. Mostrar Tabla de Lexemas y Tokens (Requerimiento Punto D) 
    console.log("TABLA DE LEXEMAS Y TOKENS");
    console.log("-------------------------------------------");
    console.log(`${"Lexema".padEnd(15)} | ${"Token"}`);
    console.log("-------------------------------------------");
    
    tokenStream.fill();
    tokenStream.tokens.forEach(t => {
        // Accedemos a symbolicNames a través del constructor de la clase 
        const symName = CalculatorLexer.symbolicNames[t.type] || "EOF";
        
        if (symName !== 'WS' && t.type !== -1) {
            const cleanText = t.text.replace(/\r?\n|\r/g, "\\n");
            console.log(`${cleanText.padEnd(15)} | ${symName}`);
        }
    });
    console.log("-------------------------------------------\n");

    let parser = new CalculatorParser(tokenStream);
    let tree = parser.program();
    
    // 3. Validación de Sintaxis
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis. Programa abortado.");
    } 
    else {
        console.log("Sintaxis válida. Iniciando ejecución...\n");

        // 4. Ejecución del programa (Intérprete reducido)
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree); 
        
        // Opcional: Mostrar estado final de la memoria si el visitor usa this.memory
        if (visitor.memory) {
            console.log("\nEstado final de las variables:");
            console.table(Object.fromEntries(visitor.memory));
        }
    }
}

main();