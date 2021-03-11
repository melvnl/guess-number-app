import React from 'react'
import { Text,View, StyleSheet, TextInput, Button } from 'react-native'
import Card from '../components/Card'

const Starting = props => {
return (
    <View style={styles.screen}>
        <Text style={styles.title}>This is the starting screen</Text>
        <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
            <TextInput />
            <View style={styles.btnContainer}>
                <Button title="Reset" onPress={ () => {}}/>
                <Button title="Confirm" onPress={ () => {}}/>
            </View>
        </Card>
    </View>
)
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding : 10,
        alignItems: 'center'
    },
    title :{
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection : 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})
export default Starting