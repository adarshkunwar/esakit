import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {

    /* Paths alias*/
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@ui': resolve(__dirname, './src/components/ui'),
      '@module': resolve(__dirname, './src/components/module'),
      '@layout': resolve(__dirname, './src/components/layout'),
      '@utils': resolve(__dirname, './src/utils'),
      '@lib': resolve(__dirname, './src/lib'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@type': resolve(__dirname, './src/types'),
      '@config': resolve(__dirname, './src/config'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'esakit',
      fileName: 'esakit'
    },
    rolldownOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  }
})
