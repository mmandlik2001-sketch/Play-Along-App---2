import React from 'react';
import { NeonCard } from '@playalong/ui';
import { Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';

export const CommunityScreen = () => (
  <ScreenLayout title="Community">
    <NeonCard><Text style={{ color: '#E5F7BF' }}>Weekend Tournament • 24 participants</Text></NeonCard>
    <NeonCard><Text style={{ color: '#E5F7BF' }}>Training Camp • Starts Friday</Text></NeonCard>
  </ScreenLayout>
);
