import { news } from "../news";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";

const General = () => {
  const [newsData, setNewsData] = useState([]);
  useEffect(() => {
    news("general")
      .then((data) => {
        setNewsData(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <FlatList
      data={newsData}
      renderItem={({ item }) => (
        <SafeAreaView style={styles.container}>
          <Image
            source={{
              uri: item.urlToImage,
            }}
            style={styles.image}
          />
          <View style={{ padding: 10 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <View style={styles.data}>
              <Text style={styles.heading}>
                Author:<Text style={styles.author}>{item.author}</Text>
              </Text>
              <Text style={styles.heading}>
                Date:<Text style={styles.date}>{item.publishedAt}</Text>
              </Text>
            </View>

            {/*source*/}
            <View style={{ marginTop: 10 }}>
              <Text style={styles.heading}>
                Source:<Text style={styles.source}>{item.source.name}</Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
      )}
      keyExtractor={(item) => item.id}
    />
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
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
    marginTop: 10,
  },
  heading: {
    fontWeight: "bold",
  },
  data: {
    marginTop: 10,
  },
  author: {
    fontWeight: "bold",
    color: "green",
  },
  date: {
    fontWeight: "bold",
    color: "green",
  },
  source: {
    color: "green",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default General;
