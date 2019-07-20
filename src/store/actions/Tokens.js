import firebase from "../../config/firebaseConfig";
const db = firebase.firestore();

export const returnTokens = tokens => {
  return {
    type: "RETURN_TOKENS",
    tokens: tokens
  };
};

export const fetchTokens = () => {
  return async dispatch => {
    let currentUser = await firebase.auth().currentUser;
    if (currentUser) {
      let currentUserId = currentUser.uid;
      let tokenRef = db.collection("users").doc(currentUserId);
      tokenRef.onSnapshot(doc => {
        let tokenAmount = doc.data().tokens;
        dispatch(returnTokens(tokenAmount));
      });
    }
    // .get()
    // .then(doc => {
    //   let tokenAmount = doc.data().tokens;
    //   dispatch(returnTokens(tokenAmount));
    // })
    // .catch(err => console.log(err));
  };
};

export const updateTokens = (type, amount) => {
  return async dispatch => {
    let currentUserId = await firebase.auth().currentUser.uid;
    console.log(currentUserId);
    let tokenRef = db.collection("users").doc(currentUserId);
    tokenRef
      .get()
      .then(doc => {
        let tokenAmount = doc.data().tokens; // correctly denotes 100 to this amount
        console.log(type);
        if (type === "add") {
          tokenAmount += amount;
        } else if (type === "subtract") {
          tokenAmount -= amount;
        }
        tokenRef
          .set({
            ...doc.data(),
            tokens: tokenAmount
          })
          .then(() => dispatch(returnTokens(tokenAmount)))
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  };
};
