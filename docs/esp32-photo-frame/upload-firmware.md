---
sidebar\_position: 3
title: Firmware Upload (PlatformIO)
---

# Firmware Upload (PlatformIO)

To upload the firmware for the **ESP32 1.8" Photo Frame Gift**, follow this guide using [PlatformIO](https://platformio.org/install). PlatformIO provides a modern, scalable, and professional workflow with better library management and multi-board support.

---

## 1. Clone the Repository

Start by cloning or downloading the firmware source code:

```bash
git clone https://github.com/javierrayhan/esp32-1.8inch-photo-frame-gift.git
```

Navigate to the PlatformIO project directory:

```bash
cd esp32-1.8inch-photo-frame-gift/platformio/
```

This folder contains all necessary files: `platformio.ini`, `src/`, `lib/`, etc.

---

## 2. Configure PlatformIO Project

Open the `platformio.ini` file and confirm the environment matches your ESP32 board. This project is tested with `esp32dev` (ESP32-WROOM), but you can change it to suit your variant.

**Example config:**

```ini
[env:esp32dev]
platform = espressif32
board = esp32dev
framework = arduino
monitor_speed = 115200
upload_speed = 921600
build_flags =
  -D CORE_DEBUG_LEVEL=3
```

To find your exact board name, run:

```bash
pio boards
```

> You can also browse supported boards [here](https://docs.platformio.org/en/latest/boards/espressif32/index.html).

---

## 3. Connect the ESP32

1. Plug your ESP32 board via USB.
2. Open PlatformIO (VS Code IDE or CLI).
3. Make sure the correct COM port is detected.
4. Some boards may require you to **hold the BOOT button** during upload.

---

## 4. Upload the Firmware

To build and upload the firmware:

* Click the **Upload (checkmark)** button in the PlatformIO sidebar, or
* Run the following command:

```bash
platformio run --target upload
```

---

## 5. After Upload

If everything goes well, your ESP32 should:

* Display images from the SD card on the 1.8" TFT LCD
* Sync and display current time via Wi-Fi (NTP)
* Run colorful LED animations (WS2812B)
* Show Wi-Fi status using the buzzer and LEDs
* Use auto or fixed brightness for the display

---

## Resources

* [PlatformIO Installation Guide](https://platformio.org/install)
* [ESP32 Board List (PlatformIO)](https://docs.platformio.org/en/latest/boards/espressif32/index.html)
* [GitHub Repository](https://github.com/javierrayhan/esp32-1.8inch-photo-frame-gift)
