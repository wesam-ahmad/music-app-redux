const User = require("../Models/user");
const errorHandler = require("../Middelewares/500");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// @desc    Get all users
// @route   GET /api/users
// @access  Public
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, data: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Get a single user
// @route   GET /api/users/:id
// @access  Public
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// @desc    Create a user
// @route   POST /api/users
// @access  Public
exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Update a user
// @route   PUT /api/users/:id
// @access  Public
exports.updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    console.error(err);
    res.status(400).json({ success: false, error: err.message });
  }
};

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Public
exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json("please enter email and password");
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.json("invalid email");
    }

    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
      return res.json("invalid password");
    }
    const accessToken = jwt.sign(
      {
        email: email,

        password: password,
      },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({ ...user._doc, token: accessToken });
  } catch (error) {
    console.log(error.message);
  }
};

//signup
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const users = await User.find();
    const isEmailTaken = users.some((user) => user.email === email);

    if (isEmailTaken) {
      return res.json("Email already taken.");
    }

    const accessToken = jwt.sign(
      {
        email: email,

        password: password,
      },
      process.env.ACCESS_TOKEN_SECRET
    );

    const hashedPwd = await bcrypt.hash(password, 10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPwd,
      token: accessToken,
    });
    const addUser = await newUser.save();

    res.json(addUser);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

exports.oneUser = async (req, res) => {
  const email = req.user.email;
  const user = await User.find({ email: email });
  res.json(user);
};
