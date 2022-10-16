import React from 'react';

import { View, StyleSheet, Dimensions} from 'react-native';
import * as Device from 'expo-device';
//Imports In order of render
//Base Jacket
import BaseJacket from '../src/Jackets/JacketBaseFront.svg';
import BaseJacketBack from '../src/Jackets/JacketBaseBack.svg';
//Gender
import MaleJacketFront from '../src/Jackets/JacketMaleFront.svg';
import FemaleJacketFront from '../src/Jackets/JacketFemaleFront.svg';
import JacketBack from '../src/Jackets/JacketBack.svg';
import FrontHood from '../src/Jackets/HoodFront.svg';
import BackHood from '../src/Jackets/HoodBack.svg';
import BackHoodPattern from '../src/Jackets/HoodBackPattern.svg';
//Sleeves/Pockets/Buttons
import FrontSleeves from '../src/Jackets/SleevesFront.svg';
import BackSleeves from '../src/Jackets/SleevesBack.svg';
import Pockets from '../src/Jackets/Pockets.svg'
import MaleButtons from '../src/Jackets/JacketMaleButtons.svg';
import FemaleButtons from '../src/Jackets/JacketFemaleButtons.svg';
//Knits
import KnitsRender from './KnitsRender';
import '../global.js';

var {
    width: width,
    height: height
  } = Dimensions.get('window')
  
  //swap w/h if opened in portrait
  if (width < height) {
    width = width + height;
    height = width - height;
    width = width - height
  }
  
  //Media Queries for jacket size
  var iconSize;
  if (global.modelList.includes(Device.modelName)) {
    if (width > 926) {
      iconSize = width * .5;
    } else {
      iconSize = width * .3;
    }
  } else {
    if (width > 926) {
      iconSize = width * .6;
    } else {
      iconSize = width * .4;
    }
  }

  const gPadding = Math.round(iconSize * .16);

const JacketRender = (props) => {
    const iconSize = props.iconSize;
    const jacketColor = props.jacketColor;
    const sleeveColor = props.sleeveColor;
    const pocketColor = props.pocketColor;
    const buttonColor = props.buttonColor;
    const hoodColor = props.hoodColor;
    const hoodPatternColor = props.hoodPatternColor;
    const primaryKnitColor = props.primaryKnitColor;
    const secondaryKnitColor = props.secondaryKnitColor;
    const accentKnitColor = props.accentKnitColor;
    const flipJacket = props.flipJacket;
    const gender = props.gender;
    const currentPattern = props.currentPattern;

    const renderJacket = () => {
        if (flipJacket === 0) {
            return (
                <View>
                    <View style={styles.topElement}>
                        <BaseJacket
                        width={iconSize}
                        height={iconSize}
                        fill={'#000'}
                        stroke={'#000'}
                        strokeWidth={2}
                        viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                    { renderGender() }
                    <View style={styles.bottomElements}>
                        <FrontSleeves
                        width={iconSize}
                        height={iconSize}
                        fill={sleeveColor}
                        stroke={'#000'}
                        strokeWidth={2}
                        viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                    <View style={styles.bottomElements}>
                        <Pockets
                        width={iconSize}
                        height={iconSize}
                        fill={pocketColor}
                        stroke={'#000'}
                        strokeWidth={1}
                        viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                    <View style={styles.bottomElements}>
                        <KnitsRender
                        width={iconSize}
                        height={iconSize}
                        fill={primaryKnitColor}
                        fillSecondary={secondaryKnitColor}
                        fillThird={accentKnitColor}
                        currentPattern={currentPattern}
                        gender={gender}
                        flip={flipJacket}
                        />
                    </View>
                </View>
            )

        } else {
            return(
                <View>
                    <View style={styles.topElementBack}>
                        <BaseJacketBack
                        width={iconSize}
                        height={iconSize}
                        fill={'#000'}
                        stroke={'#000'}
                        strokeWidth={3}
                        viewBox="0 0 551 580"
                        />
                    </View>
                    <View style={styles.bottomElementsBack}>
                        <JacketBack
                        width={iconSize}
                        height={iconSize}
                        fill={jacketColor}
                        stroke={'#000'}
                        strokeWidth={2.25}
                        viewBox="0 0 551 580"
                        />
                    </View>
                    { renderHoodBack() }
                    <View style={styles.bottomElementsBack}>
                        <BackSleeves
                        width={iconSize}
                        height={iconSize}
                        fill={sleeveColor}
                        stroke={'#000'}
                        strokeWidth={2}
                        viewBox="0 0 551 580"
                        />
                    </View>
                    <View style={styles.bottomElementsBack}>
                        <KnitsRender
                        width={iconSize}
                        height={iconSize}
                        fill={primaryKnitColor}
                        fillSecondary={secondaryKnitColor}
                        fillThird={accentKnitColor}
                        currentPattern={currentPattern}
                        gender={gender}
                        flip={flipJacket}
                        />
                    </View>
                </View>
            )
        }
    };


    const renderGender = () => {
        if (gender === 0) {
            return (
                <View style={styles.bottomElements}>
                    <View style={styles.bottomElements}>
                        <MaleJacketFront
                            width={iconSize}
                            height={iconSize}
                            fill={jacketColor}
                            stroke={'#000'}
                            strokeWidth={1.75}
                            viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                    <View style={styles.bottomElements}>
                        <MaleButtons
                        width={iconSize}
                        height={iconSize}
                        fill={buttonColor}
                        strokeWidth={0}
                        stroke={'#000'} 
                        viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                </View>

            )
        } else {
            return (
                <View style={styles.bottomElements}>
                    <View style={styles.bottomElements}>
                        <FemaleJacketFront
                        width={iconSize}
                        height={iconSize}
                        fill={jacketColor}
                        stroke={'#000'}
                        strokeWidth={2.25}
                        viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                    <View style={styles.bottomElements}>
                        <FrontHood
                        width={iconSize}
                        height={iconSize}
                        fill={hoodColor}
                        stroke={'#000'}
                        strokeWidth={5}
                        viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                    <View style={styles.bottomElements}>
                        <FemaleButtons
                        width={iconSize}
                        height={iconSize}
                        fill={buttonColor}
                        strokeWidth={0}
                        stroke={'black'} 
                        viewBox="0 0 734.66669 774.66669"
                        />
                    </View>
                </View>
            )
        }
        
    };

    const renderHoodBack = () => {
        if (gender === 1) {
            return (
                <View style={styles.bottomElementsBack}>
                    <View style={styles.bottomElementsBack}>
                        <BackHood 
                        width={iconSize}
                        height={iconSize}
                        fill={hoodColor}
                        stroke={'#000'}
                        strokeWidth={6}
                        viewBox="0 0 551 580"
                        />
                    </View>
                    <View style={styles.bottomElementsBack}>
                        <BackHoodPattern 
                        width={iconSize}
                        height={iconSize}
                        fill={hoodPatternColor}
                        viewBox="0 0 551 580"
                        />
                    </View>
                </View>
            )
        }
    }

    return (
        <View>
            { renderJacket() }
        </View>
    )
};

const styles = StyleSheet.create({
        topElement: {
            position: 'relative',
          },
          topElementBack: {
            position: 'relative',
            paddingTop: gPadding
          },
          bottomElements: {
            position: 'absolute',
          },
          bottomElementsBack: {
            position: 'absolute',
            paddingTop: gPadding
          },
    });

export default JacketRender;