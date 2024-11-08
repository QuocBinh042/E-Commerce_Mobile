-- Create Users table with Avatar field
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY,
    Username NVARCHAR(50) NOT NULL UNIQUE,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(256) NOT NULL,
    Avatar NVARCHAR(255),
    CreatedAt DATETIME DEFAULT GETDATE()
);

-- Create Categories table
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY,
    CategoryName NVARCHAR(50) NOT NULL UNIQUE,
    ImageURL NVARCHAR(255) NOT NULL
);

-- Create Products table with DiscountedPrice field
CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY,
    ProductName NVARCHAR(100) NOT NULL UNIQUE,
    Description NVARCHAR(MAX),
    Price DECIMAL(10, 2) NOT NULL,
    DiscountedPrice DECIMAL(10, 2),
    Stock INT DEFAULT 0 CHECK (Stock >= 0),
    CategoryID INT,
    CreatedAt DATETIME DEFAULT GETDATE(),
    Image NVARCHAR(255),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) ON DELETE SET NULL
);

-- Create Promotions table with date constraints
CREATE TABLE Promotions (
    PromotionID INT PRIMARY KEY IDENTITY,
    PromotionName NVARCHAR(100) NOT NULL,
    DiscountPercentage DECIMAL(5, 2) NOT NULL CHECK (DiscountPercentage BETWEEN 0 AND 100),
    StartDate DATETIME NOT NULL,
    EndDate DATETIME NOT NULL,
    CHECK (EndDate > StartDate)
);

-- Create ProductPromotions table for linking products with promotions
CREATE TABLE ProductPromotions (
    ProductPromotionID INT PRIMARY KEY IDENTITY,
    ProductID INT NOT NULL,
    PromotionID INT NOT NULL,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE,
    FOREIGN KEY (PromotionID) REFERENCES Promotions(PromotionID) ON DELETE CASCADE
);

