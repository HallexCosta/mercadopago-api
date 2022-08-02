import { useState } from 'react'

import { Alert } from 'react-native'
import { WebView } from 'react-native-webview'

export default function() {
  const [uri] = useState('http://localhost:3333/checkout')

  function handlePaymentStateChange(state: { title: string }) {
    switch (state.title) {
      case 'success':
        Alert.alert('Sucesso')
        break
    }
  }

  return <WebView
    source={{ uri }}
    startInLoadingState={true}
    onNavigationStateChange={state => handlePaymentStateChange(state)}
  />
}
