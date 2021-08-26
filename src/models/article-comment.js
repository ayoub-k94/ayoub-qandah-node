const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ArticleComment extends Model {
    static associate({ Article }) {
      this.belongsTo(Article, {
        onDelete: 'cascade',
        hooks: true,
      });
    }
  }

  ArticleComment.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ArticleId: DataTypes.INTEGER,
      CommentId: DataTypes.INTEGER,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },

    {
      sequelize,
      modelName: 'ArticleComment',
    }
  );
  return ArticleComment;
};
