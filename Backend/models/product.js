const mongoose = require('mongoose');

// Define the schema for the BusRoute collection
const busRouteSchema = new mongoose.Schema({
  routeId: {
    type: String,
    required: true
  },
  routeNumber: {
    type: String,
    required: true
  },
  sourceLocation: {
    type: String,
    required: true
  },
  destinationLocation: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  deprotName: {
    type: String,
    required: true
  },
  frequency: {
    type: String,
    required: true
  },
  intermediateStops: [{
    stopName: {
      type: String,
      required: true
    },
    arrivalTime: {
      type: String,
      required: true
    },
    departureTime: {
      type: String,
      required: true
    },
    frequency: {
      type: String,
      required: true
    },
    stopLocation: {
      type: [Number], // Array containing two numbers (latitude and longitude)
      required: true
    }
  }]
});

// Create the BusRoute model
const BusRoute = mongoose.model('BusRoute', busRouteSchema);

module.exports = BusRoute;
