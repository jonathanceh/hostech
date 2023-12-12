import { Product } from '../../../domain/entities/Product'
import { ProductGetById } from '../../../domain/services/ProductGetById'
import { ProductRepository } from '../../../infraestructure/repositories/product/ProductRepository'

export class DeleteProductUseCase {
  private readonly _productRepository: ProductRepository
  private readonly _productGetById: ProductGetById

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
    this._productGetById = new ProductGetById(productRepository)
  }

  async execute (id: string): Promise<Product> {
    const productToDelete = await this._productGetById.execute(id)

    await this._productRepository.delete(productToDelete.id)
    return productToDelete
  }
}
