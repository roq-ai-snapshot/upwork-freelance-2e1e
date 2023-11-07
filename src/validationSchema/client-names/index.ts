import * as yup from 'yup';

export const clientNameValidationSchema = yup.object().shape({
  company_name: yup.string().nullable(),
  project_description: yup.string().nullable(),
  budget: yup.number().integer().nullable(),
  deadline: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
