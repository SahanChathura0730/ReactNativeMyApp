import Footer from '@/layouts/footer';
import Header from '@/layouts/header';
import ColorfulCard from "@freakycoder/react-native-colorful-card";
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const Home = () => {
    return (
    <View className="flex-1 bg-gray-50">
      <Header Center={"Home"} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.cardGrid}>
          {[...Array(8)].map((_, i) => (
            <View key={i} style={styles.cardContainer}>
              <ColorfulCard
                title="Sleep"
                value="8"
                valuePostfix="h 42 m"
                footerTitle="Deep Sleep"
                footerValue="3h 13m"
                style={{ backgroundColor: "#7954ff" }}
                onPress={() => {}}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

export default Home

const styles = StyleSheet.create({
  scrollContent: {
    padding: 10,
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    width: '48%', // 2-column layout
    marginBottom: 15,
  },
});