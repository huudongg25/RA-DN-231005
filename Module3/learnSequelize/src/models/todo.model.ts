import { DataTypes } from "sequelize";
import sequelize from "../configs/db.config";

const Todo = sequelize.define('Todo', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.SMALLINT,
        defaultValue: 1
    }
}, {
    timestamps: true
});


export default Todo