import ClassCard from '@/components/ClassCard';
import React from 'react';
import { ScrollView } from 'react-native';

const classes = [
  {
    subject: 'Physics',
    instructor: 'Mr. Silva',
    image: require('../assets/images/react-logo.png'),
    completed: true,
  },
  {
    subject: 'English',
    instructor: 'Ms. Nethmi',
    image: require('../assets/images/react-logo.png'),
    completed: false,
  },
];

const Classes = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {classes.map((cls, idx) => (
        <ClassCard
          key={idx}
          subject={cls.subject}
          instructor={cls.instructor}
          image={cls.image}
          completed={cls.completed}
        />
      ))}
    </ScrollView>
  );
};

export default Classes;
