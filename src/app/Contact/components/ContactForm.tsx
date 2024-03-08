import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });

  return (
    <>
      <div className='w-full h-full flex flex-row justify-around items-center divide-x divide-slate-900'>
        <div className='md:w-1/2 w-full h-3/5 flex justify-center items-center'>
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
            className='w-1/2 h-3/5 flex justify-center items-center'
            // Pass a function to set the form data
            onChange={(values: React.SetStateAction<FormData>) => {
              setFormData(values);
            }}
          >
            {() => (
              <Form>
                <div className='flex flex-col justify-center items-center'>
                  <label htmlFor="name" className='text-xs text-slate-500'>Name &nbsp;</label>
                  <Field name="name" type="text" className='mb-5 h-10 w-56 bg-transparent text-center border border-slate-900 rounded-3xl' />
                  <ErrorMessage name="name" component="div" className='text-xs text-red-600'/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <label htmlFor="email" className='text-xs text-slate-500'>Email &nbsp;</label>
                  <Field name="email" type="email" className='mb-5 h-10 w-56 bg-transparent text-center border border-slate-900 rounded-3xl'/>
                  <ErrorMessage name="email" component="div" className='text-xs text-red-600'/>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <label htmlFor="message" className='text-xs text-slate-500'>Message &nbsp;</label>
                  <Field name="message" as="textarea" className='mb-5 h-32 w-56 bg-transparent text-center border border-slate-900 rounded-3xl'/>
                  <ErrorMessage name="message" component="div" className='text-xs text-red-600'/>
                </div>
                <button type="submit" className='mx-5 w-24 h-10 border border-slate-900 rounded-3xl text-slate-500'>Submit</button>
                <button type="reset" className='mx-5 w-24 h-10 border border-slate-900 rounded-3xl text-slate-500'>Reset</button>
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
    <pre className='md:w-1/2 w-0 md:h-3/5 h-0 flex flex-col justify-center items-center overflow-hidden text-lg text-slate-500'>
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
