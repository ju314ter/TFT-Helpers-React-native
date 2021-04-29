import React, {Component} from 'react';
import {Platform, ScrollView, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";


import TabBarObjets from '../components/tabBarObjets'

import {tabBarIconsObjets, complexObjects} from '../constants/images'
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  itemContainer : {
    width: '90%',
    margin: 15,
    flexDirection : 'row',
    borderRadius: 10,
  },
  itemTop : {
    backgroundColor: '#00796b33',
    flex: 0.35,
    paddingTop: 15,
    paddingBottom: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection : 'column',
    textAlignVertical: 'auto',
  },
  itemBot : {
    flex: 0.65,
    backgroundColor: '#004a3f33',
    justifyContent: "center",
  },
  titleItem : {
    textAlign: 'center',
    justifyContent: 'center',
    paddingTop : 10,
    color : 'white',
    fontSize : 20,
    fontWeight: "bold",
    marginBottom : 20,
  },
  descriptionItem : {
    color : 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize : 16,
  },
  imgParam : {
    height: 40,
    width: 40,
    borderRadius : 10,
  }

});

class arc extends Component {
  render(){
    return (
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.epee_divin} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Epée du Divin</Text>
            <Text style={styles.descriptionItem}>Chaque seconde, le porteur a 5% de chance de gagner 100% de chance de coup critique</Text>  
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.canon_ultrarapide} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Canon ultra-rapide</Text>
            <Text style={styles.descriptionItem}>Les attaques du porteur ne peuvent pas être esquivées, la portée du porteur est doublée</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.guinsoo} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Guinsoo</Text>
            <Text style={styles.descriptionItem}>Chaque attaque octroie 3% de vitesse d'attaques. Se cumule indéfiniment</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.statick} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Poignard de Statikk</Text>
            <Text style={styles.descriptionItem}>Toutes les 3 attaques, inflige 100 points de dégats de zone magique au maximum à 3 cibles additionelles</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.phantom_dancer} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Danseur phantome</Text>
            <Text style={styles.descriptionItem}>Le porteur esquive tout les coups critiques</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.dervish} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lame du Derviche</Text>
            <Text style={styles.descriptionItem}>Les attaques ont 20% de chance de réduire le niveau de l'ennemi par 1</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.hydre_titanic} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Hydre titanesque</Text>
            <Text style={styles.descriptionItem}>Les Attaques infligent 10% des points de vie maximum du porteur en dégats de zone</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.botrk} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lame du roi déchu</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un blademaster</Text>
          </View>
        </View>
      </ScrollView>
      )
    }
  }
class baguette extends Component {
    render(){
      return (      
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.pistolame} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Pistolame Hextech</Text>
            <Text style={styles.descriptionItem}>Soigne le porteur 25% de tout les dégats qu'il inflige</Text>  
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.guinsoo} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Guinsoo</Text>
            <Text style={styles.descriptionItem}>Chaque attaque octroie 3% de vitesse d'attaques. Se cumule indéfiniment</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.rabadon} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Coiffe de Rabadon</Text>
            <Text style={styles.descriptionItem}>Augmente la puissance magique du porteur de 50%</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.luden} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Echo de Luden</Text>
            <Text style={styles.descriptionItem}>Les sorts du porteur infligent 200 dégats de zone</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.solari} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Medaillon du Solari d'acier</Text>
            <Text style={styles.descriptionItem}>Le porteur et les deux champions de chaque coté gagnent un bouclier de 250pv pour 4 secondes en début de round</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.ionic} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Etincelle ionique</Text>
            <Text style={styles.descriptionItem}>A chaque fois qu'un ennemi lance un sort, il subit 200 de dégats brut</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.morellonomicon} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Morellonomicon</Text>
            <Text style={styles.descriptionItem}>Les sorts brule l'adversaire, lui infligeant 3% de ses pv max en brulure chaque seconde</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.yuumi} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Yuumi</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un sorcier</Text>
          </View>
        </View>
      </ScrollView>
      )
    }
  }
