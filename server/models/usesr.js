const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const joi = require('joi');
const pwdComplexity = require('joi-password-complexity');

// Forme des donnes de l user
const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    gender: {type: String, required: true},
    month: {type: String, required: true},
    date: {type: String, required: true},
    year: {type: String, required: true},
    likedSongs: {type: [String], default: []},
    playlists: {type: [String], default: []},
    isAdmin: {type: Boolean, default: false},
});