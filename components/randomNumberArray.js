import React, {useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { reset } from 'expo/build/AR';


function RandomNumberArray(props) {

    const [selectedNumbers, setSelectedNumbers] = useState(false)


    function handleRandomPress(numberIndex) {
            console.log(props.number)
            const newSelectedNumbers = ([props.number].indexOf(numberIndex)) <= 0;
            console.log(newSelectedNumbers)            

            setSelectedNumbers(newSelectedNumbers)
            }

    
    return (
       
            <TouchableOpacity onPress={handleRandomPress}>
                <Text style={[styles.randomItems, selectedNumbers && styles.selected]}>
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

        selected: {
            opacity: 0.3
        }
})

export default RandomNumberArray