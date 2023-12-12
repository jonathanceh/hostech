import { Product } from '../../../domain/entities/Product'
import { IProductRepository } from '../../../domain/repositories/products/IProductRepository'
import { Connection } from '../../db/Connection'
export class ProductRepository implements IProductRepository {
  private readonly pool = Connection.getInstance().pool

  private async queryFirstRow (query: string, params: any[]): Promise<Product | null> {
    const res = await this.pool.query(query, params)
    return res.rows[0] || null
  }

  getAll = async (): Promise<Product[]> => {
    const res = await this.pool.query('SELECT * FROM products WHERE active = $1', ['true'])
    console.log(res.rows)
    return res.rows
  }

  getByKey = async (key: string): Promise<Product | null> => {
    return await this.queryFirstRow('SELECT * FROM products WHERE key = $1 AND active = $2', [key, 'true'])
  }

  getByName = async (name: string): Promise<Product | null> => {
    return await this.queryFirstRow('SELECT * FROM products WHERE name = $1 AND active = $2', [name, 'true'])
  }

  getByCreationDate = async (creationDate: string): Promise<Product[] | null> => {
    const res = await this.pool.query('SELECT * FROM products WHERE creation_date = $1', [creationDate])
    return res.rows || null
  }

  getByUpdateDate = async (updateDate: string): Promise<Product[] | null> => {
    const res = await this.pool.query('SELECT * FROM products WHERE update_date = $1', [updateDate])
    return res.rows || null
  }

  save = async (product: Product): Promise<Product> => {
    console.log(product)
    const res = await this.pool.query('INSERT INTO products (key, name) VALUES ($1, $2) RETURNING *', [product.key, product.name])
    return res.rows[0]
  }

  getById = async (id: string): Promise<Product> => {
    const res = await this.pool.query('SELECT * FROM products WHERE id = $1 AND active = $2', [id, 'true'])
    return res.rows[0]
  }

  update = async (product: Product): Promise<Product> => {
    const res = await this.pool.query('UPDATE products SET key = $1, name = $2, active = $3 WHERE id = $4 RETURNING *', [product.key, product.name, product.active, product.id])
    return res.rows[0]
  }

  delete = async (id: string): Promise<void> => {
    await this.pool.query('DELETE FROM products WHERE id = $1', [id])
  }
}
