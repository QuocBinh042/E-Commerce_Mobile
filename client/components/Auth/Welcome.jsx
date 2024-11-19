import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

export default function Screen1({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {/* Hình ảnh minh họa */}
                <View style={styles.imageContainer}>
                    <Image source={require('../../assets/data/Container_17.png')} style={styles.image} />
                </View>
                {/* Tiêu đề và mô tả */}    
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Boost Productivity</Text>
                    <Text style={styles.subtitle}>Simplify tasks, boost productivity</Text>
                </View>
                {/* Nút Sign Up và Login */}
                <View>
                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => { navigation.navigate("SignUp") }}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => { navigation.navigate("SignIn") }}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                </View>                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    textContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
    },
    signUpButton: {
        backgroundColor: '#007BFF',
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
    },
    signUpText: {
        fontSize: 18,
        color: 'white',
    },
    loginButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        fontSize: 18,
    }
});
