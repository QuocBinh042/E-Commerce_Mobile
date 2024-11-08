const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db"); // Import hàm connectDB từ db.js
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const userRoutes = require("./routes/user")
const app = express();
const PORT = 3002;

// Middleware
app.use(cors());
app.use(express.json());

// Kết nối đến cơ sở dữ liệu
connectDB();

// Sử dụng route cho sản phẩm và danh mục
app.use("/user", userRoutes)
app.use("/products", productRoutes);
app.use("/categories", categoryRoutes);
app.use("/images", express.static("public/images"));
// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