-- Create Cart table
CREATE TABLE Cart (
    CartID INT PRIMARY KEY IDENTITY,
    UserID INT NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Create CartItems table
CREATE TABLE CartItems (
    CartItemID INT PRIMARY KEY IDENTITY,
    CartID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (CartID) REFERENCES Cart(CartID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);

-- Create Orders table with status constraint
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY,
    UserID INT NOT NULL,
    OrderDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL DEFAULT 'Pending' CHECK (Status IN ('Pending', 'Completed', 'Cancelled', 'Shipped')),
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

-- Create OrderItems table
CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY IDENTITY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);

-- Create Payments table
CREATE TABLE Payments (
    PaymentID INT PRIMARY KEY IDENTITY,
    OrderID INT NOT NULL,
    PaymentMethod NVARCHAR(50) NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    PaymentDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE
);

-- Create Feedback table
CREATE TABLE Feedback (
    FeedbackID INT PRIMARY KEY IDENTITY,
    ProductID INT NOT NULL,
    UserID INT NOT NULL,
    Rating INT CHECK (Rating BETWEEN 1 AND 5),
    Comment NVARCHAR(MAX),
    CreatedAt DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

GO
CREATE TRIGGER trg_CalculateDiscountedPrice
ON ProductPromotions
AFTER INSERT, UPDATE
AS
BEGIN
    UPDATE Products
    SET DiscountedPrice = Price - (Price * (SELECT DiscountPercentage / 100.0 FROM Promotions WHERE PromotionID = (SELECT PromotionID FROM inserted)))
    WHERE ProductID IN (SELECT ProductID FROM inserted);
END;
GO
-- Insert Users with hashed and plain text passwords
INSERT INTO Users (Username, Email, PasswordHash, Avatar) 
VALUES 
    ('alice_wonder', 'alice@example.com', 'hashed_password_1', 'avatar1.png'),
    ('bob_builder', 'bob@example.com', 'hashed_password_2', 'avatar2.png'),
    ('charlie_doe', 'charlie@example.com', 'hashed_password_3', 'avatar3.png'),
    ('daisy_flower', 'daisy@example.com', 'hashed_password_4', 'avatar4.png'),
    ('eve_long', 'eve@example.com', 'hashed_password_5', 'avatar5.png'),
    ('frank_knight', 'frank@example.com', 'hashed_password_6', 'avatar6.png'),
    ('grace_hopper', 'grace@example.com', 'hashed_password_7', 'avatar7.png'),
    ('hank_pym', 'hank@example.com', '123456', 'avatar8.png'),
    ('ian_dark', 'ian@example.com', '123456', 'avatar9.png'),
    ('jane_smith', 'jane@example.com', '123456', 'avatar10.png');

-- Insert Categories
INSERT INTO Categories (CategoryName, ImageURL) 
VALUES 
    ('Electronics', 'Electronics.png'),
    ('Fashion', 'Fashion.png'),
    ('Beauty', 'Beauty.png'),
    ('Fresh Fruits', 'FreshFruit.png');

-- Insert Products: 10 products per category
INSERT INTO Products (ProductName, Description, Price, Stock, CategoryID, Image) 
VALUES 
    -- Electronics Category
    ('Smartphone', 'High-performance smartphone', 799.99, 25, 1, 'smartphone.png'),
    ('Tablet', 'Multi-functional tablet', 499.99, 40, 1, 'tablet.png'),
    ('Camera', 'High-resolution digital camera', 299.99, 35, 1, 'camera.png'),
    ('Laptop', 'High-end gaming laptop', 1099.99, 15, 1, 'laptop.png'),
    ('Smartwatch', 'Smartwatch with fitness tracking', 199.99, 50, 1, 'smartwatch.png'),
    ('Headphones', 'Noise-canceling headphones', 149.99, 60, 1, 'headphones.png'),
    ('Bluetooth Speaker', 'Portable Bluetooth speaker', 89.99, 45, 1, 'speaker.png'),
    ('Monitor', '4K Ultra HD monitor', 249.99, 20, 1, 'monitor.png'),
    ('Printer', 'Wireless color printer', 129.99, 30, 1, 'printer.png'),
    ('Router', 'High-speed Wi-Fi router', 59.99, 70, 1, 'router.png'),

    -- Fashion Category
    ('Jacket', 'Warm winter jacket', 99.99, 20, 2, 'jacket.png'),
    ('Jeans', 'Classic blue jeans', 49.99, 100, 2, 'jeans.png'),
    ('Sunglasses', 'UV-protection sunglasses', 19.99, 150, 2, 'sunglasses.png'),
    ('T-shirt', '100% cotton T-shirt', 9.99, 200, 2, 'tshirt.png'),
    ('Shoes', 'Comfortable walking shoes', 79.99, 120, 2, 'shoes.png'),
    ('Backpack', 'Durable travel backpack', 59.99, 75, 2, 'backpack.png'),
    ('Hat', 'Sun hat with wide brim', 15.99, 50, 2, 'hat.png'),
    ('Belt', 'Leather belt', 19.99, 100, 2, 'belt.png'),
    ('Gloves', 'Winter gloves', 14.99, 80, 2, 'gloves.png'),
    ('Dress', 'Elegant evening dress', 49.99, 30, 2, 'dress.png'),

    -- Beauty Category
    ('Perfume', 'Long-lasting perfume', 59.99, 45, 3, 'perfume.png'),
    ('Lipstick', 'Smooth and long-lasting lipstick', 19.99, 100, 3, 'lipstick.png'),
    ('Foundation', 'High-coverage foundation', 29.99, 60, 3, 'foundation.png'),
    ('Mascara', 'Waterproof mascara', 15.99, 90, 3, 'mascara.png'),
    ('Eyeshadow Palette', 'Multi-color eyeshadow palette', 24.99, 70, 3, 'eyeshadow.png'),
    ('Nail Polish', 'Glossy nail polish', 4.99, 200, 3, 'nailpolish.png'),
    ('Hair Dryer', 'Powerful hair dryer', 39.99, 40, 3, 'hairdryer.png'),
    ('Shampoo', 'Moisturizing shampoo', 9.99, 150, 3, 'shampoo.png'),
    ('Conditioner', 'Silky smooth conditioner', 9.99, 150, 3, 'conditioner.png'),
    ('Face Mask', 'Refreshing face mask', 5.99, 100, 3, 'facemask.png'),

    -- Fresh Fruits Category
     ('Pear', 'Fresh juicy pear', 3.00, 150, 4, 'pear.png'),
    ('Avocado', 'Ripe avocado for salads', 4.00, 120, 4, 'avocado.png'),
    ('Cherry', 'Sweet cherries', 10.00, 90, 4, 'cherry.png'),
    ('Orange', 'Juicy fresh orange', 7.00, 180, 4, 'orange.png'),
    ('Peach', 'Sweet and ripe peach', 15.00, 70, 4, 'peach.png'),
    ('Pomegranate', 'Juicy pomegranate', 23.00, 60, 4, 'pomegranate.png'),
    ('Apples', 'Fresh organic apples', 2.99, 200, 4, 'apples.png'),
    ('Bananas', 'Ripe yellow bananas', 1.99, 300, 4, 'bananas.png'),
    ('Oranges', 'Juicy fresh oranges', 3.49, 150, 4, 'oranges.png'),
    ('Strawberries', 'Sweet strawberries', 4.99, 120, 4, 'strawberries.png'),
    ('Blueberries', 'Fresh blueberries', 5.99, 100, 4, 'blueberries.png'),
    ('Grapes', 'Seedless grapes', 3.99, 130, 4, 'grapes.png'),
    ('Mangoes', 'Tropical mangoes', 2.49, 180, 4, 'mangoes.png'),
    ('Watermelon', 'Juicy watermelon', 6.99, 70, 4, 'watermelon.png'),
    ('Pineapple', 'Fresh pineapple', 2.99, 110, 4, 'pineapple.png'),
    ('Papaya', 'Ripe papaya', 3.49, 90, 4, 'papaya.png');

-- Insert Carts for selected Users
INSERT INTO Cart (UserID) 
VALUES 
    (1), (2), (3), (8), (9);

-- Insert CartItems
INSERT INTO CartItems (CartID, ProductID, Quantity, Price)
VALUES 
    (1, 1, 1, 799.99), 
    (1, 2, 2, 499.99), 
    (1, 3, 1, 299.99), 
    (1, 10, 1, 59.99),
    (2, 4, 1, 199.99), 
    (2, 5, 2, 99.99), 
    (2, 7, 1, 89.99), 
    (2, 9, 2, 129.99),
    (3, 12, 1, 99.99), 
    (3, 14, 2, 9.99), 
    (3, 17, 3, 15.99), 
    (3, 20, 1, 59.99),
    (4, 21, 10, 2.99), 
    (4, 22, 6, 1.99), 
    (4, 23, 3, 3.49), 
    (4, 26, 1, 4.99),
    (5, 31, 2, 2.99), 
    (5, 32, 4, 1.99), 
    (5, 35, 5, 5.99), 
    (5, 39, 2, 3.99), 
    (5, 40, 1, 3.49);

-- Insert Orders for selected Users
INSERT INTO Orders (UserID, Status) 
VALUES 
    (1, 'Completed'), 
    (2, 'Pending'), 
    (3, 'Cancelled'), 
    (4, 'Shipped'), 
    (5, 'Pending');

-- Insert OrderItems linked to Orders
INSERT INTO OrderItems (OrderID, ProductID, Quantity, Price)
VALUES 
    (1, 1, 1, 799.99), 
    (1, 2, 1, 499.99), 
    (2, 3, 2, 299.99), 
    (3, 5, 1, 99.99), 
    (4, 6, 3, 59.99);

-- Insert Payments for Orders
INSERT INTO Payments (OrderID, PaymentMethod, Amount, Status)
VALUES 
    (1, 'Credit Card', 1299.99, 'Completed'),
    (2, 'PayPal', 299.99, 'Pending'), 
    (3, 'Bank Transfer', 99.99, 'Cancelled');

-- Insert Feedback
INSERT INTO Feedback (ProductID, UserID, Rating, Comment)
VALUES 
    (1, 1, 5, 'Excellent quality!'), 
    (2, 2, 4, 'Good value.'), 
    (3, 3, 3, 'Okay quality.'), 
    (4, 4, 5, 'Very comfortable.');



-- 1. Tạm thời vô hiệu hóa ràng buộc khóa ngoại
ALTER TABLE OrderItems NOCHECK CONSTRAINT ALL;
ALTER TABLE Payments NOCHECK CONSTRAINT ALL;
ALTER TABLE Feedback NOCHECK CONSTRAINT ALL;
ALTER TABLE Orders NOCHECK CONSTRAINT ALL;
ALTER TABLE Products NOCHECK CONSTRAINT ALL;

-- 2. Xóa dữ liệu theo thứ tự ngược lại
DELETE FROM OrderItems;
DELETE FROM Payments;
DELETE FROM Feedback;
DELETE FROM Orders;
DELETE FROM Products;
DELETE FROM Categories;
DELETE FROM Users;

-- 3. Kích hoạt lại ràng buộc khóa ngoại
ALTER TABLE OrderItems CHECK CONSTRAINT ALL;
ALTER TABLE Payments CHECK CONSTRAINT ALL;
ALTER TABLE Feedback CHECK CONSTRAINT ALL;
ALTER TABLE Orders CHECK CONSTRAINT ALL;
ALTER TABLE Products CHECK CONSTRAINT ALL;

UPDATE Categories
SET ImageURL = CASE 
    WHEN CategoryID = 1 THEN 'Electronics.png'
    WHEN CategoryID = 2 THEN 'Fashion.png'
    WHEN CategoryID = 3 THEN 'Beauty.png'
    WHEN CategoryID = 4 THEN 'FreshFruit.png'
    ELSE ImageURL
END;


