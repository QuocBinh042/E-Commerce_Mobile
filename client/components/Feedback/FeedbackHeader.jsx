import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const FeedbackHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.feedbackTextContainer}>
        <Text style={styles.feedbackText}>Feedback</Text>
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/b421986087468e2056e7a657c649c1015500ace9b6cd8be1608440d31e79e846?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.closeIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    width: 216,
    maxWidth: "100%",
    alignItems: "stretch",
    gap: 20,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  feedbackTextContainer: {
    transform: [{ rotate: "2.4492937051703357e-16rad" }],
  },
  feedbackText: {
    fontFamily: "Lato, sans-serif",
    fontSize: 18,
    color: "rgba(23, 26, 31, 1)",
    fontWeight: "700",
    textAlign: "center",
    lineHeight: 36,
  },
  closeIcon: {
    position: "relative",
    display: "flex",
    marginTop: "auto",
    marginBottom: "auto",
    width: 24,
    flexShrink: 0,
    aspectRatio: 1,
  },
});

export default FeedbackHeader;