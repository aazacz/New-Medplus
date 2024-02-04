const express           = require('express');
const admin_route        = express();
const adminController = require('../Controller/adminController')


admin_route.use(express.json());
admin_route.use(express.urlencoded({ extended: true }))





admin_route.post("/login", adminController.login);
admin_route.get("/getUser", adminController.getUser);
admin_route.post("/addDoctor", adminController.addDoctor);
admin_route.get("/getDoctors", adminController.getDoctors);
module.exports = admin_route 