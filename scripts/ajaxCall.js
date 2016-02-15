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
      success: function (data) {debugger;
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

      $('h2').html("What wikipedia has to say about (a/an) " + title);
      $('.col-md-9').html($(i).find('p'));
      }
    });
  });
});
//alternate calls:
// // var url="http://en.wikipedia.org/w/api.php?action=parse&format=json&page=" + breedInfo +"&redirects&prop=text&callback=?";
    
//     // //https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json
//     // debugger;
//     //$(".infoBox").empty();
//     $("#wikiInfo").empty();

//     // $.getJSON(url,function(data){
//     //   wikiHTML = data.parse.text["*"];
//     //   $wikiDOM = $("<p>"+wikiHTML+"</p>");
//     //   $(".infoBox").append($wikiDOM);

//     $.getJSON('http://en.wikipedia.org/w/api.php?action=parse&page=' + breedInfo +'&prop=text&format=json&callback=?', function(json) { 
//       $("#wikiInfo").html(json.parse.text["*"]); 
//       $("#wikiInfo").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");}); 
//       $("#wikiInfo").find("a").attr("target", "_blank"); 
//     });


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