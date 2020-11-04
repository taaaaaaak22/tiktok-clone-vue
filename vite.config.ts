import { UserConfig } from 'vite';
import svgPlugin from 'vite-plugin-svg';

const config: UserConfig = {
  plugins: [
    svgPlugin()
  ]
}

export default config