import { Link, useIsFocused } from '@react-navigation/native';
import { Camera, CameraType } from 'expo-camera';
import { useEffect, useState } from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import * as Linking from 'expo-linking';


const height = Dimensions.get("screen").height
const logos = [
    "Pratik Deshmukh",
    "Leap Club",
    "Satish",
    "Bhupendra",
    "Anand Patel"
]
export default function CameraScreen({ navigation }) {
    const [type, setType] = useState(CameraType.back);
    const isFocused = useIsFocused()
    const [scaned, setscaned] = useState(false)
    const [flash, setflash] = useState("off")
    const [faces, setfaces] = useState([])

    const __startCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync()
        if (status === 'granted') {
            // do something

        } else {
            Alert.alert("Access denied")
        }
    }
    const __onScaned = (data) => {
        console.log(data);
        setscaned(data.data)
        Linking.openURL(data.data)
    }

    const __toggleFlash = () => {
        if (flash == "torch") {
            setflash("off")
        } else {
            setflash("torch")
        }
    }

    const __toggleCamera = () => {
        if (type == CameraType.back) {
            setType(CameraType.front)
        } else {
            setType(CameraType.back)
        }
    }

    useEffect(() => {
        __startCamera()
    }, [navigation])

    return (
        <View >
            {isFocused && !scaned ?
                <Camera flashMode={flash} onFacesDetected={(e) => setfaces(e.faces)} onBarCodeScanned={(e) => __onScaned(e)} style={styles.camera} autoFocus type={type}>
                    <Text style={{ textAlign: 'center', color: 'white', marginTop: 100, fontWeight: 'bold', fontSize: 18 }}>Scan QR Code</Text>
                    <Text style={{ textAlign: 'center', color: colors.primary, marginTop: 5, fontWeight: 'bold', fontSize: 15 }}> {faces.length > 0 ? "Don't shwo faces show me QR code" : ""}</Text>
                    <View style={styles.scanner} >
                        <LottieView autoPlay loop source={require("../assets/animations/scanner.json")} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <MaterialCommunityIcons onPress={__toggleFlash} name='flashlight' size={25} color={flash == "torch" ? "black" : "white"} style={[styles.flash, { backgroundColor: flash == "torch" ? "white" : "rgba(0,0,0,0)" }]} />
                        <MaterialCommunityIcons onPress={__toggleCamera} name='camera-flip' size={25} color="white" style={styles.flash} />
                    </View>

                    <View style={styles.recent}>
                        <Text style={{ textAlign: 'center', color: colors.white, marginTop: 20, fontWeight: 'bold', fontSize: 15 }}>Recently Paid</Text>
                        <View>
                            <View style={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'row', marginTop: 10 }}>
                                {logos.map((item, index) => (
                                    <TouchableOpacity key={index}>
                                        <View style={styles.logos}>
                                            <Text style={{ textAlign: 'center', color: colors.white, fontWeight: 'bold', fontSize: 15 }}>{item.split(" ")[0][0]}{item.split(" ").length > 1 ? item.split(" ")[1][0] : item[item.length - 1].toUpperCase()}</Text>
                                        </View>
                                        <Text style={{ textAlign: "center", color: "#e9e9e9", marginTop: 10, fontSize: 10, maxWidth: 60 }}>{item}</Text>
                                    </TouchableOpacity>
                                ))}

                            </View>
                        </View>

                    </View>

                </Camera> :
                <>
                    <Text style={{ textAlign: 'center', color: 'black', marginTop: 200, fontWeight: 'bold', fontSize: 18 }}>You Scaned</Text>
                    <Text style={{ textAlign: 'center', color: 'black', marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>{scaned}</Text>
                    <TouchableOpacity onPress={() => { __startCamera(); setscaned(false) }} style={{ marginTop: 50, alignSelf: "center", flexDirection: "row", backgroundColor: colors.green, padding: 10, paddingHorizontal: 20, borderRadius: 20, borderWidth: 2, borderColor: "#9cc5ce" }}>
                        <MaterialCommunityIcons color={"white"} name='qrcode-scan' size={20} />
                        <Text style={{ marginLeft: 5, color: "white", fontWeight: "bold" }}>Re-Scan</Text>
                    </TouchableOpacity>
                </>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    camera: {
        width: "100%",
        height: height,
    },
    scanner: {
        width: "80%",
        height: 250,
        alignSelf: 'center',
        marginTop: 5,
    },
    recent: {
        width: "100%",
        height: 180,
        marginTop: 100,
        backgroundColor: "rgba(0,0,0,0.8)",
        position: 'absolute',
        bottom: 50
    },
    logos: {
        borderWidth: 1,
        borderColor: colors.primary,
        width: 50,
        padding: 10,
        borderBottomRightRadius: 15,
        borderRadius: 5,
        marginTop: 20,
        backgroundColor: "#303030",
        elevation: 1
    },
    flash: {
        borderWidth: 1,
        borderColor: colors.white,
        padding: 8,
        borderRadius: 10,
        marginHorizontal: 10,
        marginTop: 30
    }
})