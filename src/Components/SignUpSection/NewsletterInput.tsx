"use client";

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {  TextField } from '@mui/material';
import Btn from '../Btn/Btn';

const NewsletterSignup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: async (values) => {
      console.log('values: ', values);
      // Handle form submission here
    },
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
