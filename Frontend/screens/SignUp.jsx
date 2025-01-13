import Button from '@/common/Button'
import Input from '@/common/Input'
import Title from '@/common/Title'
import { useLayoutEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

const SignUpScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])


  return (
    <SafeAreaView style={{
      flex: 1,
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16
      }}>

        <Title text='Sign Up' />
        <Input title='Username' inTitle='abc_xyz' type='default' hidden={false} />
        <Input title='First Name' inTitle='abc' type='default' hidden={false} />
        <Input title='Last Name' inTitle='xyz' type='default' hidden={false} />
        <Input title='Password' inTitle='****' type='default' hidden={true} />
        <Input title='Retype Password' inTitle='****' type='default' hidden={true} />

        <Button title="Sign Up" />

        <Text style={{ textAlign: 'center', marginTop: 40 }}>
          Already have an account? <Text
            style={{ color: 'blue' }}
            onPress={() => navigation.goBack()}
          >
            Sign In instead
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen
