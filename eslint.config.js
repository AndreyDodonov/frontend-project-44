import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import globals from 'globals'

export default [
  // Используем рекомендуемые правила от самого ESLint
  js.configs.recommended,

  // Добавляем готовый набор глобальных переменных для среды Node.js.
  // Это автоматически включает 'console', 'process' и другие.
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Используем обновлённые рекомендуемые правила от плагина Stylistic.
  stylistic.configs.recommended,
]