class bf extends Component {
    render(){
      return (      
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.lame_infinie} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lame de l'infini</Text>
            <Text style={styles.descriptionItem}>Les coups critiques infligent +150% de dégats</Text>  
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.epee_divin} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Epée du Divin</Text>
            <Text style={styles.descriptionItem}>Chaque attaque octroie 3% de vitesse d'attaque. Se cumule indéfiniment</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.pistolame} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Pistolame hextech</Text>
            <Text style={styles.descriptionItem}>Soigne le porteur 25% de tout les dégats qu'il inflige</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.shojin} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lance de Shôjin</Text>
            <Text style={styles.descriptionItem}>Après avoir lancé un sort, le porteur gagne 15% de son mana max par attaque</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.ange_guardien} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Ange guardien</Text>
            <Text style={styles.descriptionItem}>Le porteur ressucite avec 1000 PV</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.bt} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Soif de sang</Text>
            <Text style={styles.descriptionItem}>Le porteur gagne 35% de vol de vie</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.zeke} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Hérault de Zeke</Text>
            <Text style={styles.descriptionItem}>Le porteur et les deux champions de chaque coté gagnent 15% de vitesse d'attaque en début de round</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.youmuu} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lame phantôme de Youmuu</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Assassin</Text>
          </View>
        </View>
      </ScrollView>
      )
    }
  }
class ceinture extends Component {
    render(){
      return (
        <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.zeke} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Hérault de Zeke</Text>
            <Text style={styles.descriptionItem}>Le porteur et les deux champions de chaque coté gagnent 15% de vitesse d'attaque en début de round</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.hydre_titanic} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Hydre titanique</Text>
            <Text style={styles.descriptionItem}>Les attaques infligent 10% des PV max du porteur en dégats de zone</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.morellonomicon} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Morellonomicon</Text>
            <Text style={styles.descriptionItem}>Les sorts brule l'adversaire, lui infligeant 3% de ses pv max en brulure chaque seconde</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.redemption} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Rédemption</Text>
            <Text style={styles.descriptionItem}>Se délenche lorsque la vie du porteur passe sous 25%, soigne tout les alliés prochesde 1000PV</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.buff_rouge} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Buff Rouge</Text>
            <Text style={styles.descriptionItem}>Les attaques du porteur infligent 2.5% des PV max de la cible sous forme de brûlure, les ennemis brulés ne peuvent pas se soigner</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.zephyr} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Zéphyr</Text>
            <Text style={styles.descriptionItem}>Au début du round, isole un ennemi dans les airs pendant 5 secondes</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.warmog} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Warmog</Text>
            <Text style={styles.descriptionItem}>Le porteur 6% de ses points de vie maximum chaque seconde</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.maillet_gele} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Maillet gelé</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Glacial</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}
class cote_de_maille extends Component {
    render(){
      return (
        <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.ange_guardien} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Ange gardien</Text>
            <Text style={styles.descriptionItem}>Réssucite le porteur avec 1000PV</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.phantom_dancer} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Danseur phantome</Text>
            <Text style={styles.descriptionItem}>Le porteur esquive tout les coups critiques</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.solari} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Medaillon du Solari d'acier</Text>
            <Text style={styles.descriptionItem}>Le porteur et les deux champions de chaque coté gagnent un bouclier de 200 en début de round</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.coeur_gele} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Coeur gelé</Text>
            <Text style={styles.descriptionItem}>Réduit la vitesse d'attaque des ennemis adjacents au porteur de 20%</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.thornmail} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Thornmail</Text>
            <Text style={styles.descriptionItem}>Renvoie 100% des dégats mitigés par l'armure en dégats bruts</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.briseur} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Briseur</Text>
            <Text style={styles.descriptionItem}>25% de chance de désarmer</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.buff_rouge} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Buff Rouge</Text>
            <Text style={styles.descriptionItem}>Les attaques du porteur infligent 2.5% des PV max de la cible sous forme de brûlure, les ennemis brulés ne peuvent pas se soigner</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.maillet_gele} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Voeu du Chevalier</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Chevalier</Text>
          </View>
        </View>
      </ScrollView>
      )
    }
  }
  class larme extends Component {
    render(){
      return (        
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.shojin} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lance de Shôjin</Text>
            <Text style={styles.descriptionItem}>Après avoir lancé un sort, le porteur gagne 15% de son mana max par attaque</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.statick} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Poignard de Statikk</Text>
            <Text style={styles.descriptionItem}>Toutes les 3 attaques, inflige 90 points de dégats de zone magique au maximum à 3 cibles additionelles</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.luden} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Echo de Luden</Text>
            <Text style={styles.descriptionItem}>Les sorts du porteur infligent 200 dégats de zone</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.seraph} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Etreinte du Séraphin</Text>
            <Text style={styles.descriptionItem}>Le porteur récupère 20 mana chaque fois qu'un sort est lancé</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.coeur_gele} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Coeur gelé</Text>
            <Text style={styles.descriptionItem}>Réduit la vitesse d'attaque des ennemis adjacents au porteur de 20%</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.silence} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Silence</Text>
            <Text style={styles.descriptionItem}>50% de chance de réduire au silence 3 secondes</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.redemption} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Rédemption</Text>
            <Text style={styles.descriptionItem}>Se délenche lorsque la vie du porteur passe sous 25%, soigne tout les alliés prochesde 1000PV</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.darkin} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Darkin</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Démon</Text>
          </View>
        </View>
      </ScrollView>
      )
    }
  }
  class negatron extends Component {
    render(){
      return (      
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.bt} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Soif de sang</Text>
            <Text style={styles.descriptionItem}>Le porteur gagne 35% de vol de vie</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.dervish} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lame du Dervish</Text>
            <Text style={styles.descriptionItem}>Les attaques ont une chance de réduire le niveau de l'ennemi par 1</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.ionic} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Etincelle ionique</Text>
            <Text style={styles.descriptionItem}>A chaque fois qu'un ennemi lance un sort, il subit 150 de dégats brut</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.silence} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Silence</Text>
            <Text style={styles.descriptionItem}>50% de chance de réduire au silence</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.briseur} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Briseur</Text>
            <Text style={styles.descriptionItem}>25% de chance de désarmer</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.griffe} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Griffe du Dragon</Text>
            <Text style={styles.descriptionItem}>Gagne 83% de résistance aux dégats magiques</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.zephyr} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Zéphyr</Text>
            <Text style={styles.descriptionItem}>Au début du round, isole un ennemi dans les airs pendant 5 secondes</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.runaan} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Ouragan de Runaan</Text>
            <Text style={styles.descriptionItem}>Attaque un ennemi supplémentaire. Les attaques supplémentaires infligent +25% de dégats</Text>
          </View>
        </View>
      </ScrollView>
      )
    }
  }
  class spatule extends Component {
    render(){
      return (
      <ScrollView>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.bf} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.youmuu} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lâme phantome de Youmuu</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Assassin</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.arc} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.botrk} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Lame du roi déchu</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Blademaster</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.baguette} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.yuumi} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Yuumi</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Sorcier</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.larme} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.darkin} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Darkin</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Démon</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.cote_de_maille} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.voeu_chevalier} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Voeu du Chevalier</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Chevalier</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.negatron} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.runaan} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Ouragan de Runaan</Text>
            <Text style={styles.descriptionItem}>Attaque un ennemi supplémentaire. Les attaques supplémentaires infligent +25% de dégats</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.ceinture} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.maillet_gele} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Maillet Gelé</Text>
            <Text style={styles.descriptionItem}>Le porteur devient aussi un Glacial</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <View style={styles.itemTop}>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='plus' type='font-awesome' style={{marginTop: 100}}/>
            <Image source={tabBarIconsObjets.spatule} style={styles.imgParam} />
            <Icon name='arrow-down' type='font-awesome' />
            <Image source={complexObjects.force_nature} style={styles.imgParam}/>
          </View>
          <View style={styles.itemBot}>
            <Text style={styles.titleItem}>Force de la nature</Text>
            <Text style={styles.descriptionItem}>Ajoute un champion au nombre de champion max sur le terrain</Text>
          </View>
        </View>
      </ScrollView>
      )
    }
  }
  
export default ObjetsNavigator = createMaterialTopTabNavigator({
    arc,
    baguette,
    bf,
    ceinture,
    cote_de_maille,
    larme,
    negatron,
    spatule,
  },
  {
    InitialRouteName : "arc",
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        marginTop: 15,
      },
      activeTintColor: 'grey',
      inactiveTintColor: 'lightgrey',
      style: {
        backgroundColor: 'white',
      },
    },
    tabBarComponent : props => <TabBarObjets {...props} />,
  })