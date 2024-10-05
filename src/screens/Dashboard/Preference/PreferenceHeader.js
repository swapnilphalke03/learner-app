import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import { useTranslation } from '../../../context/LanguageContext';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../../utils/Helper/Style';

const PreferenceHeader = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <View style={globalStyles.flexrow}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon
            name="arrow-left"
            style={{ marginHorizontal: 10 }}
            color={'#0D599E'}
            size={30}
          />
          {/* <Text allowFontScaling={false}>Back</Text> */}
        </TouchableOpacity>
        <Text allowFontScaling={false} style={styles.text}>
          {t('Preferences')}
        </Text>
      </View>
      <Text allowFontScaling={false} style={styles.text2}>
        {t('save')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: 'black',
    marginLeft: 10,
    // fontWeight: '500',
  },
  text2: {
    fontSize: 25,
    color: '#0D599E',
    marginLeft: 10,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#00000026',
  },
});

PreferenceHeader.propTypes = {};

export default PreferenceHeader;
