var mongoose = require("mongoose");

var MovieSchema = new mongoose.Schema({
    Title: String,
    Year:String,
    Rated:String,
    Released:String,
    Runtime:String,
    Genre:String,
    Director:String,
    Writer:String,
    Actors:String,
    Plot:String,
    Language:String,
    Country:String,
    Awards:String,
    Poster:String,
    Ratings: [
            {
            Source: String,
            Value: String
            }
        ],
    Metascore:String,
    imdbRating:String,
    imdbVotes:String,
    imdbID:String,
    Type:String,
    DVD:String,
    BoxOffice:String,
    Production:String,
    Website:String,
    Response:String,
    Comments: [
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
        }
    ]
});

module.exports = mongoose.model("Movie", MovieSchema);