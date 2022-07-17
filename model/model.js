const { string } = require('@hapi/joi')
const mongoose = require('mongoose')
var uuid = require('uuid')
const movieSchema = new mongoose.Schema ({

    
    //    {id: 1,
    //     name:'shakya',
    //     email: 'sachin@g.m'} ,
    // {
    //     id: 2,
    //     name:'shakya',
    //     email: 'sachin@g.m'}

    movie_id : {
        
        type: String,
       // primaryKey:true,
       // required : true,
        
    },
    movie_code : {   
        type: String,
        //required : true,      
    },

    // movie_code : {
       
    //     type:String
    //     //type: String,
    //     //required : true,
        
    // },
    title  : {
       
        type: String,
      //  required : [true, 'minimum char 2?']
        
    },
    release_date : {
       
        type: Date,
        // required : true,
        
        
        
    },
    director  : {
       
        type: String,
       // required : true,
        
    },
    producer : {
        
        type: String,
       // required : true,
        
    },
    actors : [{
        
        type: String,
       // required : false,
        
    }],
    audio_language :[{
        
        type: String,
       // required : true,
    }],
   
    // actors : {
        
    //     type: Array,
    //     required : true,
        
    // },
    // created_on: {
    //     type: Date,
    //     default: Date.now()
    // },
    // modified_on: {
    //     type: Date,
    //     default: Date.now()
    // },

}, {
    timestamps: true
}
)

module.exports= mongoose.model('abc',movieSchema)  //"post" data collection or table see mngodb