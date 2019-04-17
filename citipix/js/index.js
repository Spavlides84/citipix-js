//So, if user types in specific things, then the background changes.
//If the user types in anything that's NOT the 5 cities, it goes back to original BG.
//It also goes back to original BG on reload, so there is a 'remove class'
//that has to happen for every option
//First, I have to tell JQuery to recognize the inputs. That means turning EVERYTHING into string command
//todo: javascript 'if' update= 'San Francisco', 'SF', 'Bay Area', then change class to .sf, else do nothing
//todo: javascript 'if' update= 'New York City', 'NYC', 'New York', then change class to .nyc, else do nothing
//todo: javascript 'if' update= 'Austin', 'ATX', then change class to .austin, else do nothing
//todo: javascript 'if' update= 'Sydney', 'SYD', then change class to .sydney, else do nothing

//I need a function that identifies the above names as different classes
//I need a function that changes the BG class when it identifies the name submitted
// if #city-type, then #submit-btn on click, ($.click(func)?), then add class

$('#submit-btn').click(function() {
// $.click(func)

// stop the page from reloading

event.preventDefault();

let city = $('#city-type').val().toLowerCase();

  $('body').removeClass();

  if (city === "new york" ||city === "new york city" ||city === "nyc"){
    $('body').addClass('nyc');
  } else if (city === "san francisco" ||city === "sf" ||city === "bay area"){
    $('body').addClass('sf');
  } else if (city === "los angeles" ||city === "la" ||city === "lax"){
    $('body').addClass('la');
  } else if (city === "austin" ||city === "atx"){
    $('body').addClass('austin');
  } else if (city === "sydney" ||city === "syd"){
    $('body').addClass('sydney');
  }
});
