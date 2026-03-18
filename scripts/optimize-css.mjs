import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import Critters from 'critters';

const outDir = join(process.cwd(), 'out');

const critters = new Critters({
  path: outDir,
  publicPath: '/',
  inlineFonts: true,
  preloadFonts: true,
  compress: true,
  // Ensure we don't accidentally remove anything critical for the mesh-bg or dark mode
  pruneSource: false, 
});

async function getAllHtmlFiles(dir, files = []) {
  const entries = readdirSync(dir);
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      if (entry !== '_next') { // Skip _next folder
        await getAllHtmlFiles(fullPath, files);
      }
    } else if (extname(entry) === '.html') {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimize() {
  console.log('🚀 Starting CSS optimization (Critters)...');
  const htmlFiles = await getAllHtmlFiles(outDir);
  
  for (const file of htmlFiles) {
    try {
      const html = readFileSync(file, 'utf8');
      const optimizedHtml = await critters.process(html);
      writeFileSync(file, optimizedHtml);
      console.log(`✅ Optimized: ${file.replace(process.cwd(), '')}`);
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error);
    }
  }
  console.log('✨ CSS optimization complete!');
}

optimize();
