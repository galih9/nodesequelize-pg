'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    story_points: DataTypes.STRING,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    completed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    }
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    })
  };
  return Todo;
};