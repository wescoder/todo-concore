/* eslint-disable camelcase */
module.exports = {
  apps: [
    {
      name: 'todo-concore-dev',
      script: './index.mjs',
      env: {
        NODE_ENV: 'development'
      },
      node_args: [
        '--experimental-modules',
        '--inspect=9230'
      ],
      watch: [
        './ecosystem.config.js',
        './db/**/*.mjs',
        './db/**/*.js',
        './models/**/*.mjs',
        './models/**/*.js',
        './*.mjs',
        './*.js'
      ]
    }
  ]
}
