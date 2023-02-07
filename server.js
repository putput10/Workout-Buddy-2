const express = require('express');
const routes = require('./controller');
// import sequelize connection
const sequelize = require('./config/connection');
// import express-session
const session = require('express-session');
// const indexRouter = require('./controller/index');
// const authRouter = require('./utils/auth');
// import express-handlebars
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;

// set up session
const sess = {
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

app.use(session(sess));



// app.use('/', indexRouter);
// app.use('/', authRouter);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});