import type { IPipeline, PipelineStep } from '../types/pipeline';

export class Pipeline implements IPipeline {
  constructor(public steps: PipelineStep[]) {}

  run(input: string): string {
    return this.steps.reduce((value, step) => step(value), input);
  }
}
