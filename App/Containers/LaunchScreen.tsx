import React, { Component } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <Image source={Images.background} style={styles.backgroundImage} resizeMode="stretch" />
                <ScrollView style={styles.container}>
                    <View style={styles.centered}>
                        <Image source={Images.launch} style={styles.logo} />
                    </View>

                    <View style={styles.section} >
                        <Image source={Images.ready} />
                        <Text style={styles.sectionText}>
                            Testing123
            </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}
