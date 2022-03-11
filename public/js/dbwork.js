//const { json} = require("express/lib/response")



var animeSeries =["Full Metal Alchemist"]
var animeID = ["121"]
var animeEpCt = ["51"]


function getInfo(){
for (let k=0 ;k<animeID.length; k++  )
{ var id = animeID[k]

for (let i=0; i <1; i++)
  // animeEpCt ; i++)
{
 let episode = 1+i 
  var dbBuild = "https://api.jikan.moe/v4/anime/"+id +"/episodes/"+episode

  
    fetch(dbBuild)
    .then(function(response)
    {console.log(response)
      setTimeout(1001)   
    return response.json()})
    .then(function(animeData){console.log(animeData)})

// create array of animes with indeciesw a
// array is [a].epsidoe number, [a]episode name [a].truthiness cannon,[a].synopsis 
var animeSeries

}
}
}

getInfo()