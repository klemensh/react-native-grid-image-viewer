import React from 'react';
import { View, StyleSheet } from 'react-native';


const Check = () => {
    return (
        <View style={styles.background}>
            <View style={styles.checkmark} />
        </View>
    );
};


const styles = StyleSheet.create({
    background:{
        height:60,
        width:60,
        justifyContent:'center',
        alignItems:'center',
    },
    checkmark: {
        paddingBottom:10,
        height: 25,
        width: 12,
        borderBottomColor:'white',
        borderBottomWidth:3,
        borderRightColor:'white',
        borderRightWidth:3,
        transform: [{ rotate: '45deg' }]
    },
});

export default Check;
