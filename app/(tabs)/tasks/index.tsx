import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import TaskCard from '../../../components/tasks/card';

const Tasks = () => {
  const navigation = useNavigation();

  useEffect(()=>{
    navigation.setOptions({
      title: 'Список завдань', 
      headerShown: false, 
    });
  },[navigation]);

  return (
        <TaskCard />
  );
};

export default Tasks;

