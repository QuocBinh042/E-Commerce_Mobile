import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const TagRow = ({ tags }) => {
  return (
    <View style={styles.tagRow}>
      {tags.map((tag, index) => (
        <View key={index} style={[styles.tagContainer, tag.isSelected && styles.selectedTag]}>
          <Text style={[styles.tagText, tag.isSelected && styles.selectedTagText]}>{tag.label}</Text>
          {tag.label && (
            <Image
              resizeMode="contain"
              source={{ uri: tag.isSelected ? "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/d2f1a8927ff02d5fc11b06666d12c5265c3a4ede948e5be260c1c2a8c260b0ea?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" : "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/5be693d0dec8d884f4140b08e3881ecf1a3c2eba479b031a9bd1469490817926?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
              style={styles.tagIcon}
            />
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagRow: {
    display: 'flex',
    width: '100%',
    maxWidth: 214,
    alignItems: 'stretch',
    gap: 6,
    flexDirection: 'row',
  },
  tagContainer: {
    borderRadius: 18,
    display: 'flex',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 7,
    paddingBottom: 7,
    alignItems: 'center',
    gap: 7,
    overflow: 'hidden',
    flexDirection: 'row',
    flex: 1,
  },
  selectedTag: {
    backgroundColor: 'rgba(255, 96, 38, 0.1)',
  },
  tagText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 28,
    color: 'rgba(50, 56, 66, 1)',
    flexGrow: 1,
  },
  selectedTagText: {
    color: 'rgba(255, 96, 38, 1)',
  },
  tagIcon: {
    position: 'relative',
    display: 'flex',
    width: 20,
    flexShrink: 0,
    aspectRatio: 1,
  },
});

export default TagRow;