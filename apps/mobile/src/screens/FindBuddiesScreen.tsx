import React from 'react';
import { AvatarCard } from '@playalong/ui';
import { ScreenLayout } from '../components/ScreenLayout';

export const FindBuddiesScreen = () => (
  <ScreenLayout title="Find Buddies">
    <AvatarCard name="Alex" subtitle="Tennis • Available tonight" />
    <AvatarCard name="Maya" subtitle="Football • Weekend player" />
    <AvatarCard name="Sam" subtitle="Padel • Looking for doubles" />
  </ScreenLayout>
);
