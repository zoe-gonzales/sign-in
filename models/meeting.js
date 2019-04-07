module.exports = function(sequelize, DataTypes){
    var Meeting = sequelize.define('Meeting', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Meeting.associate = function(models){
        Meeting.hasMany(models.Signin, {
            foreignKey: {
                allowNull: false
            }
        });

        Meeting.hasMany(models.Note, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Meeting;
}