const steps = [
  {
    icon: '👤',
    text: 'User clicks "Login" on ISV portal',
    tooltip: 'User initiates authentication from the SaaS portal.'
  },
  {
    icon: '🏢',
    text: 'Portal sends SAML request to Identity Provider',
    tooltip: 'A SAML AuthnRequest is sent to the user’s IdP.'
  },
  {
    icon: '🔐',
    text: 'User authenticates with Identity Provider',
    tooltip: 'User enters credentials with Okta, Azure AD, etc.'
  },
  {
    icon: '📜',
    text: 'IdP sends SAML assertion to AWS',
    tooltip: 'The signed SAML response is posted to AWS.'
  },
  {
    icon: '☁️',
    text: 'AppStream 2.0 validates identity and creates session',
    tooltip: 'AWS assumes a role and starts the AppStream session.'
  },
  {
    icon: '✅',
    text: 'User launches application in AppStream',
    tooltip: 'The user is now inside the streamed application.'
  }
];

let currentStep = 0;

function nextStep() {
  if (currentStep < steps.length) {
    const step = steps[currentStep];
    const div = document.createElement('div');
    div.className = 'step visible';
    div.innerHTML = `
      <div class="icon">${step.icon}</div>
      <div class="label">${step.text}</div>
      <div class="tooltip">${step.tooltip}</div>
    `;
    document.getElementById('flow-container').appendChild(div);
    currentStep++;
  }
}

function resetFlow() {
  document.getElementById('flow-container').innerHTML = '';
  currentStep = 0;
}
