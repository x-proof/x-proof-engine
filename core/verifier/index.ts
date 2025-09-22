import { Clause, Definition, DefinitionClause, ExecuteAtom, Program, Rule } from "../ast";
import { xpObject, xpFact } from "./def";

class VerifyContext {
    fact: xpObject[] = []
    alias: Record<string, xpObject> = {}
    syntax_table: Record<string, xpFact> = {}

    match_object(obj: xpObject): boolean {
        return this.fact.some(fact => match_object(obj, fact));
    }

    find_syntax(name: string): xpFact | undefined {
        return this.syntax_table[name];
    }

    add_object(obj: xpObject): void {
        this.fact.push(obj);
    }
    
    safe_add_syntax(name: string, fact: xpFact): void {
        if (name in this.syntax_table) {
            throw new Error(`Syntax ${name} already exists`);
        }
        this.syntax_table[name] = fact;
        // TODO: need more robust error handling
    }
}

function match_object(obj: xpObject, fact: xpObject): boolean {
    if (obj.name !== fact.name) {
        return false;
    }

    if (obj.args.length !== fact.args.length) {
        return false;
    }

    return obj.args.every((arg, i) => match_object(arg, fact.args[i]!));
    // TODO: add support for lambda matching
}

class VerifyContextStack {
    ctx: VerifyContext[] = [];

    push(ctx: VerifyContext): void {
        this.ctx.push(ctx);
    }

    pop(): VerifyContext {
        if (this.ctx.length == 0) {
            throw new Error("VerifyContextStack is empty");
        }
        return this.ctx.pop()!;
    }

    top(): VerifyContext | undefined {
        return this.ctx[this.ctx.length - 1];
    }
    
    match_object(obj: xpObject): boolean {
        return this.ctx.some(ctx => ctx.match_object(obj));
    }

    find_syntax(name: string): xpFact | undefined {
        return this.ctx.reverse().find(ctx => name in ctx.syntax_table)?.syntax_table[name];
    }
}

function pre_check(ctx_stack: VerifyContextStack, clause: ExecuteAtom): boolean {
    if (ctx_stack.top() === undefined) {
        return false;
    }
    switch (clause.kind) {
        case 'definition': {
            if (ctx_stack.top()!.find_syntax(clause.name)) {
                return false;
            }
            return true;
        }
        case 'axiomObject': {
            let exist_syntax = ctx_stack.top()!.find_syntax(clause.object.name);
            if (exist_syntax && exist_syntax.kind === 'proved') {
                return false;
            }
            return true;
        }
        case 'axiomNamed': {
            let exist_syntax = ctx_stack.top()!.find_syntax(clause.name);
            if (exist_syntax && exist_syntax.kind === 'object') {
                return false;
            }
            return true;
        }
        case 'theorem': {
            let exist_syntax = ctx_stack.top()!.find_syntax(clause.name);
            if (exist_syntax && exist_syntax.kind === 'object') {
                return false;
            }
            return true;
        }
    }
}

function take_effect(ctx_stack: VerifyContextStack, clause: ExecuteAtom): void {
    // TODO
}

function verify(prog: Program): boolean {
    let ctx_stack = new VerifyContextStack();
    ctx_stack.push(new VerifyContext());

    const exec_atoms: ExecuteAtom[] = prog.clauses.flatMap((clause: Clause): ExecuteAtom[] => {
        switch (clause.kind) {
            case 'definitionClause': {
                return clause.definitions;
            }
            case 'axiomClause': {
                return clause.axioms;
            }
            case 'theoremClause': {
                return clause.theorems;
            }
        }
    });
    for (const exec_atom of exec_atoms) {
        if (! pre_check(ctx_stack, exec_atom)) {
            console.error(`Pre-check failed for clause ${exec_atom.kind}`);
            return false;
        }
        take_effect(ctx_stack, exec_atom);
    }
    return true;
}

export {
    verify
}