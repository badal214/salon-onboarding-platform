// clientRoutes.js
import express from 'express';
import Client from '../backend/models/Client.js'; // Use .js extension



const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Client already registered.' });
    }

    const newClient = new Client({ firstName, lastName, email, phone, password });
    await newClient.save();
    res.status(201).json({ message: 'Client registered successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

