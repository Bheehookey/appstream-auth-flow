const steps = [
  {
    icon: '👤',
    text: 'User clicks "Login" on ISV portal',
    detail: 'User initiates authentication from the SaaS portal UI.'
  },
  {
    icon: '🏢',
    text: 'Portal sends SAML request to Identity Provider',
    detail: 'A SAML AuthnRequest is generated and sent to the user’s IdP.'
  },
  {
    icon: '🔐',
    text: 'User authenticates with Identity Provider',
    detail: 'User enters credentials; IdP verifies identity and prepares a SAML assertion.'
  },
  {
    icon: '📜',
    text: 'IdP sends SAML assertion to AWS',
    detail: 'The signed SAMLResponse is POSTed to AWS’s SAML endpoint with RelayState.'
  },
  {
    icon: '☁️',
    text: 'AppStream 2.0 validates identity and creates session',
    detail: 'AWS STS assumes a role based on the assertion and generates a streaming URL.'
  },
  {
    icon: '✅',
    text: 'User launches application in AppStream',
    detail: 'The user is redirected to AppStream and the application session begins.'
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
      <div class="tech-detail">${step.detail}</div>
    `;
    document.getElementById('flow-container').appendChild(div);
    currentStep++;
  }
}

function resetFlow() {
  document.getElementById('flow-container').innerHTML = '';
  currentStep = 0;
}

function toggleTechnicalView() {
  const container = document.getElementById('flow-container');
  container.classList.toggle('tech-visible');
}
