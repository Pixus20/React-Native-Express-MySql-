// import { HapticTab } from '@/components/HapticTab';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';
// import { Ionicons } from '@expo/vector-icons';
// import { Tabs } from 'expo-router';
// import React from 'react';
// import { Platform } from 'react-native';


// export default function AuthLayout() {
//    const colorScheme = useColorScheme();
//   return (
//    <Tabs
//       screenOptions={{
//       tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//       headerShown: false,
//       tabBarButton: HapticTab,
//       tabBarBackground: TabBarBackground,
//       tabBarStyle: Platform.select({
//          ios: {
//             position: 'absolute',
//          },
//          default: {},
//       }),
//       }}>      
//       <Tabs.Screen
//         name="register"
//         options={{
//           title: 'Register',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="people" color={color} size={size || 28} />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Login',
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="people" color={color} size={size || 28} />
//           ),
//         }}
//       />
//    </Tabs>
//   );
// }


import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function AuthLayout() {
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
               },
               default: {},
            }),
         }}
      >
         <Tabs.Screen
            name="register"
            options={{
               title: 'Register',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="people" color={color} size={size || 26} />
               ),
            }}
         />
         <Tabs.Screen
            name="login"
            options={{
               title: 'Login',
               tabBarIcon: ({ color, size }) => (
                  <Ionicons name="people" color={color} size={size || 26} />
               ),
            }}
         />
      </Tabs>
   );
}
