import { describe, it, expect, vi } from 'vitest';
import { parseToAst } from '../core/test';
import { getAllFilesRecursively } from './list_files';
import fs from 'fs';
import path from 'path';

describe('parse()', () => {
  const demoDir = path.resolve(__dirname, 'demo');
  const demoFiles = getAllFilesRecursively(demoDir);

  for (const filePath of demoFiles) {
    const relative = path.relative(demoDir, filePath) || path.basename(filePath);
    it(`convert demo file to ast: ${relative}`, () => {
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(() => parseToAst(content)).not.toThrow();
    });
  }
}); 