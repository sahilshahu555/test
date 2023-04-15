# WEB - Masai Stock Management

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Submit Form and check the table & total - 2 marks.
 ✅ Check Table After Multiple Form Submissions - 3marks.
 ✅ Check The Delete Functionality  - 3 marks.
 ✅ Check if any field is empty the form should not get submitted  - 1 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- cypress
  - e2e (ignore the test files related to cypress)

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

### Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

### Problem Statement:-

- Your app consists of a form that contains 5 input tags and 1 select tags inside a form (this is already in the template provided)
- Details of the Form:-
  1. Company Name:- Input Tag(Type Text)
  2. Category:- Select Tag
  3. Sector:- Input Tag(Text)
  4. Price:- Input Tag(Type Number)
  5. Quantity:- Input Tag(Type Number)
  6. Add Date:- Input Tag(Date)
- Please see this image for a better understanding:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-28/Screenshot%202022-12-28%20at%2010.57.18%20AM_895522.png)
- We also have a span tag inside an input tag with id:- `total-price`
- We will also have a Table with the following Rows:-
  1. Stock Name
  2. Category
  3. Sector
  4. Price
  5. Quantity
  6. Total Cost
  7. Add Date
  8. Delete
- All the data of the rows in the table should come from form only except for the Total Cost and Delete.
- Total Cost will have the following value:- `price * Quantity`.
- Delete will have the text `Delete`.
- When you submit the form The data from the form should be appended in the Table as a Row. ![image.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-12-28/Screenshot%202022-12-28%20at%2010.58.01%20AM_397278.png)

- You should also be able to see the total value of your portfolio in the span tag mentioned above.

```
total portfolio value = sum of (stock price * quantity)
```

- When you click on Delete that particular row should be deleted.
- If any of the input fields are empty the data should not be added and show an alert with the below message:-
  `Fill all input fields`
- When deleting any stock the total price should also be updated.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
