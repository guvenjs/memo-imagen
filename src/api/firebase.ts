import firestore from "@react-native-firebase/firestore";

firestore().settings({
  persistence: true,
});

export const db = firestore();
