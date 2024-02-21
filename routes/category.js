const router = require('express').Router();
const categoryController = require('../controllers/CategoryController');
const { verifyAndAuthorization,verifyAdmin, verifyVendor } = require('../middleware/verifyToken');

router.post('/', verifyAdmin, categoryController.createCategory)

router.put('/:id', verifyAdmin, categoryController.updateCategory)

router.post('/image/:id', categoryController.patchCategoryImage)

router.get('/', categoryController.getAllCategories)

router.delete('/:id', verifyAdmin, categoryController.deleteCategory)

router.get('/random', categoryController.getRandomCategories)


module.exports = router;