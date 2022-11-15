import { Router } from 'express';
const router = new Router();
import User from '../models/user.js'

router.post('/paymentdone/:id', async(req, res) => {
    try{
        const user = await User.findOne({_id: req.params.id});
        const referredUser = await User.findOne({_id: user.referredUser});
        user.isPaymentMade = true;
        referredUser.totalEarnings += 10;
        await user.save();
        await referredUser.save();
        res.status(200).send({user, referredUser})
    } catch(e){
        res.status(400).send(e)
    }
})

export default router