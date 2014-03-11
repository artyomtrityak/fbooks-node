module.exports.get = function(req, res) {
  var limit = parseInt(req.query.limit, 10),
      offset = parseInt(req.query.offset, 10);

  this.model.findAndCountAll({
    limit: limit,
    offset: offset
  }).success(function(authors) {
    res.json(authors);
  });
};

module.exports.getById = function(req, res) {
  this.model.find(req.params.id).success(function(author) {
    res.json(author);
  });
};

module.exports.create = function(req, res) {
  this.model.create({
    name: req.body.name
  }).success(function(author) {
    res.json(author);
  }).error(function(error) {
    res.status(500).json(error);
  });
};

module.exports.update = function(req, res) {
  this.model.find(req.params.id).success(function(author) {
    author.name = req.body.authorName;
    return author.save(['name']);
  }).success(function(author) {
    res.json(author);
  }).error(function(error) {
    res.status(500).json(error);
  });
};

module.exports.delete = function(req, res) {
  this.model.destroy(req.params.id).success(function() {
    res.json({});
  }).error(function(error) {
    res.status(500).json(error);  
  });
};