import { type Request, type Response } from 'express'
import { GetAllProductsUseCase } from '../../application/useCases/product/GetAllProductsUseCase'
import { GetByKeyProductUseCase } from '../../application/useCases/product/GetByKeyProductUseCase'
import { GetProductUseCase } from '../../application/useCases/product/GetProductUseCase'
import { CreateProductUseCase } from '../../application/useCases/product/CreateProductUseCase'
import { UpdateProductUseCase } from '../../application/useCases/product/UpdateProductUseCase'
import { DeleteProductUseCase } from '../../application/useCases/product/DeleteProductUseCase'
import { ProductRepository } from '../../infraestructure/repositories/product/ProductRepository'

export class ProductController {
  private readonly productRepository: ProductRepository

  constructor () {
    this.productRepository = new ProductRepository()
  }

  async getAll (req: Request, res: Response) {
    const products = await new GetAllProductsUseCase(this.productRepository).execute()
    console.log(products)
    res.json(products)
  }

  async getByKey (req: Request, res: Response) {
    const product = await new GetByKeyProductUseCase(this.productRepository).execute(req.params.key)
    res.json(product)
  }

  async getByName (req: Request, res: Response) {
    const product = await new GetProductUseCase(this.productRepository).execute(req.params.name)
    res.json(product)
  }

  async getByCreationDate (req: Request, res: Response) {
    const product = await new GetProductUseCase(this.productRepository).execute(req.params.creationDate)
    res.json(product)
  }

  async getByUpdateDate (req: Request, res: Response) {
    const product = await new GetProductUseCase(this.productRepository).execute(req.params.updateDate)
    res.json(product)
  }

  async getProduct (req: Request, res: Response) {
    const product = await new GetProductUseCase(this.productRepository).execute(req.params.id)
    res.json(product)
  }

  async createProduct (req: Request, res: Response) {
    const createProduct = new CreateProductUseCase(this.productRepository)
    console.log(req.body)
    const product = await createProduct.execute(req.body)
    res.json(product)
  }

  async updateProduct (req: Request, res: Response) {
    const updateProduct = new UpdateProductUseCase(this.productRepository)
    const product = await updateProduct.execute(req.params.id, req.body)
    res.json(product)
  }

  async deleteProduct (req: Request, res: Response) {
    const deleteProduct = new DeleteProductUseCase(this.productRepository)
    await deleteProduct.execute(req.params.id)
    res.json({ message: 'Product deleted successfully' })
  }
}
