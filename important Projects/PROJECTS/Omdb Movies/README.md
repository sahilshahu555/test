# Web-Fetch-Movie-App-Omdb

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ search input and search button should exists - 2 marks
 ✅ Search with data 1- 2 marks
 ✅ should be able to loop through the data 1 and display the results - 2 marks
 ✅ Search with data 2 - 1 marks
 ✅ should be able to loop through the data 2 and show on DOM - 1marks
  ✅ should redner error message for invalid movie name - 1 mark


```

## Folder structure

- index.html
- Please make sure you don't make any changes to files except for the files mentioned above.

## Description

- Go to omdbapi.com , create account and explore API documentation.

- There you will get an apikey.
- Now in your index.html we have an input tag with an id:- `search-inp` and a button with an id:- `search-btn`.
- the input tag should have placeholder `Search`
- There should be a button wtth text `Search`
- Type the movie name and clicking the Search button should make fetch request to this api:- `https://www.omdbapi.com/?apiKey=<apiKey>&s=<searchQuery>`.
- Now loop over the data and make small cards and append them inside the div with id:- `movie_container`.
- From the data display title and poster of the movie
- keep the classname for the title as `title` and `h2` tage
- keep the classname for the poster as `poster` and `img` tag
- Refer to this image for UI:- ![image](https://i.imgur.com/0gKem3t.jpeg)
- If there are no results found for movie or a random string entered , display `Movie not found!` in `h2` tag with classname as `error-container` which is a response from the api

![](https://i.imgur.com/ogPgOwu.png)

**Note:- Do not use any other names for the methods other than mentioned.**

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
