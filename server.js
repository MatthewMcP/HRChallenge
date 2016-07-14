// server.js
// where your node app starts

// init project
var H = require("hyperweb");
var datastore = require("./datastore").sync;

app = H.blastOff();
datastore.initializeApp(app);


// ------------------------
// Pages
// ------------------------

app.get("/", function (request, response) {
  response.render('index.html', {
    title: "Deloitte Onboarding"
  });});
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
// Pages
// ------------------------




/*app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
  ];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});*/