require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
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
  },
};
