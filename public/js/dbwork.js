//const { json} = require("express/lib/response")



var animeSeries =["Full Metal Alchemist","Full Metal Alchemist Brotherhood"]
//"One Piece", "Bleach", "Dragon Ball Z","Dragon Ball"," Naruto Shippuded", "Naruto"]
var animeID = [121 ,5114]
//,21 , 269 , 813 , 134 , 1735 , 20]
var animeEpCt = [5,5]
//  1,1,1,1,1,1]

let k=0
getInfo()
function getInfo(){
// for (let k=0; k<animeID.length; k++){

var id = animeID[k]
  let i=0
  reccursion()
  function reccursion(){
if (k > animeID.length) 
   { return
    
     ;}
else if (i=animeEpCt[k], k++)
    {
      i=0
      getInfo()


    }
   else if (i< animeEpCt[k], i++)
   {  
     
console.log(i)
 episode= 1+i
  //console.log(i)
  var dbBuild = "https://api.jikan.moe/v4/anime/"+id +"/episodes/"+episode
  setTimeout(delay,1100)
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
       headers:{"Content-Type" :"application/json"}, })
       //.then(console.log)
  }   )
  
reccursion()
}
   }
}
}
//}