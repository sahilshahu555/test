# WEB - Masai Employee Records

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Submit the Form Once and check the table - 2 marks.
 ✅ Submit the Form multiple Times  - 2 marks.
 ✅ Checking the Role Part - 1 marks.
 ✅ Check the delete Part - 2 marks.
 ✅ Check the Filter Part - 2 marks.
```

## Installation

- you can use any node version that works for you ( 14+ )
- Download and unzip the boilerplate
- Navigate to the correct path

## Folder structure

- index.html
- Please Ignore all the other files except for the above-mentioned files.

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

#### Use the template provided below to write your code (Mandatory)

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Problem Statement:-

- Your app consists of a form which contains 5 input tags and 1 select tag
  - **Note** : HTML tags are already in template.
- Form will take
  - Name of the employee
  - Employee ID
  - Department(select tag)
  - Experience in years
  - Email address
  - Mobile Number
- On form submit, display this data in form of table (thead is already in place just append to tbody)
- Input tags already in template, just finish script part.
- Each row should have 8 columns
  - Name
  - Employee ID
  - Department
  - Experience in years
  - Email address
  - Mobile Number
  - Role
  - Delete

* Role should be given dynamically based on input (make sure role is written in same format, it is case sensitive)
  - **_Senior_**, if `experience > 5 years`
  - **_Junior_**, if `experience is between 2 and 5 years`
  - **_Fresher_**, if `experience is less than or equal to 1 year`

- Please refer to this image for a better understanding.
- In each row, there should be a delete button and on clicking that button, that particular row should be deleted.
- Make sure you follow all rules of forms.
- Your Output should look like ![](https://i.imgur.com/KDKKije.jpg)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time.
