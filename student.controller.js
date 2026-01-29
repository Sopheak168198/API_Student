const Student = require("../models/student.model");

exports.getStudents = (req, res) => {
  Student.getAll((err, data) => {
    if (err) res.status(500).send(err);
    else res.send(data);
  });
};

exports.addStudent = (req, res) => {
  Student.create(req.body, (err) => {
    if (err) res.status(500).send(err);
    else res.send({ message: "Student added " });
  });
};

exports.updateStudent = (req, res) => {
  console.log(req.body); // debug

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ message: "Request body is empty " });
  }

  Student.update(req.params.id, req.body, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: "Student updated " });
    }
  });
};

exports.deleteStudent = (req, res) => {
  Student.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    else res.send({ message: "Student deleted " });
  });
};
