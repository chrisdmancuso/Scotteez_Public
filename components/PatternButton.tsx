import React from "react";
import { StyleSheet } from 'react-native'
import { Surface } from 'react-native-paper'
import Pattern2 from '../src/Patterns/pattern2.svg';
import Pattern3 from '../src/Patterns/pattern3.svg';
import Pattern4 from '../src/Patterns/pattern4.svg';
import Pattern5 from '../src/Patterns/pattern5.svg';
import Pattern7 from '../src/Patterns/pattern7.svg';
import Pattern8 from '../src/Patterns/pattern8.svg';
import Pattern9 from '../src/Patterns/pattern9.svg';
import PatternA from '../src/Patterns/patternA.svg';
import PatternS from '../src/Patterns/patternS.svg';
import PatternT from '../src/Patterns/patternT.svg';
import Pattern13 from '../src/Patterns/pattern13.svg';
import Pattern53 from '../src/Patterns/pattern53.svg';
import Pattern7X from '../src/Patterns/pattern7X.svg';
import PatternL from '../src/Patterns/patternL.svg';


const patterns = {
    Pattern2: Pattern2,
    Pattern3: Pattern3,
    Pattern4: Pattern4,
    Pattern5: Pattern5,
    Pattern7: Pattern7,
    Pattern8: Pattern8,
    Pattern9: Pattern9,
    PatternA: PatternA,
    PatternS: PatternS,
    PatternT: PatternT,
    Pattern13: Pattern13,
    Pattern53: Pattern53,
    Pattern7X: Pattern7X,
    PatternL: PatternL,
}

export default function Patterns(props) {
    const PatternList = patterns[props.pattern];
    const isSelected = props.pattern === props.selectedPattern;
    return (
        <Surface style={[isSelected ? styles.selected: styles.notSelected]}>
            <PatternList 
            style={{borderWidth: 2}} 
            width={props.width} 
            height={props.height} 
            fill={props.fill} 
            fillSecondary={props.fillSecondary} 
            fillThird={props.fillThird}/>
        </Surface>
    );
}

const styles = StyleSheet.create({
    selected: {
        borderWidth: 3,
        borderRadius: 5,
        padding: 1,
    },
    notSelected: {
        margin: 4
    }
})