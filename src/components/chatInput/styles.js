import { Platform, StyleSheet } from "react-native";
import AppColors from "~utills/AppColors";
import { height, width } from "~utills/Dimension";
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  container: {
    backgroundColor: AppColors.white,

    borderRadius: width(2),
    borderWidth: width(0.2),
    width: width(90),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderColor: AppColors.black80,
    paddingHorizontal: width(3),
    elevation: 1,
    marginBottom: height(3),
  },

  mainView: {
    alignItems: "center",
    justifyContent: "center",
    width: width(70),
    flexDirection: "row",
    marginLeft: width(2),
    paddingVertical: height(1),
  },
  inputText: {
    paddingVertical: 2,
    color: AppColors.black50,
    fontSize: width(3.2),
    paddingLeft: 0,
    width: "93%",
    fontWeight: "300",
  },
  threeIconCon: {
    backgroundColor: "green",
  },
  spacing: {
    width: width(16),
  },
});
export default styles;
