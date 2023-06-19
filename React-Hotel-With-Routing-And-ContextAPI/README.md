# React-Hotel-With-Routing-And-ContextAPI

## Maximum Marks - 18

### Submission Instructions [Please note]

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check the Initial structure of authProvider  - 1 mark
 ✅ Check home page with proper text is visible or not - 1 mark
 ✅ Should be able to log in with correct credentials and login form has correct attributes - 2 marks
 ✅ Should display Login link on Homepage and once the login is successful, the user should be on the dashboard page and there should be a Logout button - 2 marks
 ✅ Check if the user is redirected to the login page before visiting /dashboard and /dashboard/1, without authentication - 1 mark
 ✅ Check if /dashboard working fine and all details are visible - 2 marks
 ✅ Loader component should exist between the API req and res from the json server while visiting the Dashboard page and RoomsContainer should not exist on DOM - 2 marks
 ✅ Check whether View Details button in hotel details working fine - 1 mark
 ✅ Check if /dashboard/:id page is working fine - 3 marks
 ✅ Checking the logout button - 1 mark
 ✅ Go back Link on the login page is taking us back to Home Page - 1 mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the json-server
- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. You need to restart the react server once the env file is updated.
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

## Problem Statement

A hotel wants a web application that can display information about available rooms along with their details. Your task is to create a web application that has the following functionalities:

1. The homepage displays a welcome message that includes a link to the login page.
2. Clicking on the login link takes you to a login page where you must enter your email and password (which are obtained from the db.json) in the form provided.
3. Upon form submission, you need to make a `GET` request to `/users` and get all the users data. Once you have the users data, search if the user exists or not and if exists, store the token in the `context API` and change the `isAuth` to true and you will then be navigated to the dashboard page.
4. On the dashboard page, you will see a list of available rooms along with the token and a logout button. Clicking on "View Details" for a particular room will take you to a single room page where you can view details about that room, along with a booking button.
5. After booking the room, you will see a link to the dashboard.

- In summary, you need to build a web application for a hotel that allows users to log in, view room details, and book a room. The application should be easy to use and provide a seamless experience for users.

### Understanding Component Structure

- src
  - Pages
    - Dashboard
    - Home
    - Login
    - SingleRoom
  - Components
    - Loader
    - RoomsContainer
  - Context
    - AuthContext
  - Routes
    - PrivateRoute
    - AllRoutes
  - App
  - index.js

### Features to build:

**NOTE**: Context API is mandatory for this application and use `fetch` only.

### AuthContextProvider

- In AuthContextProvider, you need to pass the `providerState` as a value to the `AuthContext.Provider`.
- This `providerState` object is provided in the boilerplate, you need to update this object with the following key-values.
  - `authState` - with the auth state of the user by default `{isAuth: false, token: null}`
  - `loginUser` - this should be a function that will update the auth state by taking a token as an argument. ex:`{isAuth: true,token: "abcdef1234"}`
  - `logoutUser` - this should be a function that will update the auth state to the default state. `{isAuth: false, token: null}`
  - for example the `providerState` will be assigned an object that will look like `{authState:authState,loginUser:loginUser,logoutUser:logoutUser}`

1. Use the `providerState` as the value when you are passing in the context provider
2. Some of the boilerplate is provided. You are expected to write all the other remaining parts (functions, logic, importing createContext etc).do not remove those.
3. Make sure Context API is connected with your React application properly, and you have access to the Context API data.

### JSON Data:

- db.json file is included in the boilerplate zip file, with the required data. **Do not overwrite/modify this data**

**Functionalities component-wise**

## Routes

- ## AllRoutes
  - will contain all the routes in this component
  - `/` for `Home`
  - `/login` for `/login`
  - `/dashboard` for `Dashboard`
  - `/dashboard/:id` for `SingleRoom`
- ## PrivateRoute
  - write the logic for protected Routes here
  - `/dashboard` and `/dashboard/:id` are protected routes.

## App

- Add your `AllRoutes` component here.

## Pages

### Home

<div>
<img src="https://i.imgur.com/i8H45ZN.png" width="100%">
</div>

- The home page should contain a `div` with `data-cy="welcome-text"` and text content `Welcome to the Home page, click here to login`, where `login` in the text should be `link` to `/login` page.
- It means if I click on `login` then I should be navigated to the login page.

### Login

<div>
<img src="https://i.imgur.com/pfKeE4l.png" width="100%">
</div>

