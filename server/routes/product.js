const express = require("express");
const router = express.Router();
const { sql } = require("../db");

// Lấy danh sách sản phẩm
router.get("/", async (req, res) => {
  try {
    const result = await sql.query`SELECT * FROM Products`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send("Error fetching products: " + err.message);
  }
});

// Thêm sản phẩm mới
router.post("/", async (req, res) => {
  const { productName, description, price, stock, categoryID } = req.body;
  try {
    await sql.query`
      INSERT INTO Products (ProductName, Description, Price, Stock, CategoryID)
      VALUES (${productName}, ${description}, ${price}, ${stock}, ${categoryID})
    `;
    res.status(201).send("Product created successfully");
  } catch (err) {
    res.status(500).send("Error creating product: " + err.message);
  }
});

// Cập nhật sản phẩm
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { productName, description, price, stock, categoryID } = req.body;
  try {
    await sql.query`
      UPDATE Products
      SET ProductName = ${productName},
          Description = ${description},
          Price = ${price},
          Stock = ${stock},
          CategoryID = ${categoryID}
      WHERE ProductID = ${id}
    `;
    res.send("Product updated successfully");
  } catch (err) {
    res.status(500).send("Error updating product: " + err.message);
  }
});

// Xóa sản phẩm
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await sql.query`DELETE FROM Products WHERE ProductID = ${id}`;
    res.send("Product deleted successfully");
  } catch (err) {
    res.status(500).send("Error deleting product: " + err.message);
  }
});

module.exports = router;
