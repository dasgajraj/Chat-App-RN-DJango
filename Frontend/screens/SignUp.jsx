import { Alert, 
  KeyboardAvoidingView, 
  Keyboard,
  SafeAreaView, 
  Text, 
  TouchableWithoutFeedback, 
  View 
} from 'react-native'
import React, { 
  useLayoutEffect, 
  useState } from 'react'
import Title from '@/common/Title'
import Button from '@/common/Button'
import Input from '@/common/Input'

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [firstNameError, setFirstNameError] = useState('')
  const [lastNameError, setLastNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [rePasswordError, setRePasswordError] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  function onSignUp() {
    // Check username
    const faultUsername = !username || username.length < 5
    faultUsername && setUsernameError("Username must be at least 5 characters")

    // Check first name
    const faultFirstName = !firstName
    faultFirstName && setFirstNameError("First Name is required")

    // Check last name
    const faultLastName = !lastName
    faultLastName && setLastNameError("Last Name is required")

    // Check password
    const faultPassword = !password || password.length < 6
    faultPassword && setPasswordError("Password must be at least 6 characters")

    // Check re-password
    const faultRePassword = rePassword !== password
    faultRePassword && setRePasswordError("Passwords do not match")

    // If any error, break
    if (faultUsername || faultFirstName || faultLastName || faultPassword || faultRePassword) {
      return
    }

    // Do Sign Up (If everything is valid)
    console.log('Sign Up Done', username, password)
    Alert.alert("Success", "You have signed up successfully!")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex:1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: 16 }}>
        <Title text="Sign Up" />

        <Input
          title="Username"
          inTitle="abc_xyz"
          type="default"
          hidden={false}
          value={username}
          error={usernameError}
          setValue={setUsername}
          setError={setUsernameError}
        />

        <Input
          title="First Name"
          inTitle="John"
          type="default"
          hidden={false}
          value={firstName}
          error={firstNameError}
          setValue={setFirstName}
          setError={setFirstNameError}
        />

        <Input
          title="Last Name"
          inTitle="Doe"
          type="default"
          hidden={false}
          value={lastName}
          error={lastNameError}
          setValue={setLastName}
          setError={setLastNameError}
        />

        <Input
          title="Password"
          inTitle="****"
          type="default"
          hidden={true}
          value={password}
          error={passwordError}
          setValue={setPassword}
          setError={setPasswordError}
        />

        <Input
          title="Retype Password"
          inTitle="****"
          type="default"
          hidden={true}
          value={rePassword}
          error={rePasswordError}
          setValue={setRePassword}
          setError={setRePasswordError}
        />

        <Button
          title="Sign Up"
          fn={onSignUp}
        />

        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          Already have an account? <Text
            style={{ color: 'blue' }}
            onPress={() => navigation.goBack()}
          >
            Sign In instead
          </Text>
        </Text>
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignUpScreen
