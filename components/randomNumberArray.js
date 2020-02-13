import React, {useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function RandomNumberArray(props) {

    function handleRandomPress() {
            console.log(props.number)
    }
    return (
       
            <TouchableOpacity onPress={handleRandomPress}>
                <Text style={styles.randomItems}>
                    {props.number}
                </Text>
            </TouchableOpacity>
       
    );
};

const styles = StyleSheet.create({

        randomItems: {
            width: 150,
            height: 150,
            borderWidth: 1,
            margin: 15,
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 35,
            paddingTop: 50,
            backgroundColor: '#aaa',
        },
})

export default RandomNumberArray












// import React, {useState} from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
//     Platform,
//     Button,
//     TouchableOpacity,
//   } from 'react-native';


// function RandomNumberArray(props)  {


//     const handleRandomPress= (number) => {
//         console.log(props.number);
//     },

//     // return (
// //   export default (props)=>
//             <TouchableOpacity onPress={handleRandomPress}>
//                     <Text style={styles.randomItems}>{props.number}</Text>
//             </TouchableOpacity>
//     // );    

//   };

//   const styles = StyleSheet.create({
//     randomItems: {
//         width: 150,
//         height: 150,
//         borderWidth: 1,
//         margin: 15,
//         justifyContent: 'center',
//         textAlign: 'center',
//         fontSize: 35,
//         paddingTop: 50,
//         backgroundColor: '#aaa',
//     },
//   });

//   export default RandomNumberArray;
