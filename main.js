$(document).ready(()=>{
    //Add Button
$("#form").submit((event)=>{
    event.preventDefault()
    $("#topRow").append("<button class='gifphy btn btn-success ' >"+event.target[0].value + " </button>")
})
    //Make Ajax Call
$(document).on("click",".gifphy",(event)=>{
var animal = event.target.innerText
var url = "https://api.giphy.com/v1/gifs/search?api_key=TxdcdawsMZEkzipyOm9DzTWH1jnL29B6&q="+animal+"&limit=12&offset=0&rating=PG&lang=en"
$.get(url, function(data, status){       //$.get(URL,callback);
   console.log(data); 
   $("#image-row").empty(); 
  data["data"].forEach(element => {
    var div = '<div class="card">'+
    '<img class="card-img-top" src="'+element.images.original.url +'">'+
    '<h6 class="text-center">'+ "Rating: "+element.rating.toUpperCase()+'</h6>'+'</div>' 
      $("#image-row").append(div)
  });
});
})
    //Play Pause
$(document).on("click",".card-img-top",(event)=>{
var src = $(event.target).attr("src");
 if (src.includes("_s")) {
     src = src.split("480w_s.jpg")[0]
     $(event.target).attr("src", src+"giphy.gif")
 }else{
    src = src.split("giphy.gif")[0]
    $(event.target).attr("src", src+"480w_s.jpg")    
 }})
})
