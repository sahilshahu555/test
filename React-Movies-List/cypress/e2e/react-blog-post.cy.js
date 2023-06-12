/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

const mock = {
  movies: [
    {
      id: 1,
      title: "The Avengers",
      year: "2012",
      imdbID: "tt0848228",
      type: "movie",
      rating: 1,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      id: 2,
      title: "Avengers: Endgame",
      year: "2019",
      imdbID: "tt4154796",
      type: "movie",
      rating: 2,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
    {
      id: 3,
      title: "Avengers: Infinity War",
      year: "2018",
      imdbID: "tt4154756",
      type: "movie",
      rating: 3,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      id: 4,
      title: "Avengers: Age of Ultron",
      year: "2015",
      imdbID: "tt2395427",
      type: "movie",
      rating: 4,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      id: 5,
      title: "The Avengers",
      year: "1998",
      imdbID: "tt0118661",
      type: "movie",
      rating: 5,
      poster:
        "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      id: 6,
      title: "The Avengers: Earth's Mightiest Heroes",
      year: "2010",
      imdbID: "tt1626038",
      type: "series",
      rating: 1,
      poster:
        "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg",
    },
    {
      id: 7,
      title: "Ultimate Avengers: The Movie",
      year: "2006",
      imdbID: "tt0491703",
      type: "movie",
      rating: 2,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
    },
    {
      id: 8,
      title: "Ultimate Avengers II",
      year: "2006",
      imdbID: "tt0803093",
      type: "movie",
      rating: 3,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      id: 9,
      title: "The Avengers",
      year: "1961",
      imdbID: "tt0054518",
      type: "series",
      rating: 4,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
    },
    {
      id: 10,
      title: "Avengers Assemble",
      year: "2012",
      imdbID: "tt2455546",
      type: "series",
      rating: 5,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",
    },
    {
      id: 11,
      title: "Pirates of the Caribbean: The Curse of the Black Pearl",
      year: "2003",
      imdbID: "tt0325980",
      type: "movie",
      rating: 1,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNGYyZGM5MGMtYTY2Ni00M2Y1LWIzNjQtYWUzM2VlNGVhMDNhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      id: 12,
      title: "Pirates of the Caribbean: Dead Man's Chest",
      year: "2006",
      imdbID: "tt0383574",
      type: "movie",
      rating: 2,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg",
    },
    {
      id: 13,
      title: "Pirates of the Caribbean: At World's End",
      year: "2007",
      imdbID: "tt0449088",
      type: "movie",
      rating: 3,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
    },
    {
      id: 14,
      title: "Pirates of the Caribbean: On Stranger Tides",
      year: "2011",
      imdbID: "tt1298650",
      type: "movie",
      rating: 4,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5MjkwODI3Nl5BMl5BanBnXkFtZTcwNjcwMDk4NA@@._V1_SX300.jpg",
    },
    {
      id: 15,
      title: "Pirates of the Caribbean: Dead Men Tell No Tales",
      year: "2017",
      imdbID: "tt1790809",
      type: "movie",
      rating: 5,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_SX300.jpg",
    },
    {
      id: 16,
      title: "The Pirates! Band of Misfits",
      year: "2012",
      imdbID: "tt1430626",
      type: "movie",
      rating: 1,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDhkOGZkZWMtNGI4Mi00ZWI3LTgyYTgtMDU4ZDI3NTNjMWFiXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
    },
    {
      id: 17,
      title: "Pirates of Silicon Valley",
      year: "1999",
      imdbID: "tt0168122",
      type: "movie",
      rating: 2,
      poster:
        "https://m.media-amazon.com/images/M/MV5BNDc2NTE0NzE4N15BMl5BanBnXkFtZTgwMDQ5MzgwMzE@._V1_SX300.jpg",
    },
    {
      id: 18,
      title: "Pirates of the Caribbean: The Legend of Jack Sparrow",
      year: "2006",
      imdbID: "tt0815220",
      type: "game",
      rating: 3,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTIzMDUwMjc3NV5BMl5BanBnXkFtZTcwNzMzNTQzMQ@@._V1_SX300.jpg",
    },
    {
      id: 19,
      title: "Pirates of the Caribbean: The Legend of Jack Sparrow - 2",
      year: "1984",
      imdbID: "tt0087451",
      type: "game",
      rating: 4,
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTA1YWRlY2EtZGQ5ZS00Yzg3LTk0ZDYtZDMzNTEyYzczZjA3XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg",
    },
    {
      id: 20,
      title: "The Pirates of Somalia",
      year: "2017",
      imdbID: "tt5126922",
      type: "movie",
      rating: 5,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2OTIwNjA0NV5BMl5BanBnXkFtZTgwMDYxNTYxNDM@._V1_SX300.jpg",
    },
  ],
};

const dbjson = mock.movies;

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("react-blog-posts", function () {
    let acc_score = 1;

    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }

      cy.writeFile("db.json", mock, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });

    it(`On page load basic structure is present(
      1. Button should be there to toggle between the components with the correct text Content.
      2. Movie container should be present with a list of movies after fetching from json server)`, () => {
      cy.intercept("GET", "**/movies").as("getMovies");
      cy.visit(url);
      cy.wait("@getMovies");
      cy.get(".App>h1").should("have.text", "React Movies List");
      cy.get("button").should("have.text", "Add Movie");
      cy.get(`[data-testid="movie-card"]`).should("have.length", dbjson.length);
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        if (ind % 4 === 0) {
          cy.wrap(card)
            .find("img")
            .should("have.attr", "src", dbjson[ind].poster);
          cy.wrap(card).find("h2").should("contain", dbjson[ind].title);
          cy.wrap(card).find("h4").should("contain", dbjson[ind].year);
          cy.wrap(card).find("h6").should("contain", dbjson[ind].imdbID);
          cy.wrap(card).find("p").eq(0).should("contain", dbjson[ind].type);
          cy.wrap(card).find("p").eq(1).should("contain", dbjson[ind].rating);
        }
      });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`Able to filter movies, series, and games by making appropriate requests using query params`, () => {
      cy.intercept("GET", "**/movies").as("getMovies");
      cy.intercept("GET", "**/movies?**").as("getFilteredMovies");
      cy.visit(url);
      cy.wait("@getMovies");
      //filter by movies
      cy.get(`[data-testid="filter"]`).should("be.visible").select("Movie");
      let filteredData = dbjson.filter((ele, ind) => {
        return ele.type === "movie";
      });
      cy.wait("@getFilteredMovies");
      cy.wait(100);
      cy.get(`[data-testid="movie-card"]`).should(
        "have.length",
        filteredData.length
      );
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        if (ind % 4 === 0) {
          cy.wrap(card)
            .find("img")
            .should("have.attr", "src", filteredData[ind].poster);
          cy.wrap(card).find("h2").should("contain", filteredData[ind].title);
          cy.wrap(card).find("h4").should("contain", filteredData[ind].year);
          cy.wrap(card).find("h6").should("contain", filteredData[ind].imdbID);
          cy.wrap(card)
            .find("p")
            .eq(0)
            .should("contain", filteredData[ind].type);
          cy.wrap(card)
            .find("p")
            .eq(1)
            .should("contain", filteredData[ind].rating);
        }
      });
      //filter by series
      cy.get(`[data-testid="filter"]`).should("be.visible").select("Series");
      let filteredDataSeries = dbjson.filter((ele, ind) => {
        return ele.type === "series";
      });
      cy.wait("@getFilteredMovies");
      cy.wait(100);
      cy.get(`[data-testid="movie-card"]`).should(
        "have.length",
        filteredDataSeries.length
      );
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        cy.wrap(card)
          .find("img")
          .should("have.attr", "src", filteredDataSeries[ind].poster);
        cy.wrap(card)
          .find("h2")
          .should("contain", filteredDataSeries[ind].title);
        cy.wrap(card)
          .find("h4")
          .should("contain", filteredDataSeries[ind].year);
        cy.wrap(card)
          .find("h6")
          .should("contain", filteredDataSeries[ind].imdbID);
        cy.wrap(card)
          .find("p")
          .eq(0)
          .should("contain", filteredDataSeries[ind].type);
        cy.wrap(card)
          .find("p")
          .eq(1)
          .should("contain", filteredDataSeries[ind].rating);
      });

      //filter by game
      cy.get(`[data-testid="filter"]`).should("be.visible").select("Game");
      let filteredDatagame = dbjson.filter((ele, ind) => {
        return ele.type === "game";
      });
      cy.wait("@getFilteredMovies");
      cy.wait(100);
      cy.get(`[data-testid="movie-card"]`).should(
        "have.length",
        filteredDatagame.length
      );
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        cy.wrap(card)
          .find("img")
          .should("have.attr", "src", filteredDatagame[ind].poster);
        cy.wrap(card).find("h2").should("contain", filteredDatagame[ind].title);
        cy.wrap(card).find("h4").should("contain", filteredDatagame[ind].year);
        cy.wrap(card)
          .find("h6")
          .should("contain", filteredDatagame[ind].imdbID);
        cy.wrap(card)
          .find("p")
          .eq(0)
          .should("contain", filteredDatagame[ind].type);
        cy.wrap(card)
          .find("p")
          .eq(1)
          .should("contain", filteredDatagame[ind].rating);
      });

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("Able to sort the data by selecting oldest first", () => {
      cy.intercept("GET", "**/movies").as("getMovies");
      cy.intercept("GET", "**/movies?**").as("getSortedMovies");
      cy.visit(url);
      cy.wait("@getMovies");
      //sort by oldest
      cy.get(`[data-testid="sort"]`)
        .should("be.visible")
        .select("Oldest first");
      let sortedData1 = [...dbjson].sort((a, b) => {
        if (a.year > b.year) {
          return 1;
        } else if (a.year < b.year) {
          return -1;
        } else {
          return 0;
        }
      });
      cy.wait("@getSortedMovies");
      cy.wait(200);
      cy.get(`[data-testid="movie-card"]`).should(
        "have.length",
        sortedData1.length
      );
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        if (ind % 4 == 0) {
          // cy.wrap(card).find("img").should("have.attr","src",sortedData1[ind].Poster)
          cy.wrap(card).find("h2").should("contain", sortedData1[ind].title);
          cy.wrap(card).find("h4").should("contain", sortedData1[ind].year);
          cy.wrap(card).find("h6").should("contain", sortedData1[ind].imdbID);
          cy.wrap(card)
            .find("p")
            .eq(0)
            .should("contain", sortedData1[ind].type);
          cy.wrap(card)
            .find("p")
            .eq(1)
            .should("contain", sortedData1[ind].rating);
        }
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Able to sort the data by selecting the newest first", () => {
      cy.intercept("GET", "**/movies").as("getMovies");
      cy.intercept("GET", "**/movies?**").as("getSortedMovies");
      cy.visit(url);
      cy.wait("@getMovies");
      //sort by newest
      cy.get(`[data-testid="sort"]`)
        .should("be.visible")
        .select("Newest first");
      let sortedData1 = [...dbjson].sort((a, b) => {
        if (a.year < b.year) {
          return 1;
        } else if (a.year > b.year) {
          return -1;
        } else {
          return 0;
        }
      });

      cy.wait("@getSortedMovies");
      cy.wait(200);
      cy.get(`[data-testid="movie-card"]`).should(
        "have.length",
        sortedData1.length
      );
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        if (ind % 4 == 0) {
          //cy.wrap(card).find("img").should("have.attr","src",sortedData1[ind].Poster)
          cy.wrap(card).find("h2").should("contain", sortedData1[ind].title);
          cy.wrap(card).find("h4").should("contain", sortedData1[ind].year);
          cy.wrap(card).find("h6").should("contain", sortedData1[ind].imdbID);
          cy.wrap(card)
            .find("p")
            .eq(0)
            .should("contain", sortedData1[ind].type);
          cy.wrap(card)
            .find("p")
            .eq(1)
            .should("contain", sortedData1[ind].rating);
        }
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("On clicking on Add Movie button able to see the AddMovie component and the MovieList component should not exist on DOM", () => {
      cy.visit(url);
      cy.wait(100);
      cy.get("button")
        .should("be.visible")
        .should("have.text", "Add Movie")
        .click();
      cy.get(`[data-testid="movie-list"]`).should("not.exist");
      cy.get(`[data-testid="add-movie"]`).should("exist");
      cy.get("button").should("be.visible").should("have.text", "Show Movies");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Able to add new movies using form and data is getting updated in real-time on UI and dbjson", () => {
      cy.intercept("GET", "**/movies").as("getMovies");
      cy.visit(url);
      cy.wait("@getMovies");
      cy.get("button")
        .should("be.visible")
        .should("have.text", "Add Movie")
        .click();
      cy.get(`[data-testid="movie-list"]`).should("not.exist");
      cy.intercept("POST", "**/movies");
      cy.get(`form`).should("exist");
      // entering movie detials
      cy.get(`input[name="title"]`).clear().type("Legend");
      cy.get(`input[name="year"]`).clear().type("2014");
      cy.get(`input[name="imdbID"]`).clear().type("tt16260382");
      cy.get(`select`).select("Movie");
      cy.get(`input[name="rating"]`).clear().type(5);
      cy.get(`input[name="poster"]`)
        .clear()
        .type(
          "http://data1.ibtimes.co.in/en/full/441453/balakrishna-facebook-14-reels-entertainment.jpg"
        );
      cy.get("form").submit();
      cy.get("button")
        .should("be.visible")
        .should("have.text", "Show Movies")
        .click();
      cy.wait("@getMovies");
      cy.wait(100);
      let dbjson1 = [
        ...dbjson,
        {
          title: "Legend",
          year: "2014",
          imdbID: "tt16260382",
          type: "movie",
          rating: "5",
          poster:
            "http://data1.ibtimes.co.in/en/full/441453/balakrishna-facebook-14-reels-entertainment.jpg",
          id: 21,
        },
      ];
      cy.get(`[data-testid="movie-card"]`).should(
        "have.length",
        dbjson1.length
      );
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        if (ind % 4 === 0) {
          cy.wrap(card)
            .find("img")
            .should("have.attr", "src", dbjson1[ind].poster);
          cy.wrap(card).find("h2").should("contain", dbjson1[ind].title);
          cy.wrap(card).find("h4").should("contain", dbjson1[ind].year);
          cy.wrap(card).find("h6").should("contain", dbjson1[ind].imdbID);
          cy.wrap(card).find("p").eq(0).should("contain", dbjson1[ind].type);
          cy.wrap(card).find("p").eq(1).should("contain", dbjson1[ind].rating);
        }
      });
      cy.then(() => {
        acc_score += 4;
      });
    });

    it("Able to apply both sort and filter at a time", () => {
      cy.intercept("GET", "**/movies").as("getMovies");
      cy.intercept("GET", "**/movies?**").as("getSortedMovies");
      cy.visit(url);
      cy.wait("@getMovies");
      cy.get(`[data-testid="filter"]`).should("be.visible").select("Game");
      cy.wait("@getSortedMovies");
      cy.get(`[data-testid="sort"]`)
        .should("be.visible")
        .select("Oldest first");
      cy.wait("@getSortedMovies");
      cy.wait(100);
      let sortedOldestfirstAndFilteredGame = [
        {
          id: 19,
          title: "Pirates of the Caribbean: The Legend of Jack Sparrow - 2",
          year: "1984",
          imdbID: "tt0087451",
          type: "game",
          rating: 4,
          poster:
            "https://m.media-amazon.com/images/M/MV5BOTA1YWRlY2EtZGQ5ZS00Yzg3LTk0ZDYtZDMzNTEyYzczZjA3XkEyXkFqcGdeQXVyNDUxNjc5NjY@._V1_SX300.jpg",
        },
        {
          id: 18,
          title: "Pirates of the Caribbean: The Legend of Jack Sparrow",
          year: "2006",
          imdbID: "tt0815220",
          type: "game",
          rating: 3,
          poster:
            "https://m.media-amazon.com/images/M/MV5BMTIzMDUwMjc3NV5BMl5BanBnXkFtZTcwNzMzNTQzMQ@@._V1_SX300.jpg",
        },
      ];
      cy.get(`[data-testid="movie-card"]`).should(
        "have.length",
        sortedOldestfirstAndFilteredGame.length
      );
      cy.get(`[data-testid="movie-card"]`).each((card, ind) => {
        cy.wrap(card)
          .find("img")
          .should(
            "have.attr",
            "src",
            sortedOldestfirstAndFilteredGame[ind].poster
          );
        cy.wrap(card)
          .find("h2")
          .should("contain", sortedOldestfirstAndFilteredGame[ind].title);
        cy.wrap(card)
          .find("h4")
          .should("contain", sortedOldestfirstAndFilteredGame[ind].year);
        cy.wrap(card)
          .find("h6")
          .should("contain", sortedOldestfirstAndFilteredGame[ind].imdbID);
        cy.wrap(card)
          .find("p")
          .eq(0)
          .should("contain", sortedOldestfirstAndFilteredGame[ind].type);
        cy.wrap(card)
          .find("p")
          .eq(1)
          .should("contain", sortedOldestfirstAndFilteredGame[ind].rating);
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be changed
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
