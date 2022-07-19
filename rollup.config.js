import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import pkg from './package.json';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: pkg.module,
            format: 'esm',
            sourcemap: true,
        },
        plugins: [
            clear({ targets: ['lib'] }),
            typescript(),
        ],
    },
];
