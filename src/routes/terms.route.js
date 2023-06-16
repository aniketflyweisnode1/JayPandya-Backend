import express from 'express';

// Controllers 
import { termControllers } from '../controllers';


const {
    addTerms,
  getTerms,
  updateTerms,
  deleteTerms
} = termControllers;


const router = express.Router();


router.route('/').get(getTerms).post(addTerms);
router.route('/:id').patch(updateTerms).delete(deleteTerms)


export default router;


