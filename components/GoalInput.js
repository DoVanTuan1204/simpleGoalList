import {
  Button,
  StyleSheet,
  Modal,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputForm}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.TextInput}
          placeholder="Goal"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addGoalHandler} style={styles.button}>
            <Text style={styles.txt}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={props.onCancel}>
            <Text style={styles.txt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputForm: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
  },
  TextInput: {
    borderWidth: 1,
    fontSize: 20,
    borderColor: "#aaa",
    width: "100%",
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
    backgroundColor: "black",
    borderRadius: 50,
  },
  txt: {
    color: "black",
    fontSize: 26,
    fontWeight: "normal",
  },
});
