-- Ensure tables exist in dependency order
CREATE TABLE Users (
    UserID INT PRIMARY KEY IDENTITY,
    Username NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) NOT NULL UNIQUE,
    PasswordHash NVARCHAR(256) NOT NULL,
    CreatedAt DATETIME DEFAULT GETDATE()
);

CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY IDENTITY,
    CategoryName NVARCHAR(50) NOT NULL UNIQUE,
    ImageURL NVARCHAR(MAX) NOT NULL
);

CREATE TABLE Products (
    ProductID INT PRIMARY KEY IDENTITY,
    ProductName NVARCHAR(100) NOT NULL UNIQUE,
    Description NVARCHAR(MAX),
    Price DECIMAL(10, 2) NOT NULL,
    Stock INT DEFAULT 0 CHECK (Stock >= 0),
    CategoryID INT,
    CreatedAt DATETIME DEFAULT GETDATE(),
	Image VARCHAR(255),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID) ON DELETE SET NULL
);
ALTER TABLE Products
ADD Image VARCHAR(255);

CREATE TABLE Orders (
    OrderID INT PRIMARY KEY IDENTITY,
    UserID INT NOT NULL,
    OrderDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL DEFAULT 'Pending',
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE
);

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

CREATE TABLE OrderItems (
    OrderItemID INT PRIMARY KEY IDENTITY,
    OrderID INT NOT NULL,
    ProductID INT NOT NULL,
    Quantity INT NOT NULL CHECK (Quantity > 0),
    Price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID) ON DELETE CASCADE
);

CREATE TABLE Payments (
    PaymentID INT PRIMARY KEY IDENTITY,
    OrderID INT NOT NULL,
    PaymentMethod NVARCHAR(50) NOT NULL,
    Amount DECIMAL(10, 2) NOT NULL,
    PaymentDate DATETIME DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID) ON DELETE CASCADE
);

-- Insert Users
INSERT INTO Users (Username, Email, PasswordHash) 
VALUES 
    ('alice_wonder', 'alice@example.com', 'hashed_password_3'),
    ('bob_builder', 'bob@example.com', 'hashed_password_4'),
    ('charlie_doe', 'charlie@example.com', 'hashed_password_5'),
    ('daisy_flower', 'daisy@example.com', 'hashed_password_6'),
    ('eve_long', 'eve@example.com', 'hashed_password_7'),
    ('frank_knight', 'frank@example.com', 'hashed_password_8'),
    ('grace_hopper', 'grace@example.com', 'hashed_password_9'),
    ('hank_pym', 'hank@example.com', 'hashed_password_10');

-- Insert Categories
INSERT INTO Categories (CategoryName, ImageURL) 
VALUES 
    ('Electronics', 'Electronics.png'),
    ('Fashion', 'Fashion.png'),
    ('Beauty', 'Beauty.png'),
    ('Fresh Fruits', 'FreshFruit.png');

-- Insert Products
INSERT INTO Products (ProductName, Description, Price, Stock, CategoryID, Image) 
VALUES 
    ('Laptop', 'High-performance laptop', 999.99, 30, 1, 'image8.png'),
    ('Headphones', 'Noise-canceling headphones', 199.99, 50, 1, 'image9.png'),
    ('Cookbook', 'Healthy recipes cookbook', 25.99, 70, 2, 'image10.png'),
    ('Sofa', 'Comfortable 3-seater sofa', 399.99, 10, NULL, 'image14.png'),
    ('Running Shoes', 'Comfortable running shoes', 49.99, 120, 2, 'image15.png'),
    ('Doll', 'Interactive doll with sounds', 29.99, 150, NULL, 'image16.png'),
    ('Blender', 'High-speed blender', 59.99, 40, 1, 'image17.png'),
    ('Refrigerator', 'Energy-efficient refrigerator', 799.99, 20, 1, 'image18.png'),
    ('Basketball', 'Official size basketball', 19.99, 200, 3, 'image19.png'),
    ('Tennis Racket', 'Lightweight tennis racket', 89.99, 100, 3, 'image10.png');


-- Insert Orders
INSERT INTO Orders (UserID, Status) 
VALUES 
    (1, 'Completed'), 
    (2, 'Pending'),
    (3, 'Cancelled'),
    (4, 'Shipped'),
    (5, 'Pending'),
    (6, 'Completed'),
    (7, 'Completed'),
    (8, 'Pending');

-- Insert OrderItems
INSERT INTO OrderItems (OrderID, ProductID, Quantity, Price)
VALUES 
    (1, 1, 1, 699.99), 
    (1, 2, 2, 19.99), 
    (2, 3, 1, 9.99), 
    (3, 5, 3, 49.99), 
    (4, 6, 1, 29.99), 
    (5, 7, 1, 59.99), 
    (6, 1, 2, 699.99), 
    (6, 8, 1, 199.99), 
    (7, 4, 1, 399.99), 
    (8, 9, 2, 19.99);

-- Insert Feedback
INSERT INTO Feedback (ProductID, UserID, Rating, Comment)
VALUES 
    (1, 1, 5, 'Excellent quality and fast shipping!'), 
    (2, 2, 4, 'Good value for money.'), 
    (3, 3, 3, 'Average quality, but okay for the price.'), 
    (4, 4, 5, 'Very comfortable and stylish.'), 
    (5, 5, 2, 'Not as durable as expected.'), 
    (6, 6, 4, 'Kids love it!'), 
    (7, 7, 5, 'Powerful and easy to clean.'), 
    (8, 8, 3, 'Quite large, but very efficient.');

-- Insert Payments
INSERT INTO Payments (OrderID, PaymentMethod, Amount, Status)
VALUES 
    (1, 'Credit Card', 739.97, 'Completed'), 
    (2, 'PayPal', 9.99, 'Pending'), 
    (3, 'Bank Transfer', 149.97, 'Cancelled'), 
    (4, 'Credit Card', 29.99, 'Completed');


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


