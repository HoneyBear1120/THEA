const dotenv = require('dotenv');
dotenv.config({ path: "/opt/thea/.env" });
// dotenv.config({ path: ".env" });
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // *.domain.com update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requeted-With, Content-Type, Accept, Authorization, RBR"
  );
  res.header("Access-Control-Expose-Headers", "Token");

  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  next();
});

//Models

const User= require('./models/user');
const UserNotificationSetting = require('./models/UserNotificationSetting');
const Categories = require('./models/Categories');
const UserCategories = require('./models/UserCategory');
const RequestedCategory = require('./models/RequestedCategory');
const Countries =  require('./models/countries');
const States = require('./models/state');
const Cities = require('./models/cities'); 
const isAuth= require('./middleware/is-auth');
const sequelize=require('./utils/database');
const Cabinet  = require('./models/cabinet');
const Search=require('./models/search');

// Routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const userCategoryRouter = require('./routes/userCategory');
const categoryListRouter =  require('./routes/CategoryList');
const CountriesRouter = require('./routes/countries');
const StatesRouter = require('./routes/state');
const fileRouter = require('./routes/fileUpload');
const citiesRouter = require('./routes/cities');
const userCabinetRouter = require('./routes/userCabinet');
const searchRouter = require('./routes/search');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(isAuth);

// Route
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/userCategory', userCategoryRouter);
app.use('/categorylist',categoryListRouter);
app.use('/countries',CountriesRouter);
app.use('/states',StatesRouter);
app.use('/uploads',fileRouter);
app.use('/cities',citiesRouter);
app.use('/usercabinet',userCabinetRouter);
app.use('/search',searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// sequelize
//   .sync({ alter: true }).then((result) => {
  
//    console.log('dataBase Synced')
  
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.hasMany(UserNotificationSetting);
User.hasMany(Categories);
User.hasMany(RequestedCategory);

Search.belongsTo(User)
Search.belongsTo(UserCategories)

User.hasMany(UserCategories);

Categories.hasMany(UserCategories);
Countries.hasMany(States);
States.hasMany(Cities);
User.hasMany(Cabinet);

module.exports = app;