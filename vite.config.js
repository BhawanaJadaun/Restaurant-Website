
import { defineConfig } from 'vite';


export default {
  build: {
    rollupOptions: {
      external: ['bootstrap']
    }
  }
}
