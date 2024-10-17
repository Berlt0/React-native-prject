import { useNavigation } from "@react-navigation/native";
import React from "react";
import{View,Text,SafeAreaView,StyleSheet} from 'react-native';

const HomePage = () => {
    const navigation = useNavigation();
    return(

     <View style={styles.container}>

        <View style={styles.textstyle}>
            <Text>Welcome to my Homepage</Text>
         </View>   

    </View>
    )
};

export default HomePage;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textstyle:{
        color: 'black',
        fontSize: 25,
        marginBottom: 20,
        textAlign: 'center',
    }
});

