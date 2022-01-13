import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useFormik, setErrors } from 'formik';
import ValidationSchema from './ValidationSchema';
import {
  updateTraveler,
  deleteTraveler,
} from '../../../store/travelers/actions';
import SignOutButton from './SignOutButton';
import styles from '../styles';

function Form() {
  const initialValues = { name: '' };
  const dispatch = useDispatch();
  const traveler = useSelector((state) => state.travelers.traveler);
  const { colors } = useTheme();

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
    dirty,
    resetForm,
  } = useFormik({
    validationSchema: ValidationSchema,
    initialValues,
    onSubmit: ({ name }) => {
      if (!name) {
        return;
      }
      dispatch(updateTraveler(name));
      resetForm({ values: initialValues });
    },
  });

  const validationColor = !touched
    ? colors.textInput.border
    : errors.name
    ? colors.textInput.error
    : colors.textInput.border;

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
        <Button onPress={handleSubmit} disabled={!dirty} title="Sign In" />
      </View>
      {errors.name && (
        <Text style={{ color: colors.textInput.error }}>{errors.name}</Text>
      )}
      {traveler && (
        <SignOutButton handleSignOut={() => dispatch(deleteTraveler())} />
      )}
    </View>
  );
}

export default Form;
