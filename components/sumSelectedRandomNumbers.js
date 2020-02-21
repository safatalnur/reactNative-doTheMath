import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RandomNumberArray from './randomNumberArray';

function SumSelectedRandomNumbers (props) {
    function myNumber () {
        let sum = [props.number].reduce((acc, curr)=> acc + curr, 0)
        console.log(sum)
        return sum
    }

    return (
        <View>
            <Text style={styles.SumSelectedRandomNumbers}>
                Selected Total is: {myNumber()}
            </Text>
        </View>

    )
};

const styles = StyleSheet.create({

    SumSelectedRandomNumbers: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#aaa',
        fontSize: 25,
        marginHorizontal: 50,
    }
})


export default SumSelectedRandomNumbers