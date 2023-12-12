import { Product } from '../entities/Product'
import { ProductRepository } from '../../infraestructure/repositories/product/ProductRepository'
import { ProductNotFoundException } from '../exceptions/ProductNotFoundException'

export class ProductGetById {
  private readonly _productRepository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute (id: string): Promise<Product> {
    const product = await this._productRepository.getById(id)

    if (product === null) { throw new ProductNotFoundException() }

    return product
  }
}
