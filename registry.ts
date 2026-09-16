import type { ITemplate } from './types/template';
import { WelcomeEmail } from './templates/welcomeEmail';
import type { WelcomeEmailProps } from './templates/welcomeEmail';

export class TemplateRegistry {
  private templates = new Map<string, ITemplate<unknown>>();

  register<T>(template: ITemplate<T>) {
    this.templates.set(template.name, template as ITemplate<unknown>);
  }

  get<T>(name: string): ITemplate<T> | undefined {
    return this.templates.get(name) as ITemplate<T> | undefined;
  }
}

// Example usage (not run on import — wire this up later):
// const registry = new TemplateRegistry();
// registry.register(WelcomeEmail);
// const template = registry.get<WelcomeEmailProps>('WelcomeEmail');
// if (template) {
//   const html = template.render({ userName: 'Arthur', signupDate: new Date() });
//   console.log(html);
// }

void WelcomeEmail;
void null as unknown as WelcomeEmailProps;
