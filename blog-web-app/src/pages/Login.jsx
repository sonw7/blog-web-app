import React from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Button,
  Container,
  Paper,
  Title,
  Text,
  Group,
  ThemeIcon
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Background from '../components/Background';
import { User,Password } from 'tabler-icons-react' ;
import { IconLock, IconUser } from '@tabler/icons-react';

function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (values) => {
    console.log(JSON.stringify(values))
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      const data = await response.json();
      login(data.token);
      navigate('/home');
    } else {
      alert('Login failed');
    }
  };

  return (
    <>
      <Background />
      <div className="flex items-center justify-center min-h-screen">
         <Container size={520} className="relative z-10 bg-slate-50/50 rounded-lg h-2/6 w-2/6 flex flex-col justify-center">
            <Title align="center" className="mt-7 mb-6">梓灵的私人博客</Title>

            <form onSubmit={form.onSubmit(handleSubmit)} className="m-auto space-y-4">
              <div className="flex items-center">
                <ThemeIcon className='mr-2'>
                  <IconUser style={{ width: '70%', height: '70%' }} />
                </ThemeIcon>
                <TextInput
                  id="email"
                  placeholder="请输入用户名"
                  {...form.getInputProps('email')}
                  required
                  className="flex-1 "
                  styles={{ input: { borderRadius: '0.2rem' } }} 
                />
              </div>
              <div className="flex items-center ">
                <ThemeIcon className='mr-2'>
                  <IconLock style={{ width: '70%', height: '70%'}} />
                </ThemeIcon>
                <PasswordInput
                  id="password"
                  placeholder="请输入密码"
                  {...form.getInputProps('password')}
                  required
                  className="flex-1"
                  radius="xl" 
                  styles={{ input: { borderRadius: '0.5rem' } }} // 使用styles属性设置圆角大小
                  />
              </div>
              <Button type="submit" fullWidth mt="xl" radius="xl">
                立即登录
              </Button>
            </form>

            <Group position="apart" mt="md" className="text-white-600">
              <Link to="/register" className="hover:underline">注册</Link>
              <Link to="/reset-password" className="hover:underline">忘记密码?</Link>
            </Group>
        </Container>
      </div>
    </>
  );

}

export default Login;
