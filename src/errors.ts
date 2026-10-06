export class RenderError extends Error {
  constructor(
    public tagName: string,
    message: string,
  ) {
    super(`[${tagName}] ${message}`);
    this.name = 'RenderError';
  }
}
