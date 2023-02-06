import { typescript } from 'projen';
import { VsCodeConfiguration } from '../src/vscode';

test('hello', () => {
  const project = new typescript.TypeScriptProject({
    name: 'hello',
    defaultReleaseBranch: 'main',
  });
  expect(new VsCodeConfiguration(project)).toBeTruthy();
});