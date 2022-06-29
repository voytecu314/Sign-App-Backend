import contactModel from "../model/contactModel.js";

const contactFormController = async(req,res) => {
    await contactModel.create(req.body)
    res.status(200).json({msg: 'contact send'})
}

export default contactFormController