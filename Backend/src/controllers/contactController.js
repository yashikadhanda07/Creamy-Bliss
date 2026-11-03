import { JsonDB } from '../services/db.js';

export const submitContact = (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required'
      });
    }

    const newContact = {
      id: `msg-${Date.now()}`,
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      status: 'Unread',
      createdAt: new Date().toISOString()
    };

    JsonDB.insert('contacts', newContact);

    res.status(201).json({
      success: true,
      message: 'Your message has been received! Our scoop team will reply within 24 hours. 🍨',
      data: newContact
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to submit contact message', error: error.message });
  }
};

export const getContactMessages = (req, res) => {
  try {
    const messages = JsonDB.getAll('contacts');
    messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    res.json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch contact inquiries', error: error.message });
  }
};

