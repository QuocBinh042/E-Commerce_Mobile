import React from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';

const PriceRange = () => {
  return (
    <View style={styles.priceRangeContainer}>
      <View style={styles.priceRangeHeader}>
        <Text style={styles.priceRangeTitle}>Price range</Text>
        <View style={styles.priceInputContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/21fbc04e14a40ff1bec580677d3d8055da9e1765bf79acfa290e5438c5401a59?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
            style={styles.chevronIcon}
          />
          <View style={styles.priceInput}>
            <Image
              resizeMode="contain"
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/8720ca7540eb4ad3bb54f68ae0ecfa10/75304569bba3a6c8320c0be6db18d1edbc53da8987b323e94f35aa9f28f19551?apiKey=8720ca7540eb4ad3bb54f68ae0ecfa10&" }}
              style={styles.currencyIcon}
            />
            <TextInput
              style={styles.priceInputText}
              value="1000"
              keyboardType="numeric"
            />
          </View>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <View style={styles.sliderTrack}>
          <View style={styles.sliderFill} />
        </View>
        <View style={styles.sliderHandle} />
        <View style={[styles.sliderHandle, styles.sliderHandleEnd]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceRangeContainer: {
    display: 'flex',
    marginTop: 19,
    width: '100%',
    maxWidth: 335,
  },
  priceRangeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  priceRangeTitle: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 16,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '700',
    lineHeight: 32,
  },
  priceInputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  chevronIcon: {
    position: 'relative',
    display: 'flex',
    width: 24,
    aspectRatio: 1,
    marginBottom: 17,
  },
  priceInput: {
    borderRadius: 4,
    borderColor: 'rgba(188, 193, 202, 1)',
    borderStyle: 'solid',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  currencyIcon: {
    position: 'relative',
    display: 'flex',
    width: 16,
    aspectRatio: 1,
    marginRight: 4,
  },
  priceInputText: {
    fontFamily: 'Lato, sans-serif',
    fontSize: 12,
    color: 'rgba(23, 26, 31, 1)',
    fontWeight: '400',
  },
  sliderContainer: {
    display: 'flex',
    width: '100%',
    paddingVertical: 2,
    position: 'relative',
  },
  sliderTrack: {
    height: 6,
    backgroundColor: 'rgba(222, 225, 230, 1)',
    borderRadius: 3,
  },
  sliderFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '50%',
    backgroundColor: 'rgba(255, 96, 38, 1)',
    borderRadius: 3,
  },
  sliderHandle: {
    position: 'absolute',
    top: -8,
    left: '50%',
    width: 22,
    height: 22,
    borderRadius: 11,
    borderColor: 'rgba(255, 96, 38, 1)',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  sliderHandleEnd: {
    left: 'auto',
    right: 0,
  },
});

export default PriceRange;


// import React, { useState } from 'react';

// const PriceRange = () => {
//   const [minPrice, setMinPrice] = useState(10);
//   const [maxPrice, setMaxPrice] = useState(1000);

//   const handleSliderChange = (event) => {
//     const [min, max] = event.target.value.split(',').map(Number);
//     setMinPrice(min);
//     setMaxPrice(max);
//   };

//   const handleMinInputChange = (event) => {
//     const value = Math.min(Number(event.target.value), maxPrice - 1);
//     setMinPrice(value);
//   };

//   const handleMaxInputChange = (event) => {
//     const value = Math.max(Number(event.target.value), minPrice + 1);
//     setMaxPrice(value);
//   };

//   return (
//     <div style={styles.container}>
//       <h3 style={styles.title}>Price range</h3>
//       <div style={styles.inputContainer}>
//         <input
//           type="number"
//           value={minPrice}
//           onChange={handleMinInputChange}
//           min="10"
//           max="1000"
//           style={styles.input}
//         />
//         <input
//           type="number"
//           value={maxPrice}
//           onChange={handleMaxInputChange}
//           min="10"
//           max="1000"
//           style={styles.input}
//         />
//       </div>
//       <input
//         type="range"
//         min="10"
//         max="1000"
//         value={`${minPrice},${maxPrice}`}
//         onChange={handleSliderChange}
//         step="1"
//         style={{
//           ...styles.slider,
//           background: `linear-gradient(
//             to right,
//             #ff4500 0%,
//             #ff4500 ${(minPrice - 10) / 990 * 100}%,
//             #ddd ${(minPrice - 10) / 990 * 100}%,
//             #ddd ${(maxPrice - 10) / 990 * 100}%,
//             #ff4500 ${(maxPrice - 10) / 990 * 100}%,
//             #ff4500 100%
//           )`,
//         }}
//         multiple
//       />
//     </div>
//   );
// };

// // Inline styles
// const styles = {
//   container: {
//     width: '300px',
//     margin: 'auto',
//     fontFamily: 'Arial, sans-serif',
//   },
//   title: {
//     fontSize: '1rem',
//     marginBottom: '10px',
//   },
//   inputContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '10px',
//   },
//   input: {
//     width: '45%',
//     padding: '5px',
//     fontSize: '1rem',
//     textAlign: 'center',
//     border: '1px solid #ddd',
//     borderRadius: '5px',
//   },
//   slider: {
//     width: '100%',
//     WebkitAppearance: 'none',
//     appearance: 'none',
//     height: '8px',
//     borderRadius: '5px',
//     outline: 'none',
//   },
//   thumb: {
//     WebkitAppearance: 'none',
//     appearance: 'none',
//     width: '16px',
//     height: '16px',
//     backgroundColor: '#ff4500',
//     borderRadius: '50%',
//     cursor: 'pointer',
//   },
// };

// export default PriceRange;
