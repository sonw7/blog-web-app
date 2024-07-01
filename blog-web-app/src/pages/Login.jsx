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
} from '@mantine/core';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Background from '../components/Background';
import { IconUser, IconLock } from '@tabler/icons-react';

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
      <div className="flex items-center justify-center min-h-screen ">
        <Container size={520} className="relative z-10 bg-slate-50/50 rounded-lg">
          {/* 取消 backdropFilter 并设置不透明的背景 */}
          <Paper withBorder shadow="md" p={30} mt={100} mb={30} radius={20} sx={{ backgroundColor: '#ff0000' }}>
            <Title align="center" className="mb-6">梓灵的私人博客</Title>

            <form onSubmit={form.onSubmit(handleSubmit)} className="mb-6">
              {/* 输入框圆角设定 */}
              <TextInput
                icon={<IconUser />}
                label="用户名"
                placeholder="请输入用户名"
                {...form.getInputProps('email')}
                required
                radius="xl"
              />
              <PasswordInput
                icon={<IconLock />}
                label="密码"
                placeholder="请输入密码"
                {...form.getInputProps('password')}
                required
                mt="md"
                radius="xl"
              />
              <Button type="submit" fullWidth mt="xl" radius="xl">
                立即登录
              </Button>
            </form>

            <Group position="apart" mt="md" className="text-blue-600">
              <Link to="/register" className="hover:underline">注册</Link>
              <Link to="/reset-password" className="hover:underline">忘记密码?</Link>
            </Group>
          </Paper>
        </Container>
      </div>
    </>
  );

}

export default Login;