- The `login` page should consist of a `form` with `data-cy="login-form"`
- The form should contain the following `input` tags.
  - `input` with `data-cy="login-email"` as an attribute for entering `email`. And this should have a `placeholder` as `Enter Email`
  - `input` with `data-cy="login-password"` as an attribute for entering `password`. And this should have a `placeholder` as `Enter Password`
  - `input` of type `submit` to submit the `form`
- On submitting the form make a `GET` request to `/users`. And get all the users data. Now verify whether the users exists or not, if exists update the `token` with the token of the `user` and `isAuth` to `true` in the context API which you need to display on the `Dashboard`
- You also need to update the states of `isAuth` and `token` in the context API to `true` and `token` you received on successful `login`
- There should be a link with textContent `Go Back` on clicking on it we need to be redirected to `/` HomePage.

### Dashboard

<div>
<img src="https://i.imgur.com/twcbtOU.png" width="100%">
</div>

- On successful `login`, the user should be navigated to this page.
- This page will contain an `h3` tag with text content `Dashboard`.
- There will be a `b` tag provided where you can update the `token` as its text content.
- There will be a button with `data-testid="logout-btn"` as an attribute and textContent `Logout`. On clicking on this, the `isAuth` state in `context API` should be changed to `false`, and `token` should be changed to `null`.
- There is `div` with `data-testid="room-container"` which contains either of the `two` components at a time. - #### `Loader` component
  <div>
        <img src="https://i.imgur.com/kqE14i3.png" width="100%">
  </div>

  - When the `Dashboard` page is rendered on `DOM`, you need to make a fetch request to json-server with endpoint `/rooms` to get the data regarding different rooms available.
  - Between the above `req` and `res` from the server you need to show the `Loader` component
  - Once you get the response from the server you can show them the `RoomsContainer` and `Loader` component should not exist on the `DOM`, this should happen whenever you are fetching data from the API in the page.

    - #### `RoomsContainer` component

<div>
    <img src="https://i.imgur.com/twcbtOU.png" width="100%">
</div>

- Will take the data as props and will display them.
- Here you will be having a `div` with `data-testid="rooms-container"` which will contain the following `HTML` elements. This `div` will contain all the `rooms` data as `child` elements(in the form of a card).
  - `h2` tag with the `name` of the room. - `img` tag with the `image` of the room. - `p` tag with the `description`. - `button` tag with text content `View Details` and wrapped inside `Link` which on clicking should be navigated to `/dashboard/id`, where `id` is the `id` of the room provided in the response from json-server. - All the above tags(from `h2` to `Link`) should be wrapped inside a `div`.

### SingleRoom

<div>
  <img src="https://i.imgur.com/wzG9YWr.png" width="100%">
  <img src="https://i.imgur.com/4xC2rOu.png" width="100%">
</div>

- In `RoomsContainer`, when `user` clicks on the button `View Details` wrapped inside a `Link` tag, the user will be navigated to this `page`.
- This page with the help of the `params` in the URL, the user should find the `id` for the room.
- With the help of the `id`, the app should make a `GET` request to the json server and the details of that particular room only.
- With the `response` you get from the `API`, you need to display the data in the following way.
  - create a `div` with `data-testid="room-info"`.
    - The above div should contain the following `HTML` elements
      - `h2` tag with the `name` of the room.
      - `img` tag with the `image` of the room.
      - `p` tag with the `description`.
      - `h3` tag with detail of the `bathroom`.
      - `h3` tag with text content `Capacity:{capacity}`, `capacity` is the value of `capacity` provided in the response.
      - `h3` tag with text content `Size : {size}`, `size` is the value of `size` provided in the response.
      - `h3` tag with text content `Price : {price}`, `price` is the value of `price` provided in the response.
      - `h3` tag with textContent `Amenities`.
      - The order of the above li tags should be followed accordingly.
      - All the amenities should be provided in `li` tags wrapped in the `ul`
      - There should be a button with the text content `Book Now`, which on clicking, the `button` should not exist on the `DOM` and then an `h3` tag with textContent `Booking Successful goto Dashboard`, here `Dashboard` is a link, which on clicking we should be navigated to `dashboard` page

<div style="display:flex;justify-content:space-evenly">
<img src="https://i.imgur.com/jzWbm0A.png" width="40%" height="500px" >
<img src="https://i.imgur.com/K4ebOpE.png" width="40%" height="500px" >
</div>

- In the above screenshots ignore the attribute `fdprocssedid` for any HTML element.
- Also when you use the `Link` tag, in HTML you will be seeing it as `a` tag when you inspect it.

**Note :-**

<div style="color:red">
  <h3>Import all your CSS files in index.js. Don't import it to other pages/components. Not following this may lead to zero scores.</h3>
</div>

### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
