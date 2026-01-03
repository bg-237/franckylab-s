/**
 * Système d'icônes SVG custom pour Francky Lab's
 * Icônes vectorielles professionnelles intégrées
 */

const FranckyIcons = {
    // Icônes de services
    globe: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>`,
    
    cogs: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97L2.46 14.6c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.31.61.22l2.49-1c.52.39 1.06.73 1.69.98l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.25 1.17-.59 1.69-.98l2.49 1c.22.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/>
    </svg>`,
    
    robot: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A2 2 0 0 1 14 4C14 4.74 13.6 5.39 13 5.73V7H14A7 7 0 0 1 21 14H22A1 1 0 0 1 23 15V18A1 1 0 0 1 22 19H21V20A2 2 0 0 1 19 22H5A2 2 0 0 1 3 20V19H2A1 1 0 0 1 1 18V15A1 1 0 0 1 2 14H3A7 7 0 0 1 10 7H11V5.73C10.4 5.39 10 4.74 10 4A2 2 0 0 1 12 2M7.5 13A2.5 2.5 0 0 0 5 15.5A2.5 2.5 0 0 0 7.5 18A2.5 2.5 0 0 0 10 15.5A2.5 2.5 0 0 0 7.5 13M16.5 13A2.5 2.5 0 0 0 14 15.5A2.5 2.5 0 0 0 16.5 18A2.5 2.5 0 0 0 19 15.5A2.5 2.5 0 0 0 16.5 13Z"/>
    </svg>`,
    
    magic: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.5 5.6L5 7L6.4 4.5L5 2L7.5 3.4L10 2L8.6 4.5L10 7L7.5 5.6M19.5 15.4L22 14L20.6 16.5L22 19L19.5 17.6L17 19L18.4 16.5L17 14L19.5 15.4M22 2L20.6 4.5L22 7L19.5 5.6L17 7L18.4 4.5L17 2L19.5 3.4L22 2M13.34 12.78L15.78 10.34L13.66 8.22L11.22 10.66L13.34 12.78M14.37 7.29L16.71 9.63C17.1 10 17.1 10.65 16.71 11.04L5.04 22.71C4.65 23.1 4 23.1 3.63 22.71L1.29 20.37C0.9 20 0.9 19.35 1.29 18.96L12.96 7.29C13.35 6.9 14 6.9 14.37 7.29Z"/>
    </svg>`,
    
    tools: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.78 15.3L19.78 21.3L21.89 19.14L15.89 13.14L13.78 15.3M17.5 10.1C17.11 10.1 16.69 10.05 16.36 9.91L4.97 21.25L2.86 19.14L10.27 11.74C8.5 8.83 9.58 4.83 12.85 3.15C14.07 2.5 15.5 2.21 16.89 2.35L12.93 6.31L15.66 9.05L19.61 5.12C19.75 6.5 19.47 7.93 18.81 9.15C18.31 10.06 17.53 10.1 17.5 10.1Z"/>
    </svg>`,
    
    rocket: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.81 14.12L5.64 11.29L8.17 10.79C11.39 6.41 17.55 4.22 19.78 4.22C19.78 6.45 17.59 12.61 13.21 15.83L12.71 18.36L9.88 21.19C9.29 21.78 8.28 21.85 7.59 21.17L2.83 16.41C2.15 15.72 2.22 14.71 2.81 14.12M5.64 16.95L7.05 18.36C7.54 18.85 8.35 18.85 8.84 18.36C9.33 17.87 9.33 17.06 8.84 16.57L7.43 15.16C6.94 14.67 6.13 14.67 5.64 15.16C5.15 15.65 5.15 16.46 5.64 16.95Z"/>
    </svg>`,
    
    // Icônes de valeurs
    lightbulb: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2M9 21V20H15V21A1 1 0 0 1 14 22H10A1 1 0 0 1 9 21M12 4.5A4.5 4.5 0 0 1 16.5 9C16.5 10.61 15.61 12.06 14.39 12.94L13 13.74V16H11V13.74L9.61 12.94C8.39 12.06 7.5 10.61 7.5 9A4.5 4.5 0 0 1 12 4.5Z"/>
    </svg>`,
    
    handshake: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 6H14L13.5 7.5H9.5L11 6M7 4V6H17V4C17 2.89 16.1 2 15 2H9C7.89 2 7 2.89 7 4M20 8H4C2.89 8 2 8.89 2 10V11H22V10C22 8.89 21.1 8 20 8M2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12H2Z"/>
    </svg>`,
    
    award: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 16L3 5L8.5 12L12 4L15.5 12L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z"/>
    </svg>`,
    
    // Icônes de contact
    mapMarker: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M12 11.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5S14.5 7.62 14.5 9S13.38 11.5 12 11.5Z"/>
    </svg>`,
    
    phone: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5A1 1 0 0 1 21 16.5V20A1 1 0 0 1 20 21A17 17 0 0 1 3 4A1 1 0 0 1 4 3H7.5A1 1 0 0 1 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"/>
    </svg>`,
    
    envelope: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4M20 8L12 13L4 8V6L12 11L20 6V8Z"/>
    </svg>`,
    
    clock: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M16.2 16.2L11 13V7H12.5V12.2L17 14.7L16.2 16.2Z"/>
    </svg>`,
    
    // Icônes d'actions
    paperPlane: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z"/>
    </svg>`,
    
    arrowLeft: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 11V13H8L13.5 18.5L12.08 19.92L4.16 12L12.08 4.08L13.5 5.5L8 11H20Z"/>
    </svg>`,
    
    // Icônes sociales
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382C17.367 14.382 17.188 14.382 17.11 14.304C16.957 14.226 15.847 13.675 15.847 13.675C15.668 13.597 15.566 13.597 15.413 13.854C15.413 13.854 14.865 14.644 14.687 14.826C14.584 14.928 14.406 14.928 14.253 14.826C14.1 14.723 13.552 14.382 12.442 13.597C11.717 13.018 11.307 12.312 11.205 12.133C11.102 11.955 11.205 11.826 11.307 11.723C11.41 11.621 11.512 11.468 11.615 11.366C11.717 11.263 11.717 11.161 11.82 11.058C11.922 10.956 11.82 10.853 11.717 10.751C11.615 10.648 11.205 9.538 11.027 9.103C10.848 8.668 10.67 8.668 10.567 8.668C10.465 8.668 10.362 8.668 10.26 8.668C10.157 8.668 9.952 8.771 9.85 8.873C9.747 8.976 9.337 9.386 9.337 10.496C9.337 11.606 10.157 12.665 10.26 12.767C10.362 12.87 11.717 15.016 13.859 15.947C14.304 16.149 14.661 16.277 14.943 16.379C15.388 16.533 15.782 16.507 16.099 16.456C16.442 16.405 17.367 15.947 17.57 15.438C17.772 14.928 17.772 14.484 17.67 14.382C17.567 14.279 17.472 14.382 17.472 14.382M12.19 21.785H12.185C10.36 21.785 8.587 21.297 7.052 20.397L6.684 20.185L2.925 21.214L3.973 17.584L3.734 17.2C2.76 15.616 2.235 13.794 2.24 11.916C2.24 6.615 6.615 2.24 11.916 2.24C14.484 2.24 16.897 3.171 18.761 5.035C20.625 6.899 21.556 9.312 21.556 11.88C21.556 17.181 17.181 21.556 11.88 21.556"/>
    </svg>`,
    
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.405C10.125 6.348 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.34 7.875 13.875 8.8 13.875 9.75V12.073H17.203L16.671 15.563H13.875V24C19.612 23.094 24 18.1 24 12.073Z"/>
    </svg>`,
    
    // Icônes d'état
    star: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
    </svg>`,
    
    checkCircle: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22S22 17.5 22 12S17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>
    </svg>`,
    
    exclamationCircle: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 13H11V7H13M13 17H11V15H13M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"/>
    </svg>`,
    
    spinner: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4V2A10 10 0 0 0 2 12H4A8 8 0 0 1 12 4Z"/>
    </svg>`,
    
    // Icônes spécifiques aux projets
    camera: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 4H7L9 2H15L17 4H20A2 2 0 0 1 22 6V18A2 2 0 0 1 20 20H4A2 2 0 0 1 2 18V6A2 2 0 0 1 4 4M12 7A5 5 0 0 0 7 12A5 5 0 0 0 12 17A5 5 0 0 0 17 12A5 5 0 0 0 12 7M12 9A3 3 0 0 1 15 12A3 3 0 0 1 12 15A3 3 0 0 1 9 12A3 3 0 0 1 12 9Z"/>
    </svg>`,
    
    palette: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.5 12A1.5 1.5 0 0 1 16 10.5A1.5 1.5 0 0 1 17.5 9A1.5 1.5 0 0 1 19 10.5A1.5 1.5 0 0 1 17.5 12M14.5 8A1.5 1.5 0 0 1 13 6.5A1.5 1.5 0 0 1 14.5 5A1.5 1.5 0 0 1 16 6.5A1.5 1.5 0 0 1 14.5 8M9.5 8A1.5 1.5 0 0 1 8 6.5A1.5 1.5 0 0 1 9.5 5A1.5 1.5 0 0 1 11 6.5A1.5 1.5 0 0 1 9.5 8M6.5 12A1.5 1.5 0 0 1 5 10.5A1.5 1.5 0 0 1 6.5 9A1.5 1.5 0 0 1 8 10.5A1.5 1.5 0 0 1 6.5 12M12 3A9 9 0 0 0 3 12A9 9 0 0 0 12 21A1.5 1.5 0 0 0 13.5 19.5C13.5 19.11 13.35 18.76 13.11 18.5C12.88 18.23 12.73 17.88 12.73 17.5A1.5 1.5 0 0 1 14.23 16H16A5 5 0 0 0 21 11C21 6.58 16.97 3 12 3Z"/>
    </svg>`,
    
    lightning: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 15H6L13 1V9H18L11 23V15Z"/>
    </svg>`,
    
    user: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4A4 4 0 0 1 16 8A4 4 0 0 1 12 12A4 4 0 0 1 8 8A4 4 0 0 1 12 4M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z"/>
    </svg>`,
    
    party: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 4V7H10.5V19H13.5V7H19V4H5Z"/>
    </svg>`,
    
    landscape: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 6L10.25 11L13.1 14.8L11.5 16C9.81 13.75 7 10 7 10L1 18H23L14 6Z"/>
    </svg>`,
    
    baby: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2M21 9V7L15 5.5V7.5L21 9M3 9L9 7.5V5.5L3 7V9M15 10.5V19C15 20.1 14.1 21 13 21H11C9.9 21 9 20.1 9 19V10.5L12 8L15 10.5Z"/>
    </svg>`,
    
    film: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 4L20 8H17L15 4H13L15 8H12L10 4H8L10 8H7L5 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4H18M4 10H7L5 14H4V10M9 10H12L10 14H9V10M14 10H17L15 14H14V10M19 10H20V14H19L17 10H19Z"/>
    </svg>`,
    
    leaf: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 15 8 14.25 8 14.25C8.5 16 9.5 17 11 17.5C12.5 18 14 17.75 15 17C16 16.25 16.75 15.5 17 14.5C17.25 13.5 17.25 12.75 17.25 12.75C19.5 11.5 21 10 21.5 8.5C22 7 21.5 6.5 21.5 6.5C20.5 7.5 18.5 8 17 8Z"/>
    </svg>`,
    
    pill: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.22 11.29L11.29 4.22C13.64 1.88 17.43 1.88 19.78 4.22C22.12 6.56 22.12 10.36 19.78 12.71L12.71 19.78C10.36 22.12 6.56 22.12 4.22 19.78C1.88 17.43 1.88 13.64 4.22 11.29M5.64 12.71C4.59 13.75 4.59 15.45 5.64 16.5C6.68 17.54 8.39 17.54 9.43 16.5L12 13.93L10.07 12L5.64 12.71M14.56 7.5C15.61 6.46 17.32 6.46 18.36 7.5C19.41 8.54 19.41 10.25 18.36 11.29L16.5 13.15L14.56 11.22L14.56 7.5Z"/>
    </svg>`,
    
    home: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
    </svg>`,
    
    info: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 9H11V7H13M13 17H11V11H13M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2Z"/>
    </svg>`,
    
    medical: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.5 2C17 2 20.5 5.5 20.5 10C20.5 12.38 19.31 14.47 17.5 15.74V17A1 1 0 0 1 16.5 18H14.5V20A1 1 0 0 1 13.5 21H11.5A1 1 0 0 1 10.5 20V18H8.5A1 1 0 0 1 7.5 17V15.74C5.69 14.47 4.5 12.38 4.5 10C4.5 5.5 8 2 12.5 2M15 6H14V9H11V10H14V13H15V10H18V9H15V6Z"/>
    </svg>`,
    
    shopping: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 18C15.89 18 15 18.89 15 20A2 2 0 0 0 17 22A2 2 0 0 0 19 20C19 18.89 18.1 18 17 18M1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15A2 2 0 0 0 7 17H19V15H7.42A0.25 0.25 0 0 1 7.17 14.75C7.17 14.7 7.18 14.66 7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5H5.21L4.27 3H1M7 18C5.89 18 5 18.89 5 20A2 2 0 0 0 7 22A2 2 0 0 0 9 20C9 18.89 8.1 18 7 18Z"/>
    </svg>`,
    
    bulb: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A7 7 0 0 0 5 9C5 11.38 6.19 13.47 8 14.74V17A1 1 0 0 0 9 18H15A1 1 0 0 0 16 17V14.74C17.81 13.47 19 11.38 19 9A7 7 0 0 0 12 2Z"/>
    </svg>`,
    
    truck: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 18.5A1.5 1.5 0 0 1 16.5 17A1.5 1.5 0 0 1 18 15.5A1.5 1.5 0 0 1 19.5 17A1.5 1.5 0 0 1 18 18.5M19.5 9.5L21.46 12H17V9.5M6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8H17V4H3C1.89 4 1 4.89 1 6V17H3A3 3 0 0 0 6 20A3 3 0 0 0 9 17H15A3 3 0 0 0 18 20A3 3 0 0 0 21 17H23V12L20 8Z"/>
    </svg>`,
    
    creditCard: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4M20 18H4V12H20V18M20 8H4V6H20V8Z"/>
    </svg>`,
    
    graduation: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z"/>
    </svg>`,
    
    heart: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
    </svg>`,
    
    alert: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 14H11V10H13M13 18H11V16H13M1 21H23L12 2L1 21Z"/>
    </svg>`,
    
    check: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 7L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.59L21 7Z"/>
    </svg>`,
    
    arrowRight: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 11V13H16L10.5 18.5L11.92 19.92L19.84 12L11.92 4.08L10.5 5.5L16 11H4Z"/>
    </svg>`,
    
    // Icônes spécifiques manquantes
    tooth: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.69 2 6 4.69 6 8C6 10.5 6.5 12.5 7 14C7.5 15.5 8 16.5 8 18C8 19.66 9.34 21 11 21C12.66 21 14 19.66 14 18C14 16.5 14.5 15.5 15 14C15.5 12.5 16 10.5 16 8C16 4.69 13.31 2 12 2M12 4C12.21 4 12.42 4.08 12.58 4.25C12.74 4.42 12.83 4.63 12.83 4.83C12.83 5.04 12.74 5.25 12.58 5.42C12.42 5.58 12.21 5.67 12 5.67C11.79 5.67 11.58 5.58 11.42 5.42C11.25 5.25 11.17 5.04 11.17 4.83C11.17 4.63 11.25 4.42 11.42 4.25C11.58 4.08 11.79 4 12 4Z"/>
    </svg>`,
    
    microscope: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.5 8L8.5 10H11L10 8H9.5M12 2L11 4H13L12 2M15.96 11.29C16.35 11.68 16.35 12.32 15.96 12.71L14.12 14.54C13.73 14.93 13.1 14.93 12.71 14.54C12.32 14.15 12.32 13.53 12.71 13.14L14.54 11.29C14.93 10.9 15.56 10.9 15.96 11.29M8.41 12.83C7.61 13.63 7.61 14.94 8.41 15.74L9.46 16.79C10.26 17.59 11.57 17.59 12.37 16.79C13.17 15.99 13.17 14.68 12.37 13.88L11.32 12.83C10.5 12.03 9.21 12.03 8.41 12.83M2 19H22V21H2V19Z"/>
    </svg>`,
    
    diamond: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 2L2 8L12 22L22 8L18 2H6M6.5 4H8.5L7 7L6.5 4M9.5 4H11.5L12 7L10 7L9.5 4M12.5 4H14.5L14 7L12 7L12.5 4M15.5 4H17.5L17 7L14 7L15.5 4M4.5 8H7L12 18L4.5 8M9 8H15L12 18L9 8M17 8H19.5L12 18L17 8Z"/>
    </svg>`,
    
    instagram: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2A5.8 5.8 0 0 1 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2M7.6 4A3.6 3.6 0 0 0 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4A3.6 3.6 0 0 0 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6M17.25 5.5A1.25 1.25 0 0 1 18.5 6.75A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75A1.25 1.25 0 0 1 17.25 5.5M12 7A5 5 0 0 1 17 12A5 5 0 0 1 12 17A5 5 0 0 1 7 12A5 5 0 0 1 12 7M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9Z"/>
    </svg>`,
    
    twitter: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
    </svg>`,
    
    // Icônes financières spécifiques
    coins: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 12C5 13.11 3.89 14 2.5 14S0 13.11 0 12S1.39 10 2.5 10S5 10.89 5 12M7 12C7 10.89 8.39 10 10 10S13 10.89 13 12S11.61 14 10 14S7 13.11 7 12M14 12C14 10.89 15.39 10 17 10S20 10.89 20 12S18.61 14 17 14S14 13.11 14 12M21 12C21 13.11 19.61 14 18 14S15 13.11 15 12S16.39 10 18 10S21 10.89 21 12Z"/>
    </svg>`,
    
    handHoldingUsd: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.8 10.9C10.5 10.9 9.4 11.3 9.4 11.9S10.5 12.8 11.8 12.8S14.2 12.4 14.2 11.9S13.1 10.9 11.8 10.9M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M11.8 6.2C14.2 6.2 16.2 7.7 16.7 9.8L15.1 10.3C14.8 9.1 13.5 8.2 11.8 8.2C10.1 8.2 8.8 9.1 8.5 10.3L6.9 9.8C7.4 7.7 9.4 6.2 11.8 6.2M11.8 17.8C9.4 17.8 7.4 16.3 6.9 14.2L8.5 13.7C8.8 14.9 10.1 15.8 11.8 15.8C13.5 15.8 14.8 14.9 15.1 13.7L16.7 14.2C16.2 16.3 14.2 17.8 11.8 17.8Z"/>
    </svg>`,
    
    building: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 20H22V22H2V20M4 2H20V20H4V2M6 4V18H18V4H6M8 6H10V8H8V6M12 6H14V8H12V6M16 6H18V8H16V6M8 10H10V12H8V10M12 10H14V12H12V10M16 10H18V12H16V10M8 14H10V16H8V14M12 14H14V16H12V14M16 14H18V16H16V14Z"/>
    </svg>`,
    
    shieldAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10.5V11.5C15.4 11.5 16 12.4 16 13V16C16 17.1 15.1 18 14 18H10C8.9 18 8 17.1 8 16V13C8 12.4 8.4 11.5 9 11.5V10.5C9 8.6 10.6 7 12 7M12 8.2C11.2 8.2 10.2 8.7 10.2 10.5V11.5H13.8V10.5C13.8 8.7 12.8 8.2 12 8.2Z"/>
    </svg>`,
    
    userTie: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4A4 4 0 0 1 16 8A4 4 0 0 1 12 12A4 4 0 0 1 8 8A4 4 0 0 1 12 4M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14M12 15L10 17L12 19L14 17L12 15Z"/>
    </svg>`,
    
    eye: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 9A3 3 0 0 0 9 12A3 3 0 0 0 12 15A3 3 0 0 0 15 12A3 3 0 0 0 12 9M12 17C9.24 17 6.81 15.35 5.73 13C6.81 10.65 9.24 9 12 9C14.76 9 17.19 10.65 18.27 13C17.19 15.35 14.76 17 12 17M3 13C5.11 8.77 8.87 6 12 6C15.13 6 18.89 8.77 21 13C18.89 17.23 15.13 20 12 20C8.87 20 5.11 17.23 3 13Z"/>
    </svg>`,
    
    eyeSlash: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.83 9L15 12.16C15 12.11 15 12.05 15 12A3 3 0 0 0 12 9C11.94 9 11.89 9 11.83 9M7.53 9.8L9.08 11.35C9.03 11.56 9 11.77 9 12A3 3 0 0 0 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 6.81 15.35 5.73 13C6.4 11.74 7.42 10.65 8.65 9.87L7.53 9.8M2 4.27L4.28 6.55L4.73 7C3.08 8.3 1.78 10 1 12C3.73 18.18 7.8 21 12 21C13.55 21 15.08 20.7 16.38 20.16L16.81 20.58L19.73 23.5L21 22.23L3.27 3M12 5C16.2 5 20.27 7.82 23 14C22.18 16.08 20.79 17.88 19 19.17L17.58 17.75C18.94 16.9 20.06 15.73 20.82 14.31C19.17 11.19 15.76 9 12 9C10.91 9 9.84 9.21 8.84 9.59L7.3 8.05C8.74 7.36 10.33 7 12 7C12.35 7 12.7 7.03 13.04 7.07L12 5Z"/>
    </svg>`,
    
    calculator: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2H17A2 2 0 0 1 19 4V20A2 2 0 0 1 17 22H7A2 2 0 0 1 5 20V4A2 2 0 0 1 7 2M7 4V8H17V4H7M7 10V12H9V10H7M11 10V12H13V10H11M15 10V12H17V10H15M7 14V16H9V14H7M11 14V16H13V14H11M15 14V16H17V14H15M7 18V20H9V18H7M11 18V20H13V18H11M15 18V20H17V18H15Z"/>
    </svg>`,
    
    fileAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18V20Z"/>
    </svg>`,
    
    save: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 9H5V5H15M12 19A3 3 0 1 1 9 16A3 3 0 0 1 12 19M17 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V7L17 3Z"/>
    </svg>`,
    
    signInAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 17.25V14H3V10H10V6.75L15.25 12L10 17.25M8 2H17A2 2 0 0 1 19 4V20A2 2 0 0 1 17 22H8C6.9 22 6 21.1 6 20V16H8V20H17V4H8V8H6V4A2 2 0 0 1 8 2Z"/>
    </svg>`,
    
    signOutAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 7.25V10H21V14H14V16.75L8.75 12L14 7.25M16 2A2 2 0 0 1 18 4V8H16V4H7V20H16V16H18V20A2 2 0 0 1 16 22H7C5.9 22 5 21.1 5 20V4A2 2 0 0 1 7 2H16Z"/>
    </svg>`,
    
    userPlus: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M15 14C12.33 14 7 15.33 7 18V20H23V18C23 15.33 17.67 14 15 14M6 10V7H4V10H1V12H4V15H6V12H9V10M15 12A4 4 0 0 0 19 8A4 4 0 0 0 15 4A4 4 0 0 0 11 8A4 4 0 0 0 15 12Z"/>
    </svg>`,
    
    userCircle: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 8.39C13.57 8.39 14.84 9.67 14.84 11.24C14.84 12.81 13.57 14.09 12 14.09C10.43 14.09 9.16 12.81 9.16 11.24C9.16 9.67 10.43 8.39 12 8.39M12 7C9.79 7 8 8.79 8 11S9.79 15 12 15S16 13.21 16 11S14.21 7 12 7M12 17.3C9.5 17.3 7.29 18.28 6.26 19.71C7.46 20.5 8.72 21 10.06 21.16C10.56 21 11.26 20.77 12 20.77S13.44 21 13.94 21.16C15.28 21 16.54 20.5 17.74 19.71C16.71 18.28 14.5 17.3 12 17.3Z"/>
    </svg>`,
    
    bolt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 15H6L13 1V9H18L11 23V15Z"/>
    </svg>`,
    
    fileDownload: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18V20M12 12L16 16H13.5V19H10.5V16H8L12 12Z"/>
    </svg>`,
    
    calendarAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3H18V1H16V3H8V1H6V3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H19A2 2 0 0 0 21 19V5A2 2 0 0 0 19 3M19 19H5V8H19V19M5 6V5H19V6H5Z"/>
    </svg>`,
    
    headset: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1C7 1 3 5 3 10V17A3 3 0 0 0 6 20H9V12H5V10A7 7 0 0 1 12 3A7 7 0 0 1 19 10V12H15V20H18A3 3 0 0 0 21 17V10C21 5 17 1 12 1Z"/>
    </svg>`,
    
    history: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 8H12V13L16.28 15.54L17 14.33L13.5 12.25V8M13 3A9 9 0 0 0 4 12H1L4.96 16.03L9 12H6A7 7 0 0 1 13 5A7 7 0 0 1 20 12A7 7 0 0 1 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 20 10.5 21 13 21A9 9 0 0 0 22 12A9 9 0 0 0 13 3"/>
    </svg>`,
    
    fileContract: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6A2 2 0 0 0 4 4V20A2 2 0 0 0 6 22H18A2 2 0 0 0 20 20V8L14 2M18 20H6V4H13V9H18V20M8 12V14H16V12H8M8 16V18H13V16H8Z"/>
    </svg>`,
    
    chartLine: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"/>
    </svg>`,
    
    cloudUploadAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 13V17H10V13H7L12 8L17 13M19.35 10.04C18.67 6.59 15.64 4 12 4C9.11 4 6.6 5.64 5.35 8.04C2.34 8.36 0 10.91 0 14A6 6 0 0 0 6 20H19A5 5 0 0 0 24 15C24 12.36 21.95 10.22 19.35 10.04Z"/>
    </svg>`,
    
    times: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
    </svg>`,
    
    timesCircle: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.47 2 2 6.47 2 12S6.47 22 12 22S22 17.53 22 12S17.53 2 12 2M17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59Z"/>
    </svg>`,
    
    exclamationTriangle: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 14H11V10H13M13 18H11V16H13M1 21H23L12 2L1 21Z"/>
    </svg>`,
    
    chevronDown: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 8.58L12 13.17L16.59 8.58L18 10L12 16L6 10L7.41 8.58Z"/>
    </svg>`,
    
    mapMarkedAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22S19 14.25 19 9C19 5.13 15.87 2 12 2M7 9C7 6.24 9.24 4 12 4S17 6.24 17 9S14.76 14 12 14S7 11.76 7 9M12 7C10.9 7 10 7.9 10 9S10.9 11 12 11S14 10.1 14 9S13.1 7 12 7Z"/>
    </svg>`,
    
    directions: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.71 11.29L12.71 2.29A1 1 0 0 0 11.29 2.29L2.29 11.29A1 1 0 0 0 2.29 12.71L11.29 21.71A1 1 0 0 0 12.71 21.71L21.71 12.71A1 1 0 0 0 21.71 11.29M14 14.5V13H10V11H14V9.5L16.5 12L14 14.5Z"/>
    </svg>`,
    
    subway: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.8 2.8C18.4 2.09 19.3 2.09 19.9 2.8C20.6 3.4 20.6 4.3 19.9 4.9L18.5 6.3L17.1 4.9L18.5 3.5C18.1 3.1 17.5 3.1 17.1 3.5L15.7 4.9L14.3 3.5L15.7 2.1C16.3 1.5 17.2 1.5 17.8 2.1M12.9 5.4L11.5 6.8L10.1 5.4L11.5 4L12.9 5.4M8.7 7.6L7.3 9L5.9 7.6L7.3 6.2L8.7 7.6M4.5 9.8L3.1 11.2L1.7 9.8L3.1 8.4L4.5 9.8M6.8 12.1L8.2 13.5L6.8 14.9L5.4 13.5L6.8 12.1M11 14.3L12.4 15.7L11 17.1L9.6 15.7L11 14.3M15.2 16.5L16.6 17.9L15.2 19.3L13.8 17.9L15.2 16.5M17.4 18.7L18.8 20.1L17.4 21.5L16 20.1L17.4 18.7Z"/>
    </svg>`,
    
    bus: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 11H6V6H18M16.5 17A1.5 1.5 0 0 1 15 15.5A1.5 1.5 0 0 1 16.5 14A1.5 1.5 0 0 1 18 15.5A1.5 1.5 0 0 1 16.5 17M7.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 14A1.5 1.5 0 0 1 9 15.5A1.5 1.5 0 0 1 7.5 17M4 16C4 16.88 4.39 17.67 5 18.22V20A1 1 0 0 0 6 21H7A1 1 0 0 0 8 20V19H16V20A1 1 0 0 0 17 21H18A1 1 0 0 0 19 20V18.22C19.61 17.67 20 16.88 20 16V6C20 2.5 16.42 2 12 2S4 2.5 4 6V16Z"/>
    </svg>`,
    
    car: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M5 11L6.5 6.5H17.5L19 11H5M17.5 16A1.5 1.5 0 0 1 16 14.5A1.5 1.5 0 0 1 17.5 13A1.5 1.5 0 0 1 19 14.5A1.5 1.5 0 0 1 17.5 16M6.5 16A1.5 1.5 0 0 1 5 14.5A1.5 1.5 0 0 1 6.5 13A1.5 1.5 0 0 1 8 14.5A1.5 1.5 0 0 1 6.5 16M18.92 6C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6L3 12V20A1 1 0 0 0 4 21H5A1 1 0 0 0 6 20V19H18V20A1 1 0 0 0 19 21H20A1 1 0 0 0 21 20V12L18.92 6Z"/>
    </svg>`,
    
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433A2.062 2.062 0 0 1 3.274 5.371A2.064 2.064 0 0 1 5.337 3.309A2.064 2.064 0 0 1 7.4 5.371A2.063 2.063 0 0 1 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"/>
    </svg>`,
    
    comments: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 23A1 1 0 0 1 11 22V19H7A2 2 0 0 1 5 17V7A2 2 0 0 1 7 5H21A2 2 0 0 1 23 7V17A2 2 0 0 1 21 19H16.9L13.2 22.71A1 1 0 0 1 12 23M13 17V20L16.08 17H21V7H7V17H13M3 15H1V3A2 2 0 0 1 3 1H19V3H3V15Z"/>
    </svg>`,
    
    // Icônes juridiques spécifiques
    scales: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2M6.5 12.5L9.5 10.5L6.5 8.5L3.5 10.5L6.5 12.5M17.5 12.5L20.5 10.5L17.5 8.5L14.5 10.5L17.5 12.5M12 21L10.91 14.74L2 14L10.91 13.26L12 7L13.09 13.26L22 14L13.09 14.74L12 21Z"/>
    </svg>`,
    
    gavel: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M2.5 20.5L5.5 17.5L8.5 20.5L5.5 23.5L2.5 20.5M9.5 13.5L12.5 10.5L15.5 13.5L12.5 16.5L9.5 13.5M16.5 6.5L19.5 3.5L22.5 6.5L19.5 9.5L16.5 6.5M1 22H23V24H1V22Z"/>
    </svg>`,
    
    briefcase: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 2H14A2 2 0 0 1 16 4V6H20A2 2 0 0 1 22 8V19A2 2 0 0 1 20 21H4A2 2 0 0 1 2 19V8A2 2 0 0 1 4 6H8V4A2 2 0 0 1 10 2M14 6V4H10V6H14M4 8V19H20V8H4Z"/>
    </svg>`,
    
    courthouse: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.5 10H17.5V8.5L12 4.5L6.5 8.5V10M12 2L19 7V9H21V11H19V20H17V11H15V20H13V11H11V20H9V11H7V20H5V11H3V9H5V7L12 2M3 21V23H21V21H3Z"/>
    </svg>`,
    
    handshakeAlt: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 6H14L13.5 7.5H9.5L11 6M7 4V6H17V4C17 2.89 16.1 2 15 2H9C7.89 2 7 2.89 7 4M20 8H4C2.89 8 2 8.89 2 10V11H22V10C22 8.89 21.1 8 20 8M2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12H2Z"/>
    </svg>`,
    
    ear: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 20C17 21.1 16.1 22 15 22H9C7.9 22 7 21.1 7 20V19H17V20M7 18V16H17V18H7M12 2C8.69 2 6 4.69 6 8C6 10.5 6.5 12.5 7 14H17C17.5 12.5 18 10.5 18 8C18 4.69 15.31 2 12 2M12 4C14.21 4 16 5.79 16 8C16 9.5 15.5 11 15 12H9C8.5 11 8 9.5 8 8C8 5.79 9.79 4 12 4Z"/>
    </svg>`,
    
    target: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20A8 8 0 0 1 4 12A8 8 0 0 1 12 4M12 6A6 6 0 0 0 6 12A6 6 0 0 0 12 18A6 6 0 0 0 18 12A6 6 0 0 0 12 6M12 8A4 4 0 0 1 16 12A4 4 0 0 1 12 16A4 4 0 0 1 8 12A4 4 0 0 1 12 8M12 10A2 2 0 0 0 10 12A2 2 0 0 0 12 14A2 2 0 0 0 14 12A2 2 0 0 0 12 10Z"/>
    </svg>`,
    
    shield: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1M12 7C13.4 7 14.8 8.6 14.8 10.5V11.5C15.4 11.5 16 12.4 16 13V16C16 17.1 15.1 18 14 18H10C8.9 18 8 17.1 8 16V13C8 12.4 8.4 11.5 9 11.5V10.5C9 8.6 10.6 7 12 7Z"/>
    </svg>`,
    
    numbers: `<svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 1V3H5V5H7V7H9V5H11V3H9V1H7M3 9V11H5V13H3V15H9V13H7V11H9V9H3M11 9V15H13V11H15V15H17V9H11M3 17V19H5V21H7V19H9V17H3M13 17V21H19V19H15V17H13Z"/>
    </svg>`
};

/**
 * Classe pour gérer les icônes custom
 */
class IconManager {
    constructor() {
        this.icons = FranckyIcons;
        this.defaultSize = '24px';
        this.defaultColor = 'currentColor';
    }
    
    /**
     * Créer un élément icône
     * @param {string} iconName - Nom de l'icône
     * @param {Object} options - Options de style
     * @returns {HTMLElement} - Élément SVG
     */
    create(iconName, options = {}) {
        const {
            size = this.defaultSize,
            color = this.defaultColor,
            className = '',
            style = {}
        } = options;
        
        if (!this.icons[iconName]) {
            console.warn(`Icône "${iconName}" non trouvée`);
            return this.createFallback(iconName, options);
        }
        
        const wrapper = document.createElement('span');
        wrapper.className = `francky-icon ${className}`;
        wrapper.innerHTML = this.icons[iconName];
        
        const svg = wrapper.querySelector('svg');
        if (svg) {
            svg.style.width = size;
            svg.style.height = size;
            svg.style.color = color;
            svg.style.display = 'inline-block';
            svg.style.verticalAlign = 'middle';
            
            // Appliquer les styles personnalisés
            Object.assign(svg.style, style);
        }
        
        return wrapper;
    }
    
    /**
     * Créer une icône de fallback
     */
    createFallback(iconName, options = {}) {
        const fallbackMap = {
            'globe': '🌐',
            'cogs': '⚙️',
            'robot': '🤖',
            'magic': '✨',
            'tools': '🔧',
            'rocket': '🚀',
            'lightbulb': '💡',
            'handshake': '🤝',
            'award': '🏆',
            'mapMarker': '📍',
            'phone': '📞',
            'envelope': '📧',
            'clock': '🕐',
            'paperPlane': '✈️',
            'arrowLeft': '←',
            'whatsapp': '📱',
            'facebook': '📘',
            'star': '⭐',
            'checkCircle': '✅',
            'exclamationCircle': '⚠️',
            'spinner': '⏳'
        };
        
        const wrapper = document.createElement('span');
        wrapper.className = `francky-icon fallback ${options.className || ''}`;
        wrapper.textContent = fallbackMap[iconName] || '?';
        wrapper.style.fontSize = options.size || this.defaultSize;
        wrapper.style.display = 'inline-block';
        wrapper.style.verticalAlign = 'middle';
        
        return wrapper;
    }
    
    /**
     * Remplacer les icônes Font Awesome existantes
     */
    replaceFontAwesome() {
        const iconMap = {
            'fa-globe': 'globe',
            'fa-cogs': 'cogs',
            'fa-robot': 'robot',
            'fa-magic': 'magic',
            'fa-tools': 'tools',
            'fa-rocket': 'rocket',
            'fa-lightbulb': 'lightbulb',
            'fa-handshake': 'handshake',
            'fa-award': 'award',
            'fa-map-marker-alt': 'mapMarker',
            'fa-phone': 'phone',
            'fa-envelope': 'envelope',
            'fa-clock': 'clock',
            'fa-paper-plane': 'paperPlane',
            'fa-arrow-left': 'arrowLeft',
            'fa-arrow-right': 'arrowRight',
            'fa-whatsapp': 'whatsapp',
            'fa-facebook-f': 'facebook',
            'fa-star': 'star',
            'fa-check-circle': 'checkCircle',
            'fa-exclamation-circle': 'exclamationCircle',
            'fa-spinner': 'spinner',
            'fa-home': 'home',
            'fa-info': 'info',
            'fa-user': 'user',
            'fa-camera': 'camera',
            'fa-heart': 'heart',
            'fa-check': 'check'
        };
        
        // Mapping des emojis vers des icônes SVG
        const emojiMap = {
            '📸': 'camera',
            '🎨': 'palette', 
            '⚡': 'lightning',
            '👤': 'user',
            '🎉': 'party',
            '🏞️': 'landscape',
            '👶': 'baby',
            '🎬': 'film',
            '🌿': 'leaf',
            '💊': 'pill',
            '🏠': 'home',
            'ℹ️': 'info',
            '⚕️': 'medical',
            '🛍️': 'shopping',
            '💡': 'bulb',
            '📞': 'phone',
            '🚨': 'alert',
            '✓': 'check',
            '⏰': 'clock',
            '🚚': 'truck',
            '💳': 'creditCard',
            '🎓': 'graduation',
            '❤️': 'heart',
            '✨': 'magic',
            '📍': 'mapMarker',
            '✉️': 'envelope',
            '→': 'arrowRight',
            '←': 'arrowLeft',
            '🦷': 'tooth',
            '🔬': 'microscope',
            '💎': 'diamond',
            '📷': 'instagram',
            '📘': 'facebook',
            '🐦': 'twitter'
        };
        
        // Remplacer les classes Font Awesome
        Object.keys(iconMap).forEach(faClass => {
            const elements = document.querySelectorAll(`.${faClass}`);
            elements.forEach(element => {
                const iconName = iconMap[faClass];
                const size = window.getComputedStyle(element).fontSize;
                const color = window.getComputedStyle(element).color;
                
                const newIcon = this.create(iconName, {
                    size: size,
                    color: color,
                    className: element.className.replace(/fa[s|b|r]?\s+fa-[\w-]+/g, '').trim()
                });
                
                element.parentNode.replaceChild(newIcon, element);
            });
        });
        
        // Remplacer les emojis par des icônes SVG
        Object.keys(emojiMap).forEach(emoji => {
            const iconName = emojiMap[emoji];
            
            // Chercher les éléments contenant cet emoji
            const allElements = document.querySelectorAll('*');
            allElements.forEach(element => {
                if (element.textContent === emoji || element.innerHTML === emoji) {
                    const size = window.getComputedStyle(element).fontSize;
                    const color = window.getComputedStyle(element).color;
                    
                    const newIcon = this.create(iconName, {
                        size: size,
                        color: color,
                        className: element.className
                    });
                    
                    element.parentNode.replaceChild(newIcon, element);
                }
            });
        });
    }
    
    /**
     * Remplacer spécifiquement les emojis dans les projets
     */
    replaceProjectEmojis() {
        const emojiSelectors = [
            '.feature-icon',
            '.service-icon', 
            '.overlay-icon',
            '.detail-icon',
            '.info-icon',
            '.nav-icon',
            '.logo-icon',
            '.emergency-icon',
            '.badge-icon',
            '.card-icon',
            '.btn-icon',
            '.tip-icon',
            '.detail-icon',
            '.social-link'
        ];
        
        const emojiMap = {
            '📸': 'camera',
            '🎨': 'palette', 
            '⚡': 'lightning',
            '👤': 'user',
            '🎉': 'party',
            '🏞️': 'landscape',
            '👶': 'baby',
            '🎬': 'film',
            '🌿': 'leaf',
            '💊': 'pill',
            '🏠': 'home',
            'ℹ️': 'info',
            '⚕️': 'medical',
            '🛍️': 'shopping',
            '💡': 'bulb',
            '📞': 'phone',
            '🚨': 'alert',
            '✓': 'check',
            '⏰': 'clock',
            '🚚': 'truck',
            '💳': 'creditCard',
            '🎓': 'graduation',
            '❤️': 'heart',
            '✨': 'magic',
            '📍': 'mapMarker',
            '✉️': 'envelope',
            '→': 'arrowRight',
            '←': 'arrowLeft',
            '🦷': 'tooth',
            '🔬': 'microscope',
            '💎': 'diamond',
            '📷': 'instagram',
            '📘': 'facebook',
            '🐦': 'twitter'
        };
        
        // Remplacer dans les sélecteurs spécifiques
        emojiSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const text = element.textContent.trim();
                if (emojiMap[text]) {
                    const iconName = emojiMap[text];
                    const size = window.getComputedStyle(element).fontSize;
                    const color = window.getComputedStyle(element).color;
                    
                    const newIcon = this.create(iconName, {
                        size: size,
                        color: color,
                        className: element.className
                    });
                    
                    element.parentNode.replaceChild(newIcon, element);
                }
            });
        });
        
        // Remplacer aussi dans le contenu texte des éléments p et span
        const textElements = document.querySelectorAll('p, span, div');
        textElements.forEach(element => {
            if (element.children.length === 0) { // Seulement les éléments sans enfants
                const text = element.textContent.trim();
                Object.keys(emojiMap).forEach(emoji => {
                    if (text.includes(emoji)) {
                        const iconName = emojiMap[emoji];
                        const newText = text.replace(emoji, '');
                        
                        if (newText.trim() === '') {
                            // Remplacer complètement l'élément
                            const newIcon = this.create(iconName, {
                                size: window.getComputedStyle(element).fontSize,
                                color: window.getComputedStyle(element).color,
                                className: element.className
                            });
                            element.parentNode.replaceChild(newIcon, element);
                        } else {
                            // Remplacer juste l'emoji dans le texte
                            const iconElement = this.create(iconName, {
                                size: '1em',
                                style: { marginRight: '0.5em', verticalAlign: 'middle' }
                            });
                            element.textContent = newText;
                            element.insertBefore(iconElement, element.firstChild);
                        }
                    }
                });
            }
        });
    }
    
    /**
     * Initialiser le système d'icônes
     */
    init() {
        // Attendre que le DOM soit chargé
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.replaceFontAwesome();
                this.replaceProjectEmojis();
            });
        } else {
            this.replaceFontAwesome();
            this.replaceProjectEmojis();
        }
        
        // Ajouter les styles CSS pour les icônes
        this.addStyles();
    }
    
    /**
     * Ajouter les styles CSS pour les icônes
     */
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .francky-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .francky-icon svg {
                transition: all 0.3s ease;
            }
            
            .francky-icon.fallback {
                font-family: Arial, sans-serif;
                font-style: normal;
            }
            
            /* Animation de rotation pour le spinner */
            .francky-icon .spinner svg {
                animation: spin 1s linear infinite;
            }
            
            @keyframes spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
        `;
        
        document.head.appendChild(style);
    }
}

// Instance globale
const franckyIcons = new IconManager();

// Auto-initialisation
franckyIcons.init();

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FranckyIcons, IconManager, franckyIcons };
}