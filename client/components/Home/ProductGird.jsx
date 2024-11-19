import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getProductList } from "../../services/productService"; // Import hàm getProductList từ service

const ProductItem = ({ product }) => {
  
  return (    
    <View style={styles.productItem}>      
        <Image
          source={{ uri: `http://localhost:3002/images/${product.Image}` }}
          style={styles.productImage}
          resizeMode="contain"
        />
        <Text style={styles.productName}>{product.ProductName}</Text>
        <View style={styles.productDetails}>
          <View style={styles.ratingContainer}>
            {/* <Image
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9948017a25acee07922b04b917f95fe217d51ecd340c8100d7e16ebd1c30860d?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10" }}
            style={styles.ratingIcon}
            resizeMode="contain"
          /> */}
            <Text style={styles.ratingText}>⭐5</Text>
          </View>
          <Text style={styles.priceText}>${product.Price}</Text>
        </View>
     
    </View>
  );
};

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductList(); // Gọi API thông qua hàm getProductList từ service
        setProducts(data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Kết thúc loading
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color="#0000ff"
        style={styles.loadingIndicator}
      />
    );
  }

  return (
    <View style={styles.gridContainer}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={products.slice(0,5)}
        renderItem={({ item }) => <TouchableOpacity onPress={()=>{ navigation.navigate('ProductDetails1')}}><ProductItem product={item} /></TouchableOpacity>} // Truyền từng item vào ProductItem qua prop `product`
        keyExtractor={(item) => item.ProductID}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const PRIMARY_COLOR = "#FF6026";
const TEXT_COLOR = "#323842";
const RATING_COLOR = "#171A1F";
const BUTTON_COLOR = "#565E6C";

const styles = StyleSheet.create({
  gridContainer: {
    marginTop: 18,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: TEXT_COLOR,
  },
  viewAllText: {
    fontSize: 14,
    color: BUTTON_COLOR,
  },
  productList: {
    paddingHorizontal: 4,
  },
  productItem: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 16,
    marginRight: 12,
    width: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  productImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
  },
  productName: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: "600",
    color: TEXT_COLOR,
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 12,
    color: RATING_COLOR,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "700",
    color: PRIMARY_COLOR,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductGrid;
