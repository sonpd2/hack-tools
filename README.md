<div align="center">
  <img alt="logo_hack_tools" src="https://i.postimg.cc/GtLdZ2rZ/noun-Panama-hat-1454601.png" />
  <h1>Welcome to Pentest Cheatsheet 🛠</h1>
  <p>
    <img alt="Version" src="https://img.shields.io/badge/version-0.3.3-blue.svg?cacheSeconds=2592000&style=for-the-badge" />
    <img alt="release" src="https://img.shields.io/github/v/release/LasCC/Hack-Tools?color=yellow&style=for-the-badge" />
    <a href="https://addons.mozilla.org/en-US/firefox/addon/Pentest Cheatsheet" target="_blank">
      <img alt="mozilla" src="https://img.shields.io/amo/v/Pentest Cheatsheet?color=purple&label=mozilla%20addons&logo=mozilla&style=for-the-badge" />
    </a>
    <a href="https://chrome.google.com/webstore/detail/hack-tools/cmbndhnoonmghfofefkcccljbkdpamhi?hl=en" target="_blank">
      <img alt="chrome-extension" src="https://img.shields.io/chrome-web-store/v/cmbndhnoonmghfofefkcccljbkdpamhi?style=for-the-badge" />
    </a>
    <img alt="Downloads" src="https://img.shields.io/github/downloads/LasCC/Hack-Tools/total.svg?style=for-the-badge" />
    <img alt="commit" src="https://img.shields.io/github/last-commit/LasCC/Hack-Tools?style=for-the-badge" />
    <img alt="stars" src="https://img.shields.io/github/stars/LasCC/Hack-Tools?style=social" />
  </p>
  <p align="center">
    <a href="#the-all-in-one-red-team-browser-extension-for-web-pentesters"><b>Introduction</b></a>
    &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
    <a href="#preview"><b>Preview</b></a>
    &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
    <a href="#install-the-extension"><b>Install</b></a>
    &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
    <a href="#build-from-source-code"><b>Build</b></a>
    &nbsp;&nbsp;&mdash;&nbsp;&nbsp;
    <a href="#show-your-support"><b>Support</b></a>
  </p>
</div>

### The all-in-one Red Team browser extension for **Web Pentesters**

Pentest Cheatsheet, is a web extension facilitating your **web application penetration tests**, it includes **cheat sheets** as well as all the **tools** used during a test such as XSS payloads, Reverse shells and much more.

With the extension you **no longer need to search for payloads in different websites** or in your local storage space, most of the tools are accessible in one click. Pentest Cheatsheet is accessible either in **pop up mode** or in a whole tab in the **Devtools** part of the browser with F12.

### Current functions

- Dynamic Reverse Shell generator (PHP, Bash, Ruby, Python, Perl, Netcat)
- Shell Spawning (TTY Shell Spawning)
- XSS Payloads
- Basic SQLi payloads
- Local file inclusion payloads (LFI)
- Base64 Encoder / Decoder
- Hash Generator (MD5, SHA1, SHA256, SHA512, SM3)
- Useful Linux commands (Port Forwarding, SUID)
- RSS Feed (Exploit DB, Cisco Security Advisories, CXSECURITY)
- CVE Search Engine
- Various method of data exfiltration and download from a remote machine

## Preview

<div align='center'>
  <img alt="preview_1" src="https://i.postimg.cc/VNmtdskN/Untitled-1.png" />
</div>

<div align='center'>
  <img alt="preview_2" src="https://i.imgur.com/02ym26m.png" />
</div>

<div align='center'>
  <img alt="preview_3" src="https://i.imgur.com/A22KDs7.png" />
</div>

<div align='center'>
  <img alt="preview_4" src="https://i.imgur.com/TxWUC7r.png" />
</div>

<div align='center'>
  <img alt="preview_5" src="https://i.imgur.com/KrDX7t6.png" />
</div>


# Install the extension

### Chromium based browser

You can download the **latest build** [here.](https://github.com/LasCC/Hack-Tools/releases)

Or, you can download the extension on the **chrome web store** [here.](https://chrome.google.com/webstore/detail/hack-tools/cmbndhnoonmghfofefkcccljbkdpamhi)

Otherwise, you can build the project yourself from the source code

### Mozilla Firefox

You can download **Pentest Cheatsheet** on the Firefox browser add-ons [here.](https://addons.mozilla.org/en-US/firefox/addon/Pentest Cheatsheet/)

### Build from source code

```bash
git clone https://github.com/LasCC/Hack-Tools.git
cd Hack-Tools
npm install && npm build     # If you have installed yarn you can replace npm with yarn
```

Once the build is done correctly, webpack will create a new folder called **dist**

After that you need to go to the **extension** tab on your chrome based navigator and turn on the **developer mode**

<img alt="extension_tutorial" src="https://i.imgur.com/0GRfu2K.png" />

Then click on the **load unpacked** button in the top left corner

<img alt="extension_tutorial" src="https://i.imgur.com/q41GeAb.png" />

Once you clicked on the button you just need to select the **dist folder** and that's it ! 🎉

<img alt="extension_tutorial" src="https://i.imgur.com/mL4TVu0.png" />

## Authors

👤 <a href="http://github.com/LasCC" alt="Github_account_Ludovic_COULON">**Ludovic COULON**<a/> & <a href="http://github.com/rb-x" alt="Github_account_Riadh_BOUCHAHOUA">**Riadh BOUCHAHOUA**<a/>

## Show your support

You can give a ⭐️ if this project helped you !

Note that this project is maintained, developed and made available for **free**, you can offer us a coffee, it will be very **encouraging and greatly appreciated** 😊

<a href="https://www.paypal.me/Pentest CheatsheetEXT" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important"></a>
