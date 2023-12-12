import type { Product } from '../../entities/Product'

export interface IProductRepository {
  getAll: () => Promise<Product[]>
  getByKey: (key: string) => Promise<Product | null>
  getByName: (name: string) => Promise<Product | null>
  getByCreationDate: (creationDate: string) => Promise<Product[] | null>
  getByUpdateDate: (updateDate: string) => Promise<Product[] | null>
  save: (product: Product) => Promise<Product>
  getById: (id: string) => Promise<Product>
  update: (product: Product) => Promise<Product>
  delete: (id: string) => Promise<void>
}
