const db = require('../database/db');

exports.Modelregister = (data) => {
    return new Promise((resolve, reject) => {
        const { id, email, username, password } = data;
        const checkQuery = 'SELECT * FROM userdetails WHERE email = ? OR username = ?';
        db.query(checkQuery, [email, username], (err, result) => {
            if (err) {
                reject(err);
            } else {
                if (result.length > 0) {
                    resolve({ message: 'Data already exists' });
                } else {
                    const userQuery = 'INSERT INTO userdetails (id, email, username, password) VALUES (?, ?, ?, ?)';
                    db.query(userQuery, [id, email, username, password], (err, result) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve({ message: 'Registration successful' }) 
                        }
                    });
                }
            }
        });
    });
};

exports.ModelLogin = (data) => {
    return new Promise((resolve, reject) => {
        const { email, password } = data;
        const loginQuery = 'SELECT * FROM userdetails WHERE email = ?';
        db.query(loginQuery, [email], (err, result) => {
            if (err) {
                reject(err);
            } else {
                console.log(result,"resultttt")
                resolve(result);
            }
        });
    });
};
