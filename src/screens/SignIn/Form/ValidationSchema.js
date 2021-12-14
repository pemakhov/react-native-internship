import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short')
    .max(20, 'Too long')
    // .matches(/^\{Lu}/, { message: 'Should start with a capital letter' })
    .matches(/^[A-Za-z]+$/, 'Should contain only latin letters')
    .required('Required'),
});

export default ValidationSchema;
