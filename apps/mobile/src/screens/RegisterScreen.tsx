import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { StyleSheet, TextInput } from 'react-native';
import { GlowButton, NeonCard } from '@playalong/ui';
import { ScreenLayout } from '../components/ScreenLayout';

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6)
});

type RegisterForm = z.infer<typeof registerSchema>;

export const RegisterScreen = () => {
  const { control, handleSubmit } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: '', email: '', password: '' }
  });

  return (
    <ScreenLayout title="Register">
      <NeonCard>
        {(['name', 'email', 'password'] as const).map((field) => (
          <Controller
            key={field}
            control={control}
            name={field}
            render={({ field: formField }) => (
              <TextInput
                style={styles.input}
                placeholder={field[0].toUpperCase() + field.slice(1)}
                secureTextEntry={field === 'password'}
                placeholderTextColor="#7A8B73"
                onChangeText={formField.onChange}
                value={formField.value}
              />
            )}
          />
        ))}
        <GlowButton label="Create Account" onPress={handleSubmit(() => undefined)} />
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
  }
});
