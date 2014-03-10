module.exports.get = function(req, res) {
  var limit = parseInt(req.query.limit, 10),
      offset = parseInt(req.query.offset, 10);

  this.model.findAndCountAll({
    limit: limit,
    offset: offset
  }).success(function(books) {
    res.json(books);
  });
};

module.exports.getById = function(req, res) {
  this.model.find(req.params.id).success(function(book) {
    res.json(book);
  });
};

module.exports.create = function(req, res) {
  this.model.create({
    title: req.body.bookName
  }).success(function(book) {
    res.json(book);
  }).error(function(error) {
    res.status(500).json(error);
  });
};

module.exports.update = function(req, res) {
  this.model.find(req.params.id).success(function(book) {
    book.title = req.body.bookName;
    return book.save(['title']);
  }).success(function(book) {
    res.json(book);
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