import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from "../config/colors";
import Header from '../components/Header2';
import Button from '../components/Button';
import ListItemSeparator from '../components/ListItemSeperator';


function MoneyScreen() {
  const networth = 234;
  const [eye, seteye] = useState(false)

  const menuItems = [
    {
      title: "All your assets",
      amount: 188,
    },
    {
      title: "Bank Balance",
      amount: 88,
    },
    {
      title: "Pots",
      amount: "00",
    },
    {
      title: "Fixed Deposite",
      amount: 100,
    },
  ];

  return (
    <ScrollView stickyHeaderIndices={[0]} style={{
      flex: 1, paddingTop: 0, shadowOffset: {
        width: 0,
        height: 3
      },
    }}>
      <Header title="Money" icon='information-outline' />
      <View style={{ padding: "5%", backgroundColor: colors.primary }}>
        <View style={{ width: '100%', paddingBottom: 0, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "white" }}>Your Total Networth</Text>
          <View onTouchStart={() => seteye(!eye)} style={{ flexDirection: 'row' }}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 27, marginTop: 5 }}>₹ {eye ? "*".repeat(networth.toString().length) : networth}</Text>
            <MaterialCommunityIcons size={25} color="white" style={{ marginTop: 12, marginLeft: 15 }} name='eye-off' />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.lieb, { backgroundColor: "#98001e" }]}>Assets</Text>
            <Text style={styles.lieb}>Liabilities</Text>
          </View>
        </View>
        <FlatList ItemSeparatorComponent={ListItemSeparator} ListFooterComponent={
          <View style={{ backgroundColor: "#e5e5e5", padding: 10, borderBottomEndRadius: 10, borderBottomStartRadius: 10 }}>
            <Text style={{ color: colors.primary, textAlign: 'center', fontWeight: '600' }}>Show More <MaterialCommunityIcons size={15} name='chevron-down' /></Text>
          </View>
        } style={{ marginTop: 10, marginHorizontal: "5%", backgroundColor: "white", borderRadius: 10, }} data={menuItems} keyExtractor={(mitem) => mitem.title} renderItem={(item) => (
          <View style={{ flexDirection: 'row', padding: 15 }}>
            <Text>{item.item.title}</Text>
            <Text style={{ marginLeft: 'auto', marginRight: 5 }}>₹ {item.item.amount}</Text>
            <MaterialCommunityIcons size={20} name='chevron-right' />
          </View>
        )} />
      </View>
      <View style={{ padding: 10, marginTop: 30 }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Your Jupiter Spending 💸</Text>
        <View style={{ borderWidth: 1, borderColor: '#e5e5e5', padding: 10, marginHorizontal: "5%", marginTop: 20, borderTopEndRadius: 15, borderTopStartRadius: 15, alignItems: 'center', backgroundColor: 'white' }}>
          <Text>Money out in November</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>₹2,217</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: '#e5e5e5', padding: 10, marginHorizontal: "5%", alignItems: 'center', backgroundColor: '#d6d6d6', borderBottomEndRadius: 15, borderBottomStartRadius: 15 }}>
          <Text>Top categories</Text>
          <Text style={{ fontWeight: 'bold', marginTop: 10 }}>₹2,217</Text>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  lieb: {
    paddingHorizontal: 20,
    marginHorizontal: 5,
    marginTop: 10,
    fontWeight: 'bold',
    color: 'white',
    borderRadius: 10,
    padding: 2
  }
})

export default MoneyScreen;