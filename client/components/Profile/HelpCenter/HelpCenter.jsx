import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../../Home/Header";

const HelpCenter = () => {
  const helpTopics = [
    {
      title: "How can I contact customer support?",
      content:
        "If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.",
    },
    {
      title: "How Do I Track My Order?",
      content:
        'You can track your order by clicking on "Track Order" or a similar option on the website. This will provide real-time updates on your order status and shipping.',
    },
    {
      title: "Can I Cancel or Modify My Order?",
      content:
        "Depending on the order status and our cancellation policy, you may be able to cancel or modify your order. Contact our customer support for assistance.",
    },
    {
      title: "Do you offer gift wrapping?",
      content:
        "Yes, we offer gift wrapping for an additional fee. You can select this option during checkout.",
    },
    {
      title: "What Is Your Return and Refund Policy?",
      content:
        'Our return and refund policy can be found in the website\'s "Terms and Conditions" or "Return Policy" section. Please review it for details.',
    },
  ];

  const [expandedTopic, setExpandedTopic] = React.useState(null);

  const toggleExpand = (index) => {
    setExpandedTopic(expandedTopic === index ? null : index);
  };

  return (
    <View style={styles.container}>
     <Header title={"Help Center"} showFullHeader={false} />
      <ScrollView style={styles.content}>
        {helpTopics.map((topic, index) => (
          <View key={index} style={styles.topicContainer}>
            <TouchableOpacity
              style={styles.topicHeader}
              onPress={() => toggleExpand(index)}
            >
              <Text style={styles.topicTitle}>{topic.title}</Text>
            </TouchableOpacity>
            {expandedTopic === index && (
              <Text style={styles.topicContent}>{topic.content}</Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  content: {
    flex: 1,
  },
  topicContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
  },
  topicHeader: {
    paddingVertical: 12,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  topicContent: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
    lineHeight: 20,
  },
});

export default HelpCenter;
