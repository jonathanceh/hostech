import { ProductRepository } from '../../infraestructure/repositories/product/ProductRepository'
import { Product } from '../entities/Product'

export class ExistProduct {
  private readonly _productRepository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute (key: string): Promise<Product | null> {
    const product = await this._productRepository.getByKey(key)
    return product
  }
}
