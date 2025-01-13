import { View, Text, TextInput } from 'react-native'


export default function Input({ title, inTitle, type, hidden, value, setValue, error, setError }) {
  return (
    <View>
      <Text
        style={{
          color: error ? 'red' : '#70747a',
          marginVertical: 6,
          paddingLeft: 16
        }}
      >
        {error ? error : title}
      </Text>
      <TextInput
        placeholder={inTitle}
        keyboardType={type}
        secureTextEntry={hidden}
        autoCapitalize={false}
        autoCorrect={false}
        value={value}
        onChangeText={
          (txt) => {
            setValue(txt)

            if (error) { setError('') }
          }}
        style={{
          borderWidth: 1,
          borderColor: error ? 'red' : 'white',
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