import resolve from '@rollup/plugin-node-resolve'
import camelCase from 'lodash.camelcase'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import { uglify } from 'rollup-plugin-uglify'

const pkg = require('./package.json')

const libraryName = 'assets-retry'

export default {
    input: `src/${libraryName}.ts`,
    output: [
        { file: pkg.main, name: camelCase(libraryName), format: 'iife', sourcemap: false }
        // { file: pkg.module, format: 'es', sourcemap: true },
    ],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
        include: 'src/**'
    },
    plugins: [
        json(),
        // Allow json resolution
        // Compile TypeScript files
        typescript({
            tsconfig: './tsconfig.json',
            useTsconfigDeclarationDir: false,
        }),
        // replace environment variables
        // replace({ __RETRY_IMAGE__: process.env.__RETRY_IMAGE__ }),
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        // commonjs(),
        // Allow node_modules resolution, so you can use 'external' to control
        // which external modules to include in the bundle
        // https://github.com/rollup/rollup-plugin-node-resolve#usage
        resolve(),
        // uglify js
        uglify()
        // // Resolve source maps to the original source
        // sourceMaps(),
    ]
}
