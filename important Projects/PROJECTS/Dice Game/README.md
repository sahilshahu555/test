# JS-basic-throw-dice

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ dice elements are defined - 1 marks
 ✅ button element is defined - 1 marks
 ✅ dice 1 returns the correct value - 1 marks
 ✅ dice 2 returns the correct value - 1 mark
 ✅ dice 3 returns the correct value -1 mark
 ✅ color system works properly - 2 marks
 ✅ color system works properly-2 - 2 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- src
  - throwDice.js
- `__tests__`
  - throwDice.spec.js
- README.md
- package.json

## Description

You and your two other team members are doing your construct week project. An issue arises in your project and all three of you come up with a solution. All the three solutions are feasible and each one of you wants to implement his own solution. Hence all of you decided to roll a dice and whoever gets the maximum score will implement his solution. But the problem is you cannot roll a dice online, so you, being an active team member, decided to make an app with three dice showing a random number between 1 to 6 as described below.

1.  Create three `div` elements in `index.html`, which will represent three dice and each shows a random number between 1 to 6.
2.  First will represent score for Member A
3.  Second will represent score for Member B
4.  And third will represent score for Member C
5.  Make a button with text content “Roll the dice”
6.  On pressing the button the dice should roll and all the three members show a random number between 1 to 6.
7.  Make a `div` at the top which will show the winner.

## Things to follow :-

#### use `textContent` to append the data to DOM 

1.  First dice will have id `member-a`.
2.  Second dice will have id `member-b`.
3.  Third dice will have id `member-c`.
4.  Roll the dice button will have id `roll`.
5.  The winner showing div will have id `winner`
6.  The winning dice will be in color `green` and display `The winner : Member A` or `The winner : Member B` or `The winner : Member C` as text content (whoever wins) in the div with the id `winner`
7.  The Second scorer dice will be in `yellow`
8.  And the dice who scored least should be in `red`.
9.  In case of draw make the dice scoring equal appear `blue` and display `It's a draw!` as text content in the div with id `winner`.

    ![](https://i.imgur.com/ew9fDOv.png)
    ![](https://i.imgur.com/OMijoKV.png)
    
     ![](https://i.imgur.com/ICRsMK4.png)

### Example 1

Member A - 2

Member B - 1

Member C - 6

`The winner is : Member C `

### Example 2

Member A - 2

Member B - 4

Member C - 4

`It's a draw! `

### Example 3

Member A - 4

Member B - 3

Member C - 3

`The winner is : Member A`

## Complete the following function given in the boilerplate code :-

- memberA: generate and return the random generated value for dice 1
- memberB : generate and return the random generated value for dice 2
- memberC : generate and return the random generated value for dice 3
- findWinner : This function will accept, three params - (the random generated values for al three dices) and will be triggered when button with `id = roll` is clicked .
  - Evaluate the winner, ensure the background color scheme works properly

**Note:- Do not use any other names for the methods other than mentioned.**

##Explained Video:

https://user-images.githubusercontent.com/39851506/194589416-83f3cc74-6ec4-4b8f-a285-5410a85f73c6.mp4

##Solution Video: https://js-problems.s3.ap-south-1.amazonaws.com/throwDiceSol.mp4

####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename throwDice.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
