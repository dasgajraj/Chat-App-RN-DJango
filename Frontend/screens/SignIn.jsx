import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View } from 'react-native'
import React, {
  useLayoutEffect,
  useState } from 'react'
import Title from '../common/Title'
import Button from '../common/Button'
import Input from '../common/Input'

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  function onSignIn() {

    //Check username
    const faultUsername = !username
    {
      faultUsername &&
        setUsernameError("Username Not Provided")
    }
    // Check Pass
    const faultPassword = !password
    {
      faultPassword &&
        setPasswordError("Password Not Provided")
    }

    // Break if any eror
    if (faultUsername || faultPassword) {
      return
    }
    // Do SignIn
    console.log('SignIn Done', username, " and ", password)
    // ...

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
            <Input
              title='Username'
              inTitle='abc_xyz'
              type='default'
              hidden={false}
              value={username}
              error={usernameError}
              setValue={setUsername}
              setError={setUsernameError}
            />
            <Input
              title='Password'
              inTitle='********'
              type='default'
              hidden={true}
              value={password}
              error={passwordError}
              setValue={setPassword}
              setError={setPasswordError}
            />

            <Button
              title='Sign In'
              fn={onSignIn}
            />

            <Text style={{ textAlign: 'center', marginTop: 40 }} >
              Don't Have an account ? <Text
                style={{ color: 'blue' }}
                onPress={() => navigation.navigate('SignUp')}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignInScreen
