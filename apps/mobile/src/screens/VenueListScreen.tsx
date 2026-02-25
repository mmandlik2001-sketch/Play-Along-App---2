import React from 'react';
import { NeonCard } from '@playalong/ui';
import { Text } from 'react-native';
import { ScreenLayout } from '../components/ScreenLayout';

export const VenueListScreen = () => (
  <ScreenLayout title="Venue List">
    <NeonCard><Text style={{ color: '#E5F7BF' }}>Green Court Arena</Text></NeonCard>
    <NeonCard><Text style={{ color: '#E5F7BF' }}>Neon Turf Zone</Text></NeonCard>
    <NeonCard><Text style={{ color: '#E5F7BF' }}>Midnight Sports Club</Text></NeonCard>
  </ScreenLayout>
);
