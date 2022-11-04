import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../config/colors";

function Button({ title, onPress, color = colors.primary, icon, textStyle={}, style={} }) {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: color , flexDirection: "row"}, style]}
            onPress={onPress}
        >
            {icon && <MaterialCommunityIcons size={25} color={colors.white} name={icon} style={{marginRight: 5}}/>}
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 7,
        paddingHorizontal: 15,
        marginVertical: 5,
    },
    text: {
        color: 'white',
        fontSize: 12,
        fontWeight: "bold",
    },
});

export default Button;