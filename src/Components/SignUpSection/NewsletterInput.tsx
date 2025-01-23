"use client";

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  TextField } from '@mui/material';
import Btn from '../Btn/Btn';
import { fetchExternalData } from '@/Utils/functions/dataFetchers';




const onSubmit = async (values: { email: string }) => {
  console.log('Form values:', values);

  const emailData = { email: values.email };
  const apiEndpoint = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/api/email/save`;  

  try {
    const response = await fetchExternalData<{ success: boolean }>(
      apiEndpoint, 
      emailData, 
      { method: 'POST' }  
    );

    if (response && response.success) {
      console.log('Email saved successfully!');
    } else {
      console.error('Error saving email');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
const NewsletterSignup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        id="email"
        name="email"
        label="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        sx={{ mt: 2 }}
      />
      <Btn  sx={{ mt: 2, mb:4 }}>
        Subscribe
      </Btn>
    </form>
  );
};

export default NewsletterSignup;
