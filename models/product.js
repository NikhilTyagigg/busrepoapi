const mongoose = require('mongoose');

// Define the schema for the BusData collection
const busDataSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  numberOfStops: {
    type: Number,
    required: true
  },
  stops: [{
    stopName: {
      type: String,
      required: true
    },
    timeStamp: {
      type: Date,
      required: true
    },
    frequency: {
      type: String,
      required: true
    },
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    }
  }]
});

// Create the BusData model
const BusData = mongoose.model('BusData', busDataSchema);

module.exports = BusData;
