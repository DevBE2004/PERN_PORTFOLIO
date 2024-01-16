const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
    timezone: "+07:00",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Chỉ sử dụng trong môi trường phát triển, KHÔNG sử dụng trong môi trường sản xuất
        sslmode: "require",
      },
    },
  }
);
const dbconnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB connection successfully.");
  } catch (error) {
    console.error("DB connection failed. Error:", error);
  }
};

module.exports = dbconnect;
