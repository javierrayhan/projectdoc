---
sidebar\_position: 4
title: Troubleshooting
---

Troubleshooting common issues with your ESP32 macro keyboard build.

## 1. Try Some Solutions

### Cannot connect with devices (BLE issue)

If you're using `bleKeyboard.h` and the device can't connect:

* Try removing and re-adding the BLE connection logic. Re-initiate the BLE setup.
* Make sure `BLEDevice::init()` is only called once and with a unique name.
* Disconnect from all previously paired devices before reconnecting.
* Check if your ESP32 is properly advertising.


### EEPROM Error

* Some ESP32 boards don't support traditional EEPROM emulation. Check the flash size.
* Make sure `EEPROM.begin(size)` is called before accessing.
* Confirm you're using `EEPROM.commit()` after writing data.
* Try using `Preferences.h` as an alternative for non-volatile storage.


### Keeps Restarting

* Could be caused by missing decoupling capacitors. Try placing 0.1µF near the ESP32’s VCC and GND.
* Voltage regulator (like AMS1117 or ME6211) might be failing or overheating.
* Check power source — unstable USB power can cause brownout resets.
* Review your code for stack overflows or watchdog triggers.

### Cannot Upload Code

* Make sure the correct COM port is selected in Arduino/PlatformIO.
* Press and hold BOOT (GPIO0) during upload to manually enter flash mode.
* Check USB cable — some are power-only.
* Close any serial monitors using the port.

### Other Common Problems

* **Encoder not working:** check that the pins are not floating,use 10kΩ pull-up resistors.
* **Buttons don’t register:** verify the matrix wiring and debounce logic.
* **BLE HID not detected on Mac/iOS:** restart Bluetooth, unpair old device, re-pair again.
* **Overheating ESP32:** make sure current draw doesn’t exceed regulator specs, use heat sinks or lower LED brightness.

When in doubt, strip it down to minimal code and test each part individually. Small steps = clear debugging path.

---

## 2. Still Stuck?

If none of the above helped, feel free to reach out!
You can [open an Issue on GitHub](https://github.com/javierrayhan/kato-macro-esp32/issues),
I'm happy to help! 🙌
