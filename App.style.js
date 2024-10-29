import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    root: {
        flex: 1,    //We have the whole space (page) available to work in
        justifyContent: "center"
    },

    workspace: {
        height: 450,
        //backgroundColor: "red", // We don't need this again. It was just to show where the workspace was\
        alignItems: "center",
        justifyContent: "space-evenly"
    },

    backgroundimage: {
        height: "100%"
    }
})