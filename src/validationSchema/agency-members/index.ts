import * as yup from 'yup';

export const agencyMemberValidationSchema = yup.object().shape({
  role: yup.string().nullable(),
  joining_date: yup.date().nullable(),
  leaving_date: yup.date().nullable(),
  user_id: yup.string().nullable().required(),
});
