const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;

  console.log('🛠️ Incoming signup request:', req.body);

  const referralCode = name?.toLowerCase().replace(/\s/g, '') + '2025';

  if (!name || !email || !password) {
    console.log('⚠️ Missing fields:', { name, email, password });
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const userExist = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });
    if (userExist) {
      console.log('🚫 User already exists:', email);
      return res.status(400).json({ msg: 'User already exists' });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hash,
      referralCode
    });

    console.log('✅ User created:', user.email);

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
    res.json({ token });
  } catch (err) {
    console.error('❌ Signup error:', err);
    res.status(500).json({ msg: err.message });
  }
};


exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: new RegExp(`^${email}$`, 'i') });

  if (!user) return res.status(400).json({ msg: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
};

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) return res.status(404).json({ msg: 'User not found' });

    res.json({
      name: user.name,
      email: user.email,
      referralCode: user.referralCode
    });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
