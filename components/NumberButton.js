import React, {useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { reset } from 'expo/build/AR';


function NumberButton(props) {

    // const [disabledNumbers, setdisabledNumbers] = useState(false)

    function handleRandomPress() {                                  
        console.log('hello World:>>', props.id)
        if (props.disabled) {
            return
        }
        {props.onPress(props.id)}
        // props.selectNumber(props.id)
        console.log('onPress:>>', props.onPress)
    }
    // // function handleRandomPress() {
    //     function handleRandomPress(numberIndex) {
    //         console.log("handle rndoom press props", props.number)
    //         const newdisabledNumbers = (-[props.number].indexOf(numberIndex)) >= 0;
    //         // console.log("handleRandomPress", { newdisabledNumbers } )            

    //         setdisabledNumbers(newdisabledNumbers)
            
    //     }   
    //     // console.log("handle rndoom press props", props.number)
     
            
    return (
       <View>
            <TouchableOpacity onPress={handleRandomPress}>
                <Text style={[styles.randomItems, props.disabled && styles.disabled]}>
                    {props.number}

                </Text>
            </TouchableOpacity>

        </View>
       
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

        disabled: {
            opacity: 0.3
        }
    
})

export default NumberButton