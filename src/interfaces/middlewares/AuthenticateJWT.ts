import { type Request, type Response, type NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(' ')[1]

    jwt.verify(token,"jonmay"!, (err, user) => {
      if (err) {
        return res.sendStatus(403)
      }

      //req.user = user
      next()
    })
  } else {
    res.sendStatus(401)
  }
}
