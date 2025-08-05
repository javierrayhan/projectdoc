---
sidebar_position: 2
title: Command List
---
## Here’s the full list of Elena OS commands.

---
# Elena OS Command Guide

> `help` to show all available commands

```
[i] Available Commands:
 ┌────────────────────┐
 │ help         → Show all commands
 │ login        → Login with username
 │ logout       → Logout from acount
 │ stat         → Show sys&hw status
 │ rns acc      → Remove & set new account
 │ reboot       → Reboot the system
 │ whoami       → Display logged in user
 │ time         → Display current time
 │ set time     → Setting time
 │ sound on/off → Setting sound
 │ calc         → Calculator
 │ print        → Print something
 │ delay        → Delay
 │ gpio s/w/r   → GPIO function
 │ i2c scan     → Scan all i2c devices
 └────────────────────┘

```

---

### `help` Show all available commands

Displays the full list of usable commands in Elena OS.

---

### `login` Login with username
> If no account exists:

```
[i] No user found. Please register.

Create Username:
Create Password:
[S] User registered successfully.
```

> If an account is available:
```
[?] Do you want to login? (y/n)
y
[!] Login required.
Username: root
Password: root
[S] Login successful. Welcome back!
[U] Logged in as: root
```

---

### `logout` Logout from current logged-in account
> If already logged out:
```
[!] You already logging out! Execute failed
```

> If still logged in:
```
[S] Logging out success!
```

---

### `stat` Show system & hardware status

Displays diagnostic and hardware-related information.
```
--------- System Status ---------
[T] 05/08/2025
[T] 11:33:29
[U] Not logged in
[M] MCU: ATmega32
[C] CPU Freq: 16 MHz
[E] EEPROM Used: 32 / 1024 Bytes
[R] RAM Used: 1464 / 2048 Bytes
[T] Uptime: 00:15:41
---------------------------------
```

---

### `rns acc` remove & set new account

Deletes the current account and registers a new one.

> If you were not logged in:
```
[!] You must login to reset your account!
[?] Do you want to login? (y/n)
[!] Login required.
Username: root
Password: root
[S] Login successful. Welcome back!
[U] Logged in as: root

Create Username: newroot
Create Password: newroot
[S] User registered successfully.
```

> If you was loged in:
```
Create Username: newroot
Create Password: newroot
[S] User registered successfully.
[S] Reset account success, you can relog to your new account!
```
---

### `reboot` Reboot the system

Restarts the entire Elena OS system.

---

### `whoami` Display logged in user

Shows the currently logged-in username.
```
[i] Logged in as: guest
```
---

### `time` Display current time

Displays the current system time.
```
DATE: 05/08/2025
TIME: 11:43:31
```

---

### `set time` Set the system time

Used to configure or adjust system time.

---

### `sound on/off` Toggle sound

Enables or disables sound output in the system.

---

### `calc` Calculator

Opens the built-in Elena OS calculator tool.

---

### `print` Print something

Triggers a print command.
```
guest> print "hello elena" for 10
hello elena
hello elena
hello elena
hello elena
hello elena
hello elena
hello elena
hello elena
hello elena
hello elena
[i] Finished in 0.034 seconds.
```

---

### `delay` Introduce a delay

Pauses execution or introduces a wait period.
```
delay 1000 //Delayed for 1 second
```

---

### `gpio s/w/r` GPIO function

Controls GPIO pins: set, write, or read their values.
> Read all pins:
```
gpio s
```

> Set all pins:

```
gpio w all h
gpio w all l
```

> Set single pin:
```
gpio w pa0 h
gpio w pa0 l
```

> Read single pin:
```
gpio r pa0
```
---

### `i2c scan` Scan all I2C devices

Scans the I2C bus and lists all connected devices.

---

*More command documentation coming soon...*
