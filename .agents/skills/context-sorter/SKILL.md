---
name: context-sorter
description: Ingest, analyse, index, and contextualise documents, files, and folders into the agent context library. Use when asked to contextualise a file, add, import, copy, organise, or register material in the repository for agents to use in future prompts, or when a referenced item should become project context.
---

# Context Sorter

Store reusable agent context in `.agents/context` and keep its catalogue accurate.

## Staging & Source Location

- **Temporary Staging Folder (`temp/`)**: When asked to "contextualise a file" or import context without an explicit source path, always inspect the `temp/` directory at the root of the repository first.
- **Handling Staged Files**: Files found in `temp/` must be moved to `.agents/context/` (or an appropriate subfolder) and deleted from `temp/` once processing is complete to keep the staging directory clean. Never delete or modify `temp/README.md`.
- **Handling External / Repository Files**: When material is referenced from an external path or another location in the project, copy it into `.agents/context/` without deleting the source unless explicitly requested.

## Workflow

1. **Locate and Confirm Material**:
   - Check `temp/` for staged files, or locate the specified source material.
   - Confirm that the requested material is intended as context for agents. Do not use this skill for application source code, generated build outputs, or ordinary project files unless explicitly requested as agent context.
2. **Review Context Library**:
   - Read `.agents/context/context-library.md` before making changes. Check existing context files and the library index for related content, potential naming conflicts, or complementary material.
3. **Deep Analysis & Meta Commentary**:
   - Thoroughly read and analyse the material. Do not merely copy or move files without extracting semantic meaning.
   - Formulate a comprehensive **meta commentary**:
     - Core purpose and architectural, functional, or domain significance.
     - Key concepts, constraints, patterns, data models, or terminology.
     - Role-specific guidance: explain how Developers, Project Managers, and Product Owners should leverage this information.
4. **Relocate or Copy into `.agents/context`**:
   - Move (if from `temp/`) or copy (if from external/other sources) each supplied file or folder into `.agents/context/`. Preserve internal directory structures for imported folders.
   - Do not overwrite existing context. If the intended destination already exists and the request does not clearly specify updating it, align with the user before proceeding.
5. **Update `.agents/context/context-library.md`**:
   - Record every file and folder under `.agents/context` except `context-library.md` and `.gitkeep`.
   - For each entry, provide:
     - The repository-relative path (e.g., `[.agents/context/spec.md](.agents/context/spec.md)`).
     - Type (`File` or `Folder`).
     - A rich, informative summary containing the meta commentary (key takeaways, constraints, structure).
     - A specific `Use when` trigger defining when and which agent roles should consult the document.
   - For dense, complex, or multi-faceted documents, create a companion meta commentary document (e.g., `.agents/context/<filename>.summary.md`) inside `.agents/context/` to provide detailed analysis, and index both in `context-library.md`.
6. **Cleanup Staging**:
   - If the material originated from `temp/`, delete the original file from `temp/` once safely relocated and indexed. Ensure `temp/README.md` is preserved.
7. **Verification**:
   - Verify that all relative paths exist, every imported item is indexed once, and no stale paths or staged files remain.

## Context library format

Use the table in `.agents/context/context-library.md`. Keep one row per indexed file or folder. For a folder, describe its scope; still index each file and nested folder separately so agents can select the smallest relevant item.

## Completion report

State what was relocated or copied, summarise the meta commentary produced, list which library entries were added or updated, and confirm that `temp/` was cleaned up.
