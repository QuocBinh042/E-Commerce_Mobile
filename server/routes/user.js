const express = require("express");
const router = express.Router();
const { sql } = require("../db");
const bcrypt = require("bcrypt");

const saltRounds = 10;

// Hàm phụ mã hóa mật khẩu
const hashPassword = (password) => bcrypt.hash(password, saltRounds);

// Hàm phụ để lấy thông tin người dùng theo username
const getUserByUsername = async (username) => {
  const result = await sql.query`SELECT * FROM Users WHERE Username = ${username}`;
  return result.recordset[0];
};

// Lấy danh sách người dùng
router.get("/users", async (req, res) => {
  try {
    const { recordset } = await sql.query`SELECT * FROM Users`;
    res.json(recordset);
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching users", error: err.message });
  }
});

// Đăng nhập người dùng
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await getUserByUsername(username);

    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    // Kiểm tra xem mật khẩu trong cơ sở dữ liệu đã được mã hóa hay chưa
    if (user.PasswordHash.startsWith('$2b$') || user.PasswordHash.startsWith('$2a$')) {
      // Mật khẩu đã được mã hóa bằng bcrypt, sử dụng bcrypt.compare
      isMatch = await bcrypt.compare(password, user.PasswordHash);
    } else {
      isMatch = password === user.PasswordHash;
    }

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }


    res.json({ success: true, message: "Login successful" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error logging in", error: err.message });
  }
});

// Tạo người dùng mới
router.post("/users", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await hashPassword(password);
    await sql.query`
      INSERT INTO Users (Username, Email, PasswordHash)
      VALUES (${username}, ${email}, ${hashedPassword})
    `;
    res.status(201).json({ success: true, message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error creating user", error: err.message });
  }
});

// Cập nhật người dùng
router.patch("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;

  try {
    const hashedPassword = password ? await hashPassword(password) : undefined;

    await sql.query`
      UPDATE Users
      SET Email = ${email}
      ${hashedPassword ? sql`, PasswordHash = ${hashedPassword}` : sql``}
      WHERE UserID = ${id}
    `;
    res.json({ success: true, message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error updating user", error: err.message });
  }
});

// Xóa người dùng
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await sql.query`DELETE FROM Users WHERE UserID = ${id}`;
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error deleting user", error: err.message });
  }
});

module.exports = router;
