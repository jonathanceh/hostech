import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../infraestructure/repositories/product/ProductRepository'
import { ProductGetById } from '../../../domain/services/ProductGetById'

export class ActiveProductUseCase {
  private readonly _productRepository: ProductRepository
  private readonly _productGetById: ProductGetById

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
    this._productGetById = new ProductGetById(productRepository)
  }

  async execute (id: string, data: Product): Promise<Product> {
    const productExist = await this._productGetById.execute(id)

    if (productExist.active === data.active) {
      return productExist
    }
    const product = await this._productRepository.update(data)
    return product
  }
}
