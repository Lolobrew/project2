var path = require ("path");
var db = require("../models");

// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    res.render("home",
      {
        layout: 'main',
        css: 'home.css'
      }
    );
  });

    // index route loads home.html
  app.get("/home", function(req, res) {
    res.render("home",
      {
        layout: 'main',
        css: 'home.css'
      }
    );
  });

  // login route loads login.html
  app.get("/login", function(req, res) {
    res.render("login",
      {
        layout: 'main',
        css: 'login.css'
      }
    );
  });

  app.get("/users", function(req, res) {
    res.render("userpage",
      {
        layout: 'main',
        css: 'userpage.css'
      }
    );
  });


  app.get("/users/:name", function(req, res){
    db.Users.findOne({
      where: {
        name: req.params.name,
      },
      include: [db.FullMovies]
    }).then(function(data){
      console.log(data.FullMovies[0].dataValues.poster);
      res.render('userpage',
        {
          layout: 'main',
          css: 'userpage.css',
        }
      );
    });
  });


};