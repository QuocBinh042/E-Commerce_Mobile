import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HEADER_TEXT_COLOR = 'rgba(50, 56, 66, 1)';
const SEE_ALL_TEXT_COLOR = 'rgba(144, 149, 160, 1)';
const CATEGORY_COLORS = ['#C8E6C9', '#BBDEFB', '#FFF9C4', '#FFCCBC', '#D1C4E9'];

const IMAGE_URLS = [
  require('../../assets/data/ipad.png'),
  require('../../assets/data/smartphone2.png'),
  require('../../assets/data/laptop.png'),
];

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (index) => {
    setSelectedCategory(index === selectedCategory ? null : index); 
  };

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Categories</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <FontAwesome5 name="chevron-right" color={SEE_ALL_TEXT_COLOR} size={12} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesScroll}>
        {IMAGE_URLS.map((url, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleCategoryPress(index)}
            style={[
              styles.categoryContainer,
              { backgroundColor: CATEGORY_COLORS[index % CATEGORY_COLORS.length] },
              selectedCategory === index && styles.selectedCategory,
            ]}
          >
            <Image source={url} style={styles.categoryImage} resizeMode="contain" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: 24,
    paddingHorizontal: 30,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '700',
    color: HEADER_TEXT_COLOR,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  seeAllText: {
    fontSize: 11,
    color: SEE_ALL_TEXT_COLOR,
    marginRight: 3,
  },
  categoriesScroll: {
    flexDirection: 'row',
  },
  categoryContainer: {
    width: 100,
    height: 92,
    borderRadius: 8,
    marginRight: 13,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  categoryImage: {
    width: 60,
    height: 60,
  },
  selectedCategory: {
    borderColor: 'green',
    borderWidth: 2,
  },
});

export default CategorySection;
