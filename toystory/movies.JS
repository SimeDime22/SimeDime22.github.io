function printMovie()
{
    var title_line = "<td>" + this.title + "</td>";
    var year_line = "<td>" + this.year + "</td>";
    var time_line = "<td>" + this.time + "</td>";
    var genre_line = "<td>" + this.genre + "</td>";
    var rating_line = "<td>" + this.rating + "</td>";

    var row = "<tr>" +
                title_line +
                year_line +
                time_line +
                genre_line +
                rating_line +
              "</tr>";

    document.write(row);
}

function Movie(title, year, time, genre, rating)
{
    this.title = title;
    this.year = year;
    this.time = time;
    this.genre = genre;
    this.rating = rating;

    this.printMovie = printMovie;
}

var toy1 = new Movie("Toy Story", "1995", "81 min", "Animation", "G");
var toy2 = new Movie("Toy Story 2", "1999", "92 min", "Animation", "G");
var toy3 = new Movie("Toy Story 3", "2010", "103 min", "Animation", "G");
var toy4 = new Movie("Toy Story 4", "2019", "100 min", "Animation", "G");
var toy5 = new Movie("Toy Story 5", "2026", "110 min", "Animation", "G");

var movieArray = [toy1, toy2, toy3, toy4, toy5];

for (var counter = 0; counter < movieArray.length; counter++)
{
    movieArray[counter].printMovie();
}

document.write("</table>");