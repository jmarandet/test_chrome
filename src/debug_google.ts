'use strict';
import * as vscode from 'vscode';

export function debug_google():string {
    console.log('Here I am !!!');
    return 'https://www.google.fr';
}

export function push_debug_google_config() {
    const launchConfig = vscode.workspace.getConfiguration('launch');
    const configurations = launchConfig['configurations'];
    let b:any = configurations.find( (c:any) => { return c.name === "Debug Chrome"; });
    if ( !b ) {
        configurations.push(
            {
                "name": "Debug Chrome",
                "type": "chrome",
                "request": "launch",
                "url": "${command:extension.chrome_debug_to_google}"
            });
        launchConfig.update('configurations', configurations, false).then(() => 
            vscode.window.showInformationMessage('The Chrome Debug config to Google have been pushed to launch.json')
        );
    }
    else {
        vscode.window.showInformationMessage('The Chrome Debug config to Google is already set in launch.json')
    }
}