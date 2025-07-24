---
sidebar_position: 4
title: Troubleshooting
---

Here's some solution maybe you'll need!

### Upload failed on ATmega8
Ensure the bootloader is burned and the correct fuse bits are set. For bare chips, you may need an external ISP programmer.

### Display not responding
Double-check your I2C wiring and address. Most OLEDs use 0x3C, but yours may differ.

### Thermistor values not accurate
Recalibrate or confirm the BETA value from the datasheet (recommended: B3950).

---

# Still stuck?
If none of the above helped, feel free to reach out!  
You can [open an Issue on my GitHub](https://github.com/javierrayhan/Atmega328-168-8-Heat-plate/issues),  
I'll try to help as much as I can 🤝