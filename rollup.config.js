import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundle.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/bundle.mjs',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Node.js 모듈 해석
    commonjs(), // 필요시 CommonJS 변환
    json(),
    typescript({
      tsconfig: './tsconfig.json',
      clean: true,
    }),
    // terser(), // 코드 압축 (필요시 활성화)
  ]
};
