# Lead Tracker Extension 🚀

A lightweight Chrome browser extension designed to help you instantly save important links and text inputs directly from your active browser window. 

## Features 
* **Save Input:** Manually type and save any custom text lead.
* **Save Tab:** Instantly grabs the URL of your currently active tab using the Chrome Tabs API.
* **Delete All:** Clears all your saved leads at once (includes a confirmation prompt to prevent accidental deletions).
* **Dark Mode:** A built-in toggle to switch between light and dark themes for comfortable viewing.
* **Persistent Storage:** Uses the browser's `localStorage` to keep your leads safe even after closing the extension.

## Tech Stack & Concepts Used 
* HTML, CSS, JavaScript
* DOM Manipulation
* Browser Local Storage (`setItem`, `getItem`, `removeItem`)
* JSON parsing and stringifying
* Chrome Extension API (`chrome.tabs.query`)

## How to Install 
1. Clone this repository: `git clone https://github.com/Ayush9863/lead-tracker-extension.git`.
2. Open Google Chrome and type `chrome://extensions/` in the search bar.
3. Turn on the **Developer mode** switch in the top right corner.
4. Click on the **Load unpacked** button.
5. Select the project folder.
6. Pin the extension to your browser toolbar and start saving your leads!
