let usermodel = require('../models/userInfo.model');
exports.route = function (app) {
    app.route('/getInfo/:id').get(usermodel.findAll);
}