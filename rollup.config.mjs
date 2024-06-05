import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/bundle.js',
      format: 'es'
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel()
  ],
  external: ['react'] // react为外部引入,所以不需要打包进去
}