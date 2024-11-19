import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const ReviewsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Reviews</Text>
        <TouchableOpacity style={styles.seeAllButton}>
          <Text style={styles.seeAllText}>See all</Text>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a94096543507ef26cfda66d6edddbb0707bbf2e2a8ad7bbeb598b8b0c29e3c6b?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
            style={styles.seeAllIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.reviewSummary}>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingScore}>4.5/5</Text>
          <Text style={styles.reviewCount}>(99 reviews)</Text>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6bcbcef465e53e304378d055f9fe0c7f4661c20fcbcdfdebda84a221db10dea?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
            style={styles.ratingStars}
            resizeMode="contain"
          />
        </View>
        <View style={styles.ratingBars}>
          {[5, 4, 3, 2, 1].map((rating) => (
            <View key={rating} style={styles.ratingBar}>
              <View style={styles.ratingBarFill} />
              <Text style={styles.ratingBarText}>{rating}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.reviewList}>
        <View style={styles.reviewItem}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7d465d01292cc6262f68588ecba1f52fa27b7f5705bad49d549377e27226aa11?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
            style={styles.reviewerAvatar}
            resizeMode="contain"
          />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>Jevon Raynor</Text>
            <Text style={styles.reviewText}>Deserunt minim incididunt cillum</Text>
          </View>
          <Text style={styles.reviewDate}>A day ago</Text>
        </View>
        <View style={styles.reviewItem}>
          <Image
            source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cfff6c0202f8f14e3de8451b1178895790ea49c2c3c814efb7638100191c9645?placeholderIfAbsent=true&apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10' }}
            style={styles.reviewerAvatar}
            resizeMode="contain"
          />
          <View style={styles.reviewContent}>
            <Text style={styles.reviewerName}>Jason D.</Text>
            <Text style={styles.reviewText}>Magna pariatur sit et ullamco paria</Text>
          </View>
          <Text style={styles.reviewDate}>3 days ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 12,
    color: 'rgba(144, 149, 160, 1)',
    fontFamily: 'Lato, sans-serif',
    marginRight: 3,
  },
  seeAllIcon: {
    width: 12,
    height: 12,
  },
  reviewSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  ratingContainer: {
    alignItems: 'flex-start',
  },
  ratingScore: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgba(23, 26, 31, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  reviewCount: {
    fontSize: 12,
    color: 'rgba(110, 119, 135, 1)',
    fontFamily: 'Lato, sans-serif',
    marginTop: 4,
  },
  ratingStars: {
    width: 80,
    height: 16,
    marginTop: 14,
  },
  ratingBars: {
    flex: 1,
    marginLeft: 20,
  },
  ratingBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ratingBarFill: {
    height: 6,
    backgroundColor: 'rgba(255, 96, 38, 1)',
    borderRadius: 3,
    marginRight: 10,
  },
  ratingBarText: {
    fontSize: 11,
    color: 'rgba(110, 119, 135, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  reviewList: {
    marginTop: 24,
  },
  reviewItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  reviewerAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
    fontFamily: 'Lato, sans-serif',
  },
  reviewText: {
    fontSize: 12,
    color: 'rgba(144, 149, 160, 1)',
    fontFamily: 'Lato, sans-serif',
    marginTop: 4,
  },
  reviewDate: {
    fontSize: 12,
    color: 'rgba(144, 149, 160, 1)',
    fontFamily: 'Lato, sans-serif',
  },
});

export default ReviewsSection;