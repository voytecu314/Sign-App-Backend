import userModel from "../model/userModel.js";
import bcrypt from "bcryptjs";

export const userSignup = async (req, res) => {

  const { firstName, email, password } = req.body;

  try {
    //Check if user already exists
    let existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User Already Exists!" });
    }

    //Create a new user
    const user = new userModel({
      firstName,
      email,
      password, // "password": 1234
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.status(200).json({ msg: `${req.body.firstName} signed up!` });

  } catch (error) {
    res.status(500).send(error);
  }
};

export const userLogin = async (req, res) => {
  //Code here
  const { email, password } = req.body;

  try {
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User Not Exists!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Incorrect Password!" });
    }

   
    res.status(200).json({ msg: `${req.body.email} logged in!` });

  } catch (error) { res.status(500).send(error); }
};
