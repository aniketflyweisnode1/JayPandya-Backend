import express from 'express';

import { supportAndHelp } from '../controllers';

const  {
    AddSupport,
    GetSupport,
    DeleSupport,
    UpdateSupport,
    AddHelp,
    GetHelp,
    DeleHelp,
    UpdateHelp,
} =   supportAndHelp

const router = express();

router.post('/support', AddSupport);
router.get('/support', GetSupport);
router.delete('/support/:id', DeleSupport);
router.put('/support/:id', UpdateSupport)

// Help 

router.post('/help', AddHelp);
router.get('/help', GetHelp);
router.delete('/help/:id', DeleHelp);
router.put('/help/:id', UpdateHelp)





module.exports = router;