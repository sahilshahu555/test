import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
import searchData1 from "../fixtures/dataAvenger.json";
import searchData from "../fixtures/dataThor.json";
// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;
  data.map(({ submission_link: url, id }) => {
    let apirequestData = [];
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("search input and search button should exists", () => {
        cy.visit(url);
        cy.get("#search-inp").should("be.visible");
        cy.get("#search-btn").should("be.visible");
        cy.get("#search-btn").should("have.text", "Search");
        cy.get("#search-inp")
          .invoke("attr", "placeholder")
          .should("eq", "Search");

        cy.then(() => {
          acc_score += 2;
        });
      });

      it(`Seach with data 1`, () => {
        cy.intercept(`https://www.omdbapi.com/*`).as("apiRequest");
        cy.get("#search-inp").clear().type("avengers");
        cy.get("#search-btn").click();
        cy.wait("@apiRequest").then((data) => {
          apirequestData = data.response.body.Search;
          expect(data.response.statusCode).to.eq(200);
          expect(apirequestData.length).not.to.eq(0);
          acc_score += 2;
        });
      }); // 2

      it(`Check if the student was able to loop through the data 1 and display the results`, () => {
        expect(apirequestData.length).not.to.eq(0);
        cy.get("#movie_container>div").should(
          "have.length",
          apirequestData.length
        );

        cy.get("#movie_container>div").each((ele, index) => {
          console.log(ele[0].children[0]);
          expect(ele[0].children[0]).to.have.class("poster");
          expect(ele[0].children[1]).to.have.class("title");
          expect(ele[0].children[0]).to.have.attr(
            "src",
            searchData1[index].Poster
          );
          expect(ele[0].children[1]).to.have.text(searchData1[index].Title);
        });
        cy.then(() => {
          acc_score += 2;
        });
      }); // 1

      it(`Seach with data 2`, () => {
        cy.intercept(`https://www.omdbapi.com/*`).as("apiRequest");
        cy.get("#search-inp").clear().type("thor");
        cy.get("#search-btn").click();
        cy.wait("@apiRequest").then((data) => {
          apirequestData = data.response.body.Search;
          expect(data.response.statusCode).to.eq(200);
          expect(data.response.body.Search.length).to.eq(10);
        });
        cy.then(() => {
          acc_score += 1;
        });
      }); // 2

      it(`Check if the student was able to loop through the data 2 and display the results`, () => {
        expect(apirequestData.length).not.to.eq(0);
        cy.get("#movie_container>div").should(
          "have.length",
          apirequestData.length
        );

        cy.get("#movie_container>div").each((ele, index) => {
          expect(ele[0].children[0]).to.have.class("poster");
          expect(ele[0].children[1]).to.have.class("title");
          expect(ele[0].children[0]).to.have.attr(
            "src",
            searchData[index].Poster
          );
          expect(ele[0].children[1]).to.have.text(searchData[index].Title);
        });
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it(`Search with invalid data 1`, () => {
        cy.intercept(`https://www.omdbapi.com/*`).as("apiRequest");
        cy.get("#search-inp").clear().type("wertyu");
        cy.get("#search-btn").click();
        let errorText;
        cy.wait("@apiRequest")
          .then((data) => {
            errorText = data.response.body.Error;
          })
          .then(() => {
            cy.get(".error-container").should("be.visible");
            cy.get(".error-container").should("have.text", errorText);
          });
        cy.then(() => {
          acc_score += 1;
        });
      }); // 2
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
