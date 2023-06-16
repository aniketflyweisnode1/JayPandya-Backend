import {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword
} from './auth.controller';



import {
  addTerms,
  getTerms,
  updateTerms,
  deleteTerms
} from './terms'


import {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  UploadProductExcal,
  getAllProduct
} from './product.controller';

import {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} from './user.controller';

import {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
} from './category.controller';

import {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
} from './review.controller';

import {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
} from './cart.controller';

import {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder
} from './order.controller';

import {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} from './discount.controller';

import {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
} from './favorite.controller';

import {
  addBanner,
  getAllBanners,
  DeleteBanner,
  BannerGetByID
} from './banner_Controller'



import {
  addprivacy,
  getprivacy,
  updateprivacy,
  deleteprivacy
}from  './privacy.controller';


import {
  addnotification,
  getnotification,
  updatenotification,
  deletenotification
} from './notify.controller'

import {
  AddSupport,
  GetSupport,
  DeleSupport,
  UpdateSupport,
  AddHelp,
  GetHelp,
  DeleHelp,
  UpdateHelp,
} from './support_controller'



const authController = {
  signin,
  signup,
  logout,
  refreshTokens,
  forgotPassword,
  resetPassword,
  verifyEmail,
  sendVerificationEmail,
  changePassword
};

const userController = {
  createUser,
  getUsers,
  getUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
};

const categoryController = {
  getAllCategories,
  getCategory,
  addCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategory
};

const productController = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  top5Cheap,
  productStats,
  UploadProductExcal,
  getAllProduct
};

const reviewController = {
  getAllReviews,
  getReview,
  addReview,
  updateReview,
  deleteReview
};

const cartController = {
  addItemToCart,
  reduceByOne,
  increaseByOne,
  getCart,
  deleteCart,
  deleteItem
};

const orderController = {
  createOrder,
  orderStatus,
  getAllOrders,
  getOrder,
  cancelOrder
};

const discountController = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteController = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

const termControllers = {
  addTerms,
  getTerms,
  updateTerms,
  deleteTerms
}
const privactContrller = {
  addprivacy,
  getprivacy,
  updateprivacy,
  deleteprivacy
}

const notifyController = {
  addnotification,
  getnotification,
  updatenotification,
  deletenotification
}

const bannerController = {
  addBanner,
  getAllBanners,
  DeleteBanner,
  BannerGetByID
}

const supportAndHelp = {
  AddSupport,
  GetSupport,
  DeleSupport,
  UpdateSupport,
  AddHelp,
  GetHelp,
  DeleHelp,
  UpdateHelp,
}

export {
  authController,
  userController,
  productController,
  categoryController,
  reviewController,
  cartController,
  orderController,
  discountController,
  favoriteController,
  termControllers,
  privactContrller,
  notifyController,
  bannerController,
  supportAndHelp
};
