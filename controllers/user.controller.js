const userService = require('../services/user.service');
const bcrypt = require('bcryptjs');
const tokenInst = require('../config/sec.token');

var salt=bcrypt.genSaltSync(8)
exports.register = (req, res, next) => {
    const data = {
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password,salt),
        role: req.body.role,
    };
    userService.register(data, (error, result) => {
        if(error) {
            res.status(400).send({ success: 0, data: 'register failed' });
            next();

        }
        else {
            res.status(201).send({
                success: 1, data: {
                    insertId: result.insertId,
                    JwtToken: tokenInst.tokenGenerator(data.username)
                }
            });
            userService.createRoles({ userId: result.insertId, role: data.role },
                (err, result) => {
                    if (!err)
                        console.log('role created');
                });
            next();
        }


    });

};

exports.getRole = ( req, res, next) => {
    const data = {
        username: req.query.username
    }
    userService.getRole(data, (err, result) => {
        if (err) {
            res.status(404).send({ success: 0, data: 'no user found' });
            next();
        }
        else {
            res.status(200).send({ success: 1, data: result });

            next();
        }
    });

};

exports.login = (req, res, next) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }
    userService.getUserDetails(data, (err, result) => {
        if (err)
        {
            res.status(404).send({ success: 0, data: 'no user found' });
            next();
        }
        else {
            var pswdVal = bcrypt.compareSync(data.password,result[0].password);
            console.log(bcrypt.hashSync(data.password,salt));
            if (!pswdVal){
                    return res.status(401).send({ success: 0, data: "invalid password" });
                    
            }
            var token = tokenInst.tokenGenerator(data.username);
            res.status(200).send({ success: 1, data: token });
            next();
        }
    })

}



