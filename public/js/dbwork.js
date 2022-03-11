//const { json} = require("express/lib/response")



var animeSeries =["naruto","naruto Shippuden"]
var animeID = ["20","1735"]
var animeEpCt = ["220","500"]


function getInfo(){
for (let k=0 ;k<animeID.length; k++  )
{ var id = animeID[k]
  
for (let i=0; i < animeEpCt ; i++)
{
 let episode = 1+i 
  var dbBuild = "https://api.jikan.moe/v4/anime/"+id +"/episodes/"+episode

  
    fetch(dbBuild)
    .then(function(response)
    {console.log(response)
        
    return response.json()})
    .then(function(animeData){console.log(animeData)})

// create array of animes with indeciesw a
// array is [a].epsidoe number, [a]episode name [a].truthiness cannon,[a].synopsis 
var animeSeries[k+1]

}
}
}

getInfo()