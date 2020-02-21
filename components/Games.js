import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';

import RandomNumberArray from './randomNumberArray';
import SumSelectedRandomNumbers from './sumSelectedRandomNumbers';
// import RandomNumberArray from './randomNumberArray.js';


function Games() {

    // const [numberCount, setNumberCount] = useState ([]);
    // const [randomNumbers, setRandomNumbers] = useState([]);

    const [randomNumbersArray, setRandomNumbersArray] = useState([]);
    // const [randomNumberArray, setRandomNumberArray] = useState([]);
    

    // const randomNumbers = [...Array(6)].map(()=>Math.floor(Math.random()*10));
    // .from({lenght: 6}),
    // ()=> 1 + Math.floor(10 * Math.random());
    
    // const onTarget = () => randomNumbers.reduce(function(a, b) { return a + b; }, 0);
    // const onTarget = sum(randomNumbers);

    // const onTarget = () => randomNumbers.reduce((acc, curr) => acc + curr,0)
    // const onTarget = () => [randomNumbers].(Math.sum(randomNumbers))

    function handlePress() {
        const newRandomNumbers = [...Array(6)].map(()=>Math.floor(Math.random()*10));
        setRandomNumbersArray(newRandomNumbers);
        // setTarget(sum.randomNumbers);
        // return setTarget;
        // setTarget(10 + Math.floor(40 * Math.random()));
    };

    function reduceArray(){
        let fourRandomNumbersArray = randomNumbersArray.slice(Math.floor(Math.random()*5))
        console.log(fourRandomNumbersArray)
        return fourRandomNumbersArray.reduce((acc, curr) => acc + curr, 0)

    }

    // const target = 10 + Math.floor(40 * Math.random());

    // function handleRandomPress (randomNumber) {
    //     // console.log(randomNumber)
    // }

    // function isSelectedNumber(numberIndex) {
        
        
    //     return setSelected.indexOf(numberIndex) >=0
    // }
    
  return (
    <ScrollView style={styles.MainContainer}>
        <View style={styles.container}>
            <Text style={styles.target}>The number is : {reduceArray()}</Text>
            <Button title="Press Me" onPress={() => {
                handlePress()
            }}></Button>
        </View>

        
        <View style={styles.randomContainer}>
                {randomNumbersArray.map((randomNumber, index)=>
                    <RandomNumberArray 
                            key={index} 
                            number={randomNumber} 
                            // selected ={props.isSelectedNumber(index)}
                            
                    />
                        // <TouchableOpacity key={index} onPress={()=>{handleRandomPress(randomNumber)}}>
                        //     <Text style={styles.randomItems} >{randomNumber}</Text>
                        // </TouchableOpacity>
                    )}

                {/* <Text style={styles.randomContainer}> {randomNumbersArray}</Text> */}
        </View>

        <View>
                <SumSelectedRandomNumbers />
        </View>
        
        
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    MainContainer: {
      backgroundColor: '#f5f5f5',
    },

    target: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center', 
        backgroundColor: '#aaa', 
        fontSize: 35,
        marginHorizontal: 50,
        ...Platform.select({
            ios: {
                marginTop: '15%',
            },
            android: {
                marginTop: '15%',
            },
        }),
    },

    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around', 
    },
    
    // randomItems: {
    //     width: 150,
    //     height: 150,
    //     borderWidth: 1,
    //     margin: 15,
    //     justifyContent: 'center',
    //     textAlign: 'center',
    //     fontSize: 35,
    //     paddingTop: 50,
    //     backgroundColor: '#aaa',
    // },

});

export default Games;