const fs = require('fs');
const path = require('path');

// Función para procesar archivos HTML y hacer las URLs relativas
function fixOfflineUrls(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Recursivamente procesar subdirectorios
        fixOfflineUrls(filePath);
      } else if (file.endsWith('.html')) {
        try {
          // Procesar archivos HTML
          let content = fs.readFileSync(filePath, 'utf8');
          
          if (!content || content.trim() === '') {
            console.log(`Advertencia: ${filePath} está vacío, saltando...`);
            return;
          }
          
          console.log(`Procesando ${filePath} (${content.length} caracteres)`);
          
          // Calcular la profundidad del archivo para URLs relativas
          const outPath = path.join(__dirname, 'out');
          const relativePath = path.relative(outPath, filePath);
          const depth = relativePath.split(path.sep).length - 1;
          const prefix = depth > 0 ? '../'.repeat(depth) : './';
          
          // Reemplazar todas las URLs absolutas con relativas
          // URLs de Next.js
          content = content.replace(/href="\/_next\//g, `href="${prefix}_next/`);
          content = content.replace(/src="\/_next\//g, `src="${prefix}_next/`);
          
          // URLs de imágenes
          content = content.replace(/href="\/images\//g, `href="${prefix}images/`);
          content = content.replace(/src="\/images\//g, `src="${prefix}images/`);
          
          // URLs de favicon y otros recursos
          content = content.replace(/href="\/favicon\.ico"/g, `href="${prefix}favicon.ico"`);
          content = content.replace(/src="\/favicon\.ico"/g, `src="${prefix}favicon.ico"`);
          
          // URLs de manifest y otros archivos en la raíz
          content = content.replace(/href="\/manifest\.json"/g, `href="${prefix}manifest.json"`);
          content = content.replace(/href="\/robots\.txt"/g, `href="${prefix}robots.txt"`);
          content = content.replace(/href="\/sitemap\.xml"/g, `href="${prefix}sitemap.xml"`);
          
          // URLs de navegación internas
          content = content.replace(/href="\/"/g, `href="${prefix}index.html"`);
          content = content.replace(/href="\/([^"]*)"/g, (match, path) => {
            // No reemplazar si ya es una URL relativa o absoluta
            if (path.startsWith('http') || path.startsWith('//') || path.startsWith('.') || path.startsWith('#')) {
              return match;
            }
            return `href="${prefix}${path}"`;
          });
          
          // URLs en atributos src
          content = content.replace(/src="\/([^"]*)"/g, (match, path) => {
            // No reemplazar si ya es una URL relativa o absoluta
            if (path.startsWith('http') || path.startsWith('//') || path.startsWith('.')) {
              return match;
            }
            return `src="${prefix}${path}"`;
          });
          
          // URLs en CSS inline y JavaScript
          content = content.replace(/url\(\/([^)]*)\)/g, (match, path) => {
            if (path.startsWith('http') || path.startsWith('//') || path.startsWith('.')) {
              return match;
            }
            return `url(${prefix}${path})`;
          });
          
          // URLs en atributos action de formularios
          content = content.replace(/action="\/([^"]*)"/g, (match, path) => {
            if (path.startsWith('http') || path.startsWith('//') || path.startsWith('.')) {
              return match;
            }
            return `action="${prefix}${path}"`;
          });
          
          // Verificar que el contenido no esté vacío antes de escribir
          if (content && content.trim() !== '') {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✓ Procesado: ${filePath}`);
          } else {
            console.error(`Error: El contenido procesado está vacío para ${filePath}`);
          }
          
        } catch (fileError) {
          console.error(`Error procesando archivo ${filePath}:`, fileError.message);
        }
      }
    });
  } catch (dirError) {
    console.error(`Error leyendo directorio ${dir}:`, dirError.message);
  }
}

// Ejecutar el script
const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  console.log('Convirtiendo URLs para funcionamiento offline y online...');
  fixOfflineUrls(outDir);
  console.log('¡Conversión completada! El sitio ahora debería funcionar offline y online.');
} else {
  console.error('Directorio "out" no encontrado. Ejecuta "npm run build" primero.');
}