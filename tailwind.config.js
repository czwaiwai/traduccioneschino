module.exports = {
  content: [
		'./.vitepress/**/*.{js,ts,vue}',
		'./**/*.md',
	],
  theme: {
    extend: {},
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ]
    // purge: {
    //   enabled: process.env.NODE_ENV === 'production',
    //   content: [
    //     './.vitepress/**/*.js',
    //     './.vitepress/**/*.vue',
    //     './.vitepress/**/*.ts',
    //   ],
    //   options: {
    //     safelist: ['html', 'body'],
    //   },
    // },
  }