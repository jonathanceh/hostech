export default {
  JWT_SECRET: process.env.JWT_SECRET ?? 'HOSTECH',
  DB_HOST : process.env.DB_HOST ?? 'localhost',
  DB_USER: process.env.DB_USER ?? 'postgres',
  DB_PASSWORD: process.env.DB_PASSWORD ?? 'Ab9712186',
  DB_NAME: process.env.DB_NAME ?? 'hostech',
  DB_PORT: process.env.DB_PORT ?? 5432,
  PORT: process.env.PORT ?? 3000
}
