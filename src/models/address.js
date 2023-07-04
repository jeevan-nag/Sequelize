
const {DataTypes} = require('sequelize')
const {sequelize} = require("../../database/dbconnection")
const {student} = require("./student")

const address = sequelize.define("address", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    studentId: {
        type: DataTypes.UUID,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    taluk: {
        type: DataTypes.STRING,
        allowNull: false
    },
    district: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pincode : {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
 });

 module.exports = {address}
 