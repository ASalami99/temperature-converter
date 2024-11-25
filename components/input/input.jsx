import { View, TextInput, Text } from "react-native";
import { s } from "./input.style";

export function Input({ defaultValue }) {
  return (
    <View style={s.root}>
      <TextInput
        style={s.input}
        maxLength={3}
        placeholder="Enter your temperature"
        defaultValue={defaultValue.toString()}
      />
      <Text style={s.unit}>°C</Text>
    </View>
  );
}
