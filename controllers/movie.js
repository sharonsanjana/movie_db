const { json, response, request } = require('express')
const moviesModel = require("../models/movie")

const Searchmovies = async (request, response) => {
    // response.send("This was the list of Movies")
    try{
        const movies = await moviesModel.find()
        response.status(200).json(movies)
    }
    catch(error) {
        response.status(404).json({message: error})
    }
}

const Uploadmovie = async (request, response) => {                                                                                                                                                                                                                                                                                                                                                               
    const newMovie = new moviesModel({
        movie_name: request.body.movie_name,
        release: request.body.release,
        actor: request.body.actor,
        OTT: request.body.OTT
    })
    try{
        const movie = await newMovie.save()
        response.status(200).json(movie)
    }
    catch(error){
        response.status(404).json({message: "couldnt upload movie"})
    }

}

const getMoviebyId = async (request,response) =>  {
    response.status(200).json(response.movie)

}

    const Updatemovie = async (request , response ) => {
        // response.send("updated movie")
        if (request.body.movie_name != null){
            response.movie.movie_name = request.body.movie_name
        }
        if (request.body.release != null){
            response.movie.release = request.body.release
        }
        if (request.body.actor != null){
            response.movie.actor = request.body.actor
        }
    
        
        try{
            const Updatemovie = await response.movie.save() // saving the details sent by user
            response.status(201).json(Updatemovie)
        }
        catch (error){
            response.status(400).json({message:error.message})
        }
        }


const Deletemovie = async (request, response ) => {
    try{
        await response.movie.deleteOne()
        response.json({message:`Deleted ${response.movie.title} `})
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}


    async function getMovies(request, response, next) {
        let movie 
        try{
            movie = await moviesModel.findById(request.params.id)
            if(movie == null){
                return response.status(404).json({message:"enter a valid id."})
            }
            response.movie = movie 
            next()
        }
    
        catch(error) {
            return response.status(500).json({message: error})
        }
    }
    
    
module.exports = {Searchmovies, Uploadmovie, Updatemovie, Deletemovie , getMovies, getMoviebyId}
