const { typescript } = require('projen');
const { VsCode, VsCodeSettings, VsCodeRecommendedExtensions } = require('projen/lib/vscode');

const authorName = 'Cameron Childress';
const authorAddress = 'cameronc@sumoc.com';
const repository = 'https://github.com/sumoinc/projen-lib';

const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: '@sumoc/projen-lib',
  description: 'A library of projen configurations.',
  license: 'MIT',
  repositoryUrl: repository,
  repository: repository,
  authorName,
  author: authorName,
  authorOrganization: true,
  copyrightOwner: authorName,
  authorAddress: authorAddress,
  authorEmail: authorAddress,
  releaseToNpm: true,
  deps: ['projen'],
});

const vscode = new VsCode(project);

const vsSettings = new VsCodeSettings(vscode);
vsSettings.addSetting('editor.tabSize', 2);
vsSettings.addSetting('editor.bracketPairColorization.enabled', true);
vsSettings.addSetting('editor.guides.bracketPairs', 'active');
vsSettings.addSetting('editor.rulers', [80, 120]);
vsSettings.addSetting('editor.codeActionsOnSave', { 'source.fixAll.eslint': true });
vsSettings.addSetting('editor.formatOnSave', false);
vsSettings.addSetting('editor.formatOnSave', true, 'typescript');
vsSettings.addSetting('editor.defaultFormatter', 'dbaeumer.vscode-eslint', 'typescript');

const vsExtensions = new VsCodeRecommendedExtensions(vscode);
vsExtensions.addRecommendations('dbaeumer.vscode-eslint');

project.synth();