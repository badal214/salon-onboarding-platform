import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/cnpm run dev -- --port=3000onfig/
export default defineConfig({
  plugins: [react()],
})



