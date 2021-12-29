import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFormik } from 'formik';
import ValidationSchema from './ValidationSchema';
import styles from '../styles';
import {
  updateTraveler,
  deleteTraveler,
} from '../../../store/travelers/actions';
import SignOutButton from './SignOutButton';

function Form() {
  const initialValues = { name: '' };
  const dispatch = useDispatch();
  const traveler = useSelector((state) => state.travelers.traveler);

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    validationSchema: ValidationSchema,
    initialValues,
    onSubmit: ({ name }) => {
      dispatch(updateTraveler(name));
      resetForm({ values: initialValues });
    },
  });

  const validationColor = !touched
    ? '#223e4b'
    : errors.name
    ? '#FF5A5F'
    : '#223e4b';

  const { colors } = useTheme();

  return (
    <View>
      <View style={styles.formContainer}>
        <View style={{ ...styles.textInput, borderColor: validationColor }}>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            error={errors.name}
            touched={touched.name}
            placeholder="Name"
            placeholderTextColor={colors.placeholder}
            style={{ color: colors.text }}
          />
        </View>
        <Button onPress={handleSubmit} title="Sign In" />
      </View>
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      {traveler && (
        <SignOutButton handleSignOut={() => dispatch(deleteTraveler())} />
      )}
    </View>
  );
}

export default Form;
