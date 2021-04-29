import React, {Fragment, Component} from 'react';
import {Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";

import {originIcons, classIcons, championImages} from '../constants/images'

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
  champImg : {
    width: 50,
    height: 50,
    borderRadius : 10,
  },
  container : {
    position: 'relative',
    margin : 15,
    borderRadius: 10,
    flexDirection : 'column',
    flexWrap : 'wrap',
  },
  topBar : {
    flexDirection : 'row',
    justifyContent: 'center',
    alignItems : 'center',
    backgroundColor: '#004a3f',
    color: 'white',
  },
  mainContent : {
    paddingTop: 5,
    color: 'white',
    backgroundColor: '#48a69733',
  },
  champsContainer : {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  titleText : {
    color: 'white',
  },
  descriptionText : {
    textAlign: 'center',
    color: 'white',
  },
  descriptionContainer : {
    minWidth: '100%',
  }

})
class Origine extends Component {
    render(){
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.demon} style={styles.icon}/>
              <Text style={styles.titleText}>Demon</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.varus}/>
                <Image style={styles.champImg} source={championImages.icons.elise}/>
                <Image style={styles.champImg} source={championImages.icons.aatrox}/>
                <Image style={styles.champImg} source={championImages.icons.evelynn}/>
                <Image style={styles.champImg} source={championImages.icons.morgana}/>
                <Image style={styles.champImg} source={championImages.icons.brand}/>
                <Image style={styles.champImg} source={championImages.icons.swain}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) 20%, (4x) 35%, (6x) 60% de chance de bruler la mana de la cible et d'infliger ce mana sous forme de dégats brut</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.glacial} style={styles.icon}/>
              <Text  style={styles.titleText}>Glacial</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.lissandra}/>
                <Image style={styles.champImg} source={championImages.icons.braum}/>
                <Image style={styles.champImg} source={championImages.icons.ashe}/>
                <Image style={styles.champImg} source={championImages.icons.volibear}/>
                <Image style={styles.champImg} source={championImages.icons.sejuani}/>
                <Image style={styles.champImg} source={championImages.icons.anivia}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) 25%, (4x) 30%, (6x) 45% de chance d'étourdir pendant 2 scd à chaque coup</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.imperial} style={styles.icon}/>
              <Text  style={styles.titleText}>Impérial</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.darius}/>
                <Image style={styles.champImg} source={championImages.icons.katarina}/>
                <Image style={styles.champImg} source={championImages.icons.draven}/>
                <Image style={styles.champImg} source={championImages.icons.swain}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) 1 impérial, (4x) tout les impériaux infligent 2x plus de dégats</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.noble} style={styles.icon}/>
              <Text  style={styles.titleText}>Noble</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.vayne}/>
                <Image style={styles.champImg} source={championImages.icons.fiora}/>
                <Image style={styles.champImg} source={championImages.icons.garen}/>
                <Image style={styles.champImg} source={championImages.icons.lucian}/>
                <Image style={styles.champImg} source={championImages.icons.leona}/>
                <Image style={styles.champImg} source={championImages.icons.kayle}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x) 1 allié, (6x) tout les alliés gagnent 60 d'armure et des résistance magique ainsi que 35 pv/coup</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.yordle} style={styles.icon}/>
              <Text style={styles.titleText}>Yordle</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.tristana}/>
                <Image style={styles.champImg} source={championImages.icons.lulu}/>
                <Image style={styles.champImg} source={championImages.icons.kennen}/>
                <Image style={styles.champImg} source={championImages.icons.poppy}/>
                <Image style={styles.champImg} source={championImages.icons.veigar}/>
                <Image style={styles.champImg} source={championImages.icons.gnar}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x) 30%, (6x) 55% de chance d'esquiver pour les Yordles. Esquive aussi les effets on-hit</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.pirate} style={styles.icon}/>
              <Text  style={styles.titleText}>Pirate</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.graves}/>
                <Image style={styles.champImg} source={championImages.icons.pyke}/>
                <Image style={styles.champImg} source={championImages.icons.gangplank}/>
                <Image style={styles.champImg} source={championImages.icons.twisted_fate}/>
                <Image style={styles.champImg} source={championImages.icons.miss_fortune}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x) Gagne jusqu'a 4 gold après chaque round (en moyenne: 1.75)</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.phantome} style={styles.icon}/>
              <Text  style={styles.titleText}>Phantome</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.mordekaiser}/>
                <Image style={styles.champImg} source={championImages.icons.kindred}/>
                <Image style={styles.champImg} source={championImages.icons.karthus}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) Met un ennemi aléatoire à 100pv</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.ninja} style={styles.icon}/>
              <Text  style={styles.titleText}>Ninja</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.zed}/>
                <Image style={styles.champImg} source={championImages.icons.shen}/>
                <Image style={styles.champImg} source={championImages.icons.kennen}/>
                <Image style={styles.champImg} source={championImages.icons.akali}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(1x) +40 (unique) , (4x) 60 de dégats physiques et magiques pour tout les ninjas</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.void} style={styles.icon}/>
              <Text  style={styles.titleText}>du Vide</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.kassadin}/>
                <Image style={styles.champImg} source={championImages.icons.khazix}/>
                <Image style={styles.champImg} source={championImages.icons.reksai}/>
                <Image style={styles.champImg} source={championImages.icons.chogath}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x) Les attaques font des dégats bruts</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.sauvage} style={styles.icon}/>
              <Text  style={styles.titleText}>Sauvage</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.warwick}/>
                <Image style={styles.champImg} source={championImages.icons.nidalee}/>
                <Image style={styles.champImg} source={championImages.icons.ahri}/>
                <Image style={styles.champImg} source={championImages.icons.rengar}/>
                <Image style={styles.champImg} source={championImages.icons.gnar}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) les Sauvages, (4) Tout les alliés gagnent 10% de vitesse d'attaque</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.exile} style={styles.icon}/>
              <Text  style={styles.titleText}>Exilé</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.yasuo}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(1x) Gagne un bouclier de 100% de ses PV si pas d'allié adjacent au début du round</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.robot} style={styles.icon}/>
              <Text style={styles.titleText}>Robot</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.blitzcrank}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(1x) Les robots démarrent à mana maximum</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={originIcons.dragon} style={styles.icon}/>
              <Text style={styles.titleText}>Dragon</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.shyvana}/>
                <Image style={styles.champImg} source={championImages.icons.varus}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) Les dragons réduisent de 83% les dégats magiques</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      )
    }
  }
class Classe extends Component {
    render(){
      return (
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.assassin} style={styles.icon}/>
              <Text style={styles.titleText}>Assassin</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.khazix}/>
                <Image style={styles.champImg} source={championImages.icons.zed}/>
                <Image style={styles.champImg} source={championImages.icons.pyke}/>
                <Image style={styles.champImg} source={championImages.icons.evelynn}/>
                <Image style={styles.champImg} source={championImages.icons.katarina}/>
                <Image style={styles.champImg} source={championImages.icons.rengar}/>
                <Image style={styles.champImg} source={championImages.icons.akali}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x) +150%, (6x) 350% de dégats des coups critiques</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.blademaster} style={styles.icon}/>
              <Text style={styles.titleText}>Blademaster</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.fiora}/>
                <Image style={styles.champImg} source={championImages.icons.shen}/>
                <Image style={styles.champImg} source={championImages.icons.aatrox}/>
                <Image style={styles.champImg} source={championImages.icons.gangplank}/>
                <Image style={styles.champImg} source={championImages.icons.draven}/>
                <Image style={styles.champImg} source={championImages.icons.yasuo}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>35% de chance de faire (3x) deux attaques, (6x) trois attaques, (9x) 4 attaques</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.bagarreur} style={styles.icon}/>
              <Text style={styles.titleText}>Bagarreur</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.warwick}/>
                <Image style={styles.champImg} source={championImages.icons.blitzcrank}/>
                <Image style={styles.champImg} source={championImages.icons.reksai}/>
                <Image style={styles.champImg} source={championImages.icons.volibear}/>
                <Image style={styles.champImg} source={championImages.icons.chogath}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) 300, (4x) 700, (6x) 1200 PV bonus pour les bagarreurs</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.elementaliste} style={styles.icon}/>
              <Text style={styles.titleText}>Elémentalistes</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.lissandra}/>
                <Image style={styles.champImg} source={championImages.icons.kennen}/>
                <Image style={styles.champImg} source={championImages.icons.brand}/>
                <Image style={styles.champImg} source={championImages.icons.anivia}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x) Les élémentalistes gagnent deux fois plus de mana par attaque et invoquent un Golem</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.guardien} style={styles.icon}/>
              <Text style={styles.titleText}>Gardien</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.braum}/>
                <Image style={styles.champImg} source={championImages.icons.leona}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) +50 armure aux alliés adjacents, cumulable indéfiniment</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.pistolero} style={styles.icon}/>
              <Text style={styles.titleText}>Pistolero</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.graves}/>
                <Image style={styles.champImg} source={championImages.icons.tristana}/>
                <Image style={styles.champImg} source={championImages.icons.lucian}/>
                <Image style={styles.champImg} source={championImages.icons.gangplank}/>
                <Image style={styles.champImg} source={championImages.icons.miss_fortune}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>50% de chance d'attaquer (2x/6x) 1/3 cible additionelle, (4x) tout les ennemis à portée</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.chevalier} style={styles.icon}/>
              <Text style={styles.titleText}>Chevalier</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.darius}/>
                <Image style={styles.champImg} source={championImages.icons.garen}/>
                <Image style={styles.champImg} source={championImages.icons.mordekaiser}/>
                <Image style={styles.champImg} source={championImages.icons.poppy}/>
                <Image style={styles.champImg} source={championImages.icons.sejuani}/>
                <Image style={styles.champImg} source={championImages.icons.kayle}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>Votre équipe bloque (2x) 15 , (4x) 30, (6x) 55 dégats des toutes les sources</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.ranger} style={styles.icon}/>
              <Text style={styles.titleText}>Ranger</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.vayne}/>
                <Image style={styles.champImg} source={championImages.icons.varus}/>
                <Image style={styles.champImg} source={championImages.icons.ashe}/>
                <Image style={styles.champImg} source={championImages.icons.kindred}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(2x) 25%, (4x) 65% de chances de doubler la vitesse d'attaque pour 3 seconde à chaque attaque</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.shapeshifter} style={styles.icon}/>
              <Text style={styles.titleText}>Changeforme</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.nidalee}/>
                <Image style={styles.champImg} source={championImages.icons.elise}/>
                <Image style={styles.champImg} source={championImages.icons.shyvana}/>
                <Image style={styles.champImg} source={championImages.icons.gnar}/>
                <Image style={styles.champImg} source={championImages.icons.swain}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x/6x) Les Changeformes gagnent 60/120% de leurs PV maximum lors de leur transformation</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.topBar}>
              <Image source={classIcons.sorcier} style={styles.icon}/>
              <Text style={styles.titleText}>Sorcier</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.champsContainer}>
                <Image style={styles.champImg} source={championImages.icons.kassadin}/>
                <Image style={styles.champImg} source={championImages.icons.ahri}/>
                <Image style={styles.champImg} source={championImages.icons.lulu}/>
                <Image style={styles.champImg} source={championImages.icons.veigar}/>
                <Image style={styles.champImg} source={championImages.icons.morgana}/>
                <Image style={styles.champImg} source={championImages.icons.aurelion_sol}/>
                <Image style={styles.champImg} source={championImages.icons.karthus}/>
                <Image style={styles.champImg} source={championImages.icons.twisted_fate}/>
              </View>
              <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>(3x) +45%, (6x) +100% de dégats magiques et les Sociers gagnent deux fois plus de mana en attaquant</Text>
              </View>
            </View>
          </View>

        </ScrollView>
      )
    }
  }
  
export default SynergiesNavigator = createMaterialTopTabNavigator({
    Origine,
    Classe,
  },
  {
    InitialRouteName : "Origine",
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
        marginTop: 15,
      },
      activeTintColor: 'white',
      inactiveTintColor: 'lightgrey',
      style: {
        backgroundColor: '#00776933',
      },
    },
  })