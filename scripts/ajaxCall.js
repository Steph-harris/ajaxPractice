$(document).ready(function(){
  $(".btn-info").on("click", function(){
    var title = $(".form-control").val();
    
    $.ajax({
      url: "https://en.wikipedia.org/w/api.php",
      data: {
          format: "json",
          action: "parse",
          page: title,
          prop:"text",
          section:0,
      },
      dataType: 'jsonp',
      headers: {
          'Api-User-Agent': 'MyCoolTool/1.1 (http://example.com/MyCoolTool/; MyCoolTool@example.com) BasedOnSuperLib/1.4'
      },
      success: function (data) {
          console.log(data)
      //$("#article").html(data.parse.text["*"])
          
              var markup = data.parse.text["*"];
      var i = $('<div></div>').html(markup);
      
      // remove links as they will not work
      i.find('a').each(function() { $(this).replaceWith($(this).html()); });
      
      // remove any references
      i.find('sup').remove();
      
      // remove cite error
      i.find('.mw-ext-cite-error').remove();
      
      $('.col-md-9').html($(i).find('p'));
      }
    });
  });
});


///w/api.php?action=query&prop=info&format=json&titles=schnauzer
//function (wikiInfo)
// $.ajax({
    //   type: "GET",
    //   url:"https://en.wikipedia.org/w/api.php",
    //   success: (){
    //        alert("got it");
    //   }
    //   // error: function(jqXHR, textStatus, errorThrown){
    //   //   console.log(jqXHR);
    //   //   console.log(textStatus);
    //   //   console.log(errorThrown);
    //   // }
    // });