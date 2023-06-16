// Packages
import express from 'express';

// Middlewares
import protect from '../middlewares/protect';

// Controllers
import { bannerController } from '../controllers/index';

// Utils
import { singleFile } from '../utils/multer';

const {
    addBanner,
    getAllBanners,
    DeleteBanner,
    BannerGetByID
} = bannerController

const router = express.Router();


// Get All Categories Route
router.get('/', getAllBanners);

// Get Category Route
router.get('/:id',BannerGetByID);

// Protect All Next Routes
//router.use(protect.);

// Add Category (Multer Middleware) Route
router.post('/', singleFile('image'), addBanner);

// Update Category details Route
// Delete Category Route
router.route('/:id').delete(DeleteBanner);

// Update Category Image (Multer Middleware) Route
//router.patch('/:id/image', singleFile('image'), updateCategoryImage);



export default router;
