'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    todo_name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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