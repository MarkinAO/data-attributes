import MoviesTable from "./MoviesTable";
// TODO: write code here

const data = [
  {
    id: 26,
    title: "Побег из Шоушенка",
    imdb: 9.3,
    year: 1994,
  },
  {
    id: 25,
    title: "Крёстный отец",
    imdb: 9.2,
    year: 1972,
  },
  {
    id: 27,
    title: "Крёстный отец 2",
    imdb: 9.0,
    year: 1974,
  },
  {
    id: 1047,
    title: "Тёмный рыцарь",
    imdb: 9.0,
    year: 2008,
  },
  {
    id: 223,
    title: "Криминальное чтиво",
    imdb: 8.9,
    year: 1994,
  },
];

const movies = new MoviesTable(data);
const signSort = ["id", "title", "imdb", "year"];
let type = "increasing";
let i = 0;

setInterval(() => {
  movies.sortMovies(signSort[i], type);
  if (type === "increasing") {
    type = "decreasing";
  } else {
    type = "increasing";
    i++;
    if (i === signSort.length) i = 0;
  }
}, 2000);
