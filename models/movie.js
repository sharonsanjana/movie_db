const mongoose = require('mongoose')
const  movieSchema = mongoose.Schema({
    movie_name:{
        type:String,
        unique: true,
        required :true
    },
    release:{
        type:Number,
        required : true,
        minimum:1888,
        maximum:2023
    },
    actor:{
        type:String,
        required : true
    },
    OTT:{
        type: String,
        required :true
    
    }
})

module.exports = mongoose.model(`moviesModel`, movieSchema)