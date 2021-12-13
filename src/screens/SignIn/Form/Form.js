import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import styles from './styles';

function Form() {
  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={(values) => {
        console.log(values.name);
      }}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <View style={styles.textInput}>
            <TextInput
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="name"
            />
          </View>
          <Button onPress={handleSubmit} title="Add" />
        </View>
      )}
    </Formik>
  );
}

export default Form;
