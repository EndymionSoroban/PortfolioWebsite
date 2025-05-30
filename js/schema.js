// Injects Schema.org JSON-LD structured data for SEO

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Piotr Nalewajko",
  "jobTitle": "Full Stack Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Google",
    "sameAs": "https://www.google.com"
  },
  "url": "https://endymionsoroban.github.io/",
  "image": "https://endymionsoroban.github.io/img/portrait.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/piotr-m-nalewajko/",
    "https://github.com/EndymionSoroban"
  ],
  "email": "mailto:piotr.m.nalewajko@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Warsaw",
    "addressRegion": "Mazovia",
    "addressCountry": "PL"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Your University Name"
  },
  "knowsAbout": [
    "Software Engineering",
    "Site Reliability Engineering",
    "Distributed Systems",
    "Microservices Architecture",
    "Java Programming",
    "JavaScript Development",
    "C++ Programming",
    "REST APIs",
    "Cloud Computing",
    "Database Management",
    "System Design",
    "Performance Optimization"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Piotr Nalewajko Portfolio",
  "url": "https://endymionsoroban.github.io/",
  "description": "Portfolio website of Piotr Nalewajko, Full Stack Software Engineer and Google SRE II",
  "author": {
    "@type": "Person",
    "name": "Piotr Nalewajko"
  }
};

function injectSchema(schemaObj) {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaObj, null, 2);
  document.head.appendChild(script);
}

injectSchema(personSchema);
injectSchema(websiteSchema);
