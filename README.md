
# Cyber Remediator — AI Agent (MVI Project)

This repository contains the **Minimal Viable Integration (MVI)** for the **Cyber Remediator AI Agent**, built using:

- **Next.js** – Frontend + API routes  
- **Gemini API** – Large Language Model  
- **Vercel** – Hosting & Deployment  
- **Kestra (planned)** – Workflow automation engine  
- **Cline (planned)** – Auto-coding DevOps assistant  
- **TogetherAI (optional)** – Fallback LLM provider  

Oumi is currently excluded from MVI due to unresolved package and installation issues.

---

## Project Purpose

Cyber Remediator is an AI-driven assistant designed to:

- Detect potential breaches or security incidents  
- Suggest remediation steps  
- Implement automated fixes (planned via Kestra)  
- Serve as a hands-on DevSecOps automation tool  
- Provide human-readable explanations of security events  

---

##  Current Status (MVI Progress)

### ✔ **Step 1 — LLM Integration (Completed)**
- Chat UI implemented in Next.js  
- Backend API using `/api/chat`  
- Stable Gemini model integrated (`gemini-flash-latest`)  
- Markdown rendering enabled  
- Role mapping fixed (`user` / `model`)  
- Error handling added  
- UI tested locally and functioning  
- Ready for Vercel deployment  

###  **Step 2 — Kestra Integration (Pending)**
Kestra will be used later for:
- Password resets  
- Automated remediation tasks  
- Incident workflow execution  

Temporarily paused until Vercel deployment is validated.

###  **Step 3 — Cline Integration (Pending)**  
Will allow the system to:
- Auto-generate code  
- Apply security patches  
- Modify workflows  
- Update YAML pipelines automatically  

###  **Step 4 — TogetherAI (Optional)**  
Fallback or multi-model strategy for resilience.

###  Oumi Integration  
Skipped for now due to:
- Missing NPM packages  
- Non-functional CLI  
- Misaligned documentation  

---

##  Project Structure

```
cyber-remediator/
  pages/
    index.js          # Chat UI
    api/
      chat.js         # LLM backend API
  .env.local          # Local environment variables
  next.config.js
  package.json
  README.md
```

---

##  Environment Variables

Create a `.env.local` file:

```
GOOGLE_API_KEY=your_key_here
GEMINI_MODEL=gemini-flash-latest
```

Do **NOT** commit `.env.local` to Git.  
It is ignored via `.gitignore`.

---

##  Deployment (Vercel)

1. Push project to GitHub  
2. Import repo into Vercel  
3. Set environment variables  
4. Deploy  

---

##  Future Enhancements

- Security incident timeline viewer  
- Visual workflow dashboard  
- Kestra workflow logs in UI  
- Multi-agent routing (Investigator / Remediator / Auditor)  
- Plugin system for cloud-provider-specific fixes  
- Integration with security APIs (Shodan, VirusTotal, Breach databases)  

---

##  License
MIT License (Optional)

---

## 👨 Author
Samyak Tempwork Cell  
AI Agent — MVI Project  
