import UsersScreen from '@/components/users/showusers';
import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';

const Users = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Список користувачів', 
      headerShown: false, 
    });
  }, [navigation]);

  return <UsersScreen />;
};

export default Users;
