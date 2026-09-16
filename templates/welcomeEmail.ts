import type { ITemplate } from '../types/template';

export interface WelcomeEmailProps {
  userName: string;
  signupDate: Date;
}

export const WelcomeEmail: ITemplate<WelcomeEmailProps> = {
  name: 'WelcomeEmail',
  render: ({ userName, signupDate }) => `
    <html>
      <body>
        <h1>Welcome, ${userName}!</h1>
        <p>Thanks for signing up on ${signupDate.toDateString()}.</p>
      </body>
    </html>
  `,
};
