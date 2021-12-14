/* eslint-disable no-alert */
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { useFormik } from 'formik';
import ValidationSchema from './ValidationSchema';
import styles from './styles';

function Form() {
  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      validationSchema: ValidationSchema,
      initialValues: { name: '' },
      onSubmit: ({ name }) => alert(`Name: ${name}`),
    });
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <TextInput
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          error={errors.name}
          touched={touched.name}
          placeholder="Name"
        />
      </View>
      <Button onPress={handleSubmit} title="Add" />
    </View>
  );
}

export default Form;
