---
sidebar_position: 3
title: Firmware Upload
----


### Getting Started

To flash the firmware to your ATmega328/168/8-based Heat Plate Controller, follow these steps. This guide assumes you're using the [Arduino IDE](https://www.arduino.cc/en/software).

---

### Clone the Repository

Start by cloning the firmware from GitHub:

```bash
git clone https://github.com/javierrayhan/Atmega328-168-8-Heat-plate.git
```
Navigate to the cloned folder and open the firmware/ directory.

---

### Install Required Libraries
All required libraries are located in the lib/ folder inside the project. Copy the folders from lib/ to your Arduino libraries directory:

```bash
Documents/Arduino/libraries/
```
If the libraries folder doesn't exist, you can create it manually.

---

### Open the Sketch
Inside the firmware/ folder, open the main sketch file (e.g., heatplate.ino) using the Arduino IDE.

---

### Configure the IDE
Select the correct board
Go to Tools > Board and choose one of the following, depending on your chip:

- **ATmega328P**
- **ATmega168**
- **ATmega8**

Set the correct clock frequency
Most boards run at either:

- **8 MHz (internal oscillator)**
- **16 MHz (external crystal)**

Select the correct COM port
Connect your microcontroller via USB or USB-to-Serial adapter, and choose the appropriate COM port in the Tools > Port menu.

---

### Upload the Firmware
Click the Upload button in the Arduino IDE. If everything is correctly configured, the sketch should compile and flash successfully.

After uploading, the device should display the current temperature on the OLED/LCD, and the rotary encoder will allow you to adjust the target temperature.

---

### Resources
[GitHub Repository](https://github.com/javierrayhan/Atmega328-168-8-Heat-plate)

[Arduino Library Installation Guide](https://docs.arduino.cc/software/ide-v1/tutorials/installing-libraries)