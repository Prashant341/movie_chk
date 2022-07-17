//include schema
const getModel = require('../model/model.js')
//const showModel = require('../model/model')
//const Joi = require('@hapi/joi')
const uuid = require('uuid')
const mongoose = require('mongoose')
const { post } = require('../routes/api_routes')





// Todo Add Details
//  START
exports.addDetails = async (req, res) => {
    const post = new getModel({            //u can use Model,takemadel  etc var here

       // movie_id: req.body.movie_id,
       // movie_code: req.body.movie_code,
        title: req.body.title,
        release_date: Date(req.body.release_date),
        director: req.body.director,
        producer: req.body.producer,
        actors: req.body.actors,
        audio_language: req.body.audio_language,
        // created_on: req.body.created_on,
        // modified_on: req.body.modified_on

    })
    const check = await getModel.find().sort({_id: -1}).limit(1)        
    
    if(check.length != 0){

        post.movie_code = "mov-" + (Number(check[0].movie_code.slice(4)) +1)
    }
    else
        {
            post.movie_code  = "mov-1001";
        }


    post.save()
        .then(data => { res.send(data) })
        .catch(err => { res.send(err) })               //6.21 dy 15
    //% END
 }
// // END
// % START
//     exports.addDetails = async (req, res) => {
//        const post = new getModel({
//            // movie_id: req.body.movie_id,
//            movie_id: uuid.v4(),
//            movie_code: req.body.movie_code,
//            title: req.body.title,
//            release_date: req.body.release_date,
//            director: req.body.director,
//            producer: req.body.producer,
//            actors: req.body.actors,
//            audio_language: req.body.audio_language,
//            status:"successfully Added"

//        })

//        try {
        
//            const movieSchema = new Joi.object({
//                // movie_id: Joi.string(),
//               // movie_code: Joi.string().min(1).required(),
//                title: Joi.string().min(1).required(),
//                release_date: Joi.date().required(),
//                director: Joi.string().min(3).required(),
//                producer: Joi.string().min(3).required(),
//                actors: Joi.array().min(1),
//                audio_language: Joi.array().min(1).required(),
            
//            })
//            const { error } = await movieSchema.validateAsync(req.body)
//            if (error) {
//                res.status(400).send(error.details[0].message)
//                return;
//            } else {
//                post.save()
//                    .then(data => { res.send(data) })
//                    .catch(err => { res.send(err) })
//            }
//         } catch (error) {
//           res.status(500).send(error)
//        }


//  }
// %END

//% working this too
// exports.showDetails = (req,res) => {
//     getModel.find()             //fetches all details
//     .then(result =>{
//         res.send(result)
//     })
//     .catch(err => {
//         res.status(400).send(err)
//     })
//   }

// Todo Show Details
//  START
exports.showDetails = (req, res) => {
    // showModel.find({}, (err, result) => {
    getModel.find((err, result) => {             // fetches all details //% u can use{}
        if (err) {
            res.send({
                message: "Not able to Read users",
                error: err
            })
        }
        res.send({
            message: 'Successfully read users',
            data: result
        })
    })
}
//  END


//     todo Update Details
// START
// exports.updateDetails = (req, res) => {
//     getModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
//         if (err) {
//             res.send({
//                 message: "Not able to Update users",
//                 error: err
//             })
//         }
//         res.send({
//             message: 'Successfully Updated users',
//             data: result
//         })
//     })
// }
//  END




// Todo  Delete Details
// START
exports.deleteDetails = (req, res) => {
    getModel.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) {
            res.send({
                message: "Not able to Delete user",
                error: err
            })
        }
        res.send({
            message: 'Successfully Delete user',
            data: result
        })
    })
}

// END

//todo Get a single detail
// START
exports.singleDetails = (req, res) => {
    getModel.findById(req.params.id)
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.send('not found')
        })
}
// END


exports.updateDetails = async (req, res) => {

    // const movieSchema = new object({
    //     // movie_id: string(),
    //     // movie_code:string().min(1).required(),
    //     title: string()joi.min(1).required(),
    //     // release_date:date().required(),                    
    //     director: string().min(3).required(),
    //     producer: string().min(3).required(),
    //     actors: array().min(1),
    //     audio_language: array().min(1).required()
    // })
    // const{error} = movieSchema.validate(req.body)
    // if (error) return res.status(400).send(result.error.details[0].message);

    const tempData = await getModel.findById(req.params.id);
  
    if (!tempData) return res.status(404).send("id not found...");
  
    // if (tempData.id !== req.user._id)
    //   return res.status(401).send("Todo update failed. Not authorized...");

    
    const{title,director,producer,actors,audio_language} = req.body

    try {
        const updatedData = await getModel.findByIdAndUpdate(
            req.params.id,
            {title,director,producer,actors,audio_language},{new:true});
            res.send(updatedData)
}catch(error){
    res.status(500).send(error.message)
    console.log(error.message)
}
}
