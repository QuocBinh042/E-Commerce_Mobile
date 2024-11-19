import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const EmojiRating = () => {
  const emojis = [
    { name: 'sad', uri: 'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/68106862a7a02454243cc7ffbae2aa93e07d1a61eefa1e254b2c154dbbd1d950?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&' },
    { name: 'speechless', uri: 'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/61eeb708fa472283043f164f52f3ac9ca283c2948082548c9af71858e021295b?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&' },
    { name: 'smiley', uri: 'https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/cc0ac0ac6b69f278861dab0bafd2c3e0b6060c95fbf17ac6bac041dddffa7af7?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&' },
  ];

  return (
    <View style={styles.emojiContainer}>
      {emojis.map((emoji, index) => (
        <Image
          key={index}
          resizeMode="contain"
          source={{ uri: emoji.uri }}
          style={styles.emojiIcon}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  emojiContainer: {
    display: 'flex',
    marginTop: 23,
    width: 192,
    maxWidth: '100%',
    alignItems: 'stretch',
    gap: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  emojiIcon: {
    position: 'relative',
    display: 'flex',
    width: 48,
    flexShrink: 0,
    aspectRatio: 1,
  },
});

export default EmojiRating;