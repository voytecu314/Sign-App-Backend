import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
    const token = req.header('token');
   console.log(token);
    if (!token) {
        return res.status(401).json({ msg: "Auth Error!!" });
      }
    try {
        const decoded = jwt.verify(token, "randomString");
        req.user = decoded.user; 
        next();
      } catch (error) {
        console.log('EE',error);
        res.status(500).send("Invalid Token!");
      }
}

export default auth;