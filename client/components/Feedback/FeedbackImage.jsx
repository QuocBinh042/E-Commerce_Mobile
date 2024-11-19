import React from 'react';
import { Image, StyleSheet } from 'react-native';

const FeedbackImage = () => {
  return (
    <Image
      resizeMode="contain"
      source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/1565590547d6e93be633b0c430b4aff48a70583387f3a720fd66d65e3d25f863?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
      style={styles.feedbackImage}
    />
  );
};

const styles = StyleSheet.create({
  feedbackImage: {
    alignSelf: 'stretch',
    position: 'relative',
    display: 'flex',
    marginTop: 16,
    width: '100%',
    aspectRatio: 200,
  },
});

export default FeedbackImage;