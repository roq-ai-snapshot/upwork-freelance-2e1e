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

import { agencyOwnerValidationSchema } from 'validationSchema/agency-owners';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { AgencyOwnerInterface } from 'interfaces/agency-owner';

function AgencyOwnerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: AgencyOwnerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.agency_owner.create({ data: values as RoqTypes.agency_owner });
      resetForm();
      router.push('/agency-owners');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<AgencyOwnerInterface>({
    initialValues: {
      joining_date: new Date(new Date().toDateString()),
      leaving_date: new Date(new Date().toDateString()),
      company_id: (router.query.company_id as string) ?? null,
      user_id: (router.query.user_id as string) ?? null,
    },
    validationSchema: agencyOwnerValidationSchema,
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
              label: 'Agency Owners',
              link: '/agency-owners',
            },
            {
              label: 'Create Agency Owner',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Agency Owner
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
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
          <AsyncSelect<CompanyInterface>
            formik={formik}
            name={'company_id'}
            label={'Select Company'}
            placeholder={'Select Company'}
            fetcher={() => roqClient.company.findManyWithCount({})}
            labelField={'name'}
          />
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
              onClick={() => router.push('/agency-owners')}
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
    entity: 'agency_owner',
    operation: AccessOperationEnum.CREATE,
  }),
)(AgencyOwnerCreatePage);
