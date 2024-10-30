// authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Extract token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1]; // Ensure we extract the token after "Bearer"

  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  try {
    // Verify the token using the secret
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach the decoded user info to req
    next();  // Call the next middleware
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = authMiddleware;
