# Dance Connexions Studio Expert Skill

## Purpose

This skill transforms Claude into an expert assistant for Dance Connexions studio rental business, grounding all responses in the actual studio's comprehensive knowledge base.

## Knowledge Base Files

1. **master-info.md** (133KB) - Canonical source of truth
   - Sections A-L covering all aspects of the business
   - This is the PRIMARY reference for all studio information

2. **kb-supplemental.md** (11KB) - Updates and clarifications
   - Recent changes
   - Operational nuances
   - Temporary policies

3. **kb-management.md** (7.7KB) - Information management guide
   - How to handle updates
   - Document hierarchy
   - Update protocols

## How It Works

When you ask Claude about Dance Connexions:

1. ✅ Claude automatically activates this skill (no need to type `/command`)
2. ✅ Reads the relevant sections from master-info.md
3. ✅ Checks kb-supplemental.md for updates
4. ✅ Provides accurate, grounded answers
5. ✅ Falls back to generic industry knowledge only when needed

## Example Triggers

The skill activates when you say things like:

- "What are the pricing packages at Dance Connexions?"
- "How do I book a studio?"
- "Write marketing content for the rentals page"
- "What rooms are available?"
- "Create a social media strategy"
- "What are the studio rules?"

## Skill Features

- **Accuracy First**: Always uses actual studio documentation
- **Progressive Disclosure**: Loads only relevant sections to save context
- **Gap Identification**: Clearly states when information is missing
- **Industry Expertise**: Provides generic best practices when KB lacks details
- **Quality Control**: Built-in checklist to ensure accuracy

## Maintenance

To update the knowledge base:

1. **Quick updates**: Edit kb-supplemental.md
2. **Major changes**: Update the Word documents in `/docs`, then reconvert:
   ```bash
   cd docs
   pandoc "DANCE CONNEXIONS STUDIO RENTAL — MASTER INFORMATION RESOURCE.docx" -t markdown -o ../claude/skills/dance-studio-expert/master-info.md
   ```

## Testing

Try these queries to test the skill:

- "What's the address of Dance Connexions?"
- "How much does Room A cost?"
- "What can I use the studio for?"
- "Create a marketing plan"

Claude should provide accurate answers citing specific sections from the Master KB.
