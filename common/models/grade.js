module.exports = function (Grade) {

    Grade.list = function (institutionId, callback) {

        Grade.find({ where: { institutionId: institutionId }, include: ['lectures', 'students', 'subjects'], order: 'order ASC' }, function (err, foundGrades) {

            if (err) {

                callback(err);

            } else {

                callback(null, foundGrades);

            }

        });

    };

};