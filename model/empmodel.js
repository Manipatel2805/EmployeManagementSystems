const db = require('../database/db');

exports.ModelEmp = (data) => {
    return new Promise((resolve, reject) => {
        const { name, email, contact, department, designation } = data;
        const checkQuery = 'SELECT * FROM employedetails WHERE name=? AND email=?';
        db.query(checkQuery, [name, email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length > 0) {
                    resolve({ message: 'Details already exist' });
                } else {
                    const empquery = 'INSERT INTO employedetails (name, email, contact, department, designation) VALUES (?, ?, ?, ?, ?)';
                    db.query(empquery, [name, email, contact, department, designation], (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({ message: 'Successfully entered' });
                        }
                    });
                }
            }
        });
    });
};
exports.ModelGet= () => {
    return new Promise((resolve, reject) => {
        const getquery = 'SELECT * FROM employedetails';
        db.query(getquery, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

exports.Modelupdate = (id, data) => {
    return new Promise((resolve, reject) => {
        const {name, email, contact, department, designation } = data;
        
        const Updatequery = 'UPDATE employedetails SET name=?, email=?, contact=?, department=?, designation=? WHERE id=?';
        db.query(Updatequery, [name, email, contact, department, designation,id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

exports.Modeldelete = (id) => {
    return new Promise((resolve, reject) => {
        const deletequery = 'DELETE FROM employedetails WHERE id=?';
        db.query(deletequery, [id], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
