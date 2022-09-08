const { Schema, model}  = require('mongoose');
const { v1: uuid } = require('uuid')

const flightSchema = new Schema(
    {
    flight:{
        uid: uuid(),
        title: 'Rhiks Airline',
        description:'Airline travling to Lagos Nigeria',
        type: String,
        required: true,
        unique: true,
    },
    price: {
        uid: uuid(),
        type: String,
        required: true,
        unique: true,
    },
    seat_Number: {
        uid: uuid(),
        type: String,
        required: true,
        unique: true,
    },
    source: {
        uid: uuid(),
        type: String,
        required: true,
        unique: true,
    },
    // code: {
    //     uid: uuid(),
    //     type: String,
    //     required: true,
    //     unique: true,
    // },
    departureTime: {
        uid: uuid(),
        type: String,
        required: true,
        unique: true,
    }, 
    ArrivalTime: {
        uid: uuid(),
        type: String,
        required: true,
        unique: true,
    },
    Destination: {
        uid: uuid(),
        type: String,
        required: true,
        unique: true,
    },

    
},
        { timestamps: true }
      
);

const FlightModel = model("flights", flightSchema);

module.exports = FlightModel;
