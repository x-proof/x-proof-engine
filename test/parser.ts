import { CharStream, CommonTokenStream }  from 'antlr4';
import MyGrammarLexer from '../core/parser/x_proofLexer';
import MyGrammarParser from '../core/parser/x_proofParser';
import { parseTreeToAst } from '../core/ast/transform';
import { Program } from '../core/ast';

function parse(input: string) {
	const chars = new CharStream(input);
	const lexer = new MyGrammarLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new MyGrammarParser(tokens);
	const tree = parser.x_proof();
	return tree;
}

function parseToAst(input: string): Program {
	const tree = parse(input);
	return parseTreeToAst(tree);
}

export {
	parse,
	parseToAst
};