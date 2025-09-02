# x-proof-engine

The engine of X-Proof.

## Developers' Guide

### Build the Repo

#### Step 1. Generate the parser

If you haven't modified the grammar, you can skip the current step.

Install antlr4 with `pip install antlr4-tools` or other ways you preferred. Referring to [ANTLR Documentation](https://www.antlr.org/).

```bash
cd grammar
rm -rf parser
antlr4 x_proof.g4 -o parser -Dlanguage=TypeScript -no-listener -visitor
```
