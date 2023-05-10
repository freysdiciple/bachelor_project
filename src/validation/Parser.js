import StructureLexer from "../antlr4/StructureLexer";
import StructureParser from "../antlr4/StructureParser";
import StructureVisitor from "../antlr4/StructureVisitor";
import antlr4 from "antlr4";

class ErrorListener extends antlr4.error.ErrorListener {
	syntaxError(recognizer, offendingSymbol, line, column, message) {
		throw new Error(`L: ${line}, C: ${column}, Message: ${message}`);
	}
}

export default class Parser {
    static parseStructure(inputString){

        const errors = new ErrorListener();
        const chars = new antlr4.InputStream(inputString);
        const lexer = new StructureLexer(chars);
        lexer.strictMode = false;

        const tokenStream = new antlr4.CommonTokenStream(lexer);
        const parser = new StructureParser(tokenStream);
        parser.buildParseTrees = true; 
        lexer.removeErrorListeners();
        parser.removeErrorListeners();
        lexer.addErrorListener(errors);
        parser.addErrorListener(errors);

        const tree = parser.struct();
        const visitor = new StructureVisitor();
        return visitor.visitStruct(tree);

    }
}