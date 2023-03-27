module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  overrides: [],
  plugins: ['vue', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:prettier/recommended',
    // eslint-config-prettier 的缩写
    'prettier',
    'vue-global-api',
    'airbnb-base',
    '.eslintrc-auto-import.json'
  ],
  rules: {
    'no-undef': 'warn',
    // 'no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'spaced-comment': [
      'warn',
      'always',
      { markers: ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }
    ],
    'linebreak-style': ['error', 'unix'], //强制使用一致的换行风格,"unix"：\n 表示 LF , "windows"：\r\n 表示 CRLF
    'vue/html-indent': ['error', 4], // 在<template>的缩进
    semi: 'off',
    // https://github.com/vuejs/eslint-plugin-vue/tree/master/docs/rules
    // 可能被 prettier 控制,可选 off
    'vue/max-attributes-per-line': [
      'error',
      {
        // 可以控制每行的最多参数数量
        singleline: {
          max: 7
        },
        multiline: {
          max: 3
        }
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'ignore',
        multiline: 'below'
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'never'
      }
    ],
    'vue/attribute-hyphenation': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/no-reserved-props': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/valid-v-slot': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-v-model-argument': 'off',
    'vue/no-unused-components': 'warn',
    // 单行元素换行
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/valid-template-root': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/no-mutating-props': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'import/prefer-default-export': 'off',
    'import/no-absolute-path': 'off',
    'no-useless-escape': 'off',
    'import/no-unresolved': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-vars': 'warn',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'comma-dangle': ['error', 'never'],
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
    'default-case': 'off',
    'no-plusplus': 'off',
    'no-use-before-define': 'off',
    'array-callback-return': 'off',
    'brace-style': 'off',
    'no-tabs': 'off',
    'guard-for-in': 'off',
    eqeqeq: 'off',
    camelcase: 'off',
    'import/no-dynamic-require': 'off'

  },
  globals: {
    uni: true
  }
}
