const express = require("express");
const router = express.Router();
const { sql } = require("../db");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const saltRounds = 10;

// Hàm phụ mã hóa mật khẩu
const hashPassword = (password) => bcrypt.hash(password, saltRounds);

// Hàm phụ để lấy thông tin người dùng theo username
const getUserByUsername = async (username) => {
  const result =
    await sql.query`SELECT * FROM Users WHERE Username = ${username}`;
  return result.recordset[0];
};

// Lấy danh sách người dùng
router.get("/users", async (req, res) => {
  try {
    const { recordset } = await sql.query`SELECT * FROM Users`;
    res.json(recordset);
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error fetching users",
        error: err.message,
      });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await getUserByUsername(username);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Kiểm tra xem mật khẩu trong cơ sở dữ liệu đã được mã hóa hay chưa
    let isMatch;
    if (user.PasswordHash.startsWith("$2b$") || user.PasswordHash.startsWith("$2a$")) {
      // Mật khẩu đã được mã hóa bằng bcrypt, sử dụng bcrypt.compare
      isMatch = await bcrypt.compare(password, user.PasswordHash);
    } else {
      isMatch = password === user.PasswordHash;
    }

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid password" });
    }

    // Trả về thông tin người dùng khi đăng nhập thành công
    res.json({
      success: true,
      message: "Login successful",
      user: {
        userId: user.UserID,
        username: user.Username,
        avatar: user.Avatar, 
      },
    });
  } catch (err) {
    console.error("Error logging in:", err); // Kiểm tra lỗi nếu có
    res.status(500).json({
      success: false,
      message: "Error logging in",
      error: err.message,
    });
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
    res
      .status(201)
      .json({ success: true, message: "User created successfully" });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error creating user",
        error: err.message,
      });
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
    res
      .status(500)
      .json({
        success: false,
        message: "Error updating user",
        error: err.message,
      });
  }
});

// Xóa người dùng
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await sql.query`DELETE FROM Users WHERE UserID = ${id}`;
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error deleting user",
        error: err.message,
      });
  }
});

// Tạo transporter để gửi email
const transporter = nodemailer.createTransport({
  service: "gmail", // Hoặc bất kỳ dịch vụ email nào bạn sử dụng
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password",
  },
});

// Endpoint để xử lý yêu cầu đặt lại mật khẩu
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  // Kiểm tra xem email có tồn tại trong cơ sở dữ liệu hay không
  // Giả sử hàm getUserByEmail kiểm tra sự tồn tại của email
  const user = await getUserByEmail(email);
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Email không tồn tại." });
  }

  // Tạo mã đặt lại mật khẩu (có thể là một mã token)
  const resetToken = generateResetToken(); // Hàm tạo token ngẫu nhiên

  // Gửi email đặt lại mật khẩu
  const mailOptions = {
    from: "your-email@gmail.com",
    to: email,
    subject: "Password Reset",
    text: `Click the link below to reset your password:\n\nhttp://yourdomain.com/reset-password?token=${resetToken}`,
  };

  const crypto = require("crypto");

  function generateResetToken() {
    return crypto.randomBytes(20).toString("hex"); // Tạo chuỗi token ngẫu nhiên
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res
        .status(500)
        .json({
          success: false,
          message: "Có lỗi xảy ra khi gửi email.",
          error: error.message,
        });
    } else {
      res.json({
        success: true,
        message: "Password reset email sent successfully.",
      });
    }
  });
});

router.post("/reset-password", async (req, res) => {
  const { token, newPassword } = req.body;

  // Tìm user với token này trong cơ sở dữ liệu
  const user = await findUserByToken(token);
  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid or expired token." });
  }

  // Mã hóa mật khẩu mới và cập nhật vào cơ sở dữ liệu
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await updateUserPassword(user.id, hashedPassword);

  res.json({ success: true, message: "Password has been reset successfully." });
});

module.exports = router;
