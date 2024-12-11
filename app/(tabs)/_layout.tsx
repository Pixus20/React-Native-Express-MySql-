// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

// import { Ionicons } from '@expo/vector-icons';

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             position: 'absolute',
//             height: 80,
//             paddingBottom: 20,
//             paddingTop: 10,
//           },
//           default: {
//             height: 80,
//             paddingBottom: 20,
//             paddingTop: 10,
//           },
//         }),
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Home',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size || 28} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="task"
//         options={{
//           title: 'Tasks',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="checkmark-done" color={color} size={size || 28} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="add_task"
//         options={{
//           title: 'Add Task',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="add-circle" color={color} size={size || 28} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="users"
//         options={{
//           title: 'Users',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="people" color={color} size={size || 28} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="account"
//         options={{
//           title: 'Account',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" color={color} size={size || 28} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }


import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            height: 80,
            paddingBottom: 20,
            paddingTop: 10,
          },
          default: {
            height: 80,
            paddingBottom: 20,
            paddingTop: 10,
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size || 28} />
          ),
        }}
      />
      <Tabs.Screen
        name="task"
        options={{
          title: 'Tasks',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkmark-done" color={color} size={size || 28} />
          ),
        }}
      />
      <Tabs.Screen
        name="add_task"
        options={{
          title: 'Add Task',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size || 28} />
          ),
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: 'Users',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" color={color} size={size || 28} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size || 28} />
          ),
        }}
      />
    </Tabs>
  );
}
