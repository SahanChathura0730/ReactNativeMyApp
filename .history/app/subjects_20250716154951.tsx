import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import SubjectCard from '../components/SubjectCard';

const subjects = [
  {
    name: "Mathematics",
    progress: 75,
    image: require('../assets/images/maths.jpg'),
    colors: ['#FF6B6B', '#FFD93D'],
  },
  {
    name: "Science",
    progress: 50,
    image: require('../assets/images/maths.jpg'),
    colors: ['#6C63FF', '#9D79FF'],
  },
];

const Subjects = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      {subjects.map((subject, idx) => (
        <SubjectCard
          key={idx}
          subject={subject.name}
          progress={subject.progress}
          image={subject.image}
          colors={subject.colors}
        />
      ))}
    </ScrollView>
  )
}

export default Subjects