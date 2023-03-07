import { StyleSheet } from "react-native";
import { height, width } from "~utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  headerContainer: {
    backgroundColor: "#3490B8",
    paddingVertical: height(1.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: width(100),

    elevation: 2,
  },
  nameText: {
    color: AppColors.white,
    fontSize: width(5),
    fontWeight: "500",
  },
  profileImage: {
    backgroundColor: "green",
    height: height(5),
    width: height(5),
    borderRadius: height(4),
    marginRight: width(4),
  },
});
export default styles;
