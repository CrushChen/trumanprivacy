const Pri = require('../models/Pri.js');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

exports.getPri = (req, res, next) => {
  console.log("@@@@@query    ",req.query.c);
  res.render('pri', {
   title: 'Test Privacy',
   condis: req.query.c,
   fname: req.query.fna,
   uname: req.query.una,
   number: req.query.nu
  })

  };

//choice: choice.value, time: time, did_post:"true"
exports.postPri = (req, res, next) => {

  const pri = new Pri({
  cond: req.body.cond,
  name: req.body.id,
  time: req.body.time,
  pri_choice: req.body.choice, 
  did_post: req.body.did_post
  });

  pri.save((err) => {
            if (err) {
              return next(err);
            }
            //req.flash('success', { msg: 'Profile information has been updated.' });
            res.send("Good!!!");
          });


  };




