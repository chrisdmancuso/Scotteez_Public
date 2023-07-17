import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Menu, Provider, List, Surface } from 'react-native-paper';
import AppContext from './AppContext';
import ColorButton from './ColorButton';

const SchoolName = (props) => {
  const [visible, setVisible] = useState(false);
  const [schoolName, setSchoolName] = useState('Custom');

  const currentContext = useContext(AppContext);
  

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);


  const itemSelect = (name, index) => {
    setSchoolName(name);

    const colorList = global.schoolList[index]['allColors']
    currentContext.setJacketColor(colorList[0]);
    currentContext.setSleeveColor(colorList[1]);
    currentContext.setPocketColor(colorList[2]);
    currentContext.setButtonColor(colorList[3]);
    currentContext.setHoodColor(colorList[4]);
    currentContext.setHoodPatternColor(colorList[5]);
    currentContext.setPrimaryKnitColor(colorList[6]);
    currentContext.setSecondaryKnitColor(colorList[7]);
    currentContext.setAccentKnitColor(colorList[8]);
    if (name == 'Grayson' || name == 'Tucker_High' || name == 'Park_View_High_School') {
      currentContext.setCurrentPattern('Pattern2');
    } else {
      currentContext.setCurrentPattern('PatternA');
    }
    
    
    closeMenu();
  };

  const findColor = (choice) => {
    let color;
    if (choice === 'color'){
      global.schoolList.forEach(e => e['name'] === schoolName ? color = (e['mainColor']): null )
    }
    if (choice === 'button'){
      global.schoolList.forEach(e => e['name'] === schoolName ? color = (e['primaryColors']): null )
    }
    return color;
  };
  return (
    <Provider>
      <View style={{height: '100%'}}>
        <Surface style={{borderRadius: 10, borderColor: findColor('color')}}>
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          style={{left: 0, top: 35, width: '100%'}}
          anchor={<Button style={{
            borderColor: findColor('color'),
            borderWidth: 2,
            borderRadius: 10,
            backgroundColor: '#ffffff',
            
          }} onPress={openMenu}><Text style={{color: findColor('color')}}>{ schoolName.replace(/_/g, " ") } </Text></Button>}>
          {global.schoolList.map((schools, index) => {
            return (
              <List.Item key={index} onPress={() => {itemSelect(schools['name'], index)}} title={schools['name'].replace(/_/g, " ")}/>
            )
          })}
        </Menu>
        </Surface>
        <View style={styles.container}>
          <View style={styles.emptySpace}>
          </View>
          <View style={styles.btnRow}>
            {findColor('button').map((color, index) => {
                  return (
                    <ColorButton
                      key={index}
                      color={color}
                      selectedColor={undefined}
                      onPress={() => {}}
                    />
                  );
              })}
          </View>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  btnRow: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '15%'
  },
  emptySpace : {
    height: '100%',
    width: '100%',
    flex: 9,
  },
  container: {
    flexDirection: 'row'
  }
})
export default SchoolName;