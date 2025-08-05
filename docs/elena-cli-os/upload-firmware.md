---
sidebar_position: 4
title: Firmware Upload (Arduino IDE)
---

# Firmware Upload (Arduino IDE)

To upload the firmware for **Elena CLI-OS (ATmega32)**, follow this guide using the **Arduino IDE**. Since the ATmega32 is not officially supported out-of-the-box, we'll use a custom core to make it work.

---

## 1. Clone the Repository

Start by cloning or downloading the firmware source code:

```bash
git clone https://github.com/javierrayhan/elena_cli-os.git
```

Navigate to the firmware directory:

```bash
cd elena_cli-os/source code
```

This folder contains the source code (`.ino` or `.c/.cpp`), `Makefile`, and platform-specific files.

---

## 2. Install ATmega32 Core Support in Arduino IDE

To program the ATmega32 in the Arduino IDE, install **MCUdude's MegaCore** core:

1. Open Arduino IDE.
2. Navigate to **File > Preferences**.
3. In **Additional Board URLs**, add:

   ```
   https://mcudude.github.io/MegaCore/package_MCUdude_MegaCore_index.json
   ```
4. Go to **Tools > Board > Boards Manager**.
5. Search for `MegaCore` and install it.

---

## 3. Configure Board Settings

Go to **Tools** and set the following:

* **Board**: ATmega32
* **Microcontroller**: ATmega32
* **Clock**: 16 MHz external (or according to your oscillator)
* **Programmer**: USBasp (or your ISP of choice)
* **Port**: Select the COM port for your ISP

> If you're using USBasp and encounter upload errors, try placing a 10uF capacitor between RESET and GND on your Arduino ISP (optional workaround).

---

## 4. Connect the ATmega32 to Your Programmer

Example wiring for USBasp:

| USBasp Pin | ATmega32 Pin  |
| ---------- | ------------- |
| MOSI       | PB5 (Pin 6)   |
| MISO       | PB6 (Pin 7)   |
| SCK        | PB7 (Pin 8)   |
| RESET      | RESET (Pin 9) |
| VCC        | VCC (Pin 10)  |
| GND        | GND (Pin 11)  |

> Double-check your connections and ensure the ATmega32 has proper power and a crystal oscillator (16MHz + 2x 22pF caps).

---

## 5. Upload the Firmware

1. Open the `.ino` or `main.c` file from the firmware directory.
2. Click **Upload** in the Arduino IDE.
3. If everything is wired correctly, the upload should complete successfully.

---

## 6. Post-Upload: Running the CLI OS

Once uploaded, the ATmega32 will run a UART-based CLI OS:

* Use Serial Monitor or terminal software like PuTTY / CoolTerm.
* Default baud rate: `9600` bps (or according to your USART config).
* Try commands like `help`, `clear`, `ls`, etc.

---

## Resources

* [Elena CLI-OS GitHub Repo](https://github.com/javierrayhan/elena_cli-os)
* [MegaCore (MCUdude) Docs](https://github.com/MCUdude/MegaCore)
* [Arduino IDE Download](https://www.arduino.cc/en/software)
