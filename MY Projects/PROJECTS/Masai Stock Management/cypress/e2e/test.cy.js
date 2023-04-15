import data from "../../submissionData.json"; // do not create this file
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "A",
    category: "Large Cap",
    sector: "B",
    price: 10,
    quantity: 2,
    addDate: "2009-12-12",
  },
  {
    name: "B",
    category: "Mid Cap",
    sector: "C",
    price: 20,
    quantity: 3,
    addDate: "2009-12-12",
  },
  {
    name: "C",
    category: "Small Cap",
    sector: "D",
    price: 30,
    quantity: 1,
    addDate: "2009-12-12",
  },
];
data.map(({ submission_link: url, id }) => {
  describe("Test", function () {
    let acc_score = 1;

    const FormSubmit = (data) => {
      cy.get("#name").clear().type(data.name);
      cy.get("#category").select(data.category);
      cy.get("#sector").clear().type(data.sector);
      cy.get("#addDate").clear().type(data.addDate);
      cy.get("#price").clear().type(data.price);
      cy.get("#quantity").clear().type(data.quantity);
      cy.get("form").submit();
    };

    const checkData = (data, score, index) => {
      cy.get("tr")
        .should("have.length", index + 1)
        .then(() => {
          acc_score += score / 2;
        });
      cy.get("tr").eq(index).contains("td", data.name);
      cy.get("tr").eq(index).contains("td", data.category);
      cy.get("tr").eq(index).contains("td", data.sector);
      cy.get("tr").eq(index).contains("td", data.quantity);
      cy.get("tr").eq(index).contains("td", data.price);
      cy.get("tr")
        .eq(index)
        .contains("td", data.addDate)
        .then(() => {
          acc_score += score / 2;
        });
    };

    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      it("Submit Form and check the table & total", () => {
        cy.visit(url);
        FormSubmit(Data[0]);
        checkData(Data[0], 1, 1);
        cy.get("#total-price>span")
          .contains("20")
          .then(() => {
            acc_score += 1;
          });
      }); // score:- 2
      it("Check Table After Multiple Form Submissions", () => {
        FormSubmit(Data[1], 0);
        checkData(Data[1], 1, 2);
        cy.get("#total-price>span").contains("80");
        FormSubmit(Data[2], 0);
        checkData(Data[2], 1, 3);
        cy.get("#total-price>span").contains("110");
        cy.then(() => {
          acc_score += 1;
        });
      }); // score:- 3
      it("Check The Delete Functionality", () => {
        cy.get("tr").eq(2).children("td").eq(7).click();
        checkData(Data[2], 2, 2);
        cy.get("#total-price")
          .contains("50")
          .then(() => {
            acc_score += 1;
          });
      }); // Score:- 3
      it("Check if any field is empty the form should not get submitted", () => {
        cy.get("#sector").clear();
        cy.get("form").submit();
        checkData(Data[2], 1, 2);
      }); // Score:- 1
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
