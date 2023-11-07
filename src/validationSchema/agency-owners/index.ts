import * as yup from 'yup';

export const agencyOwnerValidationSchema = yup.object().shape({
  joining_date: yup.date().nullable(),
  leaving_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
