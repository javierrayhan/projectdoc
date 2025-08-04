---
sidebar_position: 4
title: Troubleshooting
---

Troubleshooting common issues with your **ATmega32 project (Arduino IDE)**.  
This guide escalates from basic hiccups to trickier stuff.

---

## 1. Start With the Basics

### 🔌 Board Not Detected on Upload  
* Make sure your USB-to-Serial converter (e.g., CH340, FTDI) is properly connected.
* Double-check TX/RX wiring, they must be crossed (TX → RX, RX → TX).
* Use the correct COM port in Arduino IDE.
* Select **"ATmega32 (external 16MHz)"** if you're using a crystal oscillator.
* Try pressing reset right before clicking upload (timing matters!).

---

## 2. Compilation or Upload Errors

### “avrdude: stk500_recv(): programmer not responding”
* Check if bootloader is properly burned.
* Use "Burn Bootloader" via another AVR (Arduino as ISP) before uploading code.
* If you're using a bare chip (no bootloader), upload using ISP, not Serial.

---

## 3. Code Runs, But No Output

### No Serial Output on Monitor
* Ensure `Serial.begin(19200);` is set in `setup()`, baud rate **must match** your terminal.
* Double-check TX (usually PD1) is correctly connected to USB-TTL adapter’s RX.
* Use a **terminal emulator** like **PuTTY**, set to **19200 baud**, **8 data bits**, **no parity**, **1 stop bit** (8N1).
* Check if serial pins are inverted or if level shifting is needed (5V to 3.3V logic issue).
* Avoid using the same pin for multiple functions, UART should be isolated during debugging.

### No Power or Reset Behavior
* Power supply must be **regulated and stable** (recommended: 5V @ 500mA+).
* If using USB-TTL, ensure the **VCC is not overloaded**, add external power if needed.
* Check for loose breadboard wires, damaged jumper cables, or dry solder joints.

---

## 4. I/O Not Behaving As Expected

### Digital Inputs Always HIGH or LOW
* Floating pins! Add pull-up or pull-down resistors (or use `INPUT_PULLUP`).
* Avoid connecting buttons directly to VCC/GND without resistance.

---

## 5. SD Card, Sensors, or Peripherals Failing

### SD Card Not Detected
* Use software SPI if hardware SPI conflicts with other devices.
* Lower SPI speed (`SD.begin(CS, SPI_SPEED_SLOW)`).
* Check if your SD card module uses level shifting (not direct 5V).

### Sensor Reads 0 or -1
* Use I2C scanner to confirm device is detected.
* Watch out for address mismatches.
* Use external pull-up resistors if I2C is noisy or unreliable.

---

## 6. Stability & Power Problems

### 🔄 Random Resets or Glitches
* Bad power supply? Try using a stable 5V adapter or LDO.
* Add decoupling caps near power pins (100nF typical).
* Check for brown-out reset issues (`fuses` might need adjusting).

### 🔥 Chip Heating Up
* Double-check your wiring, especially VCC-GND short or incorrect polarity.
* Some modules draw too much current, use heat sinks or proper regulators.

---

## 7. Still Broken? 

Open a GitHub issue, send over your schematic, and describe what’s going wrong:  
📬 [Submit an Issue](https://github.com/javierrayhan/elena_cli-os/issues)

No worries — even pros get stuck sometimes. We're all in this silicon struggle together 💪🧠
