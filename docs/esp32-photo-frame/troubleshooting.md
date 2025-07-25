---
sidebar\_position: 4
title: Troubleshooting
---

## 1. Try Some Solutions

### Can't Connect to Wi-Fi

* Make sure SSID and password are correctly saved and the signal is strong.
* If using auto-connect, try clearing stored credentials by holding the reset button for 5 seconds (if implemented).
* Check the router frequency (ESP32 only supports 2.4GHz).

### BMP Files Not Showing Up

* Ensure the SD card is formatted as FAT32 and is inserted properly.
* File must be in `.bmp` format (24-bit uncompressed BMP only).
* The filename must not contain spaces or special characters (e.g., `image01.bmp`).
* Images should be placed in the `/images/` folder on the root of the SD card (if used in code).

### Blank Display 

* Double-check SPI wiring: MOSI, SCK, CS, DC, RST, and BL (backlight) connections.
* Some displays require the backlight pin (BL) to be HIGH to enable.
* Confirm display type and driver (e.g., ST7735, ST7789).

### MicroSD Card Not Detected

* Ensure proper connection (MOSI, MISO, SCK, CS) and correct CS pin set in your code.
* Use a lower SPI frequency (e.g., 1MHz) for better compatibility.
* Try a different brand/class of microSD card.

### Wrong BMP Resolution

* The screen is only 1.8 inch (typically 128x160 or 128x128 pixels).
* Resize images to match the exact resolution of your display.
* Oversized images may be partially rendered, cropped, or ignored.

### Frozen Frame

* Ensure the loop logic updates images periodically.
* Check for memory leaks or buffer overflow issues.

### No Buzzer Sound

* Verify the pin used for buzzer is set as `OUTPUT`.
* Use a simple `tone(pin, freq, duration)` to test.
* Check if it's an active or passive buzzer.

---

## 2. Still Stuck?

If none of the above helped, feel free to reach out!
You can [open an Issue on GitHub](https://github.com/javierrayhan/esp32-1.8inch-photo-frame-gift/issues),
I'm happy to help! 🙌
