import { describe, it, expect } from 'vitest';
import { parse } from '../core/test';

describe('parse()', () => {
  it('parses a minimal valid input without throwing', () => {
    const input = '';
    const tree = parse(input);
    expect(tree).toBeTruthy();
  });
}); 