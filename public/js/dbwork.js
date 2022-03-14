//const { json} = require("express/lib/response")

var animeSeries =["Full Metal Alchemist"]
var animeID = [121]
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
    .then(function(animeData){console.log(animeData)
     var isFiller = animeData.data.filler
     var description = animeData.data.synopsis
     var epTit = animeData.data.title
     var series = animeSeries[k]
     var aniID = animeID[k]
    //  console.log(animeSeries[k])
    //  console.log(animeID[k])
    //  console.log(episode)
    //  console.log(isFiller)
    //  console.log(epTit)
    //  console.log(description)
    //var entry = {Series: animeSeries[k], Series_ID: animeID[k], Episode_Number: episode, Episode_Title: epTit, Filler: isFiller, Description: description }
    //console.log(entry)
    fetch("/api/database/info", {method: "POST", body: JSON.stringify({series,aniID, episode,isFiller,epTit,description }),headers:{"Content-Type" :"application/json"}, })
 

  })

// create array of animes with indeciesw a
// array is [a].epsidoe number, [a]episode name [a].truthiness cannon,[a].synopsis 
animeSeries

}
}
}

getInfo()