import React, {useState} from "react";
import {FlatList, SafeAreaView, StyleSheet, Text} from "react-native";

const COURSES = [
  {
    id: "45k6-j54k-4jth",
    title: "HTML",
  },
  {
    id: "4116-jfk5-43rh",
    title: "JavaScript",
  },
  {
    id: "4d16-5tt5-4j55",
    title: "React",
  },
  {
    id: "LG16-ant5-0J25",
    title: "React Native",
  },
  {
    id: "7a8b-9c0d-1e2f",
    title: "TypeScript",
  },
  {
    id: "9b8c-7d6e-5f4g",
    title: "Next.js",
  },
  {
    id: "1e2f-3g4h-5i6j",
    title: "Redux",
  },
  {
    id: "2g3h-4i5j-6k7l",
    title: "Redux Toolkit",
  },
  {
    id: "3i4j-5k6l-7m8n",
    title: "MUI",
  },
  {
    id: "4j5k-6l7m-8n9o",
    title: "Ant Design",
  },
  {
    id: "5k6l-7m8n-9o0p",
    title: "RESTful API",
  },
  {
    id: "6l7m-8n9o-0p1q",
    title: "Git",
  },
  {
    id: "7m8n-9o0p-1q2r",
    title: "npm/yarn",
  },
  {
    id: "8n9o-0p1q-2r3s",
    title: "Postman",
  },
];

export default function DataCollectionExample() {
  const [courses, setCourses] = useState(COURSES);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={courses}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
});
