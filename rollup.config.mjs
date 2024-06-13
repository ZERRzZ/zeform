import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import tsPlugin from '@rollup/plugin-typescript';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/zeform.js',
      format: 'es'
    },
  ],
  plugins: [
    babel(),
    commonjs(),
    resolve(),
    tsPlugin(),
    postcss({
      extract: 'zeform.css', // 从 bundle 中提取 CSS 到单独的文件
      minimize: true, // 开启 CSS 代码压缩
      plugins: [autoprefixer()]
    }),
  ],
  external: ['@ant-design/icons', 'antd', 'react'] // react为外部引入,所以不需要打包进去
}