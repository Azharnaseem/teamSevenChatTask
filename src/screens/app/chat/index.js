import React, { useRef, useState } from "react";
import { View, FlatList, Alert, Text, Image } from "react-native";
import { Profile } from "~assets/images";
import { ScreenWrapper } from "~components";
import ChatInput from "~components/chatInput";
import ChatMessageComponent from "~components/chatMessageComponent";
import CommonStyles from "~utills/CommonStyles";
import { height } from "~utills/Dimension";
import { messageData } from "~utills/dummyData";
import styles from "./styles";
import firestore from "@react-native-firebase/firestore";
import database from "@react-native-firebase/database";
import { sendText } from "~backend/Config";
export default function Chat({ navigation, route }) {
  const [iconShow, setIconShow] = useState(true);
  const [messages, setMessages] = useState(messageData);
  let chatId = 321;
  const flatListRef = useRef();
  const [sendMessageText, setSendMessageText] = useState("");
  const sendMessage = async (msg) => {
    try {
      // const randomId = firestore().collection("Pic").doc()?.id;

      if (sendMessageText == "") {
        Alert.alert("Please enter message");
      } else {
        // let obj = {
        //   id: "11",
        //   type: "message",
        //   message: msg,
        //   senderName: "Azhar",
        // };
        // console.log("============222222========================");
        // const response = await sendText(obj, chatId);
        // console.log("====================3333================", response);
        let temp = [...messages];
        let pushdata = {
          id: "1",
          message: sendMessageText,
          type: "reciever",
        };
        // if (response?.success) {
        temp.push(pushdata);
        setMessages(temp);
        setSendMessageText("");
        setTimeout(() => {
          flatListRef.current.scrollToEnd({ animated: true });
        }, 600);
        // } else {
        //   Alert.alert(response?.error);
        // }
      }
    } catch (error) {
      // console.log("error: " + error);
      Alert.alert("some went wrong");
    }
  };
  // useEffect(() => {
  //   // getUserData();
  //   // getChatId();
  //   // if (chatListId) {
  //   loadData();
  //   // }
  //   return () =>
  //     database()
  //       .ref("chats")
  //       .child(`${chatListId}`)
  //       .off("child_added", window.listener);
  // }, [chatListId]);
  // const loadData = async () => {
  //   let temp = [];
  //   let subscriber;
  //   await database()
  //     .ref("chats")
  //     .child(`${chatListId}`)
  //     .once("value", (snapshot) => {
  //       snapshot.forEach((item) => {
  //         if (item?.val()?.id) temp.push(item.val());
  //       });
  //       setMessages(temp.reverse());
  //       // setTimeout(() => flatListRef.current.scrollToOffset({ animated: true, y: 0 }), 600)
  //     });
  //   //   let count = 0;
  //   //   window.listener = database()
  //   //     .ref("chats")
  //   //     .child(`${chatListId}`)
  //   //     .on("child_added", (snapshot) => {
  //   //       count++;
  //   //       if (snapshot.key && snapshot.key == "createdAt") {
  //   //         return;
  //   //       }
  //   //       // setMessages(prev => ([snapshot.val(), ...prev]))
  //   //       // setTimeout(() => flatListRef.current.scrollToOffset({ animated: true, y: 0 }), 600)
  //   //       if (count <= temp.length) {
  //   //       } else {
  //   //         setMessages((prev) => [snapshot.val(), ...prev]);
  //   //         // setTimeout(
  //   //         //   () => flatListRef.current.scrollToEnd({animated: true, y: 0}),
  //   //         //   600,
  //   //         // );
  //   //       }
  //   //     });
  // };

  const showMessage = ({ item, index }) => (
    <ChatMessageComponent item={item} index={index} />
  );
  return (
    <ScreenWrapper
      headerUnScrollable={() => {
        return (
          <View style={styles.headerContainer}>
            <Image
              source={Profile}
              style={styles.profileImage}
              resizeMode="contain"
            />
            <Text style={styles.nameText}>Azhar Naseem</Text>
          </View>
        );
      }}
      footerUnScrollable={() => (
        <ChatInput
          value={sendMessageText}
          onChangeText={(text) => setSendMessageText(text)}
          onPressSend={sendMessage}
          multiline={true}
        />
      )}
    >
      <View style={styles.mainViewContainer}>
        <FlatList
          data={messages}
          renderItem={showMessage}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          ref={flatListRef}
          contentContainerStyle={CommonStyles.paddingBottom_2}
        />
      </View>
    </ScreenWrapper>
  );
}
