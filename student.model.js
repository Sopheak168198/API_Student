const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM students", callback);
};

exports.create = (data, callback) => {
  db.query("INSERT INTO students SET ?", data, callback);
};

exports.update = (id, data, callback) => {
  db.query("UPDATE students SET ? WHERE id=?", [data, id], callback);
};

exports.delete = (id, callback) => {
  db.query("DELETE FROM students WHERE id=?", [id], callback);
};
