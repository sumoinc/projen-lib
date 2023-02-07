
import { NodePackageManager } from 'projen/lib/javascript';
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';

export interface SumoProjectOptions extends TypeScriptProjectOptions {

}

export class SumoProject extends TypeScriptProject {

  constructor(options: SumoProjectOptions) {

    super({
      ...options,
      vscode: true,
      packageManager: NodePackageManager.PNPM,
    });

    // VSCODE: Root level editor settings
    this.vscode!.settings.addSetting('editor.tabSize', 2);
    this.vscode!.settings.addSetting('editor.bracketPairColorization.enabled', true);
    this.vscode!.settings.addSetting('editor.guides.bracketPairs', 'active');
    this.vscode!.settings.addSetting('editor.rulers', [80, 120]);

    // VSCODE: linting
    this.vscode!.settings.addSetting('editor.codeActionsOnSave', { 'source.fixAll.eslint': true });
    this.vscode!.settings.addSetting('editor.formatOnSave', false);
    this.vscode!.settings.addSetting('editor.formatOnSave', true, 'typescript');
    this.vscode!.settings.addSetting('editor.defaultFormatter', 'dbaeumer.vscode-eslint', 'typescript');

    // VSCODE: extensions
    this.vscode!.extensions.addRecommendations('dbaeumer.vscode-eslint');


  }

}