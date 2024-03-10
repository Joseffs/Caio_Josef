// Dependências
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Tailwind
const Container = 'w-full h-full flex flex-row justify-around items-center divide-x divide-slate-900'
const For = 'md:w-1/2 w-full h-3/5 flex justify-center items-center'
const FormikDiv = 'w-1/2 h-3/5 flex justify-center items-center'
const FormDiv = 'flex flex-col justify-center items-center'
const Label = 'text-xs text-slate-500'
const FieldItens = 'mb-5 sm:w-56 w-44 bg-transparent text-center border border-slate-900 rounded-3xl'
const Erro = 'text-xs text-red-600'
const Button = 'sm:mx-5 mx-2 sm:w-24 w-16 h-10 sm:text-sm text-xs border border-slate-900 rounded-3xl text-slate-500'
const Pre = 'md:w-1/2 w-0 md:h-3/5 h-0 flex flex-col justify-center items-center overflow-hidden text-lg text-slate-500'
interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  return (
    <>
      <div className={Container}>
        <div className={For}>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={Yup.object({
              name: Yup.string().required('Required'),
              email: Yup.string().email('Invalid email address').required('Required'),
              message: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              // Send the message to your email using a service like SendGrid or Nodemailer
              console.log(JSON.stringify(values));
              setSubmitting(false);
            }}
            onReset={() => {
              setFormData({ name: '', email: '', message: '' });
            }}
            className={FormikDiv}
            // Pass a function to set the form data
            onChange={(values: React.SetStateAction<FormData>) => {
              setFormData(values);
            }}
          >
            {() => (
              <Form>
                <div className={FormDiv}>
                  <label htmlFor="name" className={Label}>Name &nbsp;</label>
                  <Field name="name" type="text" className={`h-10 ${FieldItens}`} />
                  <ErrorMessage name="name" component="div" className={Erro}/>
                </div>
                <div className={FormDiv}>
                  <label htmlFor="email" className={Label}>Email &nbsp;</label>
                  <Field name="email" type="email" className={`h-10 ${FieldItens}`}/>
                  <ErrorMessage name="email" component="div" className={Erro}/>
                </div>
                <div className={FormDiv}>
                  <label htmlFor="message" className={Label}>Message &nbsp;</label>
                  <Field name="message" as="textarea" className={`h-32 ${FieldItens}`}/>
                  <ErrorMessage name="message" component="div" className={Erro}/>
                </div>
                <button type="submit" className={Button}>Submit</button>
                <button type="reset" className={Button}>Reset</button>
              </Form>
            )}
          </Formik>
        </div>
        <CodeDisplay formData={formData} />
      </div>
    </>
  );
};

interface CodeDisplayProps {
  formData?: FormData;
}

const CodeDisplay: React.FC<CodeDisplayProps> = ({ formData }) => {
  return (
    <pre className={Pre}>
      <code>
        {JSON.stringify({
          ...formData,
          date: new Date().toLocaleDateString(),
        }, null, 2)}
      </code>
    </pre>
  );
};

export { ContactForm, CodeDisplay };
