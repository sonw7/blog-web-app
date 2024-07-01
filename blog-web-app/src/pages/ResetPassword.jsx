import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Container, Paper, Title } from '@mantine/core';
import { Link } from 'react-router-dom';

function ResetPassword() {
  const form = useForm({
    initialValues: {
      email: '',
    },
  });

  const handleSubmit = async (values) => {
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      alert('Password reset email sent');
    } else {
      alert('Failed to send password reset email');
    }
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Reset Password</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput label="Email" placeholder="Your email" {...form.getInputProps('email')} required />
          <Button type="submit" fullWidth mt="xl">
            Send reset link
          </Button>
        </form>
        <Link to="/login">Back to Login</Link>
      </Paper>
    </Container>
  );
}

export default ResetPassword;
