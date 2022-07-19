import typescript from 'rollup-plugin-typescript2';
import summary from 'rollup-plugin-summary';
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
            typescript(),
            summary()],
    },
];
