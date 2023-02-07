import { synthSnapshot } from 'projen/lib/util/synth';
import { SumoProject } from '../src/sumo-project';

test('hello', () => {
  const project = new SumoProject({
    name: 'hello',
    defaultReleaseBranch: 'main',
  });
  expect(project).toBeTruthy();
});

describe('SumoProject with default settings', () => {
  it('synthesizes', () => {
    const project = new SumoProject({
      defaultReleaseBranch: 'main',
      name: 'test',
    });

    const output = synthSnapshot(project);
    expect(output).toMatchSnapshot();
  });

});