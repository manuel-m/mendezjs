import replace from 'rollup-plugin-replace';

import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import prettier from 'rollup-plugin-prettier';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default ['current', 'legacy'].map(bundle);

function bundle(target) {
  return {
    input: 'src/index.js',
    output: {
      file: `public/js/app.bundle${target === 'legacy' ? '.legacy' : ''}.js`,
      format: 'iife',
      interop: false,
    },
    plugins: [
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        plugins: [['babel-plugin-inferno']],
        presets:
          target === 'current'
            ? undefined
            : [
                [
                  '@babel/preset-env',
                  {
                    corejs: 3,
                    modules: false,
                    useBuiltIns: 'usage',
                    targets: {
                      ie: '11',
                    },
                  },
                ],
              ],
      }),
      resolve(),
      commonjs(),
      terser({
        compress: false,
        mangle: false,
      }),
      prettier({
        tabWidth: 2,
        singleQuote: true,
        parser: 'babel',
      }),
    ],
  };
}
