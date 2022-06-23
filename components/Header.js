import React from "react";
import { StyleSheet, View, Text, SafeAreaView, Image } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://nsiteam.com/social/wp-content/uploads/2016/12/Depositphotos_19723583_m-2015-930x698.jpg",
        }}
        style={styles.image}
      />
      <View style={{ padding: 10 }}>
        <Text style={styles.title}> Welcome to News App</Text>
        <Text style={styles.description}>Check out All the news based on Category</Text>
        <Text style={styles.description}>Developed by Yashas and Shuaib</Text>
        
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: "grey",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
    marginTop: 60,
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    display: "flex",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: "400",
    marginTop: 10,
  },

  
});

export default Header;
