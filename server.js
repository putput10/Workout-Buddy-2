const path = require('path')
const express = require('express');
const routes = require('./controller');
//import dotenv
require('dotenv').config();
// import sequelize connection
const sequelize = require('./config/connection');
// import express-session
const session = require('express-session');
// import express-handlebars
const exphbs = require('express-handlebars');

const hbs = exphbs.create({});

// Creating a new store
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

// set up session
const sess = {
  secret: process.env.SECRETS,
  cookies: {
    maxage: null,
    httpOnly: true,
    secure: false,
    samesite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  })
};

//middleware
app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});