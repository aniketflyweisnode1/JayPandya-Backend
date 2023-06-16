import catchAsync from '../utils/catchAsync';
import Notify from '../models/notification.model'


export const Addnotification = catchAsync(async(Notification) => {
   // console.log(Notification)
    if(!Notification){
        return {
            type: "Error",
            message: "fieldsRequired",
            statusCode: 400
        }
    }
    const notificationData = await Notify.create({
        message: Notification
    })
    return {
        type: "Success",
        statusCode: 201,
        message: 'notification Added ',
        notificationData
    }
})



export const getnotification = catchAsync(async(body) => {
    const Notification = await Notify.find();
    if(Notification.length === 0 ){
            return {
                type: "Error",
                message: "not found ",
                statusCode: 400
            }
    }
    return {
        type: "Success",
        statusCode: 201,
        message: 'Get notification  ',
        Notification
    }
})


export const updatenotification = catchAsync(async(id, body) => {
 const Notification = await Notify.findById({_id: id})
 if(!Notification){
    return {
        type: "Error",
        message: "ID Not Found ",
        statusCode: 400
    }
}
Notification.message = body.message
Notification.save();
return {
    type: "Success",
    statusCode: 201,
    message: ' notification Updated  ',
    Notification
}
 
})

export const Deletenotification = catchAsync(async(id) => {
    await Notify.deleteOne({_id: id});
    return {
        type: "Success",
        statusCode: 200,
        message: ' notification Deleted  ',
    }
})