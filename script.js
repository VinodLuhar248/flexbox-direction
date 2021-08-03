function setFlexboxDirectionClass(value) {
  console.log('value :: ' + value);
  var mainContainer = $('#flexDirectionClass');
  mainContainer.removeClass().addClass('container');
  // //adding selected class to container
  mainContainer.addClass(value);
}
