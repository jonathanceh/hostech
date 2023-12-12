import express from 'express'
import { AuthController } from './controllers/AuthController'
import { ProductController } from './controllers/ProductController'
import { authenticateJWT } from './middlewares/AuthenticateJWT'

// Create instance of controllers
const authController = new AuthController();
const productController = new ProductController();

const router = express.Router();


router.post('/login', async (req, res) => { await authController.login(req, res) });
router.use(authenticateJWT);
router.post('/products', async (req, res) => { await productController.createProduct(req, res) }); // Create a new product
router.get('/products/:key', async (req, res) => { await productController.getByKey(req, res) }); // Get a product by key
router.get('/products/:name', async (req, res) => { await productController.getByName(req, res) }); // Get a product by name
router.get('/products/:creationDate', async (req, res) => { await productController.getByCreationDate(req, res) }); // Get a product by creation date
router.get('/products/:updateDate', async (req, res) => { await productController.getByUpdateDate(req, res) }); // Get a product by update date
router.get('/products', async (req, res) => { await productController.getAll(req, res) }); // Get all products
router.get('/products/:id', async (req, res) => { await productController.getProduct(req, res) }); // Get a product by id
router.put('/products/:id', async (req, res) => { await productController.updateProduct(req, res) }); // Update a product by id
router.delete('/products/:id', async (req, res) => { await productController.deleteProduct(req, res) }); // Delete a product by id

export default router;