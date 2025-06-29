# Sitio Web Offline - Limpia Espiritual

## 🌐 Funcionamiento Offline

Este sitio web ha sido configurado para funcionar completamente offline después de la exportación estática.

## 📋 Comandos Disponibles

### Para desarrollo:
```bash
npm run dev
```

### Para exportar versión offline:
```bash
npm run export-offline
```
Este comando:
1. Genera la exportación estática con `next build`
2. Convierte automáticamente las URLs absolutas a relativas
3. Prepara el sitio para funcionar offline

### Para exportar versión normal:
```bash
npm run export
```

## 📁 Estructura después de la exportación

```
out/
├── index.html          # Página principal
├── 404.html           # Página de error 404
├── _next/              # Assets de Next.js (CSS, JS)
├── images/             # Imágenes del sitio
└── 404/                # Directorio de página 404
```

## 🚀 Cómo usar offline

1. **Exportar el sitio:**
   ```bash
   npm run export-offline
   ```

2. **Abrir el sitio:**
   - Navega al directorio `out/`
   - Abre `index.html` directamente en tu navegador
   - O usa un servidor local simple:
     ```bash
     cd out
     python3 -m http.server 8080
     ```

## ✅ Características offline

- ✅ Todas las imágenes funcionan offline
- ✅ Estilos CSS cargados correctamente
- ✅ JavaScript funcional
- ✅ Navegación interna funciona
- ✅ URLs relativas para compatibilidad total

## 🔧 Configuración técnica

- **Next.js 14** con exportación estática
- **URLs relativas** para funcionamiento offline
- **Imágenes optimizadas** sin dependencias externas
- **Script automático** para conversión de URLs

## 📝 Notas importantes

- El sitio funciona completamente sin conexión a internet
- Todas las dependencias están incluidas en el directorio `out/`
- Las imágenes están almacenadas localmente
- No requiere servidor web para funcionar básicamente

## 🐛 Solución de problemas

Si el sitio no funciona offline:

1. Asegúrate de haber ejecutado `npm run export-offline`
2. Verifica que todas las rutas en el HTML sean relativas (empiecen con `./`)
3. Comprueba que el directorio `out/` contenga todos los archivos necesarios

## 📞 Soporte

Si tienes problemas, verifica:
- Que Node.js esté instalado
- Que todas las dependencias estén instaladas (`npm install`)
- Que el comando `npm run export-offline` se ejecute sin errores