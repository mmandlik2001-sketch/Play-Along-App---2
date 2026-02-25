import React from 'react';
import { StatCard } from '@playalong/ui';
import { ScreenLayout } from '../components/ScreenLayout';

export const WalletScreen = () => (
  <ScreenLayout title="Wallet">
    <StatCard label="Balance" value="$240" />
    <StatCard label="Rewards" value="1,240 pts" />
  </ScreenLayout>
);
