const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

router.get("/", async (req, res) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    // Extract the token from "Bearer <token>"
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access Denied. Token is missing.' });
    }

    // Verify the token
    const decodedToken = jwt.verify(token, 'Your_Private_Key'); // Replace with your actual secret key

    // Assuming the user ID is stored in the token
    const userId = decodedToken._id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // If the user exists, return the user object
    res.status(200).json({
      message: 'User Data Fetch successfully',
      user: user,
    });
  } catch (err) {
    // Handle token errors
    if (err.name === 'JsonWebTokenError') {
      return res.status(400).json({ message: 'Invalid token' });
    }
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }

    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
