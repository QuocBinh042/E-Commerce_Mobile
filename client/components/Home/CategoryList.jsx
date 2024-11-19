import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { getCategoryList } from '../../services/categoryService';

// Tạo một mảng màu để gán cho từng danh mục
const categoryColors = {
  'Electronics': '#4CAF50', // Màu xanh lá cây cho Electronics
  'Fashion': '#2196F3',     // Màu xanh da trời cho Fashion
  'Beauty': '#FFC107',      // Màu vàng cho Beauty
  'Fresh Fruits': '#FF5252' // Màu đỏ cho Fresh Fruits
};

const CategoryItem = ({ id, name, image }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    const screenMap = {
      1: 'ListElectronicsProduct',
      2: 'ListFashionProduct',
      3: 'ListBeautyProduct',
      4: 'ListFreshFruitsProduct',
    };
    const screenName = screenMap[id]; 
    navigation.navigate(screenName, { categoryId: id });    
  };

  return (
    <TouchableOpacity style={styles.categoryItem} onPress={handlePress}>
      <View style={[styles.categoryImageContainer, { backgroundColor: categoryColors[name] || '#4CAF50' }]}>
        <Image source={{ uri: image }} style={styles.categoryImage} resizeMode="contain" />
      </View>
      <Text style={styles.categoryName}>{name}</Text>
    </TouchableOpacity>
  );
};

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await getCategoryList();
        setCategories(result);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
      
      {categories.map((category) => (
        <CategoryItem
          key={category.CategoryID}
          id={category.CategoryID}
          name={category.CategoryName}
          image={`http://localhost:3002/images/${category.ImageURL}`}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    marginTop: 24,
    paddingLeft: 24,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 18,
  },
  categoryImageContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  categoryImage: {
    width: 50,
    height: 50,
  },
  categoryName: {
    fontSize: 12,
    color: '#171a1f',
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default CategoryList;
