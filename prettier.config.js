/** @type {import("prettier").Config} */
const config = {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
};

export default config;