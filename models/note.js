module.exports = function(sequelize, DataTypes){
    var Note = sequelize.define('Note', {
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Note.associate = function(models){
        Note.belongsTo(models.Meeting, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Note;
}