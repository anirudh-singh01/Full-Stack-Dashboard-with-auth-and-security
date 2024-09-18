const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

router.put("/", async (req, res) => {
    try {
      const { firstName, lastName, contact, address1, address2 } = req.body;
  
      // Get token from authorization header and remove 'Bearer ' prefix
      const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
  
      // Check if token is provided
      if (!token) {
        return res.status(401).json({ message: "Access Denied. No token provided." });
      }
  
      // Verify the token
      const decodedToken = jwt.verify(token, 'Your_Private_Key'); // Replace 'Your_Private_Key' with your actual secret key
  
      // Assuming the user ID is stored in the token
      const userId = decodedToken._id;
  
      // Update user details in the database
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { firstName, lastName, contact, address1, address2 },
        { new: true } // Return the updated user data
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json({
        message: "Profile updated successfully",
        user: updatedUser,
      });
    } catch (err) {
      // Handle token errors
      if (err.name === "JsonWebTokenError") {
        return res.status(400).json({ message: "Invalid token" });
      }
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token expired" });
      }
  
      console.error(err);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  

module.exports = router;
