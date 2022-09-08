const {json} = require("express");
const Flight = require("../model/Flight")

//get all tasks
exports.getAllFlights = async (req, res)=> {
    try {
        let flights = await Flight.find();
        if(flights.length === 0)
        return res.status(404).json({
            success: false,
            message: 'No flights booked!'
            
            })

        res.status(200).json({
            success:true,
            message: "Flight found!",
            flights,
            count: flights.length
        });
    } catch (error) {
        res.status(500).json ({
            success :false,
            message: "Internal Server Error",
            error: error.message
        });
    }
};
// get a single flight

exports.getFlight = async (req, res) =>{
    try {
        let id = {_id: req.param.id};
        let flight = await Flight.findOne({id});
        if(!flight) return res.status(404).json({
            success: false,
            message: "flight not found",
        })
        res.status(200).json({
            success:true,
            message: 'flight found',
            flight,
        })
    } catch (error) {
        res.catch(500).json({
            success:false,
            message: "Internal Server Error",
            error: error.message
        })
        
    }
};

//book flight

exports.bookFlight = async (req, res) => {
    try {
        let flight = await req.body;
        let booked = await Flight.create(flight);

    if (!booked) return res.status(400).json({
        success: false,
        message: 'Flight booking not successful ',
    })
    return res.status(200).json({
        success: true,
        message: 'Flight booked successfully',
        user: booked
    })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'Internal Server',
            error: error.message,
    })
    }

}

//update task

exports.updateFlight = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let flight = await req.body;
        let update = await Flight.findOneAndUpdate(id, flight, {new: true});

    if (!update) return res.status(400).json({
        success: false,
        message: 'flight not updated'
    });
    return res.status(200).json({
        success: true,
        message: 'Flight updated successfully',
        flight: update
    });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: error.message
        })
        
    }
    
};

//cancel flight
exports.cancelFlight = async (req, res) => {
    try {
        let id = {_id: req.params.id}
        let canceled = await Flight.findOneAndRemove(id);
        if(!canceled) return res.status(400).json({
            success: false,
            message: 'flight not deleted'
        });
        return res.status(200).json({
            success: true,
            message: "flight canceled successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

