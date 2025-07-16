import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ClassCardProps {
  subject: string;
  instructor: string;
  image: any; // require('../assets/class-image.png')
  completed?: boolean;
}

const ClassCard = ({ subject, instructor, image, completed = false }: ClassCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
      
      <View style={styles.info}>
        <Text style={styles.subject}>{subject}</Text>
        <Text style={styles.instructor}>Instructor: {instructor}</Text>
      </View>

      <View style={styles.iconContainer}>
        {completed && (
          <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  subject: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  instructor: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  iconContainer: {
    marginLeft: 8,
  },
});

export default ClassCard;
