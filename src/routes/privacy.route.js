import express from 'express';

// Controllers 
import { privactContrller } from '../controllers';


const {
    addprivacy,
    getprivacy,
    updateprivacy,
    deleteprivacy
} = privactContrller;


const router = express.Router();


router.route('/').get(getprivacy).post(addprivacy);
router.route('/:id').patch(updateprivacy).delete(deleteprivacy)


export default router;


