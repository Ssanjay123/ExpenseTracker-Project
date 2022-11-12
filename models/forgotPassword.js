const Sequelize = require("sequelize")
const sequelize = require("../util/database");

const forgotPassword = sequelize.define("forgotpassword",{
    id:{
        type:Sequelize.UUID,
        allowNull:false,
        primaryKey:true
    },
    active:Sequelize.BOOLEAN,
    expiresBy:Sequelize.DATE
})

module.exports = forgotPassword;