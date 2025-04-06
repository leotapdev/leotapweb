import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "/public/assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: "icons/badge.svg",
    title: "Certified",
    content:
      "Our platform connects you with licensed and certified medical professionals who adhere to the highest standards of healthcare.",
  },
  {
    id: "feature-2",
    icon: "icons/insurance.svg",
    title: "Competent",
    content:
      "With years of expertise, our team personalized professional guidance to ensure the best possible care for every patient.",
  },
  {
    id: "feature-3",
    icon: "icons/kit.svg",
    title: "Equipped",
    content:
      "Powered by advanced technology, AfyaConnect offers seamless consultations, secure data management, and instant health insights.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "LeoTap has completely changed the way I manage my day. I can shop, order food, and book rides, all in one place. It's so convenient!",
    name: "Herman Juma",
    title: "Social worker",
    img: "assets/people01.png",
  },
  {
    id: "feedback-2",
    content:
      "I love how I can send food or shop for my family members, even when they’re miles away. LeoTap makes helping others so easy!",
    name: "Steven K.",
    title: "Business Founder",
    img: "assets/people02.png",
  },
  {
    id: "feedback-3",
    content:
      "The app is super intuitive, and I can always count on it to deliver what I need quickly. From rides to deliveries, LeoTap does it all!",
    name: "Kenn Joseph",
    title: "Teacher",
    img: "assets/people03.png",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Shopping",
    value: "1,000+",
    icon: "/icons/patient-robe.svg",
    image: "/assets/shopping-2.jpg",
  },
  {
    id: "stats-2",
    title: "Food",
    value: "32+",
    icon: "/icons/doctor.svg",
    image: "/assets/food.jpg",
  },
  {
    id: "stats-3",
    title: "Accomodation",
    value: "50+",
    icon: "/icons/specialist.svg",
    image: "/assets/accomodation.jpg",
  },
  {
    id: "stats-4",
    title: "Ride",
    value: "50+",
    icon: "/icons/specialist.svg",
    image: "/assets/ride.jpg",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: "assets/instagram.svg",
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: "assets/facebook.svg",
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: "assets/twitter.svg",
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: "assets/linkedin.svg",
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: "assets/airbnb.png",
  },
  {
    id: "client-2",
    logo: "assets/binance.png",
  },
  {
    id: "client-3",
    logo: "assets/coinbase.png",
  },
  {
    id: "client-4",
    logo: "assets/dropbox.png",
  },
];

export const policies = [
  {
    id: "feature-1",
    icon: "assets/Star.svg",
    title: "Information we collect ▾",
    content:
      "To provide and improve our services, AfyaConnect collects different types of information from users.",
    details:
      "<strong>WhatsApp Number:</strong> Since registration is done through WhatsApp authentication, we collect your WhatsApp phone number to verify your identity and facilitate communication between you and healthcare professionals. This number may also be used for appointment reminders, notifications, or other essential service-related messages. </br></br><strong>Full Name:</strong> We collect your name to personalize your experience and allow doctors to address you properly during consultations. </br></br><strong>Email Address:</strong> While not mandatory, users may choose to provide an email address for additional communication, password recovery, or service updates.  </br></br><strong>Date of Birth:</strong> To ensure age-appropriate consultations and comply with medical service regulations.  </br></br><strong>Location:</strong> Users may voluntarily provide location details to help doctors give region-specific medical advice or recommendations. <br/><br/><strong>Medical Images & Documents:</strong/> Users can upload medical images (such as X-rays, lab results, or prescriptions) for analysis by healthcare professionals. These documents are stored securely and used only for consultation purposes.",
  },
  {
    id: "feature-2",
    icon: "assets/Shield.svg",
    title: "Your privacy control ▾",
    content:
      "At AfyaConnect, we believe that you should have full control over your personal information.",
    details:
      "We prioritize giving you control over your personal information. We understand that privacy preferences vary from user to user, which is why we provide multiple options and privacy settings and options to help you manage how your data is collected, used, and shared. You can choose what information to provide, update your details at any time, and adjust your communication preferences. Additionally, we ensure that you can request access to, modify, or delete your personal data as needed. Our goal is to give you transparency and flexibility while maintaining the security of your information.",
  },
  {
    id: "feature-3",
    icon: "assets/Send.svg",
    title: "Your privacy protection ▾",
    content:
      "At AfyaConnect, safeguarding your personal information is our top priority.",
    details:
      "We implement strict security measures and data protection protocols to ensure that your information remains confidential, secure, and protected from unauthorized access. Below are the key ways we protect your privacy: <br/><strong>Secure Data Encryption:</strong> We use end-to-end encryption to protect sensitive data, such as medical images, consultation details, and personal information, from unauthorized access. <br/>Any communication between you and a doctor, whether via chat or video call, is encrypted to maintain confidentiality. <br/>Stored data, including medical records and user details, is secured using advanced encryption algorithms to prevent data breaches. <br/><br/><strong>Strict Access Controls:</strong/> Only authorized healthcare professionals can access your shared medical data, and even they have limited access based on their role and your consent. <br/>We implement role-based access control (RBAC) to ensure that only verified doctors can view specific user-provided medical information. <br/>You have control over what information is shared and can restrict access to sensitive data at any time. <br/><br/><strong>Secure Authentication & User Verification:</strong> Registration and login are conducted through WhatsApp authentication, ensuring a secure and convenient way to verify your identity. <br/>We use multi-layer authentication techniques to prevent unauthorized logins or account takeovers. <br/>In case of suspicious activity, users may be required to verify their identity to prevent fraud or misuse. <br/><br/><strong>Data Anonymization & Confidentiality:</strong> When data is used for research, analytics, or service improvements, it is anonymized to ensure that no personally identifiable information (PII) is exposed. <br/>Your consultation history, medical records, and shared documents are kept strictly confidential and are not accessible to unauthorized parties. <br/>AfyaConnect employees and third-party service providers are bound by strict confidentiality agreements to protect user privacy. <br/><br/><strong>Protection Against Cyber Threats:</strong> We regularly monitor our platform for cyber threats, unauthorized access attempts, and potential vulnerabilities to ensure continuous protection. <br/>Our security systems automatically detect and block suspicious activities, phishing attempts, and hacking attempts.<br/>Regular security audits and updates help keep our platform resilient against evolving cybersecurity threats.",
  },
];
