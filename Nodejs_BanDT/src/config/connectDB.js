const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('csdl_dienthoai', 'root', 'Kietmi@1412', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
});

let connectDB = async() => {

    // kiểm tra kết nối DB thành công hay không 
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}
module.exports = connectDB;