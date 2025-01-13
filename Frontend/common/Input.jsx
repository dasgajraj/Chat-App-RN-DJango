import {View,Text,TextInput} from 'react-native'


export default function Input({ title, inTitle, type, hidden }) {
    return (
      <View>
        <Text
          style={{
            color: '#70747a',
            marginVertical: 6,
            paddingLeft: 16
          }}
        >
          {title}
        </Text>
        <TextInput
          placeholder={inTitle}
          keyboardType={type}
          secureTextEntry={hidden}
          autoCapitalize={false}
          style={{
            backgroundColor: '#e1e2e4',
            borderRadius: 26,
            height: 52,
            paddingHorizontal: 16,
            fontSize: 16,
          }}
        />
      </View>
    )
  }