import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Welcome to My App</Text>
            <Text style={styles.description}>
              This is a simple React Native app with a dark theme.
            </Text>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Get Started</Text>
              <Text style={styles.cardContent}>
                Edit <Text style={styles.highlight}>App.js</Text> to modify this screen.
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Explore</Text>
              <Text style={styles.cardContent}>
                Dive into the documentation to learn more about React Native.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1e1e1e',
  },
  scrollView: {
    backgroundColor: '#1e1e1e',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 16,
    color: '#ddd',
  },
  highlight: {
    fontWeight: '700',
    color: '#4e9af1',
  },
});

export default App;
