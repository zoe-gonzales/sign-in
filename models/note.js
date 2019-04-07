module.exports = function(sequelize, DataTypes){
    var Note = sequelize.define('Note', {
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    return Note;
}