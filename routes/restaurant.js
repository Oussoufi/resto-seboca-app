const router = require('express').Router();
const restaurantController = require('../controllers/RestaurantController');
const { verifyAndAuthorization, verifyVendor } = require('../middleware/verifyToken');

router.post('/', verifyAndAuthorization, restaurantController.addRestaurant)

router.get('/byId/:id', restaurantController.getRestaurant)

router.get('/:code', restaurantController.getRandomRestaurant)

router.delete('/:id', verifyVendor, restaurantController.deleteRestaurant)

router.patch('/:id', verifyVendor, restaurantController.serviceAvaibility)


module.exports = router;