import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('create-typescript-file.createfile', () => {
		
		const language = 'typescript';
		//const language = 'javascript';

		vscode.workspace
			.openTextDocument({ language: language.toLowerCase(), content: '' })
      .then(document => vscode.window.showTextDocument(document));
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
