import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyleSheet, Text, TextInput } from 'react-native';
import { GlowButton, NeonCard } from '@playalong/ui';
import { ScreenLayout } from '../components/ScreenLayout';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

type LoginForm = z.infer<typeof loginSchema>;

export const LoginScreen = () => {
  const { control, handleSubmit } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  });

  return (
    <ScreenLayout title="Login">
      <NeonCard>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#7A8B73" onChangeText={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <TextInput style={styles.input} placeholder="Password" secureTextEntry placeholderTextColor="#7A8B73" onChangeText={onChange} value={value} />
          )}
        />
        <GlowButton label="Sign In" onPress={handleSubmit(() => undefined)} />
        <Text style={styles.helper}>Use backend JWT auth route once connected.</Text>
      </NeonCard>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#0F140F',
    color: '#E5F7BF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(182,255,0,0.2)'
  },
  helper: { color: '#7A8B73', marginTop: 12 }
});
