import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Dynamic Input component
const Input = ({ label, name, type = "text", className }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} type={type} className="form-control" />
    <ErrorMessage name={name} component="div" className="error-message" />
  </div>
);
