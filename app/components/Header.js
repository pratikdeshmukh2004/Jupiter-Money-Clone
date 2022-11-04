import React from 'react'
import { Button, Text, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Header() {
    return (
        <View style={{ display: "flex", flexDirection: 'row', "width": "100%", backgroundColor: colors.primary, paddingTop: 50, paddingHorizontal: "5%", paddingBottom: 10 }}>
            <MaterialCommunityIcons name='menu' size={30} color="white" />
            <View>
                <Text style={{ color: colors.white, fontSize: 17, marginLeft: 6, fontWeight: 'bold' }}>Hi, Pratik</Text>
                <Text style={{ color: colors.green, fontSize: 10, marginLeft: 6, fontWeight: '500' }}>Saving</Text>
            </View>
            <View style={{ marginLeft: 'auto', display: 'flex', flexDirection: 'row' }}>
                <MaterialCommunityIcons name='progress-question' size={30} color="white" />
                <MaterialCommunityIcons name='alert-decagram-outline' style={{ marginLeft: 15 }} size={30} color="white" />
            </View>
        </View>

    )
}

export default Header;