import { AuthenticateUserUseCase } from '../../application/useCases/user/AuthenticateUserUseCase'
import { UserRepository } from '../../infraestructure/repositories/user/UserRepository'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export class AuthController {
  private readonly userRepository: UserRepository

  constructor () {
    this.userRepository = new UserRepository()
  }

  public async login (req:any, res:any): Promise<Response> {
    const JWT_SECRET: string = 'jonmay'
    const username: string = req.body.username
    const password: string = req.body.password
    console.log(username, password)

    const user = await new AuthenticateUserUseCase(this.userRepository).execute(username, password)

    if (user !== null) {
      const token = jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' })
      return res.json({ token })
    } else {
      return res.status(401).json({ message: 'Invalid username or password' })
    }
  }
}
