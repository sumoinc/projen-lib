import { JsiiProject } from 'projen/lib/cdk';
import { NodePackageManager } from 'projen/lib/javascript';
import { VsCodeConfiguration } from './src/vscode';

const authorName = 'Cameron Childress';
const authorAddress = 'cameronc@sumoc.com';
const repository = 'https://github.com/sumoinc/projen-lib';

const project = new JsiiProject({
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
  projenrcTs: true,
  packageManager: NodePackageManager.PNPM,
});

// component configuration
new VsCodeConfiguration(project);

project.synth();