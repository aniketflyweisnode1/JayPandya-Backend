import catchAsync from '../utils/catchAsync';
import {privacyService} from '../services'


export const addprivacy = catchAsync(async(req,res) => {
    let {Privacy} = req.body;
    const { type, message, statusCode, privacyData } =
    await privacyService.Addprivacy(Privacy)

    if(type === "Error"){
        return res.status(400).json({
            type,
            message: message
        })
    }

    return res.status(statusCode).json({
        type,
        message: message,
        privacyData
    })
})


export const getprivacy = catchAsync(async(req,res) => {

    const { type, message, statusCode, privacy } =
    await privacyService.getprivacy()

    if(type === "Error" || type === "error"){
        return res.status(400).json({
            message: message,
            type
        })
    }
    return res.status(statusCode).json({
        type,
        message: message,
        privacy
    })
})


export const updateprivacy = catchAsync(async(req,res) => {
    let Id = req.params.id
    console.log(Id)
    const { type, statusCode, message, Privacy } =
    await privacyService.Deleteprivacy(Id, req.body)
    if(type === "Error" || type === "error"){
        return res.status(statusCode).json({
            message: message,
            type
        })
    }
    return res.status(statusCode).json({
        message: message,
        type: type,
        Privacy
        
    })
})


export const deleteprivacy = catchAsync(async(req, res) => {
    const id = req.params.id
    const {type, statusCode, message}  = await privacyService.Deleteprivacy(id)
    res.status(statusCode).json({
        type: type,
        message: message
    })
})