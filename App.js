import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Image,
} from 'react-native';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ResumeItem from './components/ResumeItem/ResumeItem';
import {
  TITLE,
  BRAND,
  SLOGAN,
  NAME_PLACEHOLDER,
  RESUME_ITEMS,
} from './constants/texts';
import theme from './theme';

const App = () => {
  const [name, setName] = useState('');

  const {
    header,
    main,
    footer,
  } = theme;

  const [nameItem, ...restItems] = RESUME_ITEMS;

  return (
    <SafeAreaView style={{ height: '100%' }}>
      <Header
        title={TITLE}
        styles={header}
      />
      <Image
        style={main.profilePicture}
        source={{ uri: 'https://randomuser.me/api/portraits/men/9.jpg' }}
      />
      <View style={main.container}>
        <ResumeItem
          title={nameItem[0]}
          value={name}
        />
        <TextInput
          onChangeText={setName}
          value={name}
          style={main.textInput}
          placeholder={NAME_PLACEHOLDER}
        />
        {restItems.map((item) => (
          <ResumeItem
            key={`${item[0]}-${item[1]}`}
            title={item[0]}
            value={item[1]}
          />
        ))}
      </View>
      <Footer brand={BRAND} slogan={SLOGAN} styles={footer} />
    </SafeAreaView>
  );
};

export default App;
