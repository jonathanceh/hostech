import { Product } from '../../../domain/entities/Product'
import { ProductRepository } from '../../../infraestructure/repositories/product/ProductRepository'
import { ExistProduct } from '../../../domain/services/ExistProduct'
import { ProductAlreadyExistsException } from '../../../domain/exceptions/ProductAlreadyExistsException'

export class CreateProductUseCase {
  private readonly _productRepository: ProductRepository
  private readonly _existProduct: ExistProduct

  constructor (productRepository: ProductRepository) {
    this._productRepository = productRepository
    this._existProduct = new ExistProduct(productRepository) // Servicio de dominio instanciado en el constructor
  }

  async execute (body: Product): Promise<Product> {
    const existProduct: Product = await this._existProduct.execute(body.key)
    console.log(existProduct)

    if (existProduct !== null) return existProduct
    const productCreated: Product = await this._productRepository.save(body)
    console.log(productCreated)
    return productCreated
  }
}
