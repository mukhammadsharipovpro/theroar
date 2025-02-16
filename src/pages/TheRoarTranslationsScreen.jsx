import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import TheRoarHeader from '../components/TheRoarHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
      </View>
      <Text style={styles.matchTime}>{time}</Text>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <TheRoarHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Six Nations', '02.07 18:30', 'Ireland \n' + 'Wales')}
        {renderBroadcast('Six Nations', '05.07 20:00', 'England \n' + 'France')}
        {renderBroadcast(
          'Super Rugby',
          '08.07 19:15',
          'Crusaders \n' + 'Blues',
        )}
        {renderBroadcast(
          'Super Rugby',
          '11.07 18:45',
          'Brumbies \n' + 'Hurricanes',
        )}
        {renderBroadcast('Pro14', '14.07 20:00', 'Munster \n' + 'Leinster')}
        {renderBroadcast('Pro14', '17.07 21:15', 'Edinburgh \n' + 'Ulster')}
        {renderBroadcast('Top 14', '20.07 19:30', 'Toulouse \n' + 'Racing 92')}
        {renderBroadcast('Top 14', '23.07 20:45', 'Bordeaux \n' + 'Clermont')}
        {renderBroadcast(
          'International Test',
          '26.07 17:30',
          'South Africa \n' + 'New Zealand',
        )}
        {renderBroadcast(
          'International Test',
          '29.07 18:00',
          'Australia \n' + 'Argentina',
        )}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.main,
    paddingLeft: 20,
    borderRadius: 12,
  },
  league: {
    fontSize: 24,
    fontFamily: FONTS.black,
    color: COLORS.white,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.white,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    margin: 20,
    textAlign: 'center',
  },
});
