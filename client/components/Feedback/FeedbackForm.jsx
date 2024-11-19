import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const FeedbackForm = () => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>Care to share more?</Text>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Type your feedbacks"
          multiline
          numberOfLines={4}
        />
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/842cb75d9d6dd315eec2d3cf2770f1165a1ed290f1645141dad7c900594160d6?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
          style={styles.resizeHandle}
        />
      </View>
      <View style={styles.uploadSection}>
        <View>
          <Text style={styles.uploadTitle}>Upload images</Text>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/8cc322ca090478e2da8ff1f794e37db8374f9ab9f573a584180f713b6f25fc9a?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
            style={styles.uploadImage}
          />
          <Text style={styles.ratingTitle}>Rating</Text>
        </View>
        <View style={styles.imagePlaceholder} />
      </View>
      <Image
        resizeMode="contain"
        source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/a94a503ad0d58e886c8e239450ca9920a0fbad0b823f77725b810c3bcef1e304?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
        style={styles.ratingImage}
      />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignSelf: 'stretch',
    display: 'flex',
    marginTop: 24,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  formTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(50, 56, 66, 1)',
    fontWeight: '700',
    lineHeight: 28,
    transform: [{ rotate: '2.4492937051703357e-16rad' }],
  },
  textAreaContainer: {
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    paddingLeft: 12,
    paddingRight: 2,
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'column',
  },
  textArea: {
    color: 'rgba(188, 193, 202, 1)',
    fontWeight: '400',
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
  },
  resizeHandle: {
    position: 'relative',
    display: 'flex',
    marginTop: 36,
    width: 12,
    aspectRatio: 1,
    alignSelf: 'flex-end',
  },
  uploadSection: {
    display: 'flex',
    marginTop: 25,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uploadTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(50, 56, 66, 1)',
    fontWeight: '700',
    lineHeight: 28,
    transform: [{ rotate: '2.4492937051703357e-16rad' }],
  },
  uploadImage: {
    borderRadius: 6,
    position: 'relative',
    display: 'flex',
    width: 80,
    aspectRatio: 1,
  },
  ratingTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    color: 'rgba(50, 56, 66, 1)',
    fontWeight: '700',
    lineHeight: 28,
    marginTop: 24,
    transform: [{ rotate: '2.4492937051703357e-16rad' }],
  },
  imagePlaceholder: {
    borderRadius: 6,
    display: 'flex',
    marginTop: 16,
    width: 88,
    flexShrink: 0,
    height: 88,
    backgroundColor: '#f0f0f0',
  },
  ratingImage: {
    alignSelf: 'center',
    position: 'relative',
    display: 'flex',
    marginTop: 12,
    width: 262,
    maxWidth: 262,
    aspectRatio: 7.3,
  },
  submitButton: {
    transform: [{ rotate: '2.4492937051703357e-16rad' }],
    borderRadius: 6,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderStyle: 'solid',
    borderWidth: 1,
    marginTop: 36,
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 9,
    paddingBottom: 9,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 96, 38, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
    lineHeight: 32,
    fontFamily: 'Lato, sans-serif',
  },
});

export default FeedbackForm;