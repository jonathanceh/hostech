import { Pool } from 'pg'
import config from '../../config/config'

export class Connection {
  private static instance: Connection
  public pool: Pool

  private constructor () {
    this.pool = new Pool({
      host: config.DB_HOST,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME,
      port: Number(config.DB_PORT)
    })
  }

  public static getInstance (): Connection {
    if (!Connection.instance) {
      Connection.instance = new Connection()
    }
    return Connection.instance
  }
}
