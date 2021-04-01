import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, StatusBar, Text } from 'react-native'

const UserTabPage = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <Text>User</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff'
  }
})

export default UserTabPage
