//const { json} = require("express/lib/response")

var dbBuild = "https://api.jikan.moe/v4/anime/"+id+"/episodes/"+episode


var animeSeries =["naruto","naruto Shippuden"]
var animeID = ["20","1735"]
var animeEpCt = ["220","500"]


function getInfo(){
//for (let k=0 ;k<animeID.length; k++  )
//{ var id = animeID[k]
  //  for (let i=0; i < 1 ; i++)
//{
   var episode = 1
  var id = 20  
    sleep(1001)
    fetch (dbBuild)
    .then(function(response)
    {console.log(response)
        
    return response.json()})
//}
}
//}

getInfo()
// animeEpCt[k]