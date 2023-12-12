import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../infraestructure/repositories/product/ProductRepository'

export class GetByKeyProductUseCase {
  private readonly _productRepository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute (key: string): Promise<Product> {
    const product: Product = await this._productRepository.getByKey(key)
    return product
  }
}
