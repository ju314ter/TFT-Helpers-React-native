import React, {Component} from 'react';
import {StyleSheet,View, ScrollView, Button, Image, ImageBackground, Modal, TouchableHighlight,} from 'react-native';
import {originIcons, classIcons, championImages, complexObjects} from '../constants/images';
import { Tooltip, Text } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
  },
  itemContainer : {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    width: '80%',
    margin: 40,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor : '#00000099'
  },
  mainModal: {

  },
  modalHeader: {
    flexDirection : 'row',
    height: 100,
    marginTop : 10,
    marginBottom : 10,
  },
  champPropIconContainer: {
    flex : 0.4,
    justifyContent : 'center',
    alignItems : 'center',
  },
  champPropIcon: {
    width : 40,
    height : 40,
  },
  champName : {
    flex : 0.6,
    justifyContent : 'center',
    alignItems : 'center',
    color: 'white',
    alignContent: 'center',
    fontWeight : 'bold',
    fontSize : 22
  },
  champProp: {
    flexDirection : 'row',
    flexWrap : 'nowrap',
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 10,
    marginBottom : 10,
  },
  champStats : {
    flexDirection : 'row',
    marginTop : 10,
    marginBottom : 10,
  },
  leftChampStats : {
    justifyContent : 'center',
    alignItems : 'center',
    flex : 0.5,
  },
  rightChampStats : {
    justifyContent : 'center',
    alignItems : 'center',
    flex : 0.5,
  },
  champRange : {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 10,
    marginBottom : 10,
    
  },
  ultDescription : {
    justifyContent : 'center',
    alignItems : 'center',
    marginTop : 10,
    marginBottom : 10,
    padding : 10,

  },
  recommandedObjects : {
    flexDirection: 'row',
    justifyContent : 'space-evenly'
  },
  img : {
    height: 50,
    width : 50,
  },
  title : {
  }
});

export default class DetailChamp extends Component {
  state = {
    modalVisible: false,
  }

  setModal(visible) {
    this.setState({modalVisible: visible});
  }
  
  render() {
    console.log(this.state.champArray)
      return (
        <View style={styles.container}>

         <Modal
          modalVisible = {this.state.modalVisible}
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>

          <ImageBackground source={this.props.champInfo.img_render} style={{width: '100%', height: '100%'}}>
            <View style={styles.modalContainer}>
              <TouchableHighlight onPress={()=>{this.setModal(false)}}>
                  <View style={styles.mainModal}>
                    <View style={styles.modalHeader}>
                      <View style={styles.champPropIconContainer}>
                        {this.props.champInfo.propIconsArray.map((source)=>{
                          return <Image style={styles.champPropIcon} source={source} />
                        })}
                      </View>
                      <View style={styles.champName}>
                        <Text style={{color: 'white',alignContent: 'center', fontSize : 26, fontWeight : 'bold'}}>
                          {this.props.champInfo.name}
                        </Text>
                        <Text style={{color: 'yellow',alignContent: 'center'}}>
                          Cout : {this.props.champInfo.cout}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.champProp}>
                      <Text style={{color: 'white',alignContent: 'center', fontSize : 16, fontWeight : 'bold'}}>
                        {this.props.champInfo.propArray.map((prop)=>{
                          return " || " + prop.toString() + " || "
                        })}
                      </Text>
                    </View>
                    <View style={styles.champStats}>
                      <View style={styles.leftChampStats}>
                        <Text style={{color: 'white',alignContent: 'center'}}>Vitesse ATK : {this.props.champInfo.as}</Text>
                        <Text style={{color: 'violet',alignContent: 'center'}}>Res.Mag. : {this.props.champInfo.mr}</Text>
                        <Text style={{color: 'orange',alignContent: 'center'}}>Armure : {this.props.champInfo.armure}</Text>
                        <Text style={{color: 'red',alignContent: 'center',fontWeight : 'bold', paddingTop: 5,}}>DMG / niveau :</Text>
                        {this.props.champInfo.dmgArray.map((lvlValue)=>{
                          return <Text style={{color: 'white',alignContent: 'center'}}>{lvlValue}</Text>
                        })}
                      </View>
                      <View style={styles.rightChampStats}>
                        <Text style={{color: 'red',alignContent: 'center',fontWeight : 'bold'}}>DPS / niveau :</Text>
                        {this.props.champInfo.dmgArray.map((lvlValue)=>{
                          return <Text style={{color: 'white',alignContent: 'center'}}>{lvlValue*this.props.champInfo.as}</Text>
                        })}
                        <Text style={{color: 'green',alignContent: 'center',fontWeight : 'bold'}}>HP / niveau :</Text>
                        {this.props.champInfo.hpArray.map((lvlValue)=>{
                          return <Text style={{color: 'white',alignContent: 'center'}}>{lvlValue}</Text>
                        })}
                      </View>
                    </View>
                    <View style={styles.champRange}>
                      <Text style={{color: 'white',alignContent: 'center', fontWeight : 'bold'}}>Portée : {this.props.champInfo.portee}</Text>
                    </View>
                    <View style={styles.ultDescription}>
                      <Text style={{color: 'white',alignContent: 'center', fontWeight: 'bold'}}>ULT : {this.props.champInfo.titreUlt}</Text>
                      <Text style={{color: 'white' ,textAlign: 'center'}}>{this.props.champInfo.descriptionUlt}</Text>
                    </View>
                    <Text style={{marginBottom : 5, color : 'white'}}>Objets recommandés :</Text>
                    <View style={styles.recommandedObjects}>
                      {this.props.champInfo.recommandedItemsArray.map((source)=>{
                        return <Image style={styles.img} source={source}/>
                      })}
                    </View>
                  </View>
              </TouchableHighlight>
            </View>
          </ImageBackground>
          </Modal>

          <TouchableHighlight onPress={()=> this.setModal(true)}>
            <View style={styles.itemContainer}>
              <Image style={styles.img} source={this.props.champInfo.img} />
              <Text style={{color: '#D4D4D4', alignContent: 'center'}}>{this.props.champInfo.name}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
}

  