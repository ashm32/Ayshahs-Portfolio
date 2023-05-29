$(document).ready(function() {
    // Constants
    var visibleCards = 6; // Number of cards to display at a time
    var cardCount = $(".row .col-md-4.mb-4").length; // Total number of cards
    var currentIndex = 0; // Current index of the first visible card

    // Function to show/hide cards based on current index
    function showHideCards() {
      $(".row .col-md-4.mb-4").addClass("hidden-card"); // Hide all cards
      $(".row .col-md-4.mb-4")
        .slice(currentIndex, currentIndex + visibleCards)
        .removeClass("hidden-card"); // Show the cards from currentIndex to currentIndex + visibleCards
    }

    // Show initial set of cards
    showHideCards();

    // Button click events
    $("#prevButton").click(function() {
      if (currentIndex > 0) {
        currentIndex -= visibleCards;
        showHideCards();
        $("#nextButton").prop("disabled", false);
      }
      if (currentIndex <= 0) {
        $("#prevButton").prop("disabled", true);
      }
    });

    $("#nextButton").click(function() {
      if (currentIndex + visibleCards < cardCount) {
        currentIndex += visibleCards;
        showHideCards();
        $("#prevButton").prop("disabled", false);
      }
      if (currentIndex + visibleCards >= cardCount) {
        $("#nextButton").prop("disabled", true);
      }
    });
  });
