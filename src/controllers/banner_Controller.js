import catchAsync from '../utils/catchAsync';

// Services
import { BannerService } from '../services/index';


export const addBanner = catchAsync(async (req, res) => {
    // 1) Create new category
    const { type, message, statusCode, banner,  } =
      await BannerService.createBanner(
        { description: req.body.description, image: req.body.image},
      //  req.file
      );
  
    // 2) Check if there is an error
    if (type === 'Error') {
      return res.status(statusCode).json({
        type,
        message: message
      });
    }
  
    // 3) If everything is OK, send data
    return res.status(statusCode).json({
      type,
      message: message,
      banner
    });
  });
  

export const getAllBanners = catchAsync(async(req, res) => {
    const { type, message, statusCode, banner,  } = await BannerService.getAllBanner();
    if (type === 'Error') {
        return res.status(statusCode).json({
          type,
          message: message
        });
      }
    
      // 3) If everything is OK, send data
      return res.status(statusCode).json({
        type,
        message: message,
        banner
      });
})


export const DeleteBanner = catchAsync(async(req, res) => {
    const { type, message, statusCode, banner,  } = await BannerService.deleteBannerById(req.params.id)
    if (type === 'Error') {
        return res.status(statusCode).json({
          type,
          message: message
        });
      }
    
      // 3) If everything is OK, send data
      return res.status(statusCode).json({
        type,
        message: message,
        banner
      });
})


export const BannerGetByID = catchAsync(async(req, res) => {
    const { type, message, statusCode, banner,  } = await BannerService.BannerfindId(req.params.id)
    if (type === 'Error') {
        return res.status(statusCode).json({
          type,
          message: message
        });
      }
    
      // 3) If everything is OK, send data
      return res.status(statusCode).json({
        type,
        message: message,
        banner
      });
})


