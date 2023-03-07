import React from "react";
import {
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import SVGIcon from "~assets/Svg/indx";

import AppColors from "~utills/AppColors";
import styles from "./styles";
export default function ChatInput({
  sendIcon = <SVGIcon.send />,
  iconShow = false,
  onPressSend,
  value,
  placeholder = "Write Messagesssss",
  keyboardType = "default",
  maxLength = null,
  multiline = false,
  numberOfLines = null,
  editable = true,
  onChangeText,
  returnKeyType = "default",
  onKeyPress,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" && "padding"}
      style={[styles.mainContainer]}
    >
      <View style={styles.container}>
        <View style={styles.mainView}>
          <TextInput
            selectionColor={AppColors.black}
            editable={editable}
            placeholder={placeholder}
            placeholderTextColor={AppColors.white80}
            style={styles.inputText}
            keyboardType={keyboardType}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
            value={value}
            onChangeText={onChangeText}
            returnKeyType={returnKeyType}
            onKeyPress={onKeyPress}
          />
        </View>

        <TouchableOpacity
          style={styles.icon}
          activeOpacity={0.7}
          onPress={onPressSend}
        >
          {sendIcon}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
