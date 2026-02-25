import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text, View, ViewProps } from 'react-native';
import { palette, radii } from './theme';

export const GlassContainer = ({ style, ...props }: ViewProps) => (
  <View
    style={[
      styles.glass,
      style
    ]}
    {...props}
  />
);

export const NeonCard = ({ style, ...props }: ViewProps) => (
  <GlassContainer style={[styles.neonCard, style]} {...props} />
);

export const GradientHeader = ({ title }: { title: string }) => (
  <LinearGradient colors={['#1C2900', '#0E1608']} style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </LinearGradient>
);

export const GlowButton = ({ label, onPress }: { label: string; onPress?: () => void }) => (
  <Pressable style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </Pressable>
);

export const StatCard = ({ label, value }: { label: string; value: string }) => (
  <NeonCard style={styles.statCard}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </NeonCard>
);

export const AvatarCard = ({ name, subtitle }: { name: string; subtitle: string }) => (
  <NeonCard style={styles.avatarCard}>
    <View style={styles.avatar} />
    <View>
      <Text style={styles.avatarName}>{name}</Text>
      <Text style={styles.avatarSubtitle}>{subtitle}</Text>
    </View>
  </NeonCard>
);

const styles = StyleSheet.create({
  glass: {
    backgroundColor: palette.glass,
    borderRadius: radii.card,
    borderWidth: 1,
    borderColor: 'rgba(182,255,0,0.25)',
    padding: 16
  },
  neonCard: {
    backgroundColor: palette.card
  },
  header: {
    borderRadius: radii.card,
    padding: 18,
    marginBottom: 12
  },
  headerText: {
    color: palette.accent,
    fontSize: 24,
    fontWeight: '700'
  },
  button: {
    backgroundColor: palette.accent,
    borderRadius: radii.button,
    paddingVertical: 14,
    alignItems: 'center',
    shadowColor: palette.accent,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 16,
    elevation: 8
  },
  buttonText: {
    color: '#0B0F0C',
    fontWeight: '700',
    fontSize: 16
  },
  statCard: {
    flex: 1,
    minWidth: 140
  },
  statValue: {
    color: palette.accent,
    fontSize: 28,
    fontWeight: '700'
  },
  statLabel: {
    color: palette.muted,
    marginTop: 4
  },
  avatarCard: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(182,255,0,0.25)'
  },
  avatarName: {
    color: palette.text,
    fontWeight: '600'
  },
  avatarSubtitle: {
    color: palette.muted,
    marginTop: 2
  }
});
