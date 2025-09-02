import { describe, it, expect, vi } from 'vitest';
import { parse } from '../../core/test';
import fs from 'fs';
import path from 'path';

function getAllFilesRecursively(dirPath: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dirPath)) {
    return results;
  }

  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results.push(...getAllFilesRecursively(fullPath));
    } else if (stat.isFile()) {
      results.push(fullPath);
    }
  }

  return results;
}

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