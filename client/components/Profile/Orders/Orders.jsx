import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useBottomTab } from '../../../App';
const ordersData = [
	{
		id: '1',
		orderId: '#12451245',
		title: '[400 CHIẾC] Khẩu trang 5D Gumi',
		variant: 'Đen 400c',
		quantity: 1,
		originalPrice: 280000, // Giá ban đầu
		discountedPrice: 158000, // Giá giảm
		totalPrice: 125800, // Tổng số tiền
		status: 'Completed',
		description: 'Order Received by [Louis Simatupang]',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: '2',
		orderId: '#12451246',
		title: 'Women Sleep Suits by Femall Clothings',
		variant: 'GREY Variant',
		quantity: 2,
		originalPrice: 50000,
		discountedPrice: 40000,
		totalPrice: 80000,
		status: 'Canceled',
		description: 'Reach on payment due date',
		image: 'https://via.placeholder.com/100',
	},
	{
		id: '3',
		orderId: '#12451247',
		title: 'Red Candy Handy Bag with Random Accessories',
		variant: 'GREY Variant',
		quantity: 2,
		originalPrice: 50000,
		discountedPrice: 40000,
		totalPrice: 80000,
		status: 'On Delivery',
		description: 'On the way by Courir [H. Stefanus]',
		image: 'https://via.placeholder.com/100',
	},
];

const Orders = ({ navigation }) => {
	const [selectedTab, setSelectedTab] = useState('All');

	const renderOrderItem = ({ item }) => {
		const statusStyles = {
			Completed: { backgroundColor: '#DFFFE5', color: '#27AE60' },
			Canceled: { backgroundColor: '#FFE6E6', color: '#EB5757' },
			'On Delivery': { backgroundColor: '#E8F5FF', color: '#2F80ED' },
		};

		return (
			<View style={styles.orderItem}>
				<View style={styles.orderContent}>
					<Image source={{ uri: item.image }} style={styles.orderImage} />
					<View style={styles.orderDetails}>
						<Text style={styles.orderTitle}>{item.title}</Text>
						<Text style={styles.orderVariant}>{item.variant}</Text>
						<Text style={styles.orderQuantity}>Số lượng: {item.quantity}x</Text>
						<View style={styles.priceSection}>
							{item.originalPrice && (
								<Text style={styles.originalPrice}>
									đ{item.originalPrice.toLocaleString('vi-VN')}
								</Text>
							)}
							<Text style={styles.discountedPrice}>
								đ{item.discountedPrice.toLocaleString('vi-VN')}
							</Text>
						</View>
						<Text style={styles.totalPrice}>
							Tổng số tiền: đ{item.totalPrice.toLocaleString('vi-VN')}
						</Text>
						<View
							style={[
								styles.statusBadge,
								{ backgroundColor: statusStyles[item.status].backgroundColor },
							]}
						>
							<Text style={[styles.statusText, { color: statusStyles[item.status].color }]}>
								{item.status}
							</Text>
						</View>
						<Text style={styles.orderDescription}>{item.description}</Text>
					</View>
				</View>
			</View>
		);
	};

	const filteredOrders =
		selectedTab === 'All' ? ordersData : ordersData.filter((order) => order.status === selectedTab);

	const { setActiveTab } = useBottomTab();
	useEffect(() => {
		setActiveTab("Orders");
	}, []);
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Icon name="arrow-left" size={20} color='#323842' />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Orders</Text>
			</View>

			{/* Tabs */}
			<View style={styles.tabs}>
				{['All', 'On Delivery', 'Completed', 'Canceled'].map((tab) => (
					<TouchableOpacity
						key={tab}
						style={[styles.tab, selectedTab === tab && styles.activeTab]}
						onPress={() => setSelectedTab(tab)}
					>
						<Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab}</Text>
					</TouchableOpacity>
				))}
			</View>

			{/* Orders List */}
			<FlatList
				data={filteredOrders}
				renderItem={renderOrderItem}
				keyExtractor={(item) => item.id}
				contentContainerStyle={styles.orderList}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 16,
		paddingTop: 16,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 16,
	},
	headerTitle: {
		fontSize: 18,
		fontWeight: '700',
		color: '#323842',
		flex: 1,
		textAlign: 'center',
	},
	tabs: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginBottom: 16,
	},
	tab: {
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderBottomWidth: 2,
		borderBottomColor: 'transparent',
	},
	activeTab: {
		borderBottomColor: '#FF8800',
	},
	tabText: {
		fontSize: 14,
		color: '#9095A0',
	},
	activeTabText: {
		color: '#FF8800',
	},
	orderList: {
		paddingBottom: 16,
	},
	orderItem: {
		backgroundColor: '#FFFFFF',
		borderWidth: 1,
		borderColor: '#E0E0E0',
		borderRadius: 8,
		marginBottom: 16,
		padding: 16,
	},
	orderContent: {
		flexDirection: 'row',
	},
	orderDetails: {
		flex: 1,
		marginLeft: 16,
	},
	orderTitle: {
		fontSize: 16,
		fontWeight: '700',
		color: '#323842',
		marginBottom: 4,
	},
	orderVariant: {
		fontSize: 14,
		color: '#9095A0',
		marginBottom: 4,
	},
	orderQuantity: {
		fontSize: 14,
		color: '#323842',
		marginBottom: 4,
	},
	priceSection: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 8,
	},
	originalPrice: {
		fontSize: 14,
		textDecorationLine: 'line-through',
		color: '#9095A0',
		marginRight: 8,
	},
	discountedPrice: {
		fontSize: 16,
		fontWeight: '700',
		color: '#FF8800',
	},
	totalPrice: {
		fontSize: 14,
		fontWeight: '700',
		color: '#323842',
		marginBottom: 8,
	},
	statusBadge: {
		paddingVertical: 4,
		paddingHorizontal: 8,
		borderRadius: 8,
		marginBottom: 8,
	},
	statusText: {
		fontSize: 12,
		fontWeight: '700',
	},
	orderDescription: {
		fontSize: 14,
		color: '#9095A0',
	},
	orderImage: {
		width: 80,
		height: 80,
		borderRadius: 8,
		backgroundColor: '#E0E0E0',
	},
});

export default Orders;
