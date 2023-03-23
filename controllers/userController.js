const { ObjectId } = require('mongoose').Types;
const { User, Course } = require('../models');

// // Aggregate function to get the number of students overall
// const headCount = async () =>
//   User.aggregate()
//     .count('userCount')
//     .then((numberOfUsers) => numberOfUsers);

// // Aggregate function for getting the overall grade using $avg
// const grade = async (userId) =>
//   User.aggregate([
//     // only include the given student by using $match
//     { $match: { _id: ObjectId(userId) } },
//     {
//       $unwind: '$assignments',
//     },
//     {
//       $group: {
//         _id: ObjectId(studentId),
//         overallGrade: { $avg: '$assignments.score' },
//       },
//     },
//   ]);

module.exports = {
  // // Get all students
  // getUsers(req, res) {
  //   User.find()
  //     .then(async (users) => {
  //       const userObj = {
  //         users,
  //         headCount: await headCount(),
  //       };
  //       return res.json(userObj);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },
  // // Get a single student
  // getSingleStudent(req, res) {
  //   Student.findOne({ _id: req.params.studentId })
  //     .select('-__v')
  //     .then(async (student) =>
  //       !student
  //         ? res.status(404).json({ message: 'No student with that ID' })
  //         : res.json({
  //             student,
  //             grade: await grade(req.params.studentId),
  //           })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  // // Delete a student and remove them from the course
  // deleteStudent(req, res) {
  //   Student.findOneAndRemove({ _id: req.params.studentId })
  //     .then((student) =>
  //       !student
  //         ? res.status(404).json({ message: 'No such student exists' })
  //         : Course.findOneAndUpdate(
  //             { students: req.params.studentId },
  //             { $pull: { students: req.params.studentId } },
  //             { new: true }
  //           )
  //     )
  //     .then((course) =>
  //       !course
  //         ? res.status(404).json({
  //             message: 'Student deleted, but no courses found',
  //           })
  //         : res.json({ message: 'Student successfully deleted' })
  //     )
  //     .catch((err) => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  // },

  // // Add an assignment to a student
  // addAssignment(req, res) {
  //   console.log('You are adding an assignment');
  //   console.log(req.body);
  //   Student.findOneAndUpdate(
  //     { _id: req.params.studentId },
  //     { $addToSet: { assignments: req.body } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((student) =>
  //       !student
  //         ? res
  //             .status(404)
  //             .json({ message: 'No student found with that ID :(' })
  //         : res.json(student)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
  // // Remove assignment from a student
  // removeAssignment(req, res) {
  //   Student.findOneAndUpdate(
  //     { _id: req.params.studentId },
  //     { $pull: { assignment: { assignmentId: req.params.assignmentId } } },
  //     { runValidators: true, new: true }
  //   )
  //     .then((student) =>
  //       !student
  //         ? res
  //             .status(404)
  //             .json({ message: 'No student found with that ID :(' })
  //         : res.json(student)
  //     )
  //     .catch((err) => res.status(500).json(err));
  // },
};