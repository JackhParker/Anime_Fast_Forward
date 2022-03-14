//const { json} = require("express/lib/response")



var animeSeries =["Full Metal Alchemist","Full Metal Alchemist Brotherhood","One Piece", "Bleach", "Dragon Ball Z","Dragon Ball"," Naruto Shippuded", "Naruto"]
var animeID = [121 ,5114,21 , 269 , 813 , 134 , 1735 , 20]
var animeEpCt = [51,64,1013,365,291,153,500,220]
let i=0 
let k=0
getInfo()
function getInfo(){
// for (let k=0; k<animeID.length; k++){

var id = animeID[k]

  reccursion()
  function reccursion(){
if (k >= animeID.length) 
   { return
    
     ;}
else{     
if (i >=animeEpCt[k])
    {
      i=0
      k=k+1
      getInfo()


    }
   else 
   {
     i=i+1
 episode= i
  console.log(episode)
  var dbBuild = "https://api.jikan.moe/v4/anime/"+id +"/episodes/"+episode
  setTimeout(delay,2500)
  console.log(dbBuild)
  function delay(){
  
  fetch(dbBuild)
    .then(function(response){
    return response.json()})
    .then(
      function(animeData){
        console.log(animeData)
     var isFiller = animeData.data.filler
     var description = animeData.data.synopsis
     var epTit = animeData.data.title
     var series = animeSeries[k]
     var aniID = animeID[k]
  //console.log(aniID)
    fetch("/api/database/info", {
      method: "POST",
       body: JSON.stringify({series,aniID, episode,isFiller,epTit,description }),
       headers:{"Content-Type" :"application/json"},
       })
    })
  
reccursion()
}
   }
}
}
}