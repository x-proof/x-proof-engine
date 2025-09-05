import { Program } from "../ast";

type xpObject = {
    kind: "object",
    name: string,
    args: xpObject[]
};

type xpProved = {
    kind: "proved",
    premise: xpObject[],
    conclusion: xpObject[]
};

type xpFact = xpObject | xpProved;
 
class VerifyContext {
    fact: xpObject[] = []
    alias: Record<string, xpObject> = {}
    syntax_table: Record<string, xpFact> = {}

    match_object(obj: xpObject): boolean {
        return this.fact.some(fact => match_object(obj, fact));
    }

    find_alias(name: string): xpObject | undefined {
        return this.alias[name];
    }

    find_syntax(name: string): xpFact | undefined {
        return this.syntax_table[name];
    }

    safe_add_alias(name: string, obj: xpObject): void {
        if (name in this.alias) {
            throw new Error(`Alias ${name} already exists`);
        }
        this.alias[name] = obj;
        // TODO: need more robust error handling
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
    
    find_alias(name: string): xpObject | undefined {
        return this.ctx.reverse().find(ctx => name in ctx.alias)?.alias[name];
    }

    find_syntax(name: string): xpFact | undefined {
        return this.ctx.reverse().find(ctx => name in ctx.syntax_table)?.syntax_table[name];
    }
}

function verify(prog: Program): boolean {
    let ctx_stack = new VerifyContextStack();
    
    return false;
}
