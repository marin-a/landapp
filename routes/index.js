
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',{"title":"Landplot"});
};

exports.current_investments = function(req, res){
  res.render('investments',{"title":"Current Investments"});
};

exports.market_analysis = function(req, res){
  res.render('market',{"title":"Market Analysis"});
};

exports.dev_img = function(req, res){
  res.render('dev',{"title":"Dev"});
};