import data from "../../submissionData.json"; // do not create this file
import roomsData from "../fixtures/rooms.json";
import users from "../fixtures/users.json"

// const data = [
// 	{
// 		submission_link: "http://localhost:3000",
// 		id: "manish-local",
// 		json_server_link: "http://localhost:8080",
// 	},
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
	describe("Evaluation RCT-211-B120-E2", function () {
		let acc_score = 1;

		beforeEach(() => {
			cy.visit(url);
			// cy.window().its("store").should("exist");
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
		});

		it(`Check the Initial structure of authProvider`, () => {
			cy.window()
			  .its("store.authState.isAuth")
			  .should("eq", false)        
			cy.window().then((win) => {
			  expect(win.store.loginUser).to.be.a("function");
			});
			cy.window().then((win) => {
			  expect(win.store.logoutUser).to.be.a("function");
			});
			cy.then(() => {
				acc_score += 1;
			  });
	  
		  });
	  
		  it(`Check home page with proper text is visible or not`, () => {
			cy.url().should("eq", url);
			cy.get('[data-cy="welcome-text"]').should(
			  "have.text",
			  "Welcome to the Home page, click here to login"
			);
			cy.get('[data-cy="welcome-text"] a').click();
			cy.url().should("eq", url + "login");
			cy.then(() => {
			  acc_score += 1;
			});
		  });
	  
		  it(`Should be able to log in with correct credentials and login form has correct attributes`, () => {
			cy.intercept("GET", "**/rooms", { fixture: "rooms.json" }).as("getRooms");
			cy.intercept("GET", "**/users").as("login");
	  
			cy.visit(url + "login");
	  
			cy.get('[data-cy="login-email"]').should(
			  "have.attr",
			  "placeholder",
			  "Enter Email"
			);
			cy.get('[data-cy="login-password"]').should(
			  "have.attr",
			  "placeholder",
			  "Enter Password"
			);
	  
			cy.get('[data-cy="login-email"]').type(users[0].email);
			cy.get('[data-cy="login-password"]').type(users[0].password);
			cy.get('[data-cy="login-form"]').submit();
	  
			cy.wait("@login");
			cy.wait("@getRooms");
			cy.window().its("store.authState.isAuth").should("eq", true);
			cy.window()
			  .its("store.authState.token")
			  .should("eq", users[0].token);
			cy.url().should("eq", url + "dashboard");
	  
			cy.then(() => {
			  acc_score += 2;
			});
		  });
	  
		  it(`Should display Login link on Homepage and once the login is successful, the user should be on the dashboard page and there should be a Logout button`, () => {
			cy.visit(url);
			cy.intercept("GET", "**/users").as("login");
			cy.visit(url + "login");    
		  cy.get('[data-cy="login-email"]').type(users[1].email);
			cy.get('[data-cy="login-password"]').type(users[1].password);
			cy.get('[data-cy="login-form"]').submit();    
			cy.wait("@login");
			cy.wait(50)
			cy.window().its("store.authState.isAuth").should("eq", true);      
			cy.get("button").eq(0).should("contain","Logout")
			cy.get("b").should("contain",users[1].token)
			cy.url().should("eq", url + "dashboard");
			cy.then(() => {
			  acc_score += 2;
			});
		  });
	  
		  it(`Check if the user is redirected to the login page before visiting /dashboard and /dashboard/1, without authentication `, () => {
			cy.visit(url + "dashboard");
			cy.window().its("store.authState.isAuth").should("eq", false);
			cy.url().should("eq", url + "login");
			cy.visit(url + "dashboard/1");
			cy.url().should("eq", url + "login");
			cy.then(() => {
			  acc_score += 1;
			});
		  });
		  it(`Check if /dashboard working fine and all details are visible`, () => {
			cy.intercept("GET", "**/rooms", { fixture: "rooms.json" }).as("getRooms");     
			cy.intercept("GET", "**/users").as("login");
			cy.visit(url + "login");    
			cy.get('[data-cy="login-email"]').type(users[1].email);
			cy.get('[data-cy="login-password"]').type(users[1].password);
			cy.get('[data-cy="login-form"]').submit();    
			cy.wait("@login");      
			cy.wait("@getRooms");
			cy.wait(50);
			cy.window().its("store.authState.isAuth").should("eq", true);
			cy.url().should("eq", url + "dashboard");
			cy.get("b").should("contain",users[1].token)
			cy.get(`[data-testid="rooms-container"]`)
			  .children()
			  .should("have.length", roomsData.length);
	  
			roomsData.forEach((ele, index) => {
			  if (index % 2) {
				cy.get(`[data-testid="rooms-container"]`)
				  .children()
				  .eq(index)
				  .find("h2")
				  .should("contain", ele.name);
				cy.get(`[data-testid="rooms-container"]`)
				  .children()
				  .eq(index)
				  .find("img")
				  .should("have.attr", "src", ele.image);
				cy.get(`[data-testid="rooms-container"]`)
				  .children()
				  .eq(index)
				  .find("p")
				  .should("contain", ele.description);
				cy.get(`[data-testid="rooms-container"]`)
				  .children()
				  .eq(index)
				  .find("button")
				  .should("contain", "View Details");
			  }
			});
			cy.then(() => {
			  acc_score += 2;
			});
		  });
		  it(`Loader component should exist between the API req and res from the json server while visiting the Dashboard page and RoomsContainer should not exist on DOM `, () => {
			cy.intercept("GET", "**/rooms", {
			  fixture: "rooms.json",
			  delay: 2000,
			}).as("getRooms");
			cy.visit(url);
			cy.intercept("GET", "**/users").as("login");
			cy.visit(url + "login");    
			cy.get('[data-cy="login-email"]').type(users[2].email);
			cy.get('[data-cy="login-password"]').type(users[2].password);
			cy.get('[data-cy="login-form"]').submit();    
			cy.wait("@login");     
			cy.get(`[data-testid="loading-container"]`).should("exist");
			cy.get(`[data-testid="rooms-container"]`).should("not.exist");
			cy.wait("@getRooms");
			cy.wait(50);
			cy.get(`[data-testid="loading-container"]`).should("not.exist");
			cy.get(`[data-testid="rooms-container"]`).should("exist");
			cy.get("b").should("contain",users[2].token)
			cy.then(() => {
			  acc_score += 2;
			});
		  });
		  it("Check whether View Details button in hotel details working fine", () => {
			cy.intercept("GET", "**/rooms", { fixture: "rooms.json" }).as("getRooms");      
			cy.intercept("GET", "**/users").as("login");
			cy.visit(url + "login");    
			cy.get('[data-cy="login-email"]').type(users[4].email);
			cy.get('[data-cy="login-password"]').type(users[4].password);
			cy.get('[data-cy="login-form"]').submit();    
			cy.wait("@login");
			cy.wait("@getRooms");
			cy.wait(50);
			cy.url().should("eq", url + "dashboard");
			cy.get(`[data-testid="rooms-container"]`)
			  .children()
			  .should("have.length", roomsData.length);
			cy.intercept("GET", "**/rooms/**").as("getSingleRoom");
			//checking first room
			cy.get(`[data-testid="rooms-container"]`)
			  .children()
			  .eq(0)
			  .find("button")
			  .should("contain", "View Details")
			  .click({ force: true });
			cy.wait("@getSingleRoom");
			cy.url().should("eq", url + "dashboard" + "/1");
			cy.go("back");
			cy.wait("@getRooms");
			cy.wait(100);
			//checking 4rd room
			cy.get(`[data-testid="rooms-container"]`)
			  .children()
			  .eq(3)
			  .find("button")
			  .should("contain", "View Details")
			  .click({ force: true });
			cy.wait("@getSingleRoom");
			cy.url().should("eq", url + "dashboard" + "/4");
			cy.then(() => {
			  acc_score += 1;
			});
		  });
		  it(`Check if /dashboard/:id page is working fine`, () => {
			cy.intercept("GET", "**/rooms", { fixture: "rooms.json" }).as("getRooms");     
			cy.intercept("GET", "**/users").as("login");
			cy.visit(url + "login");    
			cy.get('[data-cy="login-email"]').type(users[1].email);
			cy.get('[data-cy="login-password"]').type(users[1].password);
			cy.get('[data-cy="login-form"]').submit();    
			cy.wait("@login");
			cy.wait("@getRooms");
			cy.wait(50);
			cy.window().its("store.authState.isAuth").should("eq", true);
			cy.url().should("eq", url + "dashboard");
			cy.get(`[data-testid="rooms-container"]`)
			  .children()
			  .should("have.length", roomsData.length);
			//checking first room
			cy.intercept("GET", "**/rooms/**").as("singleRoomDetails");
	  
			for (let roomNo = 0; roomNo < 5; roomNo = roomNo + 3) {
			  cy.get(`[data-testid="rooms-container"]`)
				.children()
				.eq(roomNo)
				.find("button")
				.should("contain", "View Details")
				.click({ force: true });
			  cy.url().should("eq", url + "dashboard" + `/${roomNo + 1}`);
			  cy.wait("@singleRoomDetails");
			  cy.get(`[data-testid="SingleRoom"]`).should("exist");
			  //checking single room details
			  cy.get("h2").should("contain", roomsData[roomNo].name);
			  cy.get("img").should("have.attr", "src", roomsData[roomNo].image);
			  cy.get("p").should("contain", roomsData[roomNo].description);
			  cy.get("h3").eq(0).should("contain", roomsData[roomNo].bathroom);
			  cy.get("h3").eq(1).should("contain", roomsData[roomNo].capacity);
			  cy.get("h3").eq(2).should("contain", roomsData[roomNo].size);
			  cy.get("h3").eq(3).should("contain", roomsData[roomNo].price);
			  cy.get("h3").eq(4).should("contain", "Amenities");
			  roomsData[roomNo].amenities.forEach((ele, ind) => {
				cy.get("li").eq(ind).should("contain", ele);
			  });
			  //checking book now button
			  cy.get("button")
				.should("be.visible")
				.should("contain", "Book Now")
				.click({ force: true })
				.then(() => {
				  cy.get("a")
					.should("be.visible")
					.should("contain", "Dashboard")
					.click({ force: true });
				  cy.url().should("eq", url + "dashboard");
				});
			}
	  
			cy.then(() => {
			  acc_score += 3;
			});
		  });
		  it("Checking the logout button", () => {
			cy.intercept("GET", "**/rooms", { fixture: "rooms.json" }).as("getRooms");
			cy.visit(url);
			cy.intercept("GET", "**/users").as("login");
			cy.visit(url + "login");    
			cy.get('[data-cy="login-email"]').type(users[1].email);
			cy.get('[data-cy="login-password"]').type(users[1].password);
			cy.get('[data-cy="login-form"]').submit();    
			cy.wait("@login");
			cy.wait("@getRooms");
			cy.wait(50);
			cy.get("button")
			  .eq(0)
			  .should("have.text", "Logout")
			  .click({ force: true });
			cy.url().should("eq", url + "login");
			cy.window()
			.its("store.authState.isAuth")
			.should("eq", false)       
		  cy.then(() => {
			  acc_score += 1;
			});
		  });
		  it("Go back Link on login page is taking us back to Home Page", () => {
			cy.visit(url + "login");
			cy.get("a").should("have.text", "Go Back").click();
			cy.url().should("not.eq", "login");
			cy.get(`[data-cy="welcome-text"]`).should("exist");
			cy.then(() => {
			  acc_score += 1;
			});
		  });

		

		
		after(() => {
			let result = {
				id,
				marks: Math.ceil(acc_score),
			};
			result = JSON.stringify(result);
			cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
				if (err) {
					console.error(err);
				}
			});
		});
	});
});
