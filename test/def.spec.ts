import { describe, it, expect } from 'vitest';
import { term_to_xpobject } from '../core/verifier/def';
import { Term } from '../core/ast';

describe('term_to_xpobject', () => {
    it('converts a simple term without args', () => {
        const term: Term = { name: 'A', args: [] };
        const obj = term_to_xpobject(term);
        expect(obj).toEqual({ kind: 'object', name: 'A', args: [] });
    });

    it('converts a term with single nested arg', () => {
        const term: Term = { name: 'F', args: [ { name: 'x', args: [] } ] };
        const obj = term_to_xpobject(term);
        expect(obj).toEqual({
            kind: 'object',
            name: 'F',
            args: [ { kind: 'object', name: 'x', args: [] } ]
        });
    });

    it('converts deep nested terms with multiple args', () => {
        const term: Term = {
            name: 'G',
            args: [
                { name: 'F', args: [ { name: 'a', args: [] }, { name: 'b', args: [] } ] },
                { name: 'H', args: [ { name: 'c', args: [] } ] }
            ]
        };
        const obj = term_to_xpobject(term);
        expect(obj).toEqual({
            kind: 'object',
            name: 'G',
            args: [
                {
                    kind: 'object',
                    name: 'F',
                    args: [
                        { kind: 'object', name: 'a', args: [] },
                        { kind: 'object', name: 'b', args: [] }
                    ]
                },
                {
                    kind: 'object',
                    name: 'H',
                    args: [ { kind: 'object', name: 'c', args: [] } ]
                }
            ]
        });
    });
}); 