Enable USB debugging on the mobile.

Update backend address to: www/js/app.js

Check that the device is found:
> adb devices

You can wait for the device with:
> adb wait-for-device

Run the app by:
> ionic run

Native debugging is simple navigating the Chrome browser to:
 chrome://inspect/#devices
and then inspecting the application.
