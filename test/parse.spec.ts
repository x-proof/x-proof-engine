import { describe, it, expect, vi } from 'vitest';
import { parse } from '../core/test';
import { getAllFilesRecursively } from './list_files';
import fs from 'fs';
import path from 'path';

describe('parse()', () => {
  const demoDir = path.resolve(__dirname, 'demo');
  const demoFiles = getAllFilesRecursively(demoDir);

  for (const filePath of demoFiles) {
    const relative = path.relative(demoDir, filePath) || path.basename(filePath);
    it(`parses demo file: ${relative}`, () => {
      const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
      const content = fs.readFileSync(filePath, 'utf-8');
      const _ = parse(content);
      expect(errorSpy).not.toHaveBeenCalled();
      errorSpy.mockRestore()
    });
  }
}); 