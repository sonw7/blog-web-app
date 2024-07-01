import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Container, Paper, Title } from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      navigate('/login');
    } else {
      alert('Registration failed');
    }
  };

  return (
    <Container size={420} my={40}>
      <Title align="center">Register</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput label="Email" placeholder="Your email" {...form.getInputProps('email')} required />
          <PasswordInput label="Password" placeholder="Your password" {...form.getInputProps('password')} required mt="md" />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            {...form.getInputProps('confirmPassword')}
            required
            mt="md"
          />
          <Button type="submit" fullWidth mt="xl">
            Register
          </Button>
        </form>
        <Link to="/login">Already have an account? Login</Link>
      </Paper>
    </Container>
  );
}

export default Register;
