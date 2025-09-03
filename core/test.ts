import { CharStream, CommonTokenStream }  from 'antlr4';
import MyGrammarLexer from './parser/x_proofLexer';
import MyGrammarParser from './parser/x_proofParser';

function parse(input: string) {
    const chars = new CharStream(input);
    const lexer = new MyGrammarLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new MyGrammarParser(tokens);
    const tree = parser.x_proof();
    return tree;
}

export {
    parse
};