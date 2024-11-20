import React, { useEffect } from "react";
import Header from "./Header.jsx";
import SearchBar from "./SearchBar.jsx";
import CategoryList from "./CategoryList.jsx";
import PromoBanner from "./PromoBanner.jsx";
import ProductGrid from "./ProductGird.jsx";
import TabBar from "./BottomNavigation.jsx";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { useBottomTab } from "../../App.js";

const Home = () => {
  const { setActiveTab } = useBottomTab();
  useEffect(() => {
    setActiveTab("Home"); 
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="All deals" />
      <SearchBar />
      <ScrollView >
        <CategoryList />
        <PromoBanner />
        <ProductGrid />
      </ScrollView>
      <TabBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
  },
});

export default Home;
