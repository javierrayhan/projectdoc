---
sidebar_position: 1
title: About
---

This isn’t just another ESP32 project, it’s a personal farewell gift, a digital time capsule wrapped in tech and gratitude. I built this for the people who’ve been part of my journey to hold onto the moments we shared and keep them alive in a meaningful way.


### Features
- **Digital Photo Frame**: 1.8inch tft displays rotating images from the SD card (default max: 11 photos, but easily expandable). Each photo captures a cherished memory frozen in time.
- **Wi-Fi Connectivity**: Supports dynamic Wi-Fi configuration with SSID storage (similar to EEPROM). Can auto-reconnect or switch networks without needing a reflash.
- **Internet Clock (NTP**): Syncs the clock with NTP servers to always display the correct time — even after reboots or power loss.
- **Notification Buzzer**: Plays a custom tone or simple beep during certain events (like boot or connection). A subtle but personal sound cue.
- **Brightness Control**: Automatically or manually adjusts the display brightness for better visibility in different lighting conditions.
- **WS2812 LED Effects**: Adds colorful LED animations for visual flair. Perfect for creating ambient vibes or signaling specific states.
- **Wi-Fi Status Indicator**: Uses LED colors to show connection status — red for disconnected, green for connected.

### Use Cases
- Graduation Gift: Give your friends something handmade and personal.
- Room Decor: Adds an aesthetic touch to your desk or nightstand.
- Long-Distance Connection: Send a frame to someone you miss — your memories stay with them.
- Special Occasion: Birthdays, farewells, anniversaries, or just because.

### Operation
1. **Power the Device:** Plug into USB or 5V source.
2. **Insert SD Card:** Preload your BMP photos (recommended: 128x64 or 128x128 depending on display).
3. **Configure Wi-Fi:**
   - First boot will trigger Wi-Fi setup mode (captive portal or default AP).
   - Enter SSID + password once, saved for next boots.
4. **Enjoy the Experience:**
   - Photos rotate at intervals.
   - LEDs animate and clock displays time.
   - Buzzer chimes gently at events (boot, connect, etc.).

---

