import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { agencyMemberValidationSchema } from 'validationSchema/agency-members';
import { UserInterface } from 'interfaces/user';
import { AgencyMemberInterface } from 'interfaces/agency-member';

function AgencyMemberCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: AgencyMemberInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.agency_member.create({ data: values as RoqTypes.agency_member });
      resetForm();
      router.push('/agency-members');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AgencyMemberInterface>({
    initialValues: {
      role: '',
      joining_date: new Date(new Date().toDateString()),
      leaving_date: new Date(new Date().toDateString()),
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: agencyMemberValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Agency Members',
              link: '/agency-members',
            },
            {
              label: 'Create Agency Member',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Agency Member
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.role}
            label={'Role'}
            props={{
              name: 'role',
              placeholder: 'Role',
              value: formik.values?.role,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="joining_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Joining Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.joining_date ? new Date(formik.values?.joining_date) : null}
              onChange={(value: Date) => formik.setFieldValue('joining_date', value)}
            />
          </FormControl>
          <FormControl id="leaving_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Leaving Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.leaving_date ? new Date(formik.values?.leaving_date) : null}
              onChange={(value: Date) => formik.setFieldValue('leaving_date', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/agency-members')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'agency_member',
    operation: AccessOperationEnum.CREATE,
  }),
)(AgencyMemberCreatePage);
