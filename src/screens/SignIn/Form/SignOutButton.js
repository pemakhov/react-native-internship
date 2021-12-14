import React from 'react';
import { Button, View } from 'react-native';
import styles from './styles';

function SignOutButton({ handleSignOut }) {
  return (
    <View style={styles.signOutButton}>
      <Button
        onPress={handleSignOut}
        color="#a573aa"
        title="Sign Out"
      />
    </View>
  );
}

export default SignOutButton;
