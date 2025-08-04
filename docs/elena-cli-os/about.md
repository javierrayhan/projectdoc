---
sidebar_position: 1
title: About
---
![ELENA INTRO](https://github.com/javierrayhan/elena_cli-os/blob/main/images/boot.png)

This isn’t just another AVR project, it's **Elena CLI-OS**, a minimalist, bare-metal command-line operating system handcrafted for microcontrollers with limited resources. Built on the ATmega32 with just 32KB of flash, Elena offers core features you wouldn’t expect at this scale, driven by curiosity, creativity, and a touch of nostalgia for simpler computing.

### Features

* **Command-Line Interface (CLI):** Navigate and interact with the system through typed commands. Lightweight yet functional.
* **Built-in Help System:** Type `help` to list available commands with syntax and descriptions.
* **Time & Date Module:** View and update the system's real-time clock.
* **User Management:** Multi-user support with login system and credentials stored in EEPROM.
* **I/O Pin Control:** Read/write GPIO pins directly from the CLI. Supports digital input/output control.
* **I2C Scanner Tool:** Detects connected I2C devices and lists their addresses.
* **Storage Management (Planned):** Reserved shell for future storage-based features like log saving.
* **UART-based Communication:** Interact with the OS over serial using a terminal emulator (e.g., PuTTY, minicom).

### Use Cases

* Embedded system learning platform for low-level enthusiasts.
* Lightweight OS demo for microcontroller coursework or labs.
* Homebrew tool for debugging or configuring DIY circuits.

### Operation

1. **Flash to ATmega32** using a compatible programmer.
2. **Connect via UART** (default: 19200 baud).
3. **Start Interacting:** Type commands like `help`, `lsio`, `time`, or `scan` to explore features.

---

This is a tribute to those who believe that even small chips deserve great software. Elena CLI-OS isn't just code — it's a canvas for experimenting, learning, and building from the ground up.
