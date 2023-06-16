import catchAsync from '../utils/catchAsync';
import { Privacy  } from '../models';

export const Addprivacy = catchAsync(async(privacy) => {
    console.log(privacy)
    if(!privacy){
        return {
            type: "Error",
            message: "fieldsRequired",
            statusCode: 400
        }
    }
    const data = {
        Privacy: privacy
    }
    const privacyData  = await Privacy.create(data)
    console.log(privacyData)
    return {
        type: "Success",
        statusCode: 201,
        message: 'privacy Added ',
        privacyData
    }
})



export const getprivacy = catchAsync(async(body) => {
    const privacy = await Privacy.find();
    if(privacy.length === 0 ){
            return {
                type: "Error",
                message: "not found ",
                statusCode: 400
            }
    }
    return {
        type: "Success",
        statusCode: 201,
        message: 'Get privacy  ',
        privacy
    }
})


export const updateprivacy = catchAsync(async(id, body) => {
    console.log(id)
    console.log(body)
 const privacy = await Privacy.findById({_id: id})
 if(!privacy){
    return {
        type: "Error",
        message: "ID Not Found ",
        statusCode: 400
    }
}
privacy.privacy = body.Privacy
privacy.save();
return {
    type: "Success",
    statusCode: 201,
    message: ' privacy Updated  ',
    Privacy
}
 
})

export const Deleteprivacy = catchAsync(async(id) => {
    await Privacy.deleteOne({_id: id});
    return {
        type: "Success",
        statusCode: 200,
        message: ' privacy Deleted  ',
    }
})