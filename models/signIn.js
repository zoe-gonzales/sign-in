module.exports = function(sequelize, DataTypes){
    var Signin = sequelize.define('Signin', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        onList: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        signedIn: {
            type: DataTypes.BOOLEAN,
        }
    });
    return Signin;
}