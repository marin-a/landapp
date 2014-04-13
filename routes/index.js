
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',{"title":"Landplot"});
};

exports.information = function(req, res){
  res.render('information',{"title":"Information"});
};

exports.about_croatia = function(req, res){
  res.render('croatia',{"title":"About Croatia"});
};