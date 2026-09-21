# Ask VUT Chatbot Plan

## Goal

Create a helpful chatbot for current and prospective VUT students. It should answer questions about registration, accommodation, sport, campus services and general VUT information using **only approved VUT sources**.

It should not invent information. When the answer is not available in its VUT knowledge base, it should say so and direct the student to the appropriate VUT office or official webpage.

## Keep the first version simple

The first version does not need student logins, bookings or live access to VUT systems. It can answer common questions such as:

- How do I register?
- What documents do I need for registration?
- Where can I find accommodation information?
- What sports are available?
- How do I contact a faculty, department or support office?
- Where are important campus facilities?

## What is needed first

Provide a small list of official VUT webpages or documents for these categories:

1. Registration and admissions.
2. Accommodation and residences.
3. Sport and recreation.
4. Faculties, departments and contact details.
5. Student support, fees, financial aid and campus services.
6. Official notices, prospectuses or FAQs.

Only use webpages that VUT permits us to use. Respect each site's terms of use and robots.txt rules; do not scrape private systems, student portals or pages requiring a login.

## Recommended approach

### 1. Collect and approve the source material

Create a source list that records each page's title, URL, category and date collected. Prefer official VUT pages and official PDF documents.

Example:

| Category | Source | URL | Checked |
| --- | --- | --- | --- |
| Registration | Registration FAQ | Official VUT URL | Date |
| Accommodation | Residence information | Official VUT URL | Date |

### 2. Convert pages into chatbot-friendly text

For each approved page:

- Extract the readable text.
- Remove menus, repeated footers and unrelated links.
- Keep its source URL and title with every piece of text.
- Split long pages into short sections, for example 300-700 words each.

Store the cleaned content in a small database or JSON files. This makes it easy to update without changing the mobile app.

### 3. Build a small retrieval service

Create a backend service rather than putting an AI key inside the mobile app.

When a student asks a question, the service should:

1. Search the VUT knowledge-base sections for the most relevant information.
2. Send only those relevant sections and the question to the language model.
3. Instruct the model to answer only from the supplied VUT text.
4. Return the answer together with the official source links.

Suggested response rule:

> Answer only from the supplied VUT material. If the material does not answer the question, say that you do not have confirmed VUT information and recommend an official VUT contact or webpage. Do not guess.

### 4. Create the mobile chat screen

Replace the current Ask VUT placeholder with:

- A chat message list.
- A text input and Send button.
- Suggested starting questions, such as "How do I register?" and "What accommodation is available?"
- A loading indicator while an answer is being prepared.
- Source links below each answer.

The mobile app sends the question to the backend. The backend, not the app, holds any API key.

### 5. Add guardrails

- Show a short notice: "Ask VUT provides information from approved VUT sources. Always confirm deadlines and requirements on the official VUT website."
- Do not collect unnecessary personal information.
- Do not give legal, medical, financial or admissions-decision advice beyond the approved information.
- For urgent safety or health matters, direct users to the appropriate emergency or VUT support contact.
- Log unanswered questions without storing personal details. Use them to identify missing information.

### 6. Test before release

Prepare 20-30 common student questions across the categories above. Check that each answer is accurate, concise, sourced and does not make up dates, costs, contacts or requirements.

## Suggested technical shape

```text
MaVuti mobile app
        |
        v
Small secure chatbot backend
        |
        +--> VUT knowledge base (approved pages and PDFs)
        |
        +--> Language model API
```

For a first prototype, the knowledge base can be a set of cleaned JSON files. Later it can move to a database with semantic search as the number of VUT sources grows.

## Next step

Send the official VUT URLs or PDFs you want included. I can review the list, identify suitable content categories, and build the first knowledge-base import process and Ask VUT chat interface.
