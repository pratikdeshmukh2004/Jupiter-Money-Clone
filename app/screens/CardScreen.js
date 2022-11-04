import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header2 from '../components/Header2';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const logos = [
    {
        icon: "lock-reset",
        title: "PIN"
    },
    {
        icon: "snowflake",
        title: "Freeze"
    },
    {
        icon: "weather-night",
        title: "Sleep"
    },
    {
        icon: "cog-outline",
        title: "Settings"
    }
]

function CardScreen(props) {
    return (
        <>
            <Header2 title={"Debit Card"} icon='information-outline' />
            <View style={styles.container}>
                <View style={styles.card}>
                    <MaterialCommunityIcons name='contactless-payment' color="white" size={25} style={{ marginTop: 10, marginLeft: 10 }} />
                    <View style={{ alignItems: 'center' }}>
                        <MaterialCommunityIcons name='integrated-circuit-chip' color="#d3c78a" size={40} style={{ marginTop: 50, marginLeft: 10 }} />
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold', marginTop: 20 }} >Jupiter</Text>
                        <Text style={{ fontSize: 10, color: 'white', marginTop: 5 }} >Pratik Santosh Deshmukh</Text>
                    </View>
                    <Text style={{ fontSize: 10, left: '20%', fontWeight: 'bold', color: 'white', marginTop: 5, bottom: 10, position: 'absolute' }} >Swipe to view details
                        <MaterialCommunityIcons name='chevron-double-left' size={12} /></Text>
                </View>
                <View style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20, marginLeft: 50, height: 350 }}>
                    {logos.map((item, index) => (
                        <TouchableOpacity key={index}>
                            <MaterialCommunityIcons size={20} color={'#505050'} style={{ backgroundColor: '#e5e5e5', padding: 13, borderRadius: 50 }} name={item.icon} />
                            <Text style={{ textAlign: "center", fontSize: 12, color: "#505050", marginTop: 5 }}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}

                </View>
            </View>
            <View style={{ flexDirection: 'row', marginHorizontal: "5%", padding: 20, backgroundColor: "#d3c78a", borderRadius: 10, marginTop: 20 }}>
                <MaterialCommunityIcons name='credit-card-fast' size={35} style={{marginTop: 10}} color={colors.primary} />
                <View>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', marginLeft: 20, width: "70%" }}>Use a physical Debit Card to save on offline purchases!</Text>
                    <Text style={{ fontSize: 13, marginLeft: 20, width: "80%" }}>Order now!</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    card: {
        width: "50%",
        height: 300,
        borderRadius: 10,
        backgroundColor: colors.primary,
        marginTop: 30,
        marginLeft: 30
    }
});

export default CardScreen