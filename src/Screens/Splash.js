import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
    const navigation = useNavigation();
    const imageAnimation = useRef(new Animated.Value(0)).current;
    const textAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Image animation (scale + fade)
        Animated.parallel([
            Animated.spring(imageAnimation, {
                toValue: 1,
                friction: 2,
                tension: 40,
                useNativeDriver: true,
            }),
            Animated.timing(imageAnimation, {
                toValue: 1,
                duration: 800,
                easing: Easing.ease,
                useNativeDriver: true,
            })
        ]).start();

        // Text animation (fade + slight vertical movement)
        Animated.sequence([
            Animated.delay(300), // Wait 300ms before text animation
            Animated.parallel([
                Animated.timing(textAnimation, {
                    toValue: 1,
                    duration: 800,
                    useNativeDriver: true,
                }),
                Animated.spring(textAnimation, {
                    toValue: 1,
                    speed: 10,
                    bounciness: 20,
                    useNativeDriver: true,
                })
            ])
        ]).start();

        const timer = setTimeout(() => {
            navigation.replace("Signup");
        }, 2500);

        return () => {
            clearTimeout(timer);
            imageAnimation.removeAllListeners();
            textAnimation.removeAllListeners();
        };
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Animated.View style={{
                opacity: imageAnimation,
                transform: [
                    { scale: imageAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.5, 1]
                    })}
                ]
            }}>
                <Image
                    source={require("../images/recycle.png")}
                    style={styles.recycleImage}
                    resizeMode="contain"
                    accessibilityLabel="Recycle Logo"
                />
            </Animated.View>

            <Animated.Text style={[styles.appTitle, {
                opacity: textAnimation,
                transform: [
                    { translateY: textAnimation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0]
                    })}
                ]
            }]}>
                Scrap Deal
            </Animated.Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
    },
    recycleImage: {
        height: 150,
        width: 150,
        marginBottom: 20,
    },
    appTitle: {
        color: "#00A572",
        fontWeight: "bold",
        fontSize: 35,
        letterSpacing: 0.5,
    },
});

export default Splash;