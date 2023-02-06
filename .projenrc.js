const { typescript } = require('projen');

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

project.synth();