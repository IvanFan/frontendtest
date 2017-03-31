/**
 * Created by yifanfan on 31/3/17.
 */

var fileContent = null;

$.getJSON( "content.json", function( data ) {
  console.log('data received ');
  console.log(data);
  fileContent = data;
  $('#firstLevelTitle').html( fileContent.title);
  $('#title').html( fileContent.content[0].title);
  $('#thumbnail').html( fileContent.content[0].thumbnail);
  $('#description').html( fileContent.content[0].description);
});



var currentIndex = 0;




$( "#next" ).click(function() {
  if (currentIndex < fileContent.content.length - 1 ){
    currentIndex += 1;

  }
  $('#title').html( fileContent.content[currentIndex].title);
  $('#thumbnail').html( fileContent.content[currentIndex].thumbnail);
  $('#description').html( fileContent.content[currentIndex].description)

});

$( "#prev" ).click(function() {
  if (currentIndex > 0 ){
    currentIndex -= 1;
  }
  $('#title').html( fileContent.content[currentIndex].title);
  $('#thumbnail').html( fileContent.content[currentIndex].title);
  $('#description').html( fileContent.content[currentIndex].description)

});

