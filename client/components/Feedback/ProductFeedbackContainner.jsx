import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './FeedbackHeader';
import FeedbackImage from './FeedbackImage';
import EmojiRating from './EmojiRating';
import TagSection from './TagSection';
import FeedbackForm from './FeedbackForm';

const FeedbackContainer = () => {
  return (
    <View style={styles.container}>   
        <ScrollView>
            <Header />
            <FeedbackImage />
            <EmojiRating />
            <TagSection />
            <FeedbackForm />
        </ScrollView>
          
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    position: 'relative',
    display: 'flex',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default FeedbackContainer;