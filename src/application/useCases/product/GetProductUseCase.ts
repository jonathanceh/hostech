import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../infraestructure/repositories/product/ProductRepository'

export class GetProductUseCase {
  private readonly _productRepository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute (id: string): Promise<Product> {
    const product: Product = await this._productRepository.getById(id)
    return product
  }
}
