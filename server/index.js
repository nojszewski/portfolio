import express from 'express';
import cors from 'cors';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests per windowMs
});

// Apply rate limiting to contact endpoint
app.use('/api/contact', limiter);

// Validation middleware
const validateContact = [
  body('name').trim().isLength({ min: 2, max: 50 }).escape(),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().isLength({ min: 10, max: 1000 }).escape()
];

// Contact form endpoint
app.post('/api/contact', validateContact, (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, message } = req.body;

  // Here you would typically send an email or store the message
  // For now, we'll just log it
  console.log('Contact Form Submission:', { name, email, message });

  // Send success response
  res.json({ 
    success: true, 
    message: 'Message received successfully!' 
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!' 
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});