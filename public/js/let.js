
let i=0
function htmlloop(){
if (i<episodecount) {
 i =i+1
let script = document.createElement('script')
script.class = "episode Number"
script.src = './views/episode.handlebars'
script.innerHTML = i+","
htmlloop()
}}