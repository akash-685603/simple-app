export default {
  root: '.',  // Set root to the current directory (frontend)
  build: {
    outDir: '../dist',  // Output build folder (parent folder)
    rollupOptions: {
      input: './index.html',  // Entry point for the build
    },
  },
  server: {
    port: 5173,  // Port for development server
  },
}

