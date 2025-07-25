---
sidebar_position: 2
title: Wiring & Requirment
---

### Hardware Components

| Component                     | Quantity | Notes                                                                 |
| ----------------------------- | -------- | --------------------------------------------------------------------- |
| ESP32-WROOM               | 1        | Main microcontroller with Wi-Fi & Bluetooth onboard                   |
| AMS1117 3.3V Regulator    | 1        | Converts 5V (e.g. from USB) to 3.3V for the ESP32 and other modules   |
| ST7735 1.8" TFT LCD       | 1        | SPI-based display module, used as the main UI screen                  |
| MSKT-13C01 Switch         | 1        | Optional 3-way slide switch (useful for boot/program/reset selection) |
| W25Q EEPROM (e.g. W25Q64) | 1        | Optional external SPI EEPROM for future data storage expansion        |
| Buzzer (active type)      | 1        | Optional — gives audio feedback on events like boot or success        |
| 100nF Capacitor           | 2        | For decoupling / noise reduction on power lines                       |
| 10µF Capacitor            | 2        | Input/output filtering for AMS1117 voltage regulator                  |
| Tactile Push Button       | 3        | Used for user input (e.g., mode select, next photo, reset)            |
| USB Type-C Connector      | 1        | Optional — supplies regulated 5V input power to the whole system      |
| 2-Pin Header              | 2        | For UART TX/RX connection — useful for debugging via serial monitor   |


---

### Minimum Requirements
- **Microcontroller**: ESP32, you can use other ESP32 variants (like ESP32-S3, ESP32-C3, etc.), but you might need to make some adjustments 
- **Power Supply**: 5V regulated input via USB or external adapter
- **Display Compatibility**: ST7735 must support SPI at 3.3V logic
- **MicroSD or SPI Flash**: Must be formatted as FAT32
- **Relay Rating**: Make sure relay can handle your heating element’s current (e.g. 5A/250VAC)

---

### Schematic Overview

![SCHEMATIC](https://github.com/javierrayhan/esp32-1.8inch-photo-frame-gift/raw/main/images/schematic.png)


