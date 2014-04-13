
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',{"title":"Landplot"});
};

exports.current_investemnts = function(req, res){
  res.render('investments',{"title":"Investments"});
};

exports.market_analysis = function(req, res){
  res.render('market',{"title":"Market Analysis"});
};