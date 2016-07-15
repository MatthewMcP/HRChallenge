// server.js
// where your node app starts

// init project
var bodyParser = require("body-parser");
var H = require("hyperweb");
var datastore = require("./datastore").sync;

app = H.blastOff();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

datastore.initializeApp(app);

var routes = require("./routes.js")(app, datastore);


// ------------------------
// Pages
// ------------------------

app.get("/", function (request, response) {
    initializeDatastoreOnProjectCreation();
    response.render('index.html', {
      title: "Deloitte OnBoarding"
    });
});
app.get("/home.html", function (request, response) {

  response.render('home.html', {
    title: "Home"
  });
});
app.get("/marvin.html", function (request, response) {
  response.render('marvin.html', {
    title: "Talk to Marvin"
  });});

// ------------------------
// DATASTORE INITIALIZATION
// ------------------------

function initializeDatastoreOnProjectCreation() {
  if (!datastore.get("initialized")) {
    datastore.set("userLoginData", initialUserLoginData);
    datastore.set("initialized", true);
  }
}

var initialUserLoginData = [
  {
    username: "Matthew",
    password: "password"
  },
  {
    username: "Matt",
    password: "password"
  }
];