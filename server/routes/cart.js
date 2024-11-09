const express = require("express");
const router = express.Router();
const { sql } = require("../db");

// Add a product to the cart
router.post("/add", async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const productResult = await sql.query`SELECT Price FROM Products WHERE ProductID = ${productId}`;
    if (productResult.recordset.length === 0) {
      return res.status(400).json({ success: false, message: "Product not found" });
    }

    const productPrice = productResult.recordset[0].Price;

    // Get or create the cart for the user
    let cartResult = await sql.query`SELECT CartID FROM Cart WHERE UserID = ${userId}`;
    let cartId = cartResult.recordset[0]?.CartID;

    if (!cartId) {
      const newCartResult = await sql.query`
        INSERT INTO Cart (UserID)
        OUTPUT INSERTED.CartID
        VALUES (${userId})
      `;
      cartId = newCartResult.recordset[0].CartID;
    }

    // Check if the product is already in the cart
    const cartItemResult = await sql.query`
      SELECT Quantity 
      FROM CartItems 
      WHERE CartID = ${cartId} AND ProductID = ${productId}
    `;

    if (cartItemResult.recordset.length > 0) {
      // If the product is already in the cart, update the quantity
      const currentQuantity = cartItemResult.recordset[0].Quantity;
      await sql.query`
        UPDATE CartItems
        SET Quantity = ${currentQuantity + 1}
        WHERE CartID = ${cartId} AND ProductID = ${productId}
      `;
    } else {
      // Add the product to the cart with an initial quantity of 1
      await sql.query`
        INSERT INTO CartItems (CartID, ProductID, Quantity, Price)
        VALUES (${cartId}, ${productId}, 1, ${productPrice})
      `;
    }

    res.json({ success: true, message: "Product added to cart" });
  } catch (err) {
    console.error("Error adding product to cart:", err);
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

// Get cart items for a specific user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    // Check if the cart exists for the user and retrieve CartID
    const cartResult = await sql.query`
      SELECT CartID FROM Cart WHERE UserID = ${userId}
    `;
    if (cartResult.recordset.length === 0) {
      return res.json([]); // Return empty array if no cart exists
    }
    
    const cartId = cartResult.recordset[0].CartID;

    // Retrieve products and their details from CartItems
    const result = await sql.query`
      SELECT ci.CartItemID, p.ProductID, p.ProductName, p.Description, p.Image, 
             ci.Quantity, ci.Price
      FROM CartItems ci
      JOIN Products p ON ci.ProductID = p.ProductID
      WHERE ci.CartID = ${cartId}
    `;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error fetching cart items",
      error: err.message,
    });
  }
});

// Update quantity of a product in the cart
router.patch("/update-quantity", async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    // Get the user's cart
    const cartResult = await sql.query`
      SELECT CartID FROM Cart WHERE UserID = ${userId}
    `;
    if (cartResult.recordset.length === 0) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }
    const cartId = cartResult.recordset[0].CartID;

    // Update the product quantity in the cart
    await sql.query`
      UPDATE CartItems 
      SET Quantity = ${quantity}
      WHERE CartID = ${cartId} AND ProductID = ${productId}
    `;

    res.json({ success: true, message: "Product quantity updated" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error updating product quantity",
      error: err.message,
    });
  }
});

// Remove a product from the cart (modified route to accept query parameters)
router.delete("/remove", async (req, res) => {
  const { userId, productId } = req.query; // use query instead of body

  try {
    // Get the user's cart
    const cartResult = await sql.query`
      SELECT CartID FROM Cart WHERE UserID = ${userId}
    `;
    if (cartResult.recordset.length === 0) {
      return res.status(404).json({ success: false, message: "Cart not found" });
    }
    const cartId = cartResult.recordset[0].CartID;

    // Remove the product from the cart
    await sql.query`
      DELETE FROM CartItems WHERE CartID = ${cartId} AND ProductID = ${productId}
    `;

    res.json({ success: true, message: "Product removed from cart" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Error removing product from cart",
      error: err.message,
    });
  }
});


module.exports = router;
