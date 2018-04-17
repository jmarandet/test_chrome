# test-chrome README

a dummy VSCode Extension to illustrate a kind of bug :
https://github.com/Microsoft/vscode-chrome-debug/issues/647

Simply activate the plugin with `F1` and `Hello World`

Then open a project and add the following Launch.json setting - or type `F1` and  `Add chrome debug to Google's URL`:
```javascript
{
    "name": "Debug Chrome",
    "type": "chrome",
    "request": "launch",
    "url": "${command:extension.chrome_debug_to_google}"
}
```

When the debugger is launched, a 'Here I am !!!' sentence appear within the Developper Tool's console, and the launch.json file open itself with the cursor pointing to the line `"name" : "Debug Chrome"`... but that's all.. nothing else.

## Config :
VSCode 1.21
Debugger for Chrome 4.3.0
Windows 7
Chrome 65.0.3325.181 64bit
