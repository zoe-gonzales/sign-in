module.exports = function(sequelize, DataTypes){
    var Meeting = sequelize.define('Meeting', {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    // Meeting.associate = function(models){
    //     Meeting
    //     .hasMany(models.SignIn, {as:'attendees'})
    //     .hasMany(models.Note, {as:'notes'});
    // }

    return Meeting;
}