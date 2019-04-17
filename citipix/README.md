# FEWD Week5: More JavaScript

### Description

JavaScript is powerful: we're able to take user interaction and information and use it to update the page without requiring a refresh. This week, a new startup in your city, CitiPix, is looking to create a personalized picture app that allows users to store pictures they've taken around the world and quickly access them by typing in keywords or tags associated with each photo; they have asked for your help to start building the front-end prototype. You will begin by building a web-app that will take a user's input and update the background image of the page based on that input. Once again, you have been given the starter code that includes the HTML and the CSS. Use the images in the [images folder](images) and write JavaScript to make the background image reflect user input based on the Technical Requirements below.

### Real-World Applications

- Write pseudocode before coding to demonstrate understanding of interactive programming theory and focus on the logic without being distracted by details of syntax
- Write JavaScript code that will update a web-page based on user interaction
- Store user-submitted information in variables to be used throughout an application
- Change DOM elements on the page based on user input
- Specify the order in which your application runs using control flow
- Revisit applications and code you've written to find solutions to problems you've already solved

### Technical Requirements

- Make a new folder `js` with a new file `index.js` to match our existing HTML script tag
- Use `$.on('submit', func)` or `$.click(func)` to trigger when the user clicks the "submit" button
- Call `$.val()` on the `<input>` tag to get the string value of your user's input
- Store user input in `let city`
- Create `if / else if / else` conditionals to control the flow of your application
- Write at least six different lines of pseudocode and keep them inline as JavaScript comments
- Prevent a form submission using the `event.preventDefault()` function
- Change the background image by using jQuery to add/remove classes
- Use the OR operator in your conditionals to allow for multiple string values to execute `if/else if` statement code
- If a user submits:
  - If a user submits "New York" or "New York City" or "NYC", set the body tag to have the class `nyc`
  - If a user submits "San Francisco" or "SF" or "Bay Area", set the body tag to have the class `sf`
  - If a user submits "Los Angeles" or "LA" or "LAX", set the body tag to have the class `la`
  - If a user submits "Austin" or "ATX", set the body tag to have the class `austin`
  - If a user submits "Sydney" or "SYD", set the body tag to have the class `sydney`

Take a look at what your final product should look like before and after:

![Deliverable](starting_materials/citipix_solution.png)

After entering "NYC" and submitting:

![Deliverable](starting_materials/citipix_solution_nyc.png)

#### Bonus

- Reset the user input field after it is submitted
- Make the input case-insensitive (same result for NYC or nyc or Nyc)
- Remove extra spaces or new lines that users or the browser might add before or after their input
- Add additional cities

### Resources

- [Solution examples](starting_materials)
- [JavaScript docs on comparison operators](http://www.w3schools.com/js/js_comparisons.asp)
- [JavaScript docs on variables](http://www.w3schools.com/js/js_variables.asp)
- [jQuery Cheat Sheet](https://oscarotero.com/jquery/)
