export type PipelineStep = (input: string) => string;

export interface IPipeline {
  steps: PipelineStep[];
  run(input: string): string;
}
