
import { TypeScriptProject, TypeScriptProjectOptions } from 'projen/lib/typescript';

export interface SumoProjectOptions extends TypeScriptProjectOptions {

}

export class SumoProject extends TypeScriptProject {

  constructor(options: SumoProjectOptions) {
    super(options);

    // configure vscode
    if (this.vscode !== undefined) {

      // root level editor settings
      this.vscode.settings.addSetting('editor.tabSize', 2);
      this.vscode.settings.addSetting('editor.bracketPairColorization.enabled', true);
      this.vscode.settings.addSetting('editor.guides.bracketPairs', 'active');
      this.vscode.settings.addSetting('editor.rulers', [80, 120]);

      // linting
      this.vscode.settings.addSetting('editor.codeActionsOnSave', { 'source.fixAll.eslint': true });
      this.vscode.settings.addSetting('editor.formatOnSave', false);
      this.vscode.settings.addSetting('editor.formatOnSave', true, 'typescript');
      this.vscode.settings.addSetting('editor.defaultFormatter', 'dbaeumer.vscode-eslint', 'typescript');

      // extensions
      this.vscode.extensions.addRecommendations('dbaeumer.vscode-eslint');
    }

  }

}