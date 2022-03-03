import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';

export default [{
        input: './src/FuixDev.ts',
        plugins: [
            typescript({ tsconfig: 'tsconfig.development.json' }),
            resolve(),
            serve({
                contentBase: 'development',
                open: true,
                historyApiFallback: true,
                port: 10004
            }),
            livereload()
        ],
        output: {
            file: './development/esnext.js',
            format: 'esm',
            sourcemap: 'inline'
        }
    }
]
