import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Surface } from 'react-native-paper'

const ColorButton = ({
    color,
    onPress,
    selectedColor
}: {
    color: string,
    selectedColor: String,
    onPress: (color: string) => void;
}) => {
    const isSelected = color === selectedColor;
    return (
        <Surface style={[styles.btnCover, isSelected ? styles.selected : null]}>
            <TouchableOpacity 
            style={[styles.colorBtn, { backgroundColor: color }]}
            onPress={() => onPress(color)}
            />
        </Surface>
    );

};

const styles = StyleSheet.create({
    colorBtn: {
        width: '100%',
        height: '100%',
        borderRadius: 15
      },
      btnCover: {
        padding: 2,
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 2
      },
      selected: {
        borderWidth: 2,
        borderRadius: 15
      }
})

export default ColorButton;