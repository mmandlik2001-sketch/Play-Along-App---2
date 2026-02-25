import React from 'react';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { SplashScreen } from '../screens/SplashScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { FindBuddiesScreen } from '../screens/FindBuddiesScreen';
import { VenueListScreen } from '../screens/VenueListScreen';
import { VenueDetailsScreen } from '../screens/VenueDetailsScreen';
import { BookingScreen } from '../screens/BookingScreen';
import { WalletScreen } from '../screens/WalletScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { CommunityScreen } from '../screens/CommunityScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const VenuesStack = createNativeStackNavigator();
const CommunityStack = createNativeStackNavigator();

const icon = (label: string) => () => <Text style={{ color: '#B6FF00' }}>{label}</Text>;

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeDashboard" component={HomeScreen} />
    <HomeStack.Screen name="FindBuddies" component={FindBuddiesScreen} />
    <HomeStack.Screen name="Wallet" component={WalletScreen} />
  </HomeStack.Navigator>
);

const VenuesStackScreen = () => (
  <VenuesStack.Navigator screenOptions={{ headerShown: false }}>
    <VenuesStack.Screen name="VenueList" component={VenueListScreen} />
    <VenuesStack.Screen name="VenueDetails" component={VenueDetailsScreen} />
    <VenuesStack.Screen name="Booking" component={BookingScreen} />
  </VenuesStack.Navigator>
);

const CommunityStackScreen = () => (
  <CommunityStack.Navigator screenOptions={{ headerShown: false }}>
    <CommunityStack.Screen name="CommunityFeed" component={CommunityScreen} />
    <CommunityStack.Screen name="Notifications" component={NotificationsScreen} />
  </CommunityStack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { backgroundColor: '#111714', borderTopColor: 'rgba(182,255,0,0.15)' }
    }}
  >
    <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ title: 'Home', tabBarIcon: icon('⌂') }} />
    <Tab.Screen name="VenuesTab" component={VenuesStackScreen} options={{ title: 'Venues', tabBarIcon: icon('◉') }} />
    <Tab.Screen name="CommunityTab" component={CommunityStackScreen} options={{ title: 'Community', tabBarIcon: icon('◌') }} />
    <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarIcon: icon('☺') }} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer theme={{ ...DarkTheme, colors: { ...DarkTheme.colors, background: '#0B0F0C' } }}>
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Splash" component={SplashScreen} />
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Register" component={RegisterScreen} />
      <RootStack.Screen name="MainTabs" component={MainTabs} />
    </RootStack.Navigator>
  </NavigationContainer>
);
