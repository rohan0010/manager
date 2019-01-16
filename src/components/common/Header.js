import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
 return ( 
     <View style={viewStyle}>
     <View>
 <Text style={textStyle} >{props.headerText}</Text>
 </View>
 </View>

 );
};
const styles = {
    viewStyle: {
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        
    },
    textStyle: {
        fontSize: 20
    }
};
 export { Header };

