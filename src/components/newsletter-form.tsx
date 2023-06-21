'use client';
import ConvertKitForm from 'convertkit-react';

const MY_FORM_ID = 1234567;

export default function NewsletterForm() {
  return (
    <ConvertKitForm
      formId={MY_FORM_ID}
      template="mills"
      emailPlaceholder='Email Address'
      submitText='Sign up'
    >
      <p>Subscribe to get my latest content by email.</p>
    </ConvertKitForm>
  )
}