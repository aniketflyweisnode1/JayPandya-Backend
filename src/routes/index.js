import express from 'express';

import authRoute from './auth.route';
import userRoute from './user.route';
import productRoute from './product.route';
import categoryRoute from './category.route';
import cartRoute from './cart.route';
import orderRoute from './order.route';
import discountRoute from './discount.route';
import favoriteRoute from './favorite.route';
import termsRoute from './terms.route'
import privacy from './privacy.route';
import notify from   './notify.route'
import banner from './banner_route';
import support from './support'


const router = express.Router();

router.use('/auth', authRoute);
router.use('/user', userRoute);
router.use('/product', productRoute);
router.use('/category', categoryRoute);
router.use('/cart', cartRoute);
router.use('/order', orderRoute);
router.use('/discount', discountRoute);
router.use('/favorite', favoriteRoute);
router.use('/terms', termsRoute)
router.use('/privacy',privacy )
router.use('/notify', notify)
router.use('/banner', banner);
router.use('/', support)


export default router;
