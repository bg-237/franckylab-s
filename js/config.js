// Configuration EmailJS - Francky Lab's
// Remplacez ces valeurs par vos propres identifiants EmailJS

const EMAIL_CONFIG = {
    // Votre clé publique EmailJS (Public Key)
    PUBLIC_KEY: "ACDUXeiP7zMmCWPW7",
    
    // ID de votre service EmailJS
    SERVICE_ID: "service_c0rym5b", 
    
    // ID de votre template EmailJS
    TEMPLATE_ID: "template_u1xvvxh"
};

// Template de base pour EmailJS
const EMAIL_TEMPLATE = {
    // Variables disponibles dans le template EmailJS
    name: "{{name}}",                  // Nom du client
    email: "{{email}}",                // Email du client  
    phone: "{{phone}}",                // Téléphone du client
    service: "{{service}}",            // Service demandé
    message: "{{message}}",            // Message du client
    to_email: "contact@francky-labs.com", // Votre email de réception
    reply_to: "{{email}}"              // Email de réponse
};

// Instructions de configuration EmailJS
const EMAILJS_SETUP_INSTRUCTIONS = `
📧 Configuration EmailJS pour Francky Lab's

1. Créer un compte sur https://www.emailjs.com/
2. Créer un nouveau service (Gmail, Outlook, etc.)
3. Créer un template avec les variables suivantes :
   - name : Nom du client
   - email : Email du client
   - phone : Téléphone du client
   - service : Service demandé
   - message : Message du client

4. Remplacer les valeurs dans EMAIL_CONFIG :
   - PUBLIC_KEY : Votre clé publique EmailJS
   - SERVICE_ID : ID de votre service
   - TEMPLATE_ID : ID de votre template

5. Template HTML suggéré pour EmailJS :
   
   Sujet : Nouvelle demande de {{service}} - {{name}}
   
   Corps :
   Bonjour,
   
   Vous avez reçu une nouvelle demande via le site Francky Lab's :
   
   👤 Nom : {{name}}
   📧 Email : {{email}}
   📱 Téléphone : {{phone}}
   🛠️ Service : {{service}}
   
   💬 Message :
   {{message}}
   
   ---
   Envoyé depuis francky-labs.netlify.app
`;

// Export pour utilisation dans main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EMAIL_CONFIG, EMAIL_TEMPLATE, EMAILJS_SETUP_INSTRUCTIONS };
}