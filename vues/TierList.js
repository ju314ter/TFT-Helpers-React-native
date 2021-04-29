import React, {Fragment, Component} from 'react';
import {Platform, SafeAreaView, ScrollView, StyleSheet, Text, View, Button, Image} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator, createStackNavigator } from "react-navigation";
import {originIcons, classIcons, championImages, complexObjects, tabBarIconsObjets} from '../constants/images'

const styles = StyleSheet.create({
  containerTier : {
    width: '95%',
    flexDirection: 'row',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop : 15,
    marginBottom : 15,
  },
  tierRank : {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#004a3f',
    color: 'white',
  },
  rankTierLetter: {
    color: 'white',
  },
  champsContainer : {
    flex: 0.8,
    backgroundColor : '#48a69733',
    justifyContent : 'center',
    alignItems : 'center',
    flexDirection: 'row',
    flexWrap : 'wrap',
  },
  champIcon : {
    height : 35,
    width: 35,
    margin : 1,
  }

})
class Champions extends Component {
    render(){
      return (
        <ScrollView>
            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>S</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={championImages.icons.kennen} />
                <Image style={styles.champIcon} source={championImages.icons.volibear} />
                <Image style={styles.champIcon} source={championImages.icons.akali} />
                <Image style={styles.champIcon} source={championImages.icons.chogath} />
                <Image style={styles.champIcon} source={championImages.icons.kayle} />
                <Image style={styles.champIcon} source={championImages.icons.swain} />
                <Image style={styles.champIcon} source={championImages.icons.yasuo} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>A</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={championImages.icons.tristana} />
                <Image style={styles.champIcon} source={championImages.icons.braum} />
                <Image style={styles.champIcon} source={championImages.icons.lucian} />
                <Image style={styles.champIcon} source={championImages.icons.pyke} />
                <Image style={styles.champIcon} source={championImages.icons.shen} />
                <Image style={styles.champIcon} source={championImages.icons.varus} />
                <Image style={styles.champIcon} source={championImages.icons.zed} />
                <Image style={styles.champIcon} source={championImages.icons.aatrox} />
                <Image style={styles.champIcon} source={championImages.icons.ashe} />
                <Image style={styles.champIcon} source={championImages.icons.morgana} />
                <Image style={styles.champIcon} source={championImages.icons.shyvana} />
                <Image style={styles.champIcon} source={championImages.icons.draven} />
                <Image style={styles.champIcon} source={championImages.icons.gnar} />
                <Image style={styles.champIcon} source={championImages.icons.kindred} />
                <Image style={styles.champIcon} source={championImages.icons.sejuani} />
                <Image style={styles.champIcon} source={championImages.icons.anivia} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>B</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={championImages.icons.garen} />
                <Image style={styles.champIcon} source={championImages.icons.graves} />
                <Image style={styles.champIcon} source={championImages.icons.kassadin} />
                <Image style={styles.champIcon} source={championImages.icons.khazix} />
                <Image style={styles.champIcon} source={championImages.icons.ahri} />
                <Image style={styles.champIcon} source={championImages.icons.blitzcrank} />
                <Image style={styles.champIcon} source={championImages.icons.lulu} />
                <Image style={styles.champIcon} source={championImages.icons.gangplank} />
                <Image style={styles.champIcon} source={championImages.icons.poppy} />
                <Image style={styles.champIcon} source={championImages.icons.rengar} />
                <Image style={styles.champIcon} source={championImages.icons.aurelion_sol} />
                <Image style={styles.champIcon} source={championImages.icons.brand} />
                <Image style={styles.champIcon} source={championImages.icons.karthus} />
                <Image style={styles.champIcon} source={championImages.icons.miss_fortune} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>C</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={championImages.icons.darius} />
                <Image style={styles.champIcon} source={championImages.icons.elise} />
                <Image style={styles.champIcon} source={championImages.icons.fiora} />
                <Image style={styles.champIcon} source={championImages.icons.nidalee} />
                <Image style={styles.champIcon} source={championImages.icons.vayne} />
                <Image style={styles.champIcon} source={championImages.icons.evelynn} />
                <Image style={styles.champIcon} source={championImages.icons.leona} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>D</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={championImages.icons.mordekaiser} />
                <Image style={styles.champIcon} source={championImages.icons.warwick} />
                <Image style={styles.champIcon} source={championImages.icons.lissandra} />
                <Image style={styles.champIcon} source={championImages.icons.reksai} />
                <Image style={styles.champIcon} source={championImages.icons.twisted_fate} />
                <Image style={styles.champIcon} source={championImages.icons.katarina} />
                <Image style={styles.champIcon} source={championImages.icons.veigar} />
              </View>
            </View>


        </ScrollView>
      )
    }
  }
class Objets extends Component {
    render(){
      return (
        <ScrollView>
            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>S</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={tabBarIconsObjets.arc} />
                <Image style={styles.champIcon} source={complexObjects.canon_ultrarapide} />
                <Image style={styles.champIcon} source={complexObjects.phantom_dancer} />
                <Image style={styles.champIcon} source={complexObjects.dervish} />
                <Image style={styles.champIcon} source={complexObjects.griffe} />
                <Image style={styles.champIcon} source={complexObjects.seraph} />
                <Image style={styles.champIcon} source={complexObjects.force_nature} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>A</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={tabBarIconsObjets.cote_de_maille} />
                <Image style={styles.champIcon} source={tabBarIconsObjets.larme} />
                <Image style={styles.champIcon} source={tabBarIconsObjets.spatule} />
                <Image style={styles.champIcon} source={complexObjects.lame_infinie} />
                <Image style={styles.champIcon} source={complexObjects.pistolame} />
                <Image style={styles.champIcon} source={complexObjects.shojin} />
                <Image style={styles.champIcon} source={complexObjects.ange_guardien} />
                <Image style={styles.champIcon} source={complexObjects.zeke} />
                <Image style={styles.champIcon} source={complexObjects.guinsoo} />
                <Image style={styles.champIcon} source={complexObjects.solari} />
                <Image style={styles.champIcon} source={complexObjects.briseur} />
                <Image style={styles.champIcon} source={complexObjects.buff_rouge} />
                <Image style={styles.champIcon} source={complexObjects.ionic} />
                <Image style={styles.champIcon} source={complexObjects.morellonomicon} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>B</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={tabBarIconsObjets.bf} />
                <Image style={styles.champIcon} source={tabBarIconsObjets.negatron} />
                <Image style={styles.champIcon} source={complexObjects.bt} />
                <Image style={styles.champIcon} source={complexObjects.statick} />
                <Image style={styles.champIcon} source={complexObjects.coeur_gele} />
                <Image style={styles.champIcon} source={complexObjects.zephyr} />
                <Image style={styles.champIcon} source={complexObjects.rabadon} />
                <Image style={styles.champIcon} source={complexObjects.redemption} />
                <Image style={styles.champIcon} source={complexObjects.warmog} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>C</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={tabBarIconsObjets.baguette} />
                <Image style={styles.champIcon} source={tabBarIconsObjets.ceinture} />
                <Image style={styles.champIcon} source={complexObjects.thornmail} />
                <Image style={styles.champIcon} source={complexObjects.silence} />
                <Image style={styles.champIcon} source={complexObjects.luden} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>D</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={complexObjects.epee_divin} />
                <Image style={styles.champIcon} source={complexObjects.hydre_titanic} />
                <Image style={styles.champIcon} source={complexObjects.runaan} />
              </View>
            </View>

        </ScrollView>
      )
    }
  }
class Origine extends Component {
    render(){
      return (
        <ScrollView>
            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>S</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={originIcons.demon} />
                <Image style={styles.champIcon} source={originIcons.dragon} />
                <Image style={styles.champIcon} source={originIcons.imperial} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>A</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={originIcons.exile} />
              <Image style={styles.champIcon} source={originIcons.glacial} />
              <Image style={styles.champIcon} source={originIcons.ninja} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>B</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={originIcons.pirate} />
              <Image style={styles.champIcon} source={originIcons.robot} />
              <Image style={styles.champIcon} source={originIcons.yordle} />
              <Image style={styles.champIcon} source={originIcons.noble} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>C</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={originIcons.phantome} />
              <Image style={styles.champIcon} source={originIcons.sauvage} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>D</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={originIcons.void} />
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
            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>S</Text>
              </View>
              <View style={styles.champsContainer}>
                <Image style={styles.champIcon} source={classIcons.bagarreur} />
                <Image style={styles.champIcon} source={classIcons.blademaster} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>A</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={classIcons.sorcier} />
                <Image style={styles.champIcon} source={classIcons.pistolero} />
                <Image style={styles.champIcon} source={classIcons.guardien} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>B</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={classIcons.ranger} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>C</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={classIcons.chevalier} />
              </View>
            </View>

            <View style={styles.containerTier}>
              <View style={styles.tierRank}>
                <Text style={styles.rankTierLetter}>D</Text>
              </View>
              <View style={styles.champsContainer}>
              <Image style={styles.champIcon} source={classIcons.assassin} />
                <Image style={styles.champIcon} source={classIcons.shapeshifter} />
                <Image style={styles.champIcon} source={classIcons.elementaliste} />
              </View>
            </View>
        </ScrollView>
      )
    }
  }
class DropRate extends Component {
    state = {
      dropRateArray : {
        lvl_1 : [100,0,0,0,0],
        lvl_2 : [100,0,0,0,0],
        lvl_3 : [70,30,0,0,0],
        lvl_4 : [55,30,15,0,0],
        lvl_5 : [40,30,25,5,0],
        lvl_6 : [29,29.5,31,10,0.5],
        lvl_7 : [24,28,31,15,2],
        lvl_8 : [20,24,31,20,5],
        lvl_9 : [10,19,31,30,10],
      }
    }
    render(){
      return (
        <View style={{height: '100%', marginLeft: 10, marginRight: 10, justifyContent: 'center'}}>
            <View style={{backgroundColor : '#004a3f', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Text style={{color: 'white'}}>Niveau</Text>
                <Text style={{color: 'white'}}>Tier 1</Text>
                <Text style={{color: 'cyan'}}>Tier 2</Text>
                <Text style={{color: 'green'}}>Tier 3</Text>
                <Text style={{color: 'violet'}}>Tier 4</Text>
                <Text style={{color: 'orange'}}>Tier 5</Text>
            </View>
            {Object.keys(this.state.dropRateArray).map((key,index)=>{
              return (
              <View style={{backgroundColor : '#48a69733', flexDirection: 'row', justifyContent: 'space-between',}}>
                <Text style={{color: 'white', padding: 1}}>{key}</Text>
                {this.state.dropRateArray[key].map((dropValue)=>{
                  return <Text style={{color: 'white', padding: 1}}>{dropValue}%</Text>
                })}
              </View>
              )
            })}
        </View>
      )
    }
  }

export default TierListNavigator = createMaterialTopTabNavigator({
    Champions,
    Objets,
    Origine,
    Classe,
    DropRate
  },
  {
    InitialRouteName : "Champions",
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