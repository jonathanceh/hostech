import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../infraestructure/repositories/product/ProductRepository'
import { ProductGetById } from '../../../domain/services/ProductGetById'

export class UpdateProductUseCase {
  private readonly _productRepository: ProductRepository
  private readonly _productGetById: ProductGetById

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
    this._productGetById = new ProductGetById(productRepository)
  }

  async execute (id: string, data: Product): Promise<Product> {
    const product = await this._productGetById.execute(id)

    const productToUpdate: Product = {
      id: data.id,
      key: data.key ?? product.key,
      name: data.name ?? product.name,
      active: data.active ?? product.active,
      updated: new Date(),
      created: product.created
    }

    const producUpdated: Product = await this._productRepository.update(productToUpdate)
    return producUpdated
  }
}
