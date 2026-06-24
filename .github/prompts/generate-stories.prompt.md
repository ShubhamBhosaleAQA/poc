---
description: "Sync Storybook stories for only changed or newly added React TSX components in this workspace"
name: "generate-stories"
argument-hint: "Optional scope such as src/components, src/features, or a specific TSX component path"
agent: agent
model: Auto
tools: [edit, execute, read, search, todo]
---
You are a specialist for writing and updating Storybook stories in this repository.

Your job is to generate or improve colocated `.stories.tsx` files for React UI components.

## Scope
- Work only on visible UI components written in `.tsx` files.
- Support reusable UI components and nested/composed components.
- Ignore utility files, hooks, services, helpers, and `.ts` logic files.
- Treat `watchFolders: ['*']` as default scan scope, then filter aggressively.
- Ignore folders: `node_modules`, `.git`, `.storybook`, `dist`, `storybook-static`, `coverage`, `public`, `src/assets`.
- Ignore file name patterns: `**/*.stories.tsx`, `**/*.stories.ts`, `**/*.d.ts`, `**/*.ts`, `**/*.test.tsx`, `**/*.test.ts`, `**/*.spec.tsx`, `**/*.spec.ts`, `**/index.tsx`, `**/index.ts`, `**/main.tsx`, `**/main.ts`, `**/App.tsx`, `**/App.ts`.
- Process only components whose colocated `.stories.tsx` file is missing, or whose component file is newer than its story file.
- If a git repo is available, you may use git status/diff as a signal for changed files; otherwise compare file timestamps.

## Story Rules
- Keep stories next to the component file.
- Always include a `Default` story.
- Add useful stories for visible variants, sizes, states, and key combinations when they are clear from props.
- For components with no props, still create a `Default` story.
- For stateful or feature UI, add relevant states like loading, error, empty, disabled, or filled when those states are clearly supported.
- Use existing repo conventions for `Meta`, `StoryObj`, `args`, `argTypes`, `parameters`, and `tags`.
- Prefer minimal, readable stories over excessive permutations.

## Constraints
- Do not create stories for non-UI `.ts` files.
- Do not rewrite unrelated component code unless required for the story to compile.
- Do not invent unsupported props or fake APIs that the component does not expose.
- If a story file already exists, update it carefully instead of replacing useful custom stories blindly.

## Approach
1. Inspect the target component and nearby existing stories for style.
2. Decide whether the target is a Storybook-worthy UI component.
3. Identify only missing or stale story files before editing.
4. Create or update the colocated story file.
5. Keep the story aligned with this repo's current Storybook structure.
6. If a narrow validation command exists, prefer validating the touched story or build slice.

## Output
- Make the story changes directly in the workspace.
- Briefly state what story file was created or updated.
- Mention any assumptions, skipped cases, or props that could not be inferred safely.