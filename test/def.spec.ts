import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { 
    term_to_xpobject, 
    xpObjectToString, 
    xpProvedToString, 
    xpFactToString,
    log_xpObject,
    log_xpProved,
    log_xpFact,
    xpObject,
    xpProved,
    xpFact
} from '../core/verifier/def';
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

describe('debug_xpObject', () => {
    it('formats a simple object without args', () => {
        const obj: xpObject = { kind: 'object', name: 'A', args: [] };
        const result = xpObjectToString(obj);
        expect(result).toBe('A');
    });

    it('formats an object with args', () => {
        const obj: xpObject = {
            kind: 'object',
            name: 'F',
            args: [
                { kind: 'object', name: 'x', args: [] },
                { kind: 'object', name: 'y', args: [] }
            ]
        };
        const result = xpObjectToString(obj);
        expect(result).toBe('F(x, y)');
    });

    it('formats nested objects', () => {
        const obj: xpObject = {
            kind: 'object',
            name: 'G',
            args: [
                {
                    kind: 'object',
                    name: 'F',
                    args: [
                        { kind: 'object', name: 'a', args: [] }
                    ]
                }
            ]
        };
        const result = xpObjectToString(obj);
        expect(result).toBe('G(F(a))');
    });

    it('handles deeply nested objects', () => {
        const obj: xpObject = {
            kind: 'object',
            name: 'root',
            args: [
                {
                    kind: 'object',
                    name: 'child',
                    args: [
                        { kind: 'object', name: 'grandchild', args: [] }
                    ]
                }
            ]
        };
        const result = xpObjectToString(obj);
        expect(result).toBe('root(child(grandchild))');
    });

    it('handles complex nested structures', () => {
        const obj: xpObject = {
            kind: 'object',
            name: 'H',
            args: [
                { kind: 'object', name: 'a', args: [] },
                {
                    kind: 'object',
                    name: 'F',
                    args: [
                        { kind: 'object', name: 'b', args: [] },
                        { kind: 'object', name: 'c', args: [] }
                    ]
                }
            ]
        };
        const result = xpObjectToString(obj);
        expect(result).toBe('H(a, F(b, c))');
    });
});

describe('debug_xpProved', () => {
    it('formats a proved fact with empty premise and conclusion', () => {
        const proved: xpProved = {
            kind: 'proved',
            premise: [],
            conclusion: []
        };
        const result = xpProvedToString(proved);
        expect(result).toBe(' => ');
    });

    it('formats a proved fact with premise and conclusion', () => {
        const proved: xpProved = {
            kind: 'proved',
            premise: [
                { kind: 'object', name: 'A', args: [] },
                { kind: 'object', name: 'B', args: [] }
            ],
            conclusion: [
                { kind: 'object', name: 'C', args: [] }
            ]
        };
        const result = xpProvedToString(proved);
        expect(result).toBe('A, B => C');
    });

    it('formats a proved fact with nested objects in premise and conclusion', () => {
        const proved: xpProved = {
            kind: 'proved',
            premise: [
                {
                    kind: 'object',
                    name: 'F',
                    args: [
                        { kind: 'object', name: 'x', args: [] }
                    ]
                }
            ],
            conclusion: [
                {
                    kind: 'object',
                    name: 'G',
                    args: [
                        { kind: 'object', name: 'y', args: [] },
                        { kind: 'object', name: 'z', args: [] }
                    ]
                }
            ]
        };
        const result = xpProvedToString(proved);
        expect(result).toBe('F(x) => G(y, z)');
    });

    it('formats complex proved facts', () => {
        const proved: xpProved = {
            kind: 'proved',
            premise: [
                { kind: 'object', name: 'A', args: [] },
                {
                    kind: 'object',
                    name: 'F',
                    args: [
                        { kind: 'object', name: 'x', args: [] },
                        { kind: 'object', name: 'y', args: [] }
                    ]
                }
            ],
            conclusion: [
                { kind: 'object', name: 'B', args: [] },
                {
                    kind: 'object',
                    name: 'G',
                    args: [
                        { kind: 'object', name: 'z', args: [] }
                    ]
                }
            ]
        };
        const result = xpProvedToString(proved);
        expect(result).toBe('A, F(x, y) => B, G(z)');
    });

    it('handles single premise and conclusion', () => {
        const proved: xpProved = {
            kind: 'proved',
            premise: [{ kind: 'object', name: 'A', args: [] }],
            conclusion: [{ kind: 'object', name: 'B', args: [] }]
        };
        const result = xpProvedToString(proved);
        expect(result).toBe('A => B');
    });
});

describe('xpFactToString', () => {
    it('dispatches to debug_xpObject for object facts', () => {
        const fact: xpFact = { kind: 'object', name: 'A', args: [] };
        const result = xpFactToString(fact);
        expect(result).toBe('A');
    });

    it('dispatches to debug_xpProved for proved facts', () => {
        const fact: xpFact = {
            kind: 'proved',
            premise: [{ kind: 'object', name: 'A', args: [] }],
            conclusion: [{ kind: 'object', name: 'B', args: [] }]
        };
        const result = xpFactToString(fact);
        expect(result).toBe('A => B');
    });

    it('handles complex object facts', () => {
        const fact: xpFact = {
            kind: 'object',
            name: 'F',
            args: [
                { kind: 'object', name: 'x', args: [] },
                { kind: 'object', name: 'y', args: [] }
            ]
        };
        const result = xpFactToString(fact);
        expect(result).toBe('F(x, y)');
    });

    it('handles complex proved facts', () => {
        const fact: xpFact = {
            kind: 'proved',
            premise: [
                { kind: 'object', name: 'A', args: [] },
                {
                    kind: 'object',
                    name: 'F',
                    args: [{ kind: 'object', name: 'x', args: [] }]
                }
            ],
            conclusion: [
                {
                    kind: 'object',
                    name: 'G',
                    args: [
                        { kind: 'object', name: 'y', args: [] },
                        { kind: 'object', name: 'z', args: [] }
                    ]
                }
            ]
        };
        const result = xpFactToString(fact);
        expect(result).toBe('A, F(x) => G(y, z)');
    });
});

describe('log functions', () => {
    let consoleSpy: any;

    beforeEach(() => {
        consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    describe('log_xpObject', () => {
        it('logs xpObject without label', () => {
            const obj: xpObject = { kind: 'object', name: 'A', args: [] };
            log_xpObject(obj);
            
            expect(consoleSpy).toHaveBeenCalledWith(
                'xpObject:',
                'A'
            );
        });

        it('logs xpObject with label', () => {
            const obj: xpObject = { kind: 'object', name: 'A', args: [] };
            log_xpObject(obj, 'test');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                '[test] xpObject:',
                'A'
            );
        });

        it('logs complex xpObject', () => {
            const obj: xpObject = {
                kind: 'object',
                name: 'F',
                args: [
                    { kind: 'object', name: 'x', args: [] },
                    { kind: 'object', name: 'y', args: [] }
                ]
            };
            log_xpObject(obj, 'complex');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                '[complex] xpObject:',
                'F(x, y)'
            );
        });
    });

    describe('log_xpProved', () => {
        it('logs xpProved without label', () => {
            const proved: xpProved = {
                kind: 'proved',
                premise: [{ kind: 'object', name: 'A', args: [] }],
                conclusion: [{ kind: 'object', name: 'B', args: [] }]
            };
            log_xpProved(proved);
            
            expect(consoleSpy).toHaveBeenCalledWith(
                'xpProved:',
                'A => B'
            );
        });

        it('logs xpProved with label', () => {
            const proved: xpProved = {
                kind: 'proved',
                premise: [],
                conclusion: [{ kind: 'object', name: 'C', args: [] }]
            };
            log_xpProved(proved, 'proof');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                '[proof] xpProved:',
                ' => C'
            );
        });

        it('logs complex xpProved', () => {
            const proved: xpProved = {
                kind: 'proved',
                premise: [
                    { kind: 'object', name: 'A', args: [] },
                    {
                        kind: 'object',
                        name: 'F',
                        args: [{ kind: 'object', name: 'x', args: [] }]
                    }
                ],
                conclusion: [
                    {
                        kind: 'object',
                        name: 'G',
                        args: [
                            { kind: 'object', name: 'y', args: [] },
                            { kind: 'object', name: 'z', args: [] }
                        ]
                    }
                ]
            };
            log_xpProved(proved, 'complex');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                '[complex] xpProved:',
                'A, F(x) => G(y, z)'
            );
        });
    });

    describe('log_xpFact', () => {
        it('logs xpFact (object) without label', () => {
            const fact: xpFact = { kind: 'object', name: 'A', args: [] };
            log_xpFact(fact);
            
            expect(consoleSpy).toHaveBeenCalledWith(
                'xpFact:',
                'A'
            );
        });

        it('logs xpFact (proved) with label', () => {
            const fact: xpFact = {
                kind: 'proved',
                premise: [{ kind: 'object', name: 'A', args: [] }],
                conclusion: []
            };
            log_xpFact(fact, 'fact');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                '[fact] xpFact:',
                'A => '
            );
        });

        it('logs complex xpFact (object)', () => {
            const fact: xpFact = {
                kind: 'object',
                name: 'F',
                args: [
                    { kind: 'object', name: 'x', args: [] },
                    { kind: 'object', name: 'y', args: [] }
                ]
            };
            log_xpFact(fact, 'complex');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                '[complex] xpFact:',
                'F(x, y)'
            );
        });

        it('logs complex xpFact (proved)', () => {
            const fact: xpFact = {
                kind: 'proved',
                premise: [
                    { kind: 'object', name: 'A', args: [] },
                    {
                        kind: 'object',
                        name: 'F',
                        args: [{ kind: 'object', name: 'x', args: [] }]
                    }
                ],
                conclusion: [
                    {
                        kind: 'object',
                        name: 'G',
                        args: [
                            { kind: 'object', name: 'y', args: [] },
                            { kind: 'object', name: 'z', args: [] }
                        ]
                    }
                ]
            };
            log_xpFact(fact, 'complex');
            
            expect(consoleSpy).toHaveBeenCalledWith(
                '[complex] xpFact:',
                'A, F(x) => G(y, z)'
            );
        });
    });
}); 