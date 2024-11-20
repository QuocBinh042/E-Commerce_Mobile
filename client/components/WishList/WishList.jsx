import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Home/Header';
import BottomNavigation from '../Home/BottomNavigation';
import { useBottomTab } from '../../App';

const Wishlist = () => {
	const { setActiveTab } = useBottomTab();
	useEffect(() => {
		setActiveTab("WishList");
	}, []);
	const wishlistItems = [
		{ id: 1, name: 'Cat sports mans shoe', brand: 'Rebook', price: 500.0, image: 'https://via.placeholder.com/100' },
		{ id: 2, name: 'Nikka sports mans shoe', brand: 'Rebook', price: 450.0, image: 'https://via.placeholder.com/100' },
		{ id: 3, name: 'Adur sports shoe', brand: 'Rebook', price: 399.0, image: 'https://via.placeholder.com/100' },
		{ id: 4, name: 'Fnik sports mans shoe', brand: 'Rebook', price: 410.0, image: 'https://via.placeholder.com/100' },
	];

	const handleAddToCart = (id) => {
		console.log(`Add to cart: ${id}`);
	};

	const handleRemoveFromWishlist = (id) => {
		console.log(`Remove from wishlist: ${id}`);
	};

	const renderItem = ({ item }) => (
		<View style={styles.itemContainer}>
			<Image source={{ uri: item.image }} style={styles.productImage} resizeMode="contain" />
			<View style={styles.productInfo}>
				<Text style={styles.productName}>{item.name}</Text>
				<Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
			</View>
			<View style={styles.actionButtons}>
				<TouchableOpacity style={styles.actionButton} onPress={() => handleAddToCart(item.id)}>
					<Icon name="shopping-cart" size={18} color="#FFFFFF" />
				</TouchableOpacity>
				<TouchableOpacity style={[styles.actionButton, styles.removeButton]} onPress={() => handleRemoveFromWishlist(item.id)}>
					<Icon name="trash" size={18} color="#FFFFFF" />
				</TouchableOpacity>
			</View>
		</View>
	);

	return (

		<View style={styles.container}>
			<Header title="WishList" />
			<FlatList
				data={wishlistItems}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				contentContainerStyle={styles.list}
			/>
			<BottomNavigation />
		</View>

	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 16,
		backgroundColor: '#FFFFFF',
	},
	list: {
		paddingBottom: 20,
	},
	itemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		padding: 16,
		borderRadius: 8,
		marginBottom: 10,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
	},
	productImage: {
		width: 60,
		height: 60,
		borderRadius: 8,
		marginRight: 16,
	},
	productInfo: {
		flex: 1,
	},
	productName: {
		fontSize: 16,
		fontWeight: '700',
		color: '#323842',
	},
	productPrice: {
		fontSize: 16,
		fontWeight: '700',
		color: '#FF6026',
		marginTop: 10,
	},
	actionButtons: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 30
	},
	actionButton: {
		backgroundColor: '#FF6026',
		borderRadius: 8,
		padding: 8,
		marginHorizontal: 4,
	},
	removeButton: {
		backgroundColor: '#FF3B3B',
	},
});

export default Wishlist;
