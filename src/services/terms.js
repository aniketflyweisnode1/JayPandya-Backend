import catchAsync from '../utils/catchAsync';
import {Terms} from '../models';


export const AddTerms = catchAsync(async(body) => {
    const {term} = body;
    if(!term){
        return {
            type: "Error",
            message: "fieldsRequired",
            statusCode: 400
        }
    }
    const terms = await Terms.create({
        terms: term
    })
    return {
        type: "Success",
        statusCode: 201,
        message: 'Terms Added ',
        terms
    }
})



export const getTerms = catchAsync(async(body) => {
    const terms = await Terms.find();
    if(terms.length === 0 ){
            return {
                type: "Error",
                message: "not found ",
                statusCode: 400
            }
    }
    return {
        type: "Success",
        statusCode: 201,
        message: 'Get Terms  ',
        terms
    }
})


export const updateTerms = catchAsync(async(id, body) => {
 const terms = await Terms.findById({_id: id})
 if(!terms){
    return {
        type: "Error",
        message: "ID Not Found ",
        statusCode: 400
    }
}
terms.terms = body.terms
terms.save();
return {
    type: "Success",
    statusCode: 201,
    message: ' Terms Updated  ',
    terms
}
 
})

export const DeleteTerms = catchAsync(async(id) => {
    await Terms.deleteOne({_id: id});
    return {
        type: "Success",
        statusCode: 200,
        message: ' Terms Deleted  ',
    }
})