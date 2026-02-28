const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Ruta real del build frontend
const DIST_PATH = path.join(__dirname, 'dist', 'appointment', 'browser');

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos desde dist/appointment/browser
app.use(
  express.static(DIST_PATH, {
    maxAge: '1y',
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      if (
        filePath.endsWith('.js') ||
        filePath.endsWith('.css') ||
        filePath.endsWith('.png') ||
        filePath.endsWith('.jpg') ||
        filePath.endsWith('.jpeg') ||
        filePath.endsWith('.gif') ||
        filePath.endsWith('.svg') ||
        filePath.endsWith('.ico')
      ) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    },
  })
);

// Fallback SPA para rutas de frontend
app.use((req, res, next) => {
  if (res.headersSent) return next();

  const filePath = path.join(DIST_PATH, req.path);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }

  // En tu build actual el archivo de entrada es index.csr.html
  const indexPath = path.join(DIST_PATH, 'index.csr.html');
  if (fs.existsSync(indexPath)) {
    return res.sendFile(indexPath);
  }

  next();
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error('Error en el servidor:', err.stack);
  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal',
  });
});

// 404 para rutas no encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.path,
    method: req.method,
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log('Servidor Express iniciado correctamente');
  console.log(`Sirviendo archivos desde: ${DIST_PATH}`);
  console.log(`Iniciado en: ${new Date().toLocaleString()}`);

  if (!fs.existsSync(DIST_PATH)) {
    console.warn('ADVERTENCIA: La carpeta de build no existe.');
    console.warn('Ruta esperada:', DIST_PATH);
  } else {
    console.log('Carpeta de build encontrada');
  }
});

// Cierre graceful
process.on('SIGTERM', () => {
  console.log('Recibida señal SIGTERM, cerrando servidor...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('Recibida señal SIGINT, cerrando servidor...');
  process.exit(0);
});
