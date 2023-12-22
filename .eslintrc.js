module.exports = {
    include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
    ignorePatterns: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    extends: [
        'react-app',
        'react-app/jest',
        'airbnb',
        'airbnb-typescript',
        'airbnb/react',
        'airbnb/hooks',
    ],
    plugins: ['react', '@typescript-eslint', 'prettier', 'import', 'jest'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'linebreak-style': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'prettier/prettier': 'off',
        'import/extensions': ['off'],
        'import/no-extraneous-dependencies': ['off'],
    },
    overrides: [
        {
            files: ['**/*.md'],
            plugins: {
                markdown,
            },
            processor: 'markdown/markdown',
            settings: {
                sharedData: 'Hello',
            },
        },
    ],
    settings: {
        react: {
            version: '999.999.999',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    },
};
