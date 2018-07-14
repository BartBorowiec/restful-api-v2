let mongoose = require('mongoose'),
	axios = require('axios'),
	Movie = require('./models/movie'),
	Comment = require('./models/comment');

exports.showAllMovies = async (req,res) => {
	try {
		const movies = await Movie.find({});
		movies.sort((a,b) => {
	        if (a.Title < b.Title) return -1;
	        if (a.Title > b.Title) return 1;
	        return 0;
	    });
		return res.json(movies);
    } catch (err) {
    	console.log(err);
    	return res.send(err);
    }
}

exports.addMovie = async (req,res) => {
	try {
		const response = await axios.get('http://www.omdbapi.com/?apikey=effdb1e6&t='+req.body.title);
		const movie = new Movie(response.data);
		movie.save();
		return res.json(movie);
	} catch (err) {
		console.log(err);
		return res.send(err);
	}
}
exports.addComment = async (req,res) => {
	try {
		const movie = await Movie.findOne({_id: req.body.movieID});
		if (!movie) return res.send("No such movie");
		const comment = await Comment.create({text: req.body.text});
		movie.Comments.push(comment);
		return res.json(comment);
	} catch (err) {
		console.log(err);
		return res.send(err);
	}
}
exports.showComments = async (req,res) => {
	try {
		if(!req.body.movieID) {
			const comments = await Comment.find({});
		} else {
			const comments = await Comment.findById(req.body.movieID);
		}
		return res.json(comments);
	} catch (err) {
		console.log(err);
		return res.send(err);
	}
}