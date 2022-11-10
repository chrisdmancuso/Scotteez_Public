import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, UIManager } from 'react-native'
import Icon from "react-native-vector-icons/MaterialIcons";

export default class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: true,
            width: props.width,
        }
    }
    render() {
        //Changed icon size from 30 to 20, make text a bit smaller as well?
        //Fixed by adding flex to icon and text styles, at least on phone, check if works well on ipad
        return (
            <View style={{flex: 10}}>
                <View style={styles.hr}></View>
                 <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                     <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={'black'} style={{flex: 1}}/>
                     <Text style={styles.title}>{this.props.title}<Text style={[styles.title, {color: this.props.color}]}>{this.props.colorName}</Text></Text>  
                 </TouchableOpacity>
                 {
                     this.state.expanded &&
                     <View style={styles.child}>
                         {this.props.data} 
                     </View>
                 }
            </View>
         )
       }
     
       toggleExpand=()=>{
         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
         this.setState({expanded : !this.state.expanded})
       }
     
     }
     
     const styles = StyleSheet.create({
         title:{
             fontSize: 14,
             fontWeight:'bold',
             color: '#fafdfd',
             flex: 9,
         },
         row:{
             flexDirection: 'row',
             justifyContent:'flex-start',
             width: '100%',
             alignItems:'center',
             backgroundColor: '#b9b9b9',
             borderRadius: 2,
             overflow: 'auto'
         },
         hr:{
             height:2,
             backgroundColor: '#000000',
             width:'100%',
             marginTop: 2,
             marginBottom: 2,
         },
         child:{
            paddingTop: 10,
            paddingLeft: 5,
            paddingRight: 5,
            paddingBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            width: '100%',
            backgroundColor: '#ffffff'
         }
         
     });