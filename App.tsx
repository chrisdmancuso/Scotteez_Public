import React, { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Surface } from 'react-native-paper';
import * as Device from 'expo-device';
import * as ScreenOrientation from 'expo-screen-orientation';
import SchoolName from './components/SchoolName';
import ColorButton from './components/ColorButton';
import KnitButton from './components/PatternButton';
import JacketRender from './components/JacketRender';
import AppContext from './components/AppContext';
import Accordion from './components/Accordion';
import './global.js'

//Screen lock
async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
}

changeScreenOrientation()

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
let iconSizeVar = Math.round(width * .6);
if (global.modelList.includes(Device.modelName)) {
  if (width > 926) {
    iconSizeVar = Math.round(width * .5);
  } else {
    iconSizeVar = Math.round(width * .3);
  }
} else {
  if (width > 926) {
  } else {
    iconSizeVar = Math.round(width * .4);
  }
}

//Accordion size
const width3 = width * 0.3

//Main function
export default function App() {
  const [jacketColor, setJacketColor] = useState(global.colors[7]['color']);
  const [sleeveColor, setSleeveColor] = useState(global.colors[4]['color']);
  const [pocketColor, setPocketColor] = useState(global.colors[10]['color']);
  const [buttonColor, setButtonColor] = useState(global.colors[10]['color']);
  const [hoodColor, setHoodColor] = useState(global.colors[7]['color']);
  const [hoodPatternColor, setHoodPatternColor] = useState(global.colors[3]['color']);
  const [primaryKnitColor, setPrimaryKnitColor] = useState(global.colors[0]['color']);
  const [secondaryKnitColor, setSecondaryKnitColor] = useState(global.colors[4]['color']);
  const [accentKnitColor, setAccentKnitColor] = useState(global.colors[10]['color']);
  const [flipJacket, setFlipJacket] = useState(0);
  const [gender, setGender] = useState(0);
  const [currentPattern, setCurrentPattern] = useState(global.patterns[13]['pattern']);
  const [iconSizeState, setIconSizeState] = useState(iconSizeVar)

  //set context for global state vars
  const context = {
    jacketColor: jacketColor,
    sleeveColor: sleeveColor,
    pocketColor: pocketColor,
    buttonColor: buttonColor,
    hoodColor: hoodColor,
    hoodPatternColor: hoodPatternColor,
    primaryKnitColor: primaryKnitColor,
    secondaryKnitColor: secondaryKnitColor,
    accentKnitColor: accentKnitColor,
    currentPattern: currentPattern,
    setJacketColor,
    setSleeveColor,
    setPocketColor,
    setButtonColor,
    setHoodColor,
    setHoodPatternColor,
    setPrimaryKnitColor,
    setSecondaryKnitColor,
    setAccentKnitColor,
    setCurrentPattern,
  };

  const hoodPatternColorPicker = () => {
    if (gender === 1) {
      return (
        <View>
          <View>
            <Accordion
            title={'Hood Color: '}
            colorName={global.colors[global.colors.map(e => e.color).indexOf(hoodColor)]['name']}
            width={width3}
            color={hoodColor}
            data={global.colors.map((color, index) => {
              return (
                <ColorButton
                  key={index}
                  color={color['color']}
                  selectedColor={hoodColor} 
                  onPress={setHoodColor}
                />
              )
            })}/>
        </View>
        <View>
            <Accordion
            title={'Hood Pattern Color: '}
            colorName={global.colors[global.colors.map(e => e.color).indexOf(hoodPatternColor)]['name']}
            width={width3}
            color={hoodPatternColor}
            data={global.colors.map((color, index) => {
              return (
                <ColorButton
                  key={index}
                  color={color['color']}
                  selectedColor={hoodPatternColor} 
                  onPress={setHoodPatternColor}
                />
              )
            })}/>
        </View>
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={{flex:1}}>
    <AppContext.Provider value={context}>
    <View style={styles.container}>
      {/*  Left Container -> Color Pickers */}
      <Surface style={styles.leftContainer}>
        <ScrollView style={{flex:1}}>
        <View>
            <Accordion
            title={'Jacket Color: '}
            colorName={global.colors[global.colors.map(e => e.color).indexOf(jacketColor)]['name']}
            width={width3}
            color={jacketColor}
            data={global.colors.map((color, index) => {
              return (
                <ColorButton
                  key={index}
                  color={color['color']}
                  selectedColor={jacketColor} 
                  onPress={setJacketColor}
                />
              )
            })}/>
        </View>
      <View>
        <Accordion 
        title={'Sleeve Color: '}
        colorName={global.colors[global.colors.map(e => e.color).indexOf(sleeveColor)]['name']}
        width={width3}
        color={sleeveColor}
        data={global.colors.map((color, index) => {
          return (
            <ColorButton
              key={index}
              color={color['color']}
              selectedColor={sleeveColor}
              onPress={setSleeveColor}
            />
          );
        })}
        />
      </View>
      <View>
        <Accordion
        title={'Pocket Color: '}
        colorName={global.colors[global.colors.map(e => e.color).indexOf(pocketColor)]['name']}
        width={width3}
        color={pocketColor}
        data={global.colors.map((color, index) => {
            return (
              <ColorButton
                key={index}
                color={color['color']}
                selectedColor={pocketColor}
                onPress={setPocketColor}
              />
            );
          })} 
        />
      </View>
      <View>
        <Accordion
        title={'Button Color: '}
        colorName={global.colors[global.colors.map(e => e.color).indexOf(buttonColor)]['name']}
        width={width3}
        color={buttonColor}
        data={global.colors.map((color, index) => {
          return (
            <ColorButton
              key={index}
              color={color['color']}
              selectedColor={buttonColor} 
              onPress={setButtonColor}
            />
              )
            })}/>
      </View>
      { hoodPatternColorPicker() }
      <View>
          <Accordion
          title={'Current Pattern: '}
          colorName={currentPattern}
          width={width3}
          data={global.patterns.map((pattern, index) => {
              return (
                <TouchableOpacity
                key={index}
                onPress={() => {setCurrentPattern(pattern['pattern']);}}
                >
                  <KnitButton 
                    key={index}
                    pattern={pattern['pattern']}
                    selectedPattern={currentPattern}
                    width={70}
                    height={70}
                    fill={primaryKnitColor}
                    fillSecondary={secondaryKnitColor}
                    fillThird={accentKnitColor} 
                    />
                </TouchableOpacity>
              )
            })} 
          />
        </View>
      <View>
        <Accordion
        title={'Primary Knit Color: '} 
        colorName={global.colors[global.colors.map(e => e.color).indexOf(primaryKnitColor)]['name']}
        width={width3}
        color={primaryKnitColor}
        data={global.colors.map((color, index) => {
            return (
              <ColorButton
                key={index}
                color={color['color']}
                selectedColor={primaryKnitColor}
                onPress={setPrimaryKnitColor}
              />
            );
          })}
        />
        <View>
          <Accordion 
          title={'Secondary Knit Color: '}
          colorName={global.colors[global.colors.map(e => e.color).indexOf(secondaryKnitColor)]['name']}
          width={width3}
          color={secondaryKnitColor}
          data={global.colors.map((color, index) => {
            return (
              <ColorButton
                key={index}
                color={color['color']}
                selectedColor={secondaryKnitColor}
                onPress={setSecondaryKnitColor}
              />
            );
          })}
          />
        </View>
        <View>
          <Accordion
          title={'Accent Knit Color: '} 
          colorName={global.colors[global.colors.map(e => e.color).indexOf(accentKnitColor)]['name']}
          width={width3}
          color={accentKnitColor}
          data={global.colors.map((color, index) => {
            return (
              <ColorButton
                key={index}
                color={color['color']}
                selectedColor={accentKnitColor}
                onPress={setAccentKnitColor}
              />
            );
          })}
          />
        </View>
      </View>
      
      
      </ScrollView><View style={styles.hr}></View><TouchableOpacity
        onPress={() => {
          if (gender === 0) {
            setGender(1);
          }
          if (gender === 1) {
            setGender(0);
          }
        }}
        style={{backgroundColor: '#b9b9b9', alignItems: 'center'}}>
          <Text style={{color: '#fafdfd', fontSize: 18, padding: 6, textTransform: 'uppercase'}}>
            swap gender
          </Text>
        </TouchableOpacity>
      </Surface>
      {/* Right Container -> School Name -> Jacket -> Jacket Swap Button */}
      <Surface style={styles.rightContainer}>
        {/* School Name */}
        <View style={styles.schoolNameContainer}>
          <SchoolName />
        </View>
      <View style={styles.jacketContainer}>
        <JacketRender 
          iconSize={iconSizeState}
          jacketColor={jacketColor}
          sleeveColor={sleeveColor}
          pocketColor={pocketColor}
          buttonColor={buttonColor}
          hoodColor={hoodColor}
          hoodPatternColor={hoodPatternColor}
          primaryKnitColor={primaryKnitColor}
          secondaryKnitColor={secondaryKnitColor}
          accentKnitColor={accentKnitColor}
          currentPattern={currentPattern}
          gender={gender}
          flipJacket={flipJacket}
          />
        </View>
        <View style={styles.hr}></View>
        <TouchableOpacity
        onPress={() => {
          if (flipJacket === 0) {
            setFlipJacket(1);
          }
          if (flipJacket === 1) {
            setFlipJacket(0);
          }
        }}
        style={{backgroundColor: '#b9b9b9', alignItems: 'center'}}>
          <Text style={{color: '#fafdfd', fontSize: 18, padding: 6, textTransform: 'uppercase'}}>
            front/back
          </Text>
        </TouchableOpacity>
      </Surface>
    </View>
    </AppContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //Main View
  container: {
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    flex: 1
  },
  //END MAIN VIEW
  /******************/
  //Main Containers
  //Left Container
  leftContainer: {
    flex: 3,
    backgroundColor: '#ffffff',
  },
  //Right Container
  rightContainer: {
    flex: 7,
    backgroundColor: '#ffffff'
  },
  schoolNameContainer: {
    flex: 1,
    zIndex:1,
  },
  //END MAIN CONTAINERS
  /******************/
  //Right Children
  //Jacket View
  jacketContainer: {
    flex: 8,
    alignItems: 'center',
  },
  hr:{
    height:2,
    backgroundColor: '#000000',
    width:'100%',
    marginTop: 2,
    marginBottom: 2,
},
  //END RIGHT CHILDREN
  /******************/
  colorsContainer: {
    marginTop: 10,
    width: '100%',
    alignItems: 'flex-start',
  },
  bold: {
    fontWeight: 'bold'
  }
})
