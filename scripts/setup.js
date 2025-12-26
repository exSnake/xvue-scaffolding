#!/usr/bin/env node

/**
 * Interactive setup script for xvue-scaffolding
 * Collects project information and replaces placeholders throughout the codebase
 */

import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
};

console.log(`
${colors.bright}${colors.blue}
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║    📦  xVue Scaffolding - Interactive Setup Wizard       ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}

Welcome! This wizard will help you configure your new Vue 3 project.
`);

// Validation functions
const validators = {
  required: (input) => input.trim().length > 0 || 'This field is required',

  url: (input) => {
    if (!input) return true; // Optional
    try {
      new URL(input);
      return true;
    } catch {
      return 'Please enter a valid URL (e.g., https://example.com)';
    }
  },

  email: (input) => {
    if (!input) return true; // Optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input) || 'Please enter a valid email address';
  },

  gaId: (input) => {
    if (!input) return true; // Optional
    const gaRegex = /^G-[A-Z0-9]{10}$/;
    return gaRegex.test(input) || 'Please enter a valid GA4 Measurement ID (format: G-XXXXXXXXXX)';
  },

  color: (input) => {
    if (!input) return true; // Optional
    const colorRegex = /^#[0-9A-Fa-f]{6}$/;
    return colorRegex.test(input) || 'Please enter a valid hex color (format: #RRGGBB)';
  },
};

// Questions
const questions = [
  {
    type: 'input',
    name: 'appName',
    message: 'What is your application name?',
    default: 'My Vue App',
    validate: validators.required,
  },
  {
    type: 'input',
    name: 'appDescription',
    message: 'Brief description of your app:',
    default: 'A modern Vue 3 application',
    validate: validators.required,
  },
  {
    type: 'input',
    name: 'baseUrl',
    message: 'Production URL (e.g., https://example.com):',
    default: 'https://example.com',
    validate: validators.url,
  },
  {
    type: 'input',
    name: 'authorName',
    message: 'Author name:',
    default: () => process.env.USER || 'Your Name',
    validate: validators.required,
  },
  {
    type: 'input',
    name: 'authorEmail',
    message: 'Author email:',
    validate: validators.email,
  },
  {
    type: 'input',
    name: 'repoUrl',
    message: 'GitHub repository URL (optional):',
    validate: validators.url,
  },
  {
    type: 'confirm',
    name: 'enableAnalytics',
    message: 'Enable Google Analytics?',
    default: false,
  },
  {
    type: 'input',
    name: 'gaMeasurementId',
    message: 'Google Analytics Measurement ID:',
    when: (answers) => answers.enableAnalytics,
    validate: validators.gaId,
  },
  {
    type: 'confirm',
    name: 'enableContactForm',
    message: 'Enable contact form with AWS SES?',
    default: false,
  },
  {
    type: 'input',
    name: 'awsRegion',
    message: 'AWS Region:',
    default: 'us-east-1',
    when: (answers) => answers.enableContactForm,
  },
  {
    type: 'input',
    name: 'emailFrom',
    message: 'Email "from" address:',
    when: (answers) => answers.enableContactForm,
    validate: validators.email,
  },
  {
    type: 'input',
    name: 'emailTo',
    message: 'Email "to" address (where contact form submissions go):',
    when: (answers) => answers.enableContactForm,
    validate: validators.email,
  },
  {
    type: 'input',
    name: 'themeColor',
    message: 'Theme color (hex):',
    default: '#2563EB',
    validate: validators.color,
  },
];

// File replacement patterns
const filesToUpdate = [
  'index.html',
  'package.json',
  'public/robots.txt',
  'public/sitemap.xml',
  'public/site.webmanifest',
  'README.md',
  'LICENSE',
];

function replacePlaceholders(content, answers) {
  const replacements = {
    '{{APP_NAME}}': answers.appName,
    '{{APP_DESCRIPTION}}': answers.appDescription,
    '{{BASE_URL}}': answers.baseUrl,
    '{{AUTHOR_NAME}}': answers.authorName,
    '{{AUTHOR_EMAIL}}': answers.authorEmail || 'your-email@example.com',
    '{{REPO_URL}}': answers.repoUrl || 'https://github.com/yourusername/yourrepo',
    '{{GA_MEASUREMENT_ID}}': answers.gaMeasurementId || '',
    '{{THEME_COLOR}}': answers.themeColor,
    '{{AWS_REGION}}': answers.awsRegion || 'us-east-1',
    '{{EMAIL_FROM}}': answers.emailFrom || 'noreply@example.com',
    '{{EMAIL_TO}}': answers.emailTo || 'contact@example.com',
  };

  let result = content;
  for (const [placeholder, value] of Object.entries(replacements)) {
    result = result.split(placeholder).join(value);
  }
  return result;
}

function updateFiles(answers) {
  console.log(`\n${colors.cyan}Updating project files...${colors.reset}`);

  let filesUpdated = 0;

  filesToUpdate.forEach((file) => {
    const filePath = path.join(PROJECT_ROOT, file);

    if (fs.existsSync(filePath)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const updated = replacePlaceholders(content, answers);
        fs.writeFileSync(filePath, updated, 'utf8');
        console.log(`  ${colors.green}✓${colors.reset} ${file}`);
        filesUpdated++;
      } catch (error) {
        console.log(`  ${colors.yellow}⚠${colors.reset} ${file} - ${error.message}`);
      }
    }
  });

  return filesUpdated;
}

function createEnvFile(answers) {
  console.log(`\n${colors.cyan}Creating .env file...${colors.reset}`);

  const envContent = `# Application Info
VITE_APP_NAME=${answers.appName}
VITE_APP_DESCRIPTION=${answers.appDescription}
VITE_BASE_URL=${answers.baseUrl}

# Analytics
VITE_GA_MEASUREMENT_ID=${answers.gaMeasurementId || ''}
VITE_ENABLE_ANALYTICS=${answers.enableAnalytics}

# AWS SES (Contact Form)
AWS_REGION=${answers.awsRegion || 'us-east-1'}
AWS_ACCESS_KEY_ID=${answers.enableContactForm ? 'your_aws_access_key_here' : ''}
AWS_SECRET_ACCESS_KEY=${answers.enableContactForm ? 'your_aws_secret_key_here' : ''}
EMAIL_FROM=${answers.emailFrom || 'noreply@example.com'}
EMAIL_TO=${answers.emailTo || 'contact@example.com'}

# Feature Flags
VITE_ENABLE_CONTACT_FORM=${answers.enableContactForm}

# Theme
VITE_THEME_COLOR=${answers.themeColor}
`;

  const envPath = path.join(PROJECT_ROOT, '.env');
  fs.writeFileSync(envPath, envContent, 'utf8');
  console.log(`  ${colors.green}✓${colors.reset} .env created`);

  if (answers.enableContactForm) {
    console.log(`\n  ${colors.yellow}⚠ Don't forget to add your AWS credentials to .env!${colors.reset}`);
  }
}

function printSummary(answers, filesUpdated) {
  console.log(`
${colors.bright}${colors.green}
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║    ✨  Setup Complete!                                    ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
${colors.reset}

${colors.cyan}Summary:${colors.reset}
  • App Name: ${colors.bright}${answers.appName}${colors.reset}
  • Description: ${answers.appDescription}
  • URL: ${answers.baseUrl}
  • Files updated: ${filesUpdated}
  • Analytics: ${answers.enableAnalytics ? colors.green + 'Enabled' + colors.reset : 'Disabled'}
  • Contact Form: ${answers.enableContactForm ? colors.green + 'Enabled' + colors.reset : 'Disabled'}

${colors.cyan}Next steps:${colors.reset}
  1. Review and update .env file (especially AWS credentials if needed)
  2. Replace logo files in public/logo/
  3. Review docs/CUSTOMIZATION.md for more customization options
  4. Start development: ${colors.bright}npm run dev${colors.reset}
  5. Build for production: ${colors.bright}npm run build${colors.reset}

${colors.cyan}Need help?${colors.reset}
  • Read docs/SETUP.md
  • Read docs/CUSTOMIZATION.md
  • Check out the Vue 3 docs: https://vuejs.org/

${colors.bright}Happy coding! 🚀${colors.reset}
`);
}

// Main execution
async function main() {
  try {
    const answers = await inquirer.prompt(questions);

    const filesUpdated = updateFiles(answers);
    createEnvFile(answers);
    printSummary(answers, filesUpdated);

    process.exit(0);
  } catch (error) {
    if (error.isTtyError) {
      console.error('Prompt couldn\'t be rendered in the current environment');
    } else {
      console.error('An error occurred:', error.message);
    }
    process.exit(1);
  }
}

main();
