import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Home/Header';
import BottomNavigation from '../Home/BottomNavigation';

const ProfileScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Header title={'Profile'} />
			<ScrollView style={{ paddingHorizontal: 16, }}>
				{/* Profile Section */}
				<View style={styles.profileSection}>
					<Image
						source={{ uri: 'https://via.placeholder.com/100' }}
						style={styles.profileImage}
					/>
					<View style={styles.profileDetails}>
						<Text style={styles.profileName}>Thomas Djono</Text>
						<Text style={styles.profileEmail}>email</Text>
					</View>
				</View>

				{/* Action Buttons */}
				<View style={styles.actionRow}>
					<TouchableOpacity
						style={styles.actionButton}
						onPress={() => navigation.navigate('Orders')}
					>
						<View style={styles.iconContainer}>
							<Icon name="cube" size={24} color="#FF8800" />
						</View>
						<Text style={styles.actionText}>Order</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.actionButton}
						onPress={() => navigation.navigate('Wishlist')}
					>
						<View style={styles.iconContainer}>
							<Icon name="heart" size={24} color="#FF8800" />
						</View>
						<Text style={styles.actionText}>Wishlist</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.actionRow}>
					<TouchableOpacity
						style={styles.actionButton}
						onPress={() => navigation.navigate('Voucher')}
					>
						<View style={styles.iconContainer}>
							<Icon name="gift" size={24} color="#FF8800" />
						</View>
						<Text style={styles.actionText}>Voucher</Text>
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.actionButton}
						onPress={() => navigation.navigate('HelpCenter')}
					>
						<View style={styles.iconContainer}>
							<Icon name="headphones" size={24} color="#FF8800" />
						</View>
						<Text style={styles.actionText}>Help Center</Text>
					</TouchableOpacity>
				</View>

				{/* Account Settings Header */}
				<Text style={styles.settingsHeader}>Account Settings</Text>

				{/* Account Settings */}
				<View style={styles.accountSection}>
					<TouchableOpacity style={styles.accountItem}>
						<Icon name="user" size={20} color="#9095A0" />
						<Text style={styles.accountText}>Edit Profile</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.accountItem}>
						<Icon name="map-marker" size={20} color="#9095A0" />
						<Text style={styles.accountText}>Saved Addresses</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.accountItem}>
						<Icon name="bell" size={20} color="#9095A0" />
						<Text style={styles.accountText}>Notification</Text>
						<View style={styles.notificationBadge}>
							<Text style={styles.notificationText}>5</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity style={styles.accountItem}>
						<Icon name="sign-out" size={20} color="#9095A0" />
						<Text style={styles.accountText}>Log Out</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<BottomNavigation />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	profileSection: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 24,
		paddingHorizontal: 8,
		backgroundColor: '#F9F9F9',
		borderRadius: 12,
		paddingVertical: 16,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 4,
		elevation: 2,
	},
	profileImage: {
		width: 80,
		height: 80,
		borderRadius: 40,
		backgroundColor: '#E0E0E0',
	},
	profileDetails: {
		marginLeft: 16,
	},
	profileName: {
		fontSize: 20,
		fontWeight: '700',
		color: '#323842',
	},
	profileEmail: {
		fontSize: 18,
		marginLeft: 5,
		color: '#323842',
	},
	actionRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 16,
	},
	actionButton: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF5E5',
		paddingVertical: 20,
		paddingHorizontal: 16,
		borderRadius: 8,
		width: '45%',
	},
	iconContainer: {
		marginBottom: 8,
	},
	actionText: {
		fontSize: 14,
		fontWeight: '600',
		color: '#323842',
		textAlign: 'center',
	},
	settingsHeader: {
		fontSize: 18,
		fontWeight: '700',
		color: '#323842',
		marginTop: 20,
		marginBottom: 10,
	},
	accountSection: {
		marginTop: 10,
	},
	accountItem: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#E0E0E0',
	},
	accountText: {
		marginLeft: 16,
		fontSize: 16,
		color: '#323842',
		flex: 1,
	},
	notificationBadge: {
		backgroundColor: '#FF8800',
		borderRadius: 12,
		width: 24,
		height: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},
	notificationText: {
		color: '#FFFFFF',
		fontSize: 12,
		fontWeight: '700',
	},
});

export default ProfileScreen;
