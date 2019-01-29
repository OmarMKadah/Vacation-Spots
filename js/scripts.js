function VacationBook() {
  this.uniqueId = 0,
  this.places = [],

  this.assignId = function() {
    this.uniqueId += 1;
    return this.uniqueId;
  },

  this.addPlace = function(place) {
    place.uniqueId = this.assignId();
    this.places.push(place);
  }

}

function Place (name, city, state, address, visitDate, notes, image) {
  this.name = name,
  this.city = city,
  this.state = state,
  this.address = address,
  this.visitDate = visitDate,
  this.notes = notes,
  this.image = image
}

var vacationBook = new VacationBook();


$(function() {
  $("button").click(function(event){
    event.preventDefault();

    var nameInput = $("#name").val();
    var cityInput = $("#city").val();
    var stateInput = $("#state").val();
    var addressInput = $("#address").val();
    var visitDateInput = $("#date").val();
    var notesInput = $("#notes").val();
    var imageInput = $("#image").val();

    var userPlace = new Place(nameInput, cityInput, stateInput, addressInput, visitDateInput, notesInput, imageInput);
    vacationBook.addPlace(userPlace);


    $(".location-container").append("<div class='jumbotron' id='" + userPlace.uniqueId + "'></div>");
    $("#" + userPlace.uniqueId).append("<h3>" + nameInput + "</h3>");


  });


});
