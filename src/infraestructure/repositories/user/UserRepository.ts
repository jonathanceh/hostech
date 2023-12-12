import { Connection } from '../../db/Connection'
import { User } from '../../../domain/entities/User'
import { IUserRepository } from '../../../domain/repositories/user/IUserRepository'
export class UserRepository implements IUserRepository {
  private readonly pool = Connection.getInstance().pool

  async findByUsername (username: string): Promise<User | null> {
    const user = await this.pool.query('SELECT * FROM Users WHERE username = $1', [username])
    return user.rows[0] || null
  }
}
