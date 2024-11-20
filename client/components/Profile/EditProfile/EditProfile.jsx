import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
  Platform,
} from "react-native";
import * as ImagePicker from "react-native-image-picker";
import Header from "../../Home/Header";
import { useUser } from "../../../App"; // Import user context
import { updateUser, uploadAvatar } from "../../../services/userService";

const EditProfile = ({ navigation }) => {
  const { user, setUser } = useUser(); // Access user and setter from context
  const [profile, setProfile] = useState({
    avatar: user?.avatar || "https://via.placeholder.com/150",
    mobile: user?.phoneNumber || "",
    fullName: user?.username || "",
    email: user?.email || "",
  });
  
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  
  const handleImagePicker = async () => {
    if (Platform.OS === "web") {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const uri = URL.createObjectURL(file);
  
          // Gán trực tiếp tên file vào avatar
          setProfile((prevProfile) => ({
            ...prevProfile,
            avatar: {
              uri, // Temporary URI for preview
              type: file.type,
              name: file.name, // File name
              file, // Original file object
            },
          }));
        }
      };
      input.click();
    } else {
      ImagePicker.launchImageLibrary(
        {
          mediaType: "photo",
          includeBase64: false,
        },
        (response) => {
          if (response.didCancel) {
            showModal("Image selection was canceled.");
          } else if (response.errorCode) {
            showModal(response.errorMessage || "Error selecting the image.");
          } else {
            const asset = response.assets[0];
  
            // Gán trực tiếp tên file vào avatar
            setProfile((prevProfile) => ({
              ...prevProfile,
              avatar: {
                uri: asset.uri,
                type: asset.type,
                name: asset.fileName || "photo.jpg", // Default name if none is provided
              },
            }));
          }
        }
      );
    }
  };
  
  const handleSave = async () => {
    try {
      console.log("Profile before saving:", profile);
  
      let avatarPath = profile.avatar?.name || profile.avatar; // Nếu không có ảnh mới thì giữ nguyên
  
      // Nếu ảnh mới được chọn, upload trước khi cập nhật
      if (profile.avatar?.file) {
        const uploadResponse = await uploadAvatar(user.userId, profile.avatar.file);
        avatarPath = uploadResponse.avatar; // Lấy tên file trả về từ server
      }
  
      // Gửi các trường khác (email, phoneNumber, username)
      const updatedUser = {
        email: profile.email,
        phoneNumber: profile.mobile,
        username: profile.fullName,
        avatar: avatarPath, // Sử dụng tên file avatar (đã được upload)
      };
  
      const response = await updateUser(user.userId, updatedUser);
      if (response.success) {
        setUser((prevUser) => ({
          ...prevUser,
          ...updatedUser,
        }));
        showModal("Profile updated successfully.");
      } else {
        showModal("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error.message);
      showModal("Error updating profile.");
    }
  };
  
  

  const showModal = (message) => {
    setModalMessage(message);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalMessage("");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title={"Edit Profile"} showFullHeader={false} />
      <ScrollView style={{ paddingHorizontal: 16 }}>
        {/* Avatar Section */}
        <View style={styles.avatarSection}>
          <Image  source={{  uri: profile.avatar?.uri || `http://localhost:3002/images/avatars/${profile.avatar}` }}  style={styles.avatar}/>
          <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
            <Text style={styles.uploadButtonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Inputs */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Mobile Number</Text>
          <TextInput
            style={styles.input}
            value={profile.mobile}
            onChangeText={(text) => setProfile({ ...profile, mobile: text })}
          />

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value={profile.fullName}
            onChangeText={(text) => setProfile({ ...profile, fullName: text })}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={profile.email}
            onChangeText={(text) => setProfile({ ...profile, email: text })}
          />
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalMessage}>{modalMessage}</Text>
              <TouchableOpacity style={styles.closeModalButton} onPress={closeModal}>
                <Text style={styles.closeModalText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: "#FF6026",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  uploadButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#323842",
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    marginBottom: 16,
    color: "#323842",
  },
  saveButton: {
    backgroundColor: "#FF6026",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalMessage: {
    fontSize: 16,
    color: "#323842",
    marginBottom: 20,
    textAlign: "center",
  },
  closeModalButton: {
    backgroundColor: "#FF6026",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeModalText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },
});

export default EditProfile;
