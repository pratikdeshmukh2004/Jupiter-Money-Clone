import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Header2 from '../components/Header2';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import Button from '../components/Button';


function ProScreen(props) {
    return (
        <>
            <StatusBar style='light' />
            <ScrollView stickyHeaderIndices={[0]} style={{
                flex: 1, paddingTop: 0, shadowOffset: {
                    width: 0,
                    height: 3
                },
                backgroundColor: "#141114"
            }}>
                <Header2 title="Upgrade" icon="comment-question-outline" color="#141114" />
                <View style={styles.container_sm}>
                    <MaterialCommunityIcons name='diving-helmet' style={{ marginRight: 11 }} color={colors.primary} size={25} />
                    <View>
                        <Text style={{ color: '#505050', fontSize: 11 }}>Your Account Type</Text>
                        <Text style={{ color: '#909090', fontSize: 11 }}>Saving</Text>
                    </View>
                    <MaterialCommunityIcons name='wallet-giftcard' style={{ marginLeft: 10 }} color={colors.primary} size={25} />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: colors.primary, fontSize: 11 }}>Offer not valid</Text>
                        <Text style={{ color: "#505050", fontSize: 11 }}>1% Rewards</Text>
                    </View>
                </View>
                <View style={styles.container_lg}>
                    <View style={styles.fd}>
                        <MaterialCommunityIcons name='diving-helmet' color={colors.green} size={40} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold' }}>Upgrade to PRO for free</Text>
                            <Text style={{ fontSize: 10, width: "70%" }} >By only maintaining a Net Relationship value (NRV) of ₹10,000</Text>
                        </View>
                    </View>
                    <View style={styles.fd}>
                        <MaterialCommunityIcons style={{ marginLeft: 18 }} name='cards' color={colors.primary} size={20} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, width: "80%" }} >1% Rewards on Debit Card spends</Text>
                        </View>
                    </View>
                    <View style={styles.fd}>
                        <MaterialCommunityIcons style={{ marginLeft: 18 }} name='cash-fast' color={colors.primary} size={20} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10 }} >1% Rewards on UPI spends</Text>
                        </View>
                    </View>
                    <View style={styles.fd}>
                        <MaterialCommunityIcons style={{ marginLeft: 18 }} name='home-floor-0' color={colors.primary} size={25} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontSize: 10, marginTop: 5 }} >Zero Forex Charges</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container_xl}>
                    <View style={styles.fd}>
                        <Text style={{ fontSize: 10 }} >Your Current NRV (till 1 Nov)</Text>
                        <Text style={{ fontSize: 10, marginLeft: 'auto' }} >₹300</Text>
                    </View>
                    <View style={styles.fd}>
                        <Text style={{ fontSize: 10 }} >Required NRV</Text>
                        <Text style={{ fontSize: 10, marginLeft: 'auto' }} >₹10,000</Text>
                    </View>
                    <Button title="Deposite ₹10,600 now" />
                    <Text style={{ fontSize: 12, fontWeight: '600', textAlign: 'center', marginTop: 20, color: colors.primary }} >See calculation <MaterialCommunityIcons name="chevron-right" /></Text>
                </View>
                <View style={[styles.container_lg, { marginTop: 70 }]}>
                    <View style={styles.fd}>
                        <MaterialCommunityIcons name='cash-fast' color={colors.green} size={40} />
                        <View style={{ marginLeft: 20 }}>
                            <Text style={{ fontWeight: 'bold' }}>Upgrade to Salary Account</Text>
                            <Text style={{ fontSize: 10 }} >Verify work email & make Jupiter your</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    fd: {
        flexDirection: 'row',
        marginBottom: 20
    },
    container_lg: {
        backgroundColor: "#e5e5e5",
        marginHorizontal: "10%",
        padding: 15,
        marginTop: 50,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomWidth: 0.1,
        borderBottomColor: '#221d1c'
    },
    container_xl: {
        backgroundColor: "#e5e5e5",
        marginHorizontal: "10%",
        padding: 15,
        paddingHorizontal: 30,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e5e5e5'
    },
    container_sm: {
        flexDirection: 'row',
        backgroundColor: "#221d1c",
        marginHorizontal: "10%",
        borderRadius: 10,
        padding: 15,
        marginTop: 10
    }
});

export default ProScreen