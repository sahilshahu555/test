const { memberA, memberB, memberC, findWinner } = require("../throwDice");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;
// jest.setTimeout(10000);

jest.dontMock("fs");

describe("throw dice", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
    fetch.resetMocks();
  });

  it("dice elements are defined", function () {
    expect(document.getElementById("member-a")).toBeTruthy();
    expect(document.getElementById("member-b")).toBeTruthy();
    expect(document.getElementById("member-c")).toBeTruthy();
    expect(document.getElementById("winner")).toBeTruthy();
    global.score += 1;
  });

  it("button element is defined", function () {
    expect(document.getElementById("roll")).toBeTruthy();
    global.score += 1;
  });

  it("dice 1 returns the correct value", function () {
    var val = memberA();
    expect(val).toBeGreaterThan(0);
    expect(val).toBeLessThan(7);
    global.score += 1;
  });

  it("dice 2 returns the correct value", function () {
    var val = memberB();
    expect(val).toBeGreaterThan(0);
    expect(val).toBeLessThan(7);
    global.score += 1;
  });

  it("dice 3 returns the correct value", function () {
    var val = memberC();
    expect(val).toBeGreaterThan(0);
    expect(val).toBeLessThan(7);

    global.score += 1;
  });

  it("color system works properly", function () {
    findWinner(1, 2, 3);
    var memA = document.getElementById("member-a");
    var memB = document.getElementById("member-b");
    var memC = document.getElementById("member-c");
    var winnerDiv = document.getElementById("winner");

    expect(memA.style.backgroundColor).toBe("red");
    expect(memB.style.backgroundColor).toBe("yellow");
    expect(memC.style.backgroundColor).toBe("green");
    expect(winnerDiv.textContent).toBe("The winner : Member C");

    findWinner(6, 2, 1);
    var memA = document.getElementById("member-a");
    var memB = document.getElementById("member-b");
    var memC = document.getElementById("member-c");

    expect(memA.style.backgroundColor).toBe("green");
    expect(memB.style.backgroundColor).toBe("yellow");
    expect(memC.style.backgroundColor).toBe("red");
    expect(winnerDiv.textContent).toBe("The winner : Member A");
    findWinner(3, 2, 3);
    var memA = document.getElementById("member-a");
    var memB = document.getElementById("member-b");
    var memC = document.getElementById("member-c");

    expect(memA.style.backgroundColor).toBe("blue");
    expect(memB.style.backgroundColor).toBe("red");
    expect(memC.style.backgroundColor).toBe("blue");
    expect(winnerDiv.textContent).toBe("It's a draw!");

    global.score += 2;
  });

  it("color system works properly", function () {
    findWinner(5, 3, 3);
    var memA = document.getElementById("member-a");
    var memB = document.getElementById("member-b");
    var memC = document.getElementById("member-c");
    var winnerDiv = document.getElementById("winner");

    expect(memA.style.backgroundColor).toBe("green");
    expect(memB.style.backgroundColor).toBe("blue");
    expect(memC.style.backgroundColor).toBe("blue");
    expect(winnerDiv.textContent).toBe("The winner : Member A");
    findWinner(1, 2, 2);
    var memA = document.getElementById("member-a");
    var memB = document.getElementById("member-b");
    var memC = document.getElementById("member-c");

    expect(memA.style.backgroundColor).toBe("red");
    expect(memB.style.backgroundColor).toBe("blue");
    expect(memC.style.backgroundColor).toBe("blue");
    expect(winnerDiv.textContent).toBe("It's a draw!");

    findWinner(2, 2, 2);
    var memA = document.getElementById("member-a");
    var memB = document.getElementById("member-b");
    var memC = document.getElementById("member-c");

    expect(memA.style.backgroundColor).toBe("blue");
    expect(memB.style.backgroundColor).toBe("blue");
    expect(memC.style.backgroundColor).toBe("blue");
    expect(winnerDiv.textContent).toBe("It's a draw!");

    global.score += 2;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
