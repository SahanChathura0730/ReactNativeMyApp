// src/layouts/CustomDrawerContent.tsx
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      {/* ✅ Profile section at top */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100?img=12' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Sahan Chathura</Text>
        <Text style={styles.email}>sahan@example.com</Text>
      </View>

      {/* ✅ Drawer menu items */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 12,
    color: '#666',
  },
});
