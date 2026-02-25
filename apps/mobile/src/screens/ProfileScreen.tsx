import React from 'react';
import { AvatarCard, NeonCard } from '@playalong/ui';
import { Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';

export const ProfileScreen = () => (
  <ScreenLayout title="Profile">
    <AvatarCard name="Riya Sharma" subtitle="Badminton • Intermediate" />
    <NeonCard>
      <Text style={{ color: '#E5F7BF' }}>Edit preferences, location, and privacy settings.</Text>
    </NeonCard>
  </ScreenLayout>
);
