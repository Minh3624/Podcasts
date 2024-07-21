var connect = require('./database');
module.exports = class Like {
    constructor() { }
    // Add 
    static createLike(like) {
        return new Promise((resolve, reject) => {
            const sql = 'INSERT INTO `like` SET ?';
            connect.query(sql, like, (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    }
    // Update 
    static updatelike(like, likeId) {
        return new Promise((resolve, reject) => {
            const sql = 'UPDATE `like` SET ? WHERE id = ${likeId}';
            connect.query(sql, [like, likeId], (err, result) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }

            });
        });
    }
   
    // Edit 
    static async getEdit(likeId) {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM `like` WHERE id = ${likeId}';
            connect.query(sql, [likeId], function (err, data) {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
    

}