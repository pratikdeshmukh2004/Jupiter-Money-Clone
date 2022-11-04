import React, { useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from "../components/Header"
import Button from "../components/Button"
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';


const { width } = Dimensions.get('window');

function HomeScreen({ navigation }) {
  const [activePage, setactivePage] = useState(0)

  const array = [1, 2, 3, 4, 5, 6];
  const logos = [
    {
      logo: 'brightness-percent',
      name: "Offers"
    },
    {
      logo: 'cash-check',
      name: "Auto Pay"
    },
    {
      logo: 'piggy-bank-outline',
      name: "Pots"
    },
    {
      logo: 'transmission-tower',
      name: "Pay Bills"
    },
  ]
  const bills = [
    {
      biller: "Maharashtra State...",
      amount: 520,
      due: "13 Days",
    },
    {
      biller: "Maharashtra State...",
      amount: 200,
      due: "10 Days",
    },
    {
      biller: "Maharashtra State...",
      amount: 1200,
      due: "Tomorrow",
    }
  ]
  const recent_transactions = [
    {
      name: "Satish Mungusmare",
      datetime: "Today - 9:54 PM",
      amount: 550
    },
    {
      name: "Leap Club",
      datetime: "Yesterday - 2:44 PM",
      amount: 200
    },
    {
      name: "Anand Patel",
      datetime: "2022-02-09 - 7:00 PM",
      amount: 30
    }
  ]
  return (
    <View style={{ flex: 1 }}>
      <ScrollView stickyHeaderIndices={[0]} style={{
        flex: 1, paddingTop: 0, shadowOffset: {
          width: 0,
          height: 3
        },
      }}>

        <Header />
        <View style={{ padding: "3%", backgroundColor: colors.primary }}>
          <View style={{ backgroundColor: "white", borderWidth: 2, elevation: 1, borderColor: "#e5e5e5", width: '100%', padding: 10, borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#909090" }}>Account Balance</Text>
            <Text style={{ color: "#000", fontWeight: "bold", fontSize: 25, marginTop: 5 }}>₹1,45,000</Text>
            <Text style={{ color: "#909090", marginTop: 5 }}>In 3 other accounts ₹12,20,000</Text>
            <View style={{ marginTop: 15, display: 'flex', flexDirection: "row", justifyContent: "space-between" }}>
              <Button title="Deposit money" icon="plus" />
            </View>
            <TouchableOpacity>
              <Text style={{ color: "#505050", marginTop: 25 }}>Your UPI ID: 9325837420@jupiteraxios <MaterialCommunityIcons size={20} name='content-copy' /></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }}>
          {logos.map((item, index) => (
            <TouchableOpacity key={index}>
              <MaterialCommunityIcons size={35} color={'#505050'} style={{ backgroundColor: '#d6d6d6', padding: 10, borderRadius: 50 }} name={item.logo} />
              <Text style={{ textAlign: "center", color: "#909090", marginTop: 5 }}>{item.name}</Text>
            </TouchableOpacity>
          ))}

        </View>

        <ScrollView showsHorizontalScrollIndicator={false} pagingEnabled onMomentumScrollEnd={(event) => setactivePage(event.nativeEvent.contentOffset.x/360)} horizontal style={styles.container} >
          {bills.map((item, index) => {
            return (
              <View style={styles.view} key={index}>
                <View style={{ flexDirection: 'row' }}>
                  <MaterialCommunityIcons color={colors.primary} size={30} style={{ marginRight: 10, borderWidth: 2, borderRadius: 5, padding: 5, borderBottomRightRadius: 20, borderColor: "#e5e5e5" }} name='lightbulb-on-outline' />
                  <View>
                    <Text style={{ fontWeight: "600", fontSize: 15 }}>{item.biller}</Text>
                    <Text style={{ fontSize: 12, color: "#808080" }}>Electricity</Text>
                  </View>
                  <Text style={{ marginLeft: 'auto', fontWeight: "bold", fontSize: 15 }}>₹{item.amount}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                  <View style={{ marginRight: 'auto' }}>
                    <Text style={{ fontSize: 15, color: "#808080" }}>Due In</Text>
                    <Text style={{ fontSize: 12, color: "red", fontWeight: '600' }}>{item.due}</Text>
                  </View>
                  <Button color='#e5e5e5' textStyle={{ color: "black" }} title="MARK AS PAID" />
                  <Button style={{ marginLeft: 10 }} color={colors.primary} textStyle={{ color: "white" }} title="Pay" />
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20, marginTop: 5 }}>
          {bills.map((item, index) => (
            <View key={index} style={{ height: 5, marginLeft: 2, marginRight: 2, backgroundColor: activePage != index?'#808080': "#101010", width: 20, borderRadius: 10 }}></View>
          ))}
        </View>
        <Collapse style={{ elevation: 1, padding: 15, marginBottom: 20, marginHorizontal: 10, borderRadius: 10, backgroundColor: 'white' }}>
          <CollapseHeader>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#505050", fontWeight: "500" }}>Recent Transactions</Text>
              <MaterialCommunityIcons name='chevron-down' size={20} style={{ marginLeft: 'auto' }} />
            </View>
          </CollapseHeader>
          <CollapseBody>
            {recent_transactions.map((transaction, index) => (
              <View key={index} style={{ marginVertical: 15, flexDirection: 'row' }}>
                <View>
                  <Text style={{ fontSize: 15 }}>{transaction.name}</Text>
                  <Text style={{ fontSize: 12, color: "#808080", marginTop: 5 }}>{transaction.datetime}</Text>
                </View>
                <Text style={{ marginLeft: 'auto', fontWeight: 'bold', marginTop: 10, marginRight: 20 }}>₹{transaction.amount}</Text>
              </View>
            ))}
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ color: colors.primary, fontWeight: "500" }}>See all</Text><MaterialCommunityIcons color={colors.primary} name='chevron-right' size={20} />
              <Text style={{ color: colors.primary, fontWeight: "500", marginLeft: 'auto' }}>Track spends</Text><MaterialCommunityIcons color={colors.primary} name='chevron-right' size={20} />
            </View>
          </CollapseBody>
        </Collapse>
      </ScrollView>
      <TouchableOpacity onPress={()=>navigation.navigate("Scanner")} style={{ position: "absolute", bottom: 20, alignSelf: "center", flexDirection: "row", backgroundColor: colors.green, padding: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 2, borderColor: "#9cc5ce" }}>
        <MaterialCommunityIcons color={"white"} name='qrcode-scan' size={20} />
        <Text style={{ marginLeft: 5, color: "white", fontWeight: "bold" }}>Scan & Pay</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  view: {
    backgroundColor: 'white',
    width: width - 20,
    margin: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 20,
    paddingBottom: 5,
    elevation: 1,

  },
});

export default HomeScreen