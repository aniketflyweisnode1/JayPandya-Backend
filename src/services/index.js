import {
  signin,
  signup,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
  changePassword
} from './auth.service';


import {
  createBanner ,
  getAllBanner,
  BannerfindId,
  deleteBannerById,
  updateBannerDetails,
  
} from './banner_service'


import {
  AddTerms, 
  getTerms, 
  updateTerms, 
  DeleteTerms
} from './terms'

import {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview
} from './review.service';

import {
  createUser,
  queryUsers,
  queryUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
} from './user.service';

import {
  createCategory,
  queryCategories,
  queryCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById,
  getCategryBySelleId
} from './category.service';

import {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats,
  createProductExcel,
  allProduct
} from './product.service';

import {
  addProductToCart,
  reduceByOne,
  increaseByOne,
  queryCart,
  deleteCart,
  deleteItem
} from './cart.service';

import {
  createOrder,
  orderStatus,
  queryOrders,
  queryOrder,
  cancelOrder
} from './order.service';

import {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
} from './discount.service';

import {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
} from './favorite.service';


import {
  Addprivacy,
  getprivacy,
  updateprivacy,
  Deleteprivacy
} from './privacy.service';


import {
  Addnotification,
  getnotification,
  updatenotification,
  Deletenotification
} from './notification.service'

const authService = {
  signin,
  signup,
  logout,
  refreshAuth,
  resetPassword,
  verifyEmail,
  changePassword
};

const reviewService = {
  createReview,
  queryReviews,
  queryReviewById,
  updateReview,
  deleteReview
};

const userService = {
  createUser,
  queryUsers,
  queryUser,
  updateUserDetails,
  updateUserProfileImage,
  deleteUser,
  deleteMyAccount
};

const categoryService = {
  createCategory,
  queryCategories,
  queryCategory,
  updateCategoryDetails,
  updateCategoryImage,
  deleteCategoryById,
  getCategryBySelleId
};

const productService = {
  queryProducts,
  queryProductById,
  createProduct,
  updateProductDetails,
  addProductColor,
  addProductSize,
  deleteProductColor,
  deleteProductSize,
  updateProductMainImage,
  updateProductImages,
  deleteProduct,
  getProductStats,
  createProductExcel,
  allProduct
};

const cartService = {
  addProductToCart,
  reduceByOne,
  increaseByOne,
  queryCart,
  deleteCart,
  deleteItem
};

const orderService = {
  createOrder,
  orderStatus,
  queryOrders,
  queryOrder,
  cancelOrder
};

const discountService = {
  getAllDiscountCodes,
  getDiscount,
  verifyDiscountCode,
  generateDiscountCode,
  deleteDiscountCode,
  cancelDiscountCode
};

const favoriteService = {
  addFavoriteProduct,
  getFavoriteList,
  deleteProductFromFavorite,
  checkProductInFavoriteList
};

const termsService = {
  AddTerms, 
  getTerms, 
  updateTerms, 
  DeleteTerms
}

const privacyService = {
  Addprivacy,
  getprivacy,
  updateprivacy,
  Deleteprivacy
}

const notifyService = {
  Addnotification,
  getnotification,
  updatenotification,
  Deletenotification
}

const BannerService = {
  createBanner ,
  getAllBanner,
  BannerfindId,
  deleteBannerById,
  updateBannerDetails,
}

export {
  authService,
  userService,
  categoryService,
  productService,
  reviewService,
  cartService,
  orderService,
  discountService,
  favoriteService,
  termsService,
  privacyService,
  notifyService,
  BannerService
};
