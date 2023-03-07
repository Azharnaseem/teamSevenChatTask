import database from "@react-native-firebase/database";

export const sendText = async (messageObj, chatListId) => {
  try {
    console.log("calededddddddddddd", messageObj, chatListId);
    const res = await database()
      .ref("chats")
      .child(`iiiii`)
      .push()
      .set({ id: 1, message: "jjj" })
      .then((h) => {
        console.log(h, "sjs");
      })
      .catch((e) => {
        console.log(e, "jjjjj");
      });
    console.log(res, "888888888");
    return {
      success: true,
    };
  } catch (error) {
    console.log("-------------", error);
    return {
      success: false,
      error: error,
    };
  }
};
