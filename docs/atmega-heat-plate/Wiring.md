---
sidebar_position: 2
title: Wiring & Requirment
---

### Hardware Components

| Component                        | Quantity | Notes                                              |
|----------------------------------|----------|----------------------------------------------------|
| ATmega328P / ATmega168 / ATmega8| 1        | Main microcontroller (8-bit AVR series)            |
| 100k NTC Thermistor (B3950)      | 1        | Temperature sensor; check your thermistor datasheet |
| OLED 128x64 I2C                  | 1        | SSD1306-based I2C display for UI                   |
| Rotary Encoder                   | 1        | Used to adjust target temperature                  |
| Encoder Push Button              | 1        | Toggles heating ON/OFF                             |
| Relay Module                     | 1        | Controls heater based on temperature               |
| Resistors 10K                    | 1        | Pull-up for RESET pin                              |
| Resistors 100K                   | 1        | Pull-up for thermistor input                       |
| Breadboard / PCB                 | 1        | For prototyping or permanent assembly              |
| LED                              | 1        | Power/status indicator                             |
| 5V Power Supply                  | 1        | Powers microcontroller and relay                   |

---

### Minimum Requirements

- **Voltage Tolerance**: 5V regulated (recommended via AMS1117 or similar LDO)
- **I2C Level Compatibility**: OLED display must support 5V I2C lines if ATmega runs at 5V
- **Pull-up Resistors**: Required for stable rotary encoder reading & NTC sensing
- **Relay Rating**: Make sure relay can handle your heating element’s current (e.g. 5A/250VAC)

---

### Schematic Overview

![SCHEMATIC](https://github.com/javierrayhan/Atmega328-168-8-Heat-plate/raw/main/images/schematic.png)


