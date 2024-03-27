const express = require('express');
const empRouter = express.Router();
const { ControlEmp, ControlView, Controlupdate, Controldelete } = require('../controller/empcontroller');
const tokenVerification = require('../middleware');

empRouter.post('/addEmployee',tokenVerification,ControlEmp);
empRouter.get('/viewEmployee',tokenVerification,ControlView);
empRouter.put('/updateEmployee/:id', tokenVerification,Controlupdate); 
empRouter.delete('/deleteEmployee/:id',tokenVerification, Controldelete)


module.exports = empRouter;
