import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <Pressable
      android_ripple={{ color: "#dddddd" }}
      onPress={() => {
        props.onDeleteItem(props.id);
      }}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.itemData}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "black",
  },
  goalText: {
    fontSize: 20,
    color: "white",
  },
});
