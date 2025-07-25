---
sidebar_position: 2
title: Wiring & Requirment
---

## Hardware Components

| Component                   | Quantity | Notes                                         |
| --------------------------- | -------- | --------------------------------------------- |
| ESP32-WROOM Module          | 1        | Main microcontroller with Wi-Fi + Bluetooth   |
| AO3400 N-Channel MOSFET     | 1        | Controls LED brightness with PWM              |
| EC11 Rotary Encoder         | 1        | Used as a scroll/volume/input knob            |
| Hotswap Switch Socket       | 7        | Allows switch replacement without soldering   |
| 7x LED 0805 (Optional)      | 7        | Per-key backlight LEDs (optional use)         |
| ME6211 LDO 3.3V Regulator   | 1        | Provides stable 3.3V for ESP32 and components |
| USB Type-C 6P (Power Only)  | 1        | Power input via USB                           |
| Charging/Discharging Module | 1        | 2A capable, supports battery power management |
| 120Ω Resistor               | 7        | For LED current limiting                      |
| 10kΩ Resistor               | 2        | Pull-up resistors for I2C or encoder          |
| 10µF Capacitor              | 1        | Power line stabilization                      |
| LED 1206 (Power LED)        | 1        | Indicates power status                        |

---

## Minimum Requirements

* **Power Supply:** 5V from USB Type-C or 3.7V Li-ion Battery
* **Tools Needed:** Soldering iron, hot air rework (optional for SMD), multimeter
* **Platform:** Arduino IDE or PlatformIO
* **Libraries:** `NimBLE`, `EEPROM`, `Adafruit NeoPixel`, `RotaryEncoder`

---

## Schematic Overview

![SCHEMATIC](https://github.com/javierrayhan/kato-macro-esp32/raw/main/images/schematic.png)
