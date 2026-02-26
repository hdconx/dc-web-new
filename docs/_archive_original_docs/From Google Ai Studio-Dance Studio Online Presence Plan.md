This is the **Master Planning Archive** for the Dance Connexions Digital Ecosystem. As your Data Archivist, I have filtered out all conversational filler to provide a concentrated "Source of Truth" based solely on your facts, technical requirements, and finalized decisions.

---

### 1. CORE BUSINESS FACTS
*   **Studio Identity:** 
    *   **Primary Brand:** Dance Connexions (danceconnexions.com) - Focus on partner dance and community.
    *   **Secondary Brand:** Reflections Event Space (reflectionseventspace.my) - Focus on non-dance rentals (currently in placeholder status).
*   **Location:** Bandar Sunway, Subang Jaya, Selangor, Malaysia (MBSJ Jurisdiction).
*   **History:** Established 1999 (25+ years). Heritage brand with thousands of students taught.
*   **Physical Infrastructure:**
    *   **Total Rooms:** 4 distinct rooms.
    *   **Mirrors:** Professional wall-to-wall modules, 10ft wide x 7ft high (minimal joins for technical analysis).
    *   **Floors:** Specialized AC3-grade dance flooring with rubber-mat underlay for maximum impact absorption (joint-safe).
    *   **Amenities:** Full air-conditioning, professional dimmable lighting, high-hang projectors/screens (Rooms 1 & 2), tripods, and microphones provided.
    *   **Safety:** Alcohol-free, smoke-free, "clean club" environment.
*   **Logistics:** Safe, central Sunway area. Ample free parking on weekends/evenings; RM0.50/hour during office hours.
*   **Core Services:**
    *   **Classes:** Ballroom, Standard Ballroom, Latin Ballroom, Salsa, Bachata, and various social dances.
    *   **Rentals:** Dance training, fitness practice, practice parties, seminars, product launches.
*   **Digital Status:** Only exists as a Google Business Profile. No current website or automated social presence.

---

### 2. THE "PREMISES RENTAL" SECTION
*   **Current State:** A single-page rental draft exists but is deemed incompetent/failed due to experimental AI agent errors.
*   **Room Inventory Definitions (Finalized):**
    *   **Room 1 (Grand Ballroom):** ~1,200 sqft, professional timber floor. Best for large classes/parties.
    *   **Room 2 (Latin Suite):** ~800 sqft, mood lighting. Best for social latin/mid-sized groups.
    *   **Room 3 (Zen Studio):** ~600 sqft, acoustic padding. Best for Yoga/Pilates/Private lessons.
    *   **Room 4 (Solo Sanctuary):** ~400 sqft. Dedicated to affordable personal practice.
*   **Rental Logic & Pricing (Placeholders):**
    *   **Solo Practice:** RM30/hour.
    *   **Private Teaching:** RM60/hour (Teacher + max 2 students).
    *   **Group Class/Event:** RM100/hour.
*   **Functionality Status:** 
    *   **Schema:** PostgreSQL schema defined via Prisma (Room and Booking tables).
    *   **UI Component:** "Room Card" component logic finalized (Spec-rich: Sq ft, Floor type, Audio specs).
    *   **Requirement:** A "Request Window" (Shadcn Drawer) for inquiries; no complex login required initially.
*   **Rules:** Digital "Studio Etiquette" sign-off required (No outside shoes, volume control, etc.).

---

### 3. OWNER PROFILE & CONSTRAINTS
*   **The Persona:** Technical Solo-Proprietor. Acts as the principal instructor, admin, cleaner, and manager.
*   **Interaction Preference:** "Headless" operation. Strong preference for zero-to-minimal customer interaction. The website must act as the primary filter for inquiries.
*   **Management Style:** Professional, documentation-first. Relies on AI to act as a "Digital Employee."
*   **Technical Skill Level:** Advanced. Expert with VS Code, Gemini CLI, Claude Code, Docker Desktop, and GitHub.
*   **Budget:** Zero/Low-cost "D.I.Y." approach. No hiring of external professionals; reliance on AI agents for coding and strategy.

---

### 4. TECH STACK & TOOLS
*   **Frontend/App:** Next.js 15 (App Router), TypeScript, Tailwind CSS.
*   **UI Library:** shadcn/ui (Warm-minimalist "Quiet Luxury" palette).
*   **Backend:** Node.js with PostgreSQL (Prisma ORM).
*   **Content Management:** Lightweight, file-based (JSON/Markdown/MDX) for rapid AI ingestion and easy updates.
*   **Development Environment:** 
    *   **Primary Tool:** Claude Code (CLI-driven development).
    *   **Prototyping:** V0.dev (for visual/frontend generation).
    *   **Discarded Tool:** Google Antigravity (Antigravity agents proved too unstable for this specific build).
*   **AI Protocols:** MCP (Model Context Protocol) for custom agent skills (e.g., `get_room_availability`).
*   **Deployment:** Vercel (preferred for Next.js).
*   **Knowledge Base:** NotebookLM (for master strategic documents).

---

### 5. STRATEGIC VISION
*   **The "Choice Engine" Concept:** The website is a demographic-first filter. It does not ask "What class do you want?" but "Who are you?"
*   **Target Demographics:**
    *   **Active Seniors (50-80+):** Focus on social health, joint safety, and dignity.
    *   **Social Adults (20-40s):** Focus on stress relief and clean social environments.
    *   **Youth/Kids:** Future-facing "Video-ready" studio for K-Pop/Modern styles.
    *   **Professional Renters:** Focus on 10ft mirrors and purpose-built comfort.
*   **The "B2B" Collaboration Model:**
    *   **Rental Model:** Flat room fee.
    *   **Commission Model:** Split revenue (e.g., 70/30 or 60/40). Studio handles admin; teacher just teaches.
*   **Marketing Angle:** Universal "By Dancers, For Dancers" persuasion. Universal slogans: "High Comfort, Affordable Luxury," "Purpose-Built Excellence."
*   **AI-Friendliness:** Extensive use of JSON-LD Schema to ensure AI search agents (Grok, ChatGPT, etc.) can accurately recommend the studio.
*   **Automation:** Context-aware WhatsApp buttons that send pre-filled messages based on the specific demographic path the user is on.