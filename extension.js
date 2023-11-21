// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "easy-picky" is now active, subscribe!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "easy-picky.helloWorld",
    function () {
      // The code you place here will be executed every time your command is executed

      const editor = vscode.window.activeTextEditor;
      const selectedText = editor.selection;
      const text = editor.document.getText(selectedText);

      vscode.window.showInformationMessage(`Work in progress: ${text}`);

      editor.edit((builder) =>
        builder.replace(selectedText, "Easy Picky takes over...")
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
