import { Term } from "../ast";

export type xpObject = {
    kind: "object",
    name: string,
    args: xpObject[]
};

export type xpProved = {
    kind: "proved",
    premise: xpObject[],
    conclusion: xpObject[]
};

export type xpFact = xpObject | xpProved;
 
export function xpObjectToString(obj: xpObject, indent: number = 0): string {
    if (obj.args.length === 0) {
        return obj.name;
    }
    const argsStr = obj.args.map(arg => xpObjectToString(arg, indent)).join(', ');
    return `${obj.name}(${argsStr})`;
}

export function xpProvedToString(proved: xpProved, indent: number = 0): string {
    const premiseStr = proved.premise.map(obj => xpObjectToString(obj, indent)).join(', ');
    const conclusionStr = proved.conclusion.map(obj => xpObjectToString(obj, indent)).join(', ');
    return `${premiseStr} => ${conclusionStr}`;
}

export function xpFactToString(fact: xpFact, indent: number = 0): string {
    switch (fact.kind) {
        case "object":
            return xpObjectToString(fact, indent);
        case "proved":
            return xpProvedToString(fact, indent);
    }
}

export function log_xpObject(obj: xpObject, label?: string): void {
    const prefix = label ? `[${label}] ` : "";
    console.log(`${prefix}xpObject:`, xpObjectToString(obj));
}

export function log_xpProved(proved: xpProved, label?: string): void {
    const prefix = label ? `[${label}] ` : "";
    console.log(`${prefix}xpProved:`, xpProvedToString(proved));
}

export function log_xpFact(fact: xpFact, label?: string): void {
    const prefix = label ? `[${label}] ` : "";
    console.log(`${prefix}xpFact:`, xpFactToString(fact));
}

export function term_to_xpobject(term: Term): xpObject {
    return {
        kind: 'object',
        name: term.name,
        args: term.args.map(term_to_xpobject)
    };
}