import React from 'react';
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors";


function Header2({title, icon, color=colors.primary}) {
    return (
        <View style={{ display: "flex", flexDirection: 'row', "width": "100%", backgroundColor: color, paddingTop: 50, paddingHorizontal: "5%", paddingBottom: 10 }}>
            <View>
                <Text style={{ color: colors.white, fontSize: 25, marginLeft: 6, fontWeight: 'bold' }}>{title}</Text>
            </View>
            <View style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row' }}>
                <MaterialCommunityIcons name={icon} style={{ marginLeft: 15 }} size={30} color="white" />
            </View>
        </View>
    )
}


export default Header2;