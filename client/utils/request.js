import { Platform } from 'react-native';

const API_DOMAIN = Platform.OS === 'android' ? "http://10.0.2.2:3002/" : "http://localhost:3002/";

export const get = async (path) => {
    try {
        const response = await fetch(API_DOMAIN + path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in GET request:", error);
        throw error;
    }
};

export const post = async (path, options) => {
    try {
        const response = await fetch(API_DOMAIN + path, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in POST request:", error);
        throw error;
    }
};

export const del = async (path, options = {}) => {
    try {
        const response = await fetch(API_DOMAIN + path, {
            method: "DELETE",
            ...options,
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in DELETE request:", error);
        throw error;
    }
};


export const patch = async (path, options) => {
    console.log("path", path);
    console.log("options", options)
    try {
        const response = await fetch(API_DOMAIN + path, {
            method: "PATCH",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in PATCH request:", error);
        throw error;
    }
};


export const upload = async (path, formData) => {
    try {
      const response = await fetch(API_DOMAIN + path, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error in UPLOAD request:", error);
      throw error;
    }
  };
  