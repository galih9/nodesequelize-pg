'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    story: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};