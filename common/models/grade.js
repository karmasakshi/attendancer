var app = require('../../server/server.js');
var async = require('async');

module.exports = function (Grade) {

    Grade.add = function (grade, callback) {

        grade.institutionId = 1;

        Grade.create(grade, function (err, addedGrade) {

            if (err) {

                callback(err);

            } else {

                callback(err, addedGrade);

            }

        });

    };

    Grade.listWithCounts = function (institutionId, callback) {

        Grade.find({ where: { institutionId: institutionId }, include: ['lectures', 'students', 'subjects'], order: 'order ASC' }, function (err, foundGrades) {

            if (err) {

                callback(err);

            } else {

                callback(null, foundGrades);

            }

        });

    };

    Grade.verifyAndDelete = function (id, callback) {

        async.parallel({

            lectureCount: function (callback) {

                app.models.Lecture.count({ gradeId: id }, function (err, lectureCount) {

                    if (err) {

                        callback(err);

                    } else {

                        callback(null, lectureCount);

                    }

                });

            },

            studentCount: function (callback) {

                app.models.Student.count({ gradeId: id }, function (err, studentCount) {

                    if (err) {

                        callback(err);

                    } else {

                        callback(null, studentCount);

                    }

                });

            },

            subjectCount: function (callback) {

                app.models.Subject.count({ gradeId: id }, function (err, subjectCount) {

                    if (err) {

                        callback(err);

                    } else {

                        callback(null, subjectCount);

                    }

                });

            }

        }, function (err, result) {

            if (err) {

                callback(err);

            } else {

                if (result.lectureCount > 0 || result.studentCount > 0 || result.subjectCount > 0) {

                    callback('Failed.')

                } else {

                    Grade.destroyById(id, function (err) {

                        if (err) {

                            callback(err);

                        } else {

                            callback(null);

                        }

                    });

                }

            }

        });

    };

};