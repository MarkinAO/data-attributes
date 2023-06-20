export default class MoviesTable {
  constructor(data) {
    this.data = data;
    this.box = ["id", "title", "imdb", "year"];
  }

  showMovies(signSort = "id", type = "increasing") {
    this.clearMovies();
    const table = document.createElement("table");
    document.body.appendChild(table);
    const tr = document.createElement("tr");
    table.appendChild(tr);

    this.box.forEach((cell) => {
      const td = document.createElement("td");
      td.textContent = cell;

      let typeArrow = type === "increasing" ? " &darr;" : " &uarr;";
      if (cell === signSort) td.innerHTML = cell + typeArrow;
      tr.appendChild(td);
    });

    this.data.forEach((movie) => {
      const tr = document.createElement("tr");
      table.appendChild(tr);

      this.box.forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = movie[cell];
        if (cell === "imdb") td.textContent = movie[cell].toFixed(2);
        tr.appendChild(td);
      });
    });
  }

  // increasing - по возрастанию, decreasing - по убыванию
  sortMovies(signSort = "id", type = "increasing") {
    if (signSort === "id" || signSort === "imdb" || signSort === "year") {
      if (type === "increasing") {
        this.data.sort((a, b) => a[signSort] - b[signSort]);
      } else {
        this.data.sort((a, b) => b[signSort] - a[signSort]);
      }
    } else {
      if (type === "increasing") {
        this.data.sort((a, b) => {
          if (a[signSort].toLowerCase() < b[signSort].toLowerCase()) return -1;
          if (a[signSort].toLowerCase() > b[signSort].toLowerCase()) return 1;
          return 0;
        });
      } else {
        this.data.sort((a, b) => {
          if (b[signSort].toLowerCase() < a[signSort].toLowerCase()) return -1;
          if (b[signSort].toLowerCase() > a[signSort].toLowerCase()) return 1;
          return 0;
        });
      }
    }
    this.showMovies(signSort, type);
  }

  clearMovies() {
    const table = document.querySelector("table");
    if (table) table.remove();
  }
}
