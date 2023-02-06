import { Component, Project } from 'projen';
import { VsCode, VsCodeRecommendedExtensions, VsCodeSettings } from 'projen/lib/vscode';

export class VsCodeConfiguration extends Component {
  private _vscode?: VsCode;

  constructor(project: Project) {
    super(project);

    this._vscode = new VsCode(project);

    const vsSettings = new VsCodeSettings(this._vscode);
    vsSettings.addSetting('editor.tabSize', 2);
    vsSettings.addSetting('editor.bracketPairColorization.enabled', true);
    vsSettings.addSetting('editor.guides.bracketPairs', 'active');
    vsSettings.addSetting('editor.rulers', [80, 120]);
    vsSettings.addSetting('editor.codeActionsOnSave', { 'source.fixAll.eslint': true });
    vsSettings.addSetting('editor.formatOnSave', false);
    vsSettings.addSetting('editor.formatOnSave', true, 'typescript');
    vsSettings.addSetting('editor.defaultFormatter', 'dbaeumer.vscode-eslint', 'typescript');

    const vsExtensions = new VsCodeRecommendedExtensions(this._vscode);
    vsExtensions.addRecommendations('dbaeumer.vscode-eslint');
  }

}