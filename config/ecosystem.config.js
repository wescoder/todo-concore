/* eslint-disable camelcase */
module.exports = {
  apps: [
    {
      name: 'todo-concore-api-dev',
      script: './index.js',
      env: {
        NODE_ENV: 'development'
      },
      node_args: [
        '--inspect=9230'
      ],
      watch: [
        './config/ecosystem.config.js',
        './db/**/*.js',
        './models/**/*.js',
        './routes/**/*.js',
        './*.js'
      ]
    }
  ]
}
