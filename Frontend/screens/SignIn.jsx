import { SafeAreaView, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Title from '../common/Title'
import Button from '../common/Button'
import Input from '../common/Input'

const SignInScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 20
        }}
      >
        <Title
          text='Realtime Chat'
          color='black'
        />
        <Input title='Username' inTitle='abc_xyz' type='email-address' hidden={false} />
        <Input title='Password' inTitle='********' type='default' hidden={true} />

        <Button title='Sign In'/>

        <Text style={{ textAlign: 'center', marginTop: 40 }} >
          Don't Have an account ? <Text
            style={{ color: 'blue' }}
            onPress={()=> navigation.navigate('SignUp')}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignInScreen
