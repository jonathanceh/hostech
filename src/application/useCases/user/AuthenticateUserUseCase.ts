import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../infraestructure/repositories/user/UserRepository'
import bcrypt from 'bcrypt'

export class AuthenticateUserUseCase {
  constructor (
    private readonly userRepository: UserRepository) {}

  async execute (username: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByUsername(username)
    const val = user && await bcrypt.compare(password, user.password)
    console.log(val)
    if (user && await bcrypt.compare(password, user.password)) {
      return user
    }
    return null
  }
}
