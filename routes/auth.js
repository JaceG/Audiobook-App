// imports
const express = require('express');
const User = require('../models/user');
const crypto = require('crypto');

// Single routing
const router = express.Router();

// Function to hash a password using PBKDF2
function hashPassword(password, callback) {
    const salt = crypto.randomBytes(16).toString('hex');

    crypto.pbkdf2(password, salt, 10000, 64, 'sha512', (err, derivedKey) => {
        if (err) return callback(err);

        const hashedPassword = `${salt}:${derivedKey.toString('hex')}`;
        callback(null, hashedPassword);
    });
}

// Function to verify password using PBKDF2
function verifyPassword(inputPassword, storedHashedPassword, callback) {
    const [salt, originalHash] = storedHashedPassword.split(':');

    crypto.pbkdf2(inputPassword, salt, 10000, 64, 'sha512', (err, derivedKey) => {
        if (err) return callback(err);

        const inputHash = derivedKey.toString('hex');
        const isMatch = inputHash === originalHash;
        callback(null, isMatch);
    });
}

// Register Route with Password Hashing
router.post('/register', async function (req, res, next) {
    try {
        // Simulated user input (replace with req.body data)
        const { email, phone, name, password } = {
            email: 'jace@gmail.com',
            phone: '6195559253',
            name: 'Jace',
            password: '*********'
        };

        // Hash the password and create the user
        hashPassword(password, async (err, hashedPassword) => {
            if (err) {
                console.error('Error hashing password:', err);
                return res.status(500).json({ error: 'Registration failed!' });
            }

            // Create a new user with the hashed password and other fields
            await User.create({
                email,
                phone,
                name,
                password: hashedPassword,
                status: 1, // Set user status
                role: 'user' // Set user role
            });

            res.json({ message: 'User registered successfully!' });
        });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Registration failed!' });
    }
});

// Login Route with Password Verification
router.post('/login', async function (req, res, next) {
    try {
        // Simulated user input (replace with req.body data)
        const { email, password } = {
            email: 'jace@gmail.com',
            password: '*********'
        };

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User not found!' });
        }

        // Verify the provided password
        verifyPassword(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error verifying password:', err);
                return res.status(500).json({ error: 'Login failed!' });
            }

            if (isMatch) {
                res.json({ message: 'Login successful!' });
            } else {
                res.status(400).json({ error: 'Incorrect password!' });
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Login failed!' });
    }
});

// Placeholder Routes
router.post('/forget-password', function (req, res, next) {
    console.log("Router Working");
    res.end();
});

router.post('/change-password', function (req, res, next) {
    console.log("Router Working");
    res.end();
});

module.exports = router;
