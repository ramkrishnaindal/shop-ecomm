import { View, SafeAreaView, StyleSheet } from "react-native";
import tw from "twrnc";
import * as React from "react";
import { useTheme } from "react-native-paper";
import { Appbar } from "react-native-paper";
import { BottomNavigation, Text } from "react-native-paper";
const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "music",
      title: "Favorites",
      focusedIcon: "heart",
      unfocusedIcon: "heart-outline",
    },
    { key: "albums", title: "Albums", focusedIcon: "album" },
    { key: "recents", title: "Recents", focusedIcon: "history" },
    {
      key: "notifications",
      title: "Notifications",
      focusedIcon: "bell",
      unfocusedIcon: "bell-outline",
    },
  ]);
  const theme = useTheme();
  const MusicRoute = () => <Text>Music</Text>;

  const AlbumsRoute = () => <Text>Albums</Text>;

  const RecentsRoute = () => <Text>Recents</Text>;

  const NotificationsRoute = () => <Text>Notifications</Text>;
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="Title" />
        <Appbar.Action icon="calendar" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>
      <View style={{ backgroundColor: theme.colors.primary }}>
        <View
          style={tw`ios:pt-4 android:pt-2 p-4 android:pt-2 bg-red-300 flex-row`}
        >
          <Text style={tw`text-md tracking-wide`}>Hey there!</Text>
        </View>
      </View>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
});

export default MyComponent;
