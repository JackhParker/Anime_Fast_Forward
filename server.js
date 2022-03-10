const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
//const { json} = require("express/lib/response")




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
  var dbBuild = "https://api.jikan.moe/v4/anime/"+id+"/episodes/"+episode  
    //setTimeout(1001)
    fetch (dbBuild)
    .then(function(response)
    {console.log(response)
        
    return response.json()})
//}
}
//}

getInfo()
// animeEpCt[k]