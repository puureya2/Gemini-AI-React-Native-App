# 🏋️ AI Gym Buddy

A cross-platform mobile application that leverages AI to deliver real-time fitness advice through natural language chat and image recognition. Built with **React Native**, styled with **NativeWind**, and powered by **Gemini AI**, this project combines cutting-edge tech with a sleek UI for both iOS and Android users.

---

## 🚀 Features

- 🤖 **AI Chat** – Ask fitness-related questions and get responses from Google Gemini API
- 🧠 **Image Recognition** – Scan gym equipment to receive guidance on usage and targeted muscle groups
- 📱 **Hybrid Design** – Built once, runs on both Android & iOS using Expo Go and NativeWind
- 🧪 **Appium Testing** – Automated UI tests ensure reliability and smooth experience
- 🧩 **7 Key Modules**:
  - Live AI chat coach
  - Equipment scanner (camera input)
  - Daily workout planner
  - Progress tracker
  - AI-powered meal suggestion
  - Motivation dashboard
  - Personalized fitness feedback

---

## 🛠️ Tech Stack

| Role                      | Tech Used                        |
|---------------------------|----------------------------------|
| Frontend Framework        | React Native (TypeScript)        |
| Styling                   | NativeWind (Tailwind for RN)     |
| AI Integration            | Gemini API                       |
| Camera / Image Handling   | Expo Camera                      |
| UI Testing                | Appium                           |
| Deployment                | Expo Go                          |

---

## 📷 Equipment Scanner (AI Image Module)

- Uses device camera (via Expo)
- Sends equipment image to Gemini API for classification
- Returns:
  - Equipment name
  - Proper usage
  - Targeted muscle group
  - Related workouts

---

## 🧪 Testing

- Fully tested navigation and UI flows using **Appium**
- Includes test cases for:
  - Chat bot interaction
  - Image scan module
  - User navigation across modules
  - API response handling

---

## 📁 Project Structure

