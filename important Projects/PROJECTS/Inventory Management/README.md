# WEB - Masai Inventory Management

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Submit Form and check the table - 2 marks.
 ✅ Check Table After Multiple Form Submissions  - 3 marks.
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

- Your app consists of a form that contains 3 input tags and 2 select tags inside a form (this is already in the template provided)
- Details of the Form:-
  1. Product Name:- Input Tag(Type Text)
  2. Product Category:- Select Tag
  3. Brand:- Input Tag(Text)
  4. Price:- Input Tag(Type Number)
  5. Delivered By:- Select Tag
- We have an h1 tag with initial text Total Price:- 0
- We will also have a Table with the following Rows:-
  1. Product Name
  2. Category
  3. Brand
  4. Price
  5. Delivered By
  6. Price Segment
  7. Delete
- You can see this image for a better understanding:- ![Screenshot 2022-07-06 at 11.47.31 AM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-07-06/Screenshot%202022-07-06%20at%2011.47.31%20AM_578149.png)
- When you submit the form The data from the form should be appended in the Table as a Row. ![Screenshot 2022-07-06 at 11.54.28 AM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-07-06/Screenshot%202022-07-06%20at%2011.54.28%20AM_110520.png)
- The Value in the Price Segment column does not come from the form. If the price is Greater than 1000 the text should be `Expensive` else the text should be ` Not-Expensive`
- When you click on Delete that particular row should be deleted.
- If any of the input fields are empty the data should not be added and show an alert with the below message:-
  `Fill all input fields`
- The h1 tag should always show the total price of all the products according to the items in a row.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
