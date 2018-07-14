
    // POST /movies
    //     Request body should contain only movie title, and its presence should be validated.
    //     Based on passed title, other movie details should be fetched from http://www.omdbapi.com/ (or other similar, public movie database) - and saved to application database.
    //     Request response should include full movie object, along with all data fetched from external API.
    // GET /movies
    //     Should fetch list of all movies already present in application database.
    //     Additional filtering, sorting is fully optional - but some implementation is a bonus.
    // POST /comments
    //     Request body should contain ID of movie already present in database, and comment text body.
    //     Comment should be saved to application database and returned in request response.
    // GET /comments
    //     Should fetch list of all comments present in application database.
    //     Should allow filtering comments by associated movie, by passing its ID.


let express = require('express'),
	app 	= express(),
	mongoose = require('mongoose'),
	movieAPI = require('./controller'),
	bodyParser = require('body-parser');

mongoose.connect("mongodb://localhost:27017/movies",{ useNewUrlParser: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.route('/movies')
	.get(movieAPI.showAllMovies)
	.post(movieAPI.addMovie);

app.route('/comments')
	.get(movieAPI.showComments)
	.post(movieAPI.addComment);

app.listen(3000, process.env.IP, ()=> {
	console.log('Server is running on port 3000');
});