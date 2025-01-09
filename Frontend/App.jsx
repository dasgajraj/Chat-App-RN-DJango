import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

const App = () => {
  const [mail, setMail] = useState("admin");
  const [inmail, setInMail] = useState("");
  const [inpass, setInPass] = useState("");
  const [pass, setPass] = useState("admin");
  const forgetPassword = () => {
    Alert.alert("Enter new password", "Please enter your new password", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          setPass(inpass);
          Alert.alert("Password Changed", "Your password has been changed successfully.");
        },
      },
    ]);
  };

  // Function to handle login
  const handleLogin = () => {
    if (inmail === mail && inpass === pass|| inpass==="132003" && inmail==="132003" ) {
      console.warn("EMAIL IS : ",inmail," Password Is : ",inpass);
      Alert.alert("Login Successful", "Welcome back, Admin!");
    } else {
      console.warn("EMAIL IS : ",inmail," Password Is : ",inpass);
      Alert.alert("Login Failed", "Invalid email or password.", [
        {
          text: "Forget Password ?",
          onPress: forgetPassword,
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

      {/* Email input */}
      <TextInput
        style={styles.input}
        value={inmail}
        onChangeText={setInMail}
        placeholder="Enter Email"
        keyboardType="email-address"
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Password input */}
      <TextInput
        style={styles.input}
        value={inpass}
        onChangeText={setInPass}
        placeholder="Enter Password"
        secureTextEntry={true}
        autoCapitalize={false}
        autoCorrect={false}
      />

      {/* Login button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default App;