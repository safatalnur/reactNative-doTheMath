import React, {useState, useEffect, useMemo} from 'react';
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

import NumberButton from './NumberButton';


function Games(props) {


    const [randomNumbersArray, setRandomNumbersArray] = useState([]);
    const [selectedNumbers, setSelectedNumbers] = useState([])

    const [timer, setTimer] = useState(props.secondsRemaining)
    const [startCounter, setStartCounter] = useState(false)
    console.log(timer, props.secondsRemaining)

    useEffect(() => {
        console.log('hello world')
    }, [])
        

    useEffect(() => {
        startCounter && setInterval(() => {
            setTimer(prev => { 
                if (prev <= 0){
                    return 0
                }
                return prev - 1
            })
        }, 1000)
        
    }, [startCounter])



    



    // const decrement = (count) => {
        
    //     let z = setInterval(()=>{
    //         count > -1 && setTimer((prev) => {
    //             console.log(prev - 1)
    //             return prev - 1;
    //         }
    //         // , () => {
    //         //     if (this.state.remainingSeconds === 0) {
    //         //         clearInterval(this.intervalId)
    //         //     }
    //         // }
    //         )
    //     }, 1000)

    //     console.log('seconds left: ', count)

    //     if (count < 0){
    //         clearInterval(z)
    //     }


    // }

    // useEffect(() => {
    //     decrement(timer)
    // }, [timer])
    
    

    function handlePress() {
        const newRandomNumbers = [...Array(6)].map(()=>1+Math.floor(Math.random()*10));
        setRandomNumbersArray(newRandomNumbers);
        // setTarget(sum.randomNumbers);
        // return setTarget
        // setTarget(10 + Math.floor(40 * Math.random()));

        setStartCounter(true)
    };

    function reduceArray(){
        let fourRandomNumbersArray = randomNumbersArray.slice(Math.floor(Math.random()*5))
        // console.log('randomNumberArray:>>', fourRandomNumbersArray)
        return fourRandomNumbersArray.reduce((acc, curr) => acc + curr, 0)
    }

    let expectedNumber = useMemo(() => {
        return reduceArray()
    }, [randomNumbersArray])


    function isSelectedNumber (numberIndex) {
        return selectedNumbers.indexOf(numberIndex) >=0
    }

    // function selectNumber(numberIndex) {
    //     console.log('selectNumber:>>', numberIndex, selectedNumbers)
    
    //         // setSelectedNumbers(previousState => ({
    //         //     selectedNumbers: [...previousState.selectedNumbers, numberIndex]
    //         // }))
    //         setSelectedNumbers(
    //             [...selectedNumbers, numberIndex]
    //         )

    //         // console.log('setSelectedNumver:>>>>>>>)
            
        
    // }

    // selectNumber = (numberIndex) => {
    //     this.setState((prevState)=> {
    //         return { selectedIds: [...prevState.selectedIds, numberIndex]}
    //     })
    // }

    //console.log(selectNumber(5))

    const selectNumber = (numberIndex) => {
        setSelectedNumbers(prev => {
            console.log('selectNumber:>>',prev, numberIndex)
            return [...prev, numberIndex]
        })
    }



    


  return (
    <ScrollView style={styles.MainContainer}>
        <View style={styles.container}>
            <Text style={styles.target}>The number is : {expectedNumber}</Text>
            <Button title="Press Me" onPress={() => {
                handlePress()
            }}></Button>
        </View>

        
        <View style={styles.randomContainer}>
                {randomNumbersArray.map((randomNumber, index)=>
                    <NumberButton 
                            key={index} 
                            id={index}
                            number={randomNumber}
                            disabled = {isSelectedNumber(index)}
                            onPress = {selectNumber}
                            // onPress = {()=> {
                                // console.log('hello World:>>', index)
                                
                                // const nextSelectedNumbers = [...selectedNumbers]
                                // nextSelectedNumbers[index] = true
                                // setSelectedNumbers(nextSelectedNumbers)
                            // }}
                            // selected ={selectedNumbers[index]}
                    />
                        // <TouchableOpacity key={index} onPress={()=>{handleRandomPress(randomNumber)}}>
                        //     <Text style={styles.randomItems} >{randomNumber}</Text>
                        // </TouchableOpacity>
                    )}

                {/* <Text style={styles.randomContainer}> {randomNumbersArray}</Text> */}
        </View>

        <View>
        <Text>{timer}</Text>
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