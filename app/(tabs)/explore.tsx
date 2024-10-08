import Ionicons from '@expo/vector-icons/Ionicons';
import {Image, ImageBackground, Platform, StyleSheet, Text, View} from 'react-native';

import {Collapsible} from '@/components/Collapsible';
import {ExternalLink} from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import DataCollectionExample from "@/components/DataCollectionExample";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage}/>}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      </ThemedView>
      <ThemedText>This app includes example code to help you get started.</ThemedText>
      <Collapsible title="File-based routing">
        <ThemedText>
          This app has two screens:{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
        </ThemedText>
        <ThemedText>
          The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
          sets up the tab navigator.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can open this project on Android, iOS, and the web. To open the web version, press{' '}
          <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Images">
        <ThemedText>
          For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
          <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
          different screen densities.
        </ThemedText>

        <ThemedText type="subtitle">Static Image (Local File)</ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{alignSelf: 'center'}}/>
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>

        <ThemedText type="subtitle">Background Image (Network)</ThemedText>
        <ImageBackground
          source={{uri: 'https://legacy.reactjs.org/logo-og.png'}}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <View style={styles.textContainer}>
            <Text style={styles.textOther}>{'Happy '}</Text>
            <Text style={styles.textHighlight}>Knowledge Day</Text>
            <Text style={styles.textOther}>{' to everyone!'}</Text>
          </View>
        </ImageBackground>

        <ThemedText type="subtitle">Inline Local Image</ThemedText>
        <Image source={require('@/assets/images/knowledge-day.webp')} style={styles.localImage}/>

        <ThemedText type="subtitle">Network Image</ThemedText>
        <Image
          source={{uri: 'https://reactjs.org/logo-og.png'}}
          style={styles.networkImage}
        />
      </Collapsible>
      <Collapsible title="Custom fonts">
        <ThemedText>
          Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
          <ThemedText style={{fontFamily: 'SpaceMono'}}>
            custom fonts such as this one.
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <ThemedText>
          This template has light and dark mode support. The{' '}
          <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
          what the user's current color scheme is, and so you can adjust UI colors accordingly.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <ThemedText>
          This template includes an example of an animated component. The{' '}
          <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
          the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText> library
          to create a waving hand animation.
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
              component provides a parallax effect for the header image.
            </ThemedText>
          ),
        })}
      </Collapsible>
      <Collapsible title="FlatList and ScrollView">
        <ThemedText>
          This template includes an example of a <ThemedText type="defaultSemiBold">FlatList</ThemedText>{' '}
          component.
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">FlatList</ThemedText> is best used when you have a large number of
          identical elements in a list, as it provides better performance and efficiency for rendering long lists by
          only rendering items that are currently visible on the screen. For optimal performance, FlatList has special
          props for optimization, which you can read about in the official documentation.
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">ScrollView</ThemedText> is generally used when you have a large number of
          non-uniform elements on the screen, allowing for scrolling through content. Unlike FlatList, ScrollView
          renders all its children at once, which can lead to performance issues with long lists.
        </ThemedText>
        <ExternalLink href="https://reactnative.dev/docs/optimizing-flatlist-configuration#props">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
        <DataCollectionExample/>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#39E991',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  localImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  networkImage: {
    width: 700,
    height: 700,
    alignSelf: 'center',
  },
  imageBackground: {
    height: 500,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textOther: {
    color: '#5171FF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  textHighlight: {
    color: '#39E991',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
