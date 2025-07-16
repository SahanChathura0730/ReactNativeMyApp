// src/components/SubjectCard.tsx
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface SubjectCardProps {
  subject: string;
  progress: number; // between 0 and 100
  image: any; // require('./path-to-image.png')
  colors?: string[]; // optional gradient colors
}

const SubjectCard = ({ subject, progress, image, colors = ['#4c669f', '#3b5998', '#192f6a'] }: SubjectCardProps) => {
  return (
    <LinearGradient colors={colors} style={styles.card} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{subject}</Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.percentage}>{progress}% Completed</Text>
      </View>
      <Image source={image} style={styles.image} resizeMode="contain" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginVertical: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    overflow: 'hidden',
    marginBottom: 6,
  },
  progressBarFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  percentage: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default SubjectCard;
