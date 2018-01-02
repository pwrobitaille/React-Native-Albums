import React from 'react'
import { Text, StyleSheet } from 'react-native'


const Header = () => {
  return (
    <Text style={styles.container}>Albums</Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#333333'
  },
})

export default Header
