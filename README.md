# EyeMouse: Hands-Free Computer Control

EyeMouse is an assistive-technology project designed to allow physically challenged users to operate a computer without using their hands. 

This repository currently contains the **Frontend UI** built for the project.

## 🎯 Project Purpose

The system maps facial features and head movements to standard mouse inputs:
- **Head movement** → Cursor movement
- **Intentional blink** → Mouse click
- **Mouth opening** → Scroll mode

*(Note: The actual computer-vision backend utilizing MediaPipe, OpenCV, and PyAutoGUI will interface with this frontend)*

## 🛠️ Implementation Details

### Technology Stack
- **Framework:** React + Vite
- **Styling:** Vanilla CSS with custom properties (CSS variables) for theme consistency. 
- **Routing:** React Router v6
- **Icons:** Lucide React

### Design System & Architecture
- **Assistive Technology Focus:** The interface avoids generic admin dashboard looks and focuses on high contrast, clear state indicators, large typography, and easy-to-read metric cards.
- **Blue Gradient Theme:** Uses a modern blue gradient (`linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)`) for primary actions to ensure a polished, professional look suitable for an academic presentation.
- **Component Architecture:** Designed to be modular:
  - `Sidebar` & `Header`: Persistent layout elements.
  - `Dashboard`: The central control hub featuring live camera preview, real-time metrics, system status, and the primary emergency stop controls.
  - `Settings`: Granular controls (Cursor Speed, Stillness Lock, Blink Sensitivity) structured cleanly to easily map to future backend APIs.
  - `CameraPage`: Granular tracking toggles and camera configuration.
- **Live Webcam Integration:** The frontend accesses the user's camera natively via the `navigator.mediaDevices.getUserMedia` API on the Dashboard and Camera pages, projecting the feed directly onto the UI so the user knows they are being tracked.
- **Emergency Stop:** Integrated a "Stop Camera" function into the Emergency Stop button that forcibly halts media tracks, instantly turning off the webcam for safety.

## 💻 System Requirements

To run this frontend locally, you will need:
- **OS:** Windows, macOS, or Linux
- **Node.js:** v16.0.0 or higher
- **npm:** v7.0.0 or higher (or Yarn / pnpm)
- A modern web browser with camera permissions enabled (Chrome, Edge, Firefox, Safari).
- A working webcam.

## 🚀 How to Run the Project

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Open [http://localhost:5173](http://localhost:5173) in your web browser.

## 🔗 Future Backend Integration
The UI states (e.g., `isControlling`, `streamActive`, `X/Y` mock values) are currently managed via React State. 
When the Python backend is finalized, these states can be easily replaced by connecting a WebSocket client (e.g., `socket.io-client`) inside `App.jsx` or a central context provider, broadcasting live tracking data to the MetricCards in real-time.
