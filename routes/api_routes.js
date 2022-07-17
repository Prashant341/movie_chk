const express = require('express')
const router = express.Router()
const Controller = require('../controller/controller')
const cors = require("cors")
const uuid = require('uuid')

router.post('/add_Details',cors(),Controller.addDetails)
router.get('/show_Details',cors(),Controller.showDetails)
router.get('/single_details/:id',cors(),Controller.singleDetails)
router.put('/update_Details/:id',cors(),Controller.updateDetails)
router.delete('/delete_Details/:id',cors(),Controller.deleteDetails)

module.exports = router