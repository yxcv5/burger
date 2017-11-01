var orm = require("../config/orm.js");

var burger = {
  all: function(cols, cb) {
    orm.selectAll("burgers", cols, function(res) {
      cb(res);
    });
  },
  insert: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller.
module.exports = burger;