---

sidebar_position: 2
title: Wiring & Requirement
---------------------------

### Hardware Components

| Component                 | Quantity | Notes                                       |
| ------------------------- | -------- | ------------------------------------------- |
| ATmega32 or ATmega16      | 1        | Main microcontroller unit                   |
| DS1302 RTC Module         | 1        | For real-time clock functionality           |
| I2C-Compatible OLED/LCD   | 1        | Display via I2C, requires pull-up resistors |
| USB to TTL Serial Adapter | 1        | For serial communication and programming    |
| Passive/Active Buzzer     | 1        | For simple sound output                     |
| 5V Regulated Power Supply | 1        | Ensure stable power source                  |
| Pull-up Resistors (4.7kΩ) | 2        | For I2C lines (SCL, SDA)                    |

---

### Minimum Requirements

* **Microcontroller**: ATmega32 or ATmega16
* **Power Supply**: 5V regulated input
* **Display Compatibility**: UART Serial to USB

---

### Schematic Overview
> SCHEMATIC CURENTLY UNAVAIABLE

### Pinout Connections

#### I2C Display (OLED/LCD):

* **PC0** → SCL *(with pull-up resistor)*
* **PC1** → SDA *(with pull-up resistor)*

#### UART Serial Communication:

* **PD0** → TX
* **PD1** → RX

#### DS1302 RTC Module:

* **PD2** → CLK
* **PD3** → DAT
* **PD4** → RST

#### Speaker/Buzzer:

* **PD7** → +SPK (positive terminal)
* **GND** → -SPK (negative terminal)

Ensure your power lines are clean and filtered when dealing with sound or communication modules to avoid noise or instability.
