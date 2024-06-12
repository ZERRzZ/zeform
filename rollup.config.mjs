import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import tsPlugin from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/bundle.js',
      format: 'es'
    },
  ],
  plugins: [
    babel(),
    commonjs(),
    resolve(),
    tsPlugin()
  ],
  external: ['@ant-design/icons', 'antd', 'react'] // react为外部引入,所以不需要打包进去
}