import { TypeScriptProject } from 'projen/lib/typescript';
import { synthSnapshot } from 'projen/lib/util/synth';
import { VsCodeConfiguration } from '../src/vscode';

describe('VSCode with default settings', () => {
  it('synthesizes', () => {
    const project = new TypeScriptProject({
      defaultReleaseBranch: 'main',
      name: 'test',
    });

    new VsCodeConfiguration(project);

    const output = synthSnapshot(project);
    expect(output).toMatchSnapshot();
  });

});