import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../infraestructure/repositories/product/ProductRepository'

export class GetAllProductsUseCase {
  private readonly _productRepository: ProductRepository

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
  }

  async execute (): Promise<Product[]> {
    const products: Product[] = await this._productRepository.getAll()
    return products
  }
}
