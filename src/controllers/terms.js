import catchAsync from '../utils/catchAsync';
import {termsService} from '../services';


export const addTerms = catchAsync(async(req,res) => {
    let {term} = req.body;
    const { type, message, statusCode, terms } =
    await termsService.AddTerms({term})

    if(type === "Error"){
        return res.status(400).json({
            type,
            message: message
        })
    }

    return res.status(statusCode).json({
        type,
        message: message,
        terms
    })
})


export const getTerms = catchAsync(async(req,res) => {

    const { type, message, statusCode, terms } =
    await termsService.getTerms()

    if(type === "Error" || type === "error"){
        return res.status(400).json({
            message: message,
            type
        })
    }
    return res.status(statusCode).json({
        type,
        message: message,
        terms
    })
})


export const updateTerms = catchAsync(async(req,res) => {
    let Id = req.params.id
    const { type, statusCode, message, Terms } =
    await termsService.updateTerms(Id, req.body)
    if(type === "Error" || type === "error"){
        return res.status(statusCode).json({
            message: message,
            type
        })
    }
    return res.status(statusCode).json({
        message: message,
        type: type,
        Terms
        
    })
})


export const deleteTerms = catchAsync(async(req, res) => {
    const id = req.params.id
    const {type, statusCode, message}  = await termsService.DeleteTerms(id)
    res.status(statusCode).json({
        type: type,
        message: message
    })
})