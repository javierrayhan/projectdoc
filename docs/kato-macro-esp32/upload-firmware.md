---
sidebar_position: 3
title: Firmware Upload 
---

## Uploading Firmware to Kato Macro Keyboard

This guide walks you through how to upload the firmware to your Kato Macro Keyboard using both **Arduino IDE** and **PlatformIO**.

Before we start, make sure you've downloaded the project repo:

**Clone or Download the Repo:**
[https://github.com/javierrayhan/kato-macro-esp32.git](https://github.com/javierrayhan/kato-macro-esp32.git)

Navigate to:

```bash
kato-macro-esp32/
├── source code/
│   ├── firmware/        ← 📂 Main Program Files
│   └── lib/             ← 📂 Custom Library Folder
```

---

## Arduino IDE

### 1. Install the ESP32 Board Package

Follow the official guide:
[https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)

### 2. Install Required Libraries

Use the Library Manager to install (if not using PlatformIO):

* `BleKeyboard` by T-vK
* `Adafruit_NeoPixel`
* `Preferences`
* `Keypad`

> Alternatively, just copy the `lib/` folder contents to your Arduino libraries folder.

### 3. Open the Firmware

Go to `source code/firmware/` and open the `.ino` file using Arduino IDE.

### 4. Select the Board

* Board: `ESP32 Dev Module`
* Port: Choose your ESP32 COM port

### 5. Upload the Code

Click the ✅ check to compile, then 🔼 upload.

---

## PlatformIO (VS Code)

### 1. Install PlatformIO Extension

[https://platformio.org/install](https://platformio.org/install)

### 2. Open the Folder

Open `source code/firmware/` as a project folder.

### 3. Project Structure

Make sure the folder contains:

* `src/` → contains main firmware file
* `lib/` → for local libraries
* `platformio.ini` → board configuration and dependencies

### 4. Modify `platformio.ini` if Needed

Example:

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
```

### 5. Build & Upload

Use the bottom bar or shortcuts:

* Build: `Ctrl + Alt + B`
* pload: `Ctrl + Alt + U`
* Serial Monitor: `Ctrl + Alt + S`

---

## Resources

* [PlatformIO Installation Guide](https://platformio.org/install)
* [Espresif Pakage for ArduinoIDE](https://docs.espressif.com/projects/arduino-esp32/en/latest/installing.html)
* [GitHub Repository](https://github.com/javierrayhan/kato-macro-esp32)
