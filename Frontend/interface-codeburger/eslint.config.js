import pluginJs from '@eslint/js';
import pluginImportHelpers from 'eslint-plugin-import-helpers';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks'; // Adicione esta importação
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: { globals: globals.browser },
    plugins: {
      'import-helpers': pluginImportHelpers,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      'import-helpers/order-imports': [
        'error',
        {
          newlinesBetween: 'always',
          groups: ['/^react/', 'module', 'parent', 'sibling', 'index'],
          alphabetize: {
            order: 'asc',
            ignoreCase: true,
          },
        },
      ],
      'react-hooks/rules-of-hooks': 'error', // Adicione regras para hooks
      'react-hooks/exhaustive-deps': 'warn', // Adicione regras para dependências de hooks
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
