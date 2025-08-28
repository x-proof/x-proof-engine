import { CharStream, CommonTokenStream }  from 'antlr4';
import MyGrammarLexer from '../grammar/parser/x_proofLexer';
import MyGrammarParser from '../grammar/parser/x_proofParser';

const input = "define A;";
const chars = new CharStream(input); // replace this with a FileStream as required
const lexer = new MyGrammarLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new MyGrammarParser(tokens);
const tree = parser.x_proof();

// console.log(tree);