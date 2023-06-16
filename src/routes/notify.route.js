import express from 'express';

// Controllers 
import { notifyController } from '../controllers';


const {
    addnotification,
    getnotification,
    updatenotification,
    deletenotification
} = notifyController


const router = express.Router();


router.route('/').get(getnotification).post(addnotification);
router.route('/:id').patch(updatenotification).delete(deletenotification)


export default router;


