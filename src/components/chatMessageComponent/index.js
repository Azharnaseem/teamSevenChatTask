import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
export default function ChatMessageComponent({ item, index }) {
  let data = item;
  return (
    <View style={styles.mainContainer}>
      {data.type == "sender" ? (
        <>
          <View style={styles.senderContainer}>
            <Text>{data.message}</Text>
          </View>
        </>
      ) : (
        <>
          <View style={styles.receiverContainer}>
            <Text>{data.message}</Text>
          </View>
          {/* <Text textStyles={styles.receiverTime}>{data.time}</Text> */}
        </>
      )}
    </View>
  );
}
