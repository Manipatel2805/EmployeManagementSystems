const { ModelEmp, ModelGet, Modelupdate, Modeldelete } = require("../model/empmodel");

exports.ControlEmp = async (req, res) => {
    try {
        const data = await ModelEmp(req.body);
        res.status(201).json(data); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error:'Internal Server Error'}); 
    }
};

exports.ControlView = async (req, res) => {
    try {
        const data = await ModelGet();
        res.status(200).json(data); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' }); // Send error response
    }
};

exports.Controlupdate = async (req, res) => {
    try {
        const { name, email, contact, department, designation } = req.body;
        const id = req.params.id; 
        console.log(id,"iddddddddddd")
        const data = await Modelupdate(id, { name, email, contact, department, designation });
        res.status(200).json(data); 
    } catch (err) {
        console.error(err);[]
        res.status(500).json({ error: 'Internal Server Error' }); // Send error response
    }
};

exports.Controldelete = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Modeldelete(id);
        res.status(422).json({ message: 'Employee deleted successfully' }); // Send response upon success
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' }); // Send error response
    }
};
