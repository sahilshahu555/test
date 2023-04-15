import subdata from "../../submissionData.json"; // do not create this file
// let subdata = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const data = [
  {
    name: "M",
    catagory: "Grocery",
    brand: "B",
    deliveredBy: "Plane",
    price: 10,
  },
  {
    name: "N",
    catagory: "Electronics",
    brand: "A",
    deliveredBy: "Ship",
    price: 11,
  },
  {
    name: "O",
    catagory: "Fashion",
    brand: "N",
    deliveredBy: "Delivery Van",
    price: 1200,
  },
];

// import { start, submitData } from "../../../data";
describe("Test", function () {
  let acc_score = 1;

  const FormSubmit = (data, score) => {
    cy.get("#name").clear().type(data.name);
    cy.get("#category").select(data.catagory);
    cy.get("#brand").clear().type(data.brand);
    cy.get("#deliveredBy").select(data.deliveredBy);
    cy.get("#price")
      .clear()
      .type(data.price)
      .then(() => {
        acc_score += score;
      });
    cy.get("form").submit();
  };

  const checkData = (data, score, index) => {
    cy.get("tr")
      .should("have.length", index + 1)
      .then(() => {
        acc_score += score / 2;
      });
    cy.get("tr").eq(index).contains("td", data.name);
    cy.get("tr").eq(index).contains("td", data.catagory);
    cy.get("tr").eq(index).contains("td", data.brand);
    cy.get("tr").eq(index).contains("td", data.deliveredBy);
    cy.get("tr").eq(index).contains("td", data.price);
    if (data.price > 1000) {
      cy.get("tr")
        .eq(index)
        .contains("td", "Expensive")
        .then(() => {
          acc_score += score / 2;
        });
    } else {
      cy.get("tr")
        .eq(index)
        .contains("td", "Not-Expensive")
        .then(() => {
          acc_score += score / 2;
        });
    }
  };

  subdata.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      it("Submit Form and check the table", () => {
        cy.visit(url);
        FormSubmit(data[0], 0);
        checkData(data[0], 2, 1);
      }); // score:- 2
      it("Check Table After Multiple Form Submissions", () => {
        FormSubmit(data[1], 0);
        checkData(data[1], 1, 2);
        FormSubmit(data[2], 0);
        checkData(data[2], 1, 3);
        cy.get("#total-price")
          .contains("1221")
          .then(() => {
            acc_score += 1;
          });
      }); // score:- 3
      it("Check The Delete Functionality", () => {
        cy.get("tr").eq(2).children("td").eq(6).click();
        checkData(data[2], 2, 2);
        cy.get("#total-price")
          .contains("1210")
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 3
      it("Check if any field is empty the form should not get submitted", () => {
        cy.get("#brand").clear();
        cy.get("form").submit();
        checkData(data[2], 1, 2);
      }); // Score:- 1
    }

    it(`generate score`, () => {
      //////////////
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
