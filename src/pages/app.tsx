import React, { useEffect, useRef } from 'react'
import SplashScreen from 'react-native-splash-screen'

import AppNavigator from './appNavigator'

const App = () => {
  const splashTimer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    splashTimer.current = setTimeout(() => {
      // 2秒后隐藏开屏页
      SplashScreen.hide()
    }, 2000)

    return () => {
      splashTimer.current && clearTimeout(splashTimer.current)
    }
  }, [])

  return (
    <>
      <AppNavigator />
    </>
  )
}

export default App
