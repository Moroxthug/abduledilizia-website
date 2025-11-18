import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, 'attached_assets/generated_images');

async function optimizeImages() {
  console.log('🖼️  Ottimizzazione immagini...\n');
  
  const files = await readdir(imagesDir);
  const pngFiles = files.filter(f => f.endsWith('.png'));
  
  for (const file of pngFiles) {
    const inputPath = path.join(imagesDir, file);
    const outputPath = path.join(imagesDir, file.replace('.png', '-optimized.png'));
    
    const inputStats = await stat(inputPath);
    const inputSizeMB = (inputStats.size / 1024 / 1024).toFixed(2);
    
    await sharp(inputPath)
      .resize({ width: 1200, withoutEnlargement: true })
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(outputPath);
    
    const outputStats = await stat(outputPath);
    const outputSizeMB = (outputStats.size / 1024 / 1024).toFixed(2);
    const saved = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✅ ${file}`);
    console.log(`   ${inputSizeMB}MB → ${outputSizeMB}MB (risparmiato ${saved}%)\n`);
  }
  
  console.log('🎉 Ottimizzazione completata!');
}

optimizeImages().catch(console.error);
