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

export {
  getAllFilesRecursively
}