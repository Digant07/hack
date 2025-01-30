import { View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Octicons from '@expo/vector-icons/Octicons';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { auth } from "../../config/firebaseconfig"; 




export default function Tablayout() {
  const router=useRouter();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
    router?.push('/login');
      // User is signed out
      // ..
    } 
  });
  return (
    <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='Home' options={{tabBarIcon:({color,size})=>(<Ionicons name="home" size={24} color="#3a9874" />)
        }} />
        <Tabs.Screen name='Dashboard' options={{tabBarIcon:({color,size})=>(<MaterialIcons name="dashboard-customize" size={24} color="#3a9874"/> )
        }}/>
        <Tabs.Screen name='Profile' options={{tabBarIcon:({color,size})=>(<Octicons name="person" size={24} color="#3a9874" /> )
        }} />
    </Tabs>
  )
}



