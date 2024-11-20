import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import { useUser } from "../../../App"; // Lấy thông tin user từ context
import {
  fetchAddresses,
  addAddress,
  removeAddress,
  updateAddress,
} from "../../../services/addressService";
import Header from "../../Home/Header";

const AddressItem = ({ address, user, onEdit, onRemove }) => {
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.addressText}>{`Name: ${user.fullName}`}</Text>
      <Text style={styles.addressText}>{`${address.Street}, ${address.Ward}`}</Text>
      <Text style={styles.addressText}>{`${address.District}, ${address.City}`}</Text>
      <Text style={styles.addressText}>{`Mobile: ${user.phoneNumber}`}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.removeButton]}
          onPress={() => onRemove(address.AddressID)}
        >
          <Text style={[styles.buttonText, styles.removeButtonText]}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.editButton]}
          onPress={() => onEdit(address)}
        >
          <Text style={[styles.buttonText, styles.editButtonText]}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const SuccessNotificationModal = ({ visible, message, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.notificationContainer}>
          <Text style={styles.notificationText}>{message}</Text>
          <TouchableOpacity style={styles.notificationButton} onPress={onClose}>
            <Text style={styles.notificationButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const ConfirmModal = ({ visible, onConfirm, onCancel }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.confirmContainer}>
          <Text style={styles.confirmText}>Are you sure you want to delete this address?</Text>
          <View style={styles.confirmButtonGroup}>
            <TouchableOpacity style={styles.confirmCancelButton} onPress={onCancel}>
              <Text style={styles.confirmCancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmOkButton} onPress={onConfirm}>
              <Text style={styles.confirmOkText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Address = () => {
  const { user } = useUser(); // Lấy thông tin User từ context
  const [addresses, setAddresses] = useState([]);
  const [notificationModalVisible, setNotificationModalVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [addressToRemove, setAddressToRemove] = useState(null);

  const [editModalVisible, setEditModalVisible] = useState(false); // Trạng thái Modal
  const [currentAddress, setCurrentAddress] = useState(null); // Địa chỉ hiện tại đang chỉnh sửa
  const [addModalVisible, setAddModalVisible] = useState(false); // Trạng thái hiển thị modal thêm
  const [newAddress, setNewAddress] = useState({
    City: "",
    District: "",
    Ward: "",
    Street: "",
  }); // Địa chỉ mới
  useEffect(() => {
    if (user) {
      loadAddresses();
    }
  }, [user]);

  useEffect(() => {
  }, [currentAddress]);

  const loadAddresses = async () => {
    try {
      const response = await fetchAddresses(user.userId);
      if (response.success && response.addresses) {
        setAddresses(response.addresses);
      } else {
        console.error("Error fetching addresses: No data returned");
      }
    } catch (error) {
      console.error("Error loading addresses:", error.message);
    }
  };

  const handleRemove = (addressId) => {
    setAddressToRemove(addressId); // Set the address ID to remove
    setConfirmModalVisible(true); // Show the confirmation modal
  };

  const confirmRemove = async () => {
    try {
      const response = await removeAddress(addressToRemove); // Use the stored ID
      if (response.success) {
        loadAddresses();
        setNotificationMessage("Address removed successfully!");
        setNotificationModalVisible(true);
      } else {
        console.error("Error removing address: Failed response");
      }
    } catch (error) {
      console.error("Error removing address:", error.message);
    } finally {
      setConfirmModalVisible(false); // Hide the confirmation modal
    }
  };


  const handleAddAddress = async () => {
    try {
      const addressToAdd = {
        ...newAddress,
        userId: user.userId, // User ID từ context
      };
      const response = await addAddress(addressToAdd);
      if (response.success) {
        loadAddresses();
        setAddModalVisible(false);
        setNewAddress({ City: "", District: "", Ward: "", Street: "" });
        setNotificationMessage("Address added successfully!");
        setNotificationModalVisible(true);
      } else {
        console.error("Failed to add address");
      }
    } catch (error) {
      console.error("Error adding address:", error.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const updatedAddress = {
        ...currentAddress, // Giữ nguyên dữ liệu cũ
        userId: user.userId, // User ID từ context
      };
      const response = await updateAddress(currentAddress.AddressID, updatedAddress);
      if (response.success) {
        loadAddresses();
        setEditModalVisible(false);
        setNotificationMessage("Address updated successfully!");
        setNotificationModalVisible(true);
      } else {
        console.error("Failed to update address");
      }
    } catch (error) {
      console.error("Error updating address:", error.message);
    }
  };


  const handleEdit = (address) => {
    setCurrentAddress(address); // Gán địa chỉ hiện tại
    setEditModalVisible(true); // Hiển thị Modal
  };




  const handleCancel = () => {
    setEditModalVisible(false); // Đóng Modal
  };

  return (
    <View style={styles.container}>
      <Header showFullHeader={false} title={'Address'} />
      <ScrollView style={{ padding: 16, }}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setAddModalVisible(true)}
        >
          <Text style={styles.addButtonText}>+ Add New Address</Text>
        </TouchableOpacity>

        <ScrollView>
          {addresses.length > 0 ? (
            addresses.map((address, index) => (
              <AddressItem
                key={index}
                address={address}
                user={user}
                onEdit={handleEdit}
                onRemove={handleRemove}
              />
            ))
          ) : (
            <Text style={styles.noAddressText}>No addresses available.</Text>
          )}
        </ScrollView>
        {/* Modal for Editing Address */}
        {editModalVisible && (
          <Modal
            visible={editModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={handleCancel}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Update Address</Text>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Name:</Text>
                  <TextInput
                    style={styles.input}
                    value={user.fullName}
                    editable={false}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Phone Number:</Text>
                  <TextInput
                    style={styles.input}
                    value={user.phoneNumber}
                    editable={false}
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>City:</Text>
                  <TextInput
                    style={styles.input}
                    value={currentAddress?.City}
                    onChangeText={(text) =>
                      setCurrentAddress({ ...currentAddress, City: text })
                    }
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>District:</Text>
                  <TextInput
                    style={styles.input}
                    value={currentAddress?.District}
                    onChangeText={(text) =>
                      setCurrentAddress({ ...currentAddress, District: text })
                    }
                  />
                </View>
                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Ward:</Text>
                  <TextInput
                    style={styles.input}
                    value={currentAddress?.Ward}
                    onChangeText={(text) =>
                      setCurrentAddress({ ...currentAddress, Ward: text })
                    }
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Street:</Text>
                  <TextInput
                    style={styles.input}
                    value={currentAddress?.Street}
                    onChangeText={(text) =>
                      setCurrentAddress({ ...currentAddress, Street: text })
                    }
                  />
                </View>

                {/* Buttons */}
                <View style={styles.buttonGroup}>
                  <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
                    <Text style={styles.updateButtonText}>Update</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}

        {/* Modal for Adding Address */}
        {addModalVisible && (
          <Modal
            visible={addModalVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={() => setAddModalVisible(false)}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Add New Address</Text>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>City:</Text>
                  <TextInput
                    style={styles.input}
                    value={newAddress.City}
                    onChangeText={(text) => setNewAddress({ ...newAddress, City: text })}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>District:</Text>
                  <TextInput
                    style={styles.input}
                    value={newAddress.District}
                    onChangeText={(text) => setNewAddress({ ...newAddress, District: text })}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Ward:</Text>
                  <TextInput
                    style={styles.input}
                    value={newAddress.Ward}
                    onChangeText={(text) => setNewAddress({ ...newAddress, Ward: text })}
                  />
                </View>

                <View style={styles.inputGroup}>
                  <Text style={styles.label}>Street:</Text>
                  <TextInput
                    style={styles.input}
                    value={newAddress.Street}
                    onChangeText={(text) => setNewAddress({ ...newAddress, Street: text })}
                  />
                </View>

                {/* Buttons */}
                <View style={styles.buttonGroup}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => setAddModalVisible(false)}
                  >
                    <Text style={styles.cancelButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.updateButton}
                    onPress={handleAddAddress}
                  >
                    <Text style={styles.updateButtonText}>Add</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
        <SuccessNotificationModal
          visible={notificationModalVisible}
          message={notificationMessage}
          onClose={() => setNotificationModalVisible(false)}
        />
        <ConfirmModal
          visible={confirmModalVisible}
          onConfirm={confirmRemove}
          onCancel={() => setConfirmModalVisible(false)}
        />

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFFFFF",
  },
  addButton: {
    borderWidth: 1,
    borderColor: "#FFA500", // Màu cam
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFFFFF", // Nền trắng
  },
  addButtonText: {
    color: "#FFA500", // Màu cam
    fontWeight: "bold",
    fontSize: 16,
  },
  addressContainer: {
    backgroundColor: "#F9F9F9",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  defaultAddress: {
    fontWeight: "bold",
    marginBottom: 8,
  },
  addressText: {
    marginBottom: 4,
    color: "#555",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  button: {
    flex: 0.48,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  removeButton: {
    backgroundColor: "#FFFFFF", // Nền trắng
    borderWidth: 1,
    borderColor: "#FF4500", // Đỏ cam
  },
  removeButtonText: {
    color: "#FF4500", // Đỏ cam
    fontWeight: "bold",
  },
  editButton: {
    backgroundColor: "#FFFFFF", // Nền trắng
    borderWidth: 1,
    borderColor: "#32CD32", // Xanh lá
  },
  editButtonText: {
    color: "#32CD32", // Xanh lá
    fontWeight: "bold",
  },
  noAddressText: {
    textAlign: "center",
    color: "#999",
    marginTop: 20,
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputGroup: {
    width: "100%",
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    width: "100%",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  cancelButton: {
    flex: 0.45,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FF4500",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  cancelButtonText: {
    color: "#FF4500",
    fontWeight: "bold",
  },
  updateButton: {
    flex: 0.45,
    backgroundColor: "#32CD32",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  updateButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  notificationContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  notificationButton: {
    backgroundColor: "#32CD32",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  notificationButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  confirmContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  confirmText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  confirmButtonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  confirmCancelButton: {
    flex: 0.45,
    backgroundColor: "#FF4500",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  confirmCancelText: {
    color: "#fff",
    fontWeight: "bold",
  },
  confirmOkButton: {
    flex: 0.45,
    backgroundColor: "#32CD32",
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 8,
  },
  confirmOkText: {
    color: "#fff",
    fontWeight: "bold",
  },

});

export default Address;
