import { createStackNavigator, createAppContainer } from 'react-navigation'

// Screens
import Login from './screens/Login'
import Groups from './screens/Groups'
import GroupDetail from './screens/GroupDetail'

// Config
const config = {
  initialRouteName: "Login",
  headerMode: "None"
}

const RootStack = createStackNavigator(
  {
    Login: { screen: Login, path: "/screens/Login" },
    Groups: { screen: Groups, path: "/screens/Groups" },
    GroupDetail: { screen: GroupDetail, path: "/screens/GroupDetail" }
  },
  config
)

const App = createAppContainer(RootStack);

export default App;