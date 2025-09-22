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
 
export function debug_xpObject(obj: xpObject, indent: number = 0): string {
    const spaces = "  ".repeat(indent);
    const argsStr = obj.args.length > 0 
        ? `\n${spaces}  args: [\n${obj.args.map(arg => debug_xpObject(arg, indent + 2)).join(',\n')}\n${spaces}  ]`
        : "  args: []";
    return `${spaces}{\n${spaces}  kind: "${obj.kind}",\n${spaces}  name: "${obj.name}",${argsStr}\n${spaces}}`;
}

export function debug_xpProved(proved: xpProved, indent: number = 0): string {
    const spaces = "  ".repeat(indent);
    const premiseStr = proved.premise.length > 0 
        ? `\n${spaces}  premise: [\n${proved.premise.map(obj => debug_xpObject(obj, indent + 2)).join(',\n')}\n${spaces}  ]`
        : "  premise: []";
    const conclusionStr = proved.conclusion.length > 0 
        ? `\n${spaces}  conclusion: [\n${proved.conclusion.map(obj => debug_xpObject(obj, indent + 2)).join(',\n')}\n${spaces}  ]`
        : "  conclusion: []";
    return `${spaces}{\n${spaces}  kind: "${proved.kind}",${premiseStr},${conclusionStr}\n${spaces}}`;
}

export function debug_xpFact(fact: xpFact, indent: number = 0): string {
    switch (fact.kind) {
        case "object":
            return debug_xpObject(fact, indent);
        case "proved":
            return debug_xpProved(fact, indent);
    }
}

export function log_xpObject(obj: xpObject, label?: string): void {
    const prefix = label ? `[${label}] ` : "";
    console.log(`${prefix}xpObject:`, debug_xpObject(obj));
}

export function log_xpProved(proved: xpProved, label?: string): void {
    const prefix = label ? `[${label}] ` : "";
    console.log(`${prefix}xpProved:`, debug_xpProved(proved));
}

export function log_xpFact(fact: xpFact, label?: string): void {
    const prefix = label ? `[${label}] ` : "";
    console.log(`${prefix}xpFact:`, debug_xpFact(fact));
}

export function term_to_xpobject(term: Term): xpObject {
    return {
        kind: 'object',
        name: term.name,
        args: term.args.map(term_to_xpobject)
    };
} 