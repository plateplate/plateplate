# 📘 Knowledge Reflection

## Introduction  
This developer profile project represents the culmination of everything I’ve learned in this web development course—HTML, CSS, JavaScript, JSON data handling, UI frameworks, GitHub workflows, accessibility tools, and basic software architecture. This reflection explains the infrastructure and architecture of my app and highlights the development processes I used to complete the project.

---

# 🧩 Key Technical Definitions

> **Software Architecture**  
> “Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures.”  
> — *OpenAI ChatGPT (summarizing standard SE definitions)*

> **Infrastructure**  
> The complete set of tools, technologies, and services used to build, run, deploy, and maintain an application.  
> This includes HTML, CSS, JS, JSON, Bootstrap, GitHub Pages, DevTools, validators, and more.

> **RESTful API**  
> “A REST API is an architectural style for an application program interface that uses HTTP requests to access and use data.”  
> — *TechTarget*

> **Fetch API**  
> “The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.”  
> — *MDN Web Docs*

> **Agile / SCRUM**  
> “Scrum is an Agile framework used to develop and deliver complex products through iterative, incremental work cycles called sprints.”  
> — *OpenAI ChatGPT 5.1*

---

# 🏗️ Application Infrastructure (Tech Stack)

This project uses a **client-side, front-end only architecture**.

### **Languages**
- HTML5  
- CSS3  
- JavaScript (ES6)

### **Libraries & Frameworks**
- Bootstrap 5  
- Normalize.css  
- jQuery  
- Bootstrap Icons  
- Google Fonts  
- Zero-MD for rendering markdown  

### **Tooling & Hosting**
- GitHub Pages (static hosting)  
- GitHub Issues, Milestones, Version Control  
- Chrome DevTools  
- Nu HTML Validator  
- WAVE Accessibility Tool  
- Lighthouse Audit  
- AI support for scaffolding and debugging  

### **Data Layer**
- JSON files that store project and achievement information  
- Fetch API loads JSON → JS → Bootstrap card templates  

---

# 🏛️ Application Architecture

My dev profile uses a clear **separation of concerns**:

### **1. Data Layer**  
`projects.json`, `achievements.json`, and `reflection.md` store real content.

### **2. Logic Layer**  
`script.js` handles:
- Fetch calls  
- Error handling (try/catch)  
- DOM manipulation  
- Rendering project cards  
- Search/filter (optional)  

### **3. Presentation Layer**
- HTML files (index, reflection, pages/blog)  
- Bootstrap components  
- Custom CSS  

This modular architecture makes the site easy to update without rewriting entire pages.

---

# 🔄 Development Process (Agile Influence)

I structured the project following a simplified Agile mindset.

### **User Story Example**
> *As a visitor, I want to quickly browse projects so I can see what the developer has built.*

### **Issues + Milestones**
- Two issues closed (with code examples)  
- One future enhancement under **Sprint 99**  

### **Incremental Stages**
1. Build file structure  
2. Add navigation + layout  
3. Add JSON  
4. Add dynamic card rendering  
5. Add reflection system  
6. Add accessibility checks  
7. Final polish  

Each stage functioned as its own “sprint.”

---

# 🖼️ Architecture Diagram


---

# 🦾 Accessibility Review (A11y)

I used the following tools:

### ✔ **WAVE**
- Checked for ARIA roles  
- Fixed contrast issues  
- Ensured alt attributes  

### ✔ **Nu HTML Validator**
- Fixed unclosed tags  
- Ensured valid document structure  

### ✔ **Lighthouse**
- Reviewed accessibility score  
- Added semantic HTML  
- Improved navigation link clarity  

These tools help ensure the site is inclusive and accessible.

---

# 🎓 Final Takeaway (Advice to My Past Self)

If I could go back to the beginning of this course, I would say:

> **Trust the structure. Use JSON early. Don’t hard-code anything.**  
> Building with modular, reusable components from the start makes development dramatically easier and more flexible.

This class taught me not just how to build a webpage, but how to build a **system**—and that’s the real beginning of thinking like a developer.

---
