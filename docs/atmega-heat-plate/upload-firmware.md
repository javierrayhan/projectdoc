---
sidebar_position: 3
title: Firmware Upload
---

# Firmware Upload

## 1. Getting Started

To flash the firmware to your ATmega328/168/8-based Heat Plate Controller, follow these steps. This guide assumes you're using the [Arduino IDE](https://www.arduino.cc/en/software).

---

## 2. Clone the Repository

Start by cloning the firmware from GitHub:

```bash
git clone https://github.com/javierrayhan/Atmega328-168-8-Heat-plate.git
```

Navigate to the cloned folder and open the `firmware/` directory.

---

## 3. Install Required Libraries

All required libraries are located in the `lib/` folder inside the project. Copy the folders from `lib/` to your Arduino libraries directory:

```bash
Documents/Arduino/libraries/
```

If the `libraries/` folder doesn't exist, create it manually.

---

## 4. Open the Sketch

Inside the `firmware/` folder, open the main sketch file (e.g., `heatplate.ino`) using the Arduino IDE.

---

## 5. Configure the IDE

### Select the Correct Board

Go to **Tools > Board** and choose the appropriate board based on your microcontroller:

* ATmega328P
* ATmega168
* ATmega8

### Set the Clock Frequency

Most boards will run at either:

* **8 MHz** (internal oscillator)
* **16 MHz** (external crystal)

Make sure to match your board's actual clock setting.

### Select the Correct COM Port

Connect your board via USB or a USB-to-Serial adapter, then go to **Tools > Port** and select the appropriate port.

---

## 6. Upload the Firmware

Click the **Upload** button in the Arduino IDE. If everything is correctly configured, the sketch will compile and upload to your microcontroller.

---

## 7. What Happens After Upload?

Once flashed, your device should:

* Display the current temperature on the OLED/LCD
* Allow you to adjust the target temperature using the rotary encoder

---

## Resources

* [GitHub Repository](https://github.com/javierrayhan/Atmega328-168-8-Heat-plate)
* [Arduino Library Installation Guide](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries)
