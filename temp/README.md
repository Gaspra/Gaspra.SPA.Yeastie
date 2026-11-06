# Temporary Staging Folder

This directory (`temp/`) is a pre-configured staging area at the root of the repository. It serves as a landing zone for raw files (such as documentation, specifications, data samples, or reference architectures) waiting to be analysed, contextualised, and ingested into the project context library.

## Instructions for Agents

When a user requests to **contextualise a file** (or ingest/process new context) without specifying an explicit path, or points to files placed here:

1. **Locate and Read**:
   - Inspect this `temp/` directory for the target file(s).
   - Read the file content completely and perform an in-depth analysis.

2. **Analyse and Formulate Meta Commentary**:
   - Do **not** merely move or copy the file without analysis.
   - Formulate a comprehensive **meta commentary**:
     - Identify core purpose, key domain concepts, architectural patterns, constraints, and dependencies.
     - Document how specific agent roles (e.g., Developer, Project Manager, Product Owner) should utilize this context during project planning and implementation.

3. **Relocate to Context Library**:
   - Move the file to its permanent location within `.agents/context/` (or an appropriate logical subfolder inside `.agents/context/`). Preserve directory structures if an entire folder is being ingested.

4. **Update Context Library and Summary Records**:
   - Update `.agents/context/context-library.md` with:
     - The repository-relative path (e.g., `[.agents/context/example.md](.agents/context/example.md)`).
     - Type (`File` or `Folder`).
     - A rich summary incorporating the meta commentary (purpose, key points, constraints).
     - Specific `Use when` triggers detailing which roles and tasks require this context.
   - For extensive, dense, or multi-faceted documents, create a companion meta-commentary summary file (e.g., `.agents/context/<name>.summary.md`) in `.agents/context/` and index both in the library.

5. **Cleanup**:
   - Delete the processed file from this `temp/` folder immediately after successful relocation, analysis, and indexing.
   - **Never delete or modify this `README.md` instruction file.**
   - Ensure `temp/` remains clean and empty of transient files.

## Git Ignore Policy

All files placed in this folder (except this `README.md`) are ignored by version control via `.gitignore` and must never be committed to the repository.
