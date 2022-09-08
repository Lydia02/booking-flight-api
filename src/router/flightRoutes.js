const router = require('express').Router();
const controller = require('../controller/flightController')

router
.get('/',controller.getAllFlights)
.get('/:id', controller.getAllFlights)
.post('/', controller.bookFlight)
.put('/:id', controller.updateFlight)
.delete('/:id', controller.cancelFlight)

module.exports = router;
