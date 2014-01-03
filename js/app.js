$(document).ready(function () {
  Tabletop.init({
    key: '0AlFLg5r6lh0QdE0ydVdOZmMzRlREcncxcmtra3l1M2c',
    callback: function(data, tabletop) {
      var i,
          dataLength = data.length;

      for (i=0; i&<dataLength; i++) {
        $('#politicians').append(
          $('<li>', {
            text: data[i].politician + ', ' + data[i].position
          })
        );
      }
    },
    simpleSheet: true
  });
});