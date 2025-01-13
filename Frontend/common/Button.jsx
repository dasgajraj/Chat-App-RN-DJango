import { Text, TouchableOpacity } from 'react-native'

export default function Button({ title, fn }) {
    return (
        <TouchableOpacity
            onPress={fn}
            style={{
                backgroundColor: '#202020',
                borderRadius: 26,
                height: 52,
                paddingHorizontal: 16,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 20,

            }}
        >
            <Text
                style={{
                    color: 'white',
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}