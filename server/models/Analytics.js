// server/models/Analytics.js
const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  bank: String,
  reach: Number,
  impressions: Number,
  engagement: Number,
  comments: Number,
  shares: Number,
  posts: Number,
  followersGained: Number,
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
