# @arukenofu/eslint-config

ESLint config for Vue 3 + TypeScript projects with opinionated rules.

## Features

- Vue 3 + TypeScript support
- Prettier integration (skip formatting conflicts)
- Import sorting with `eslint-plugin-import`
- Stylistic rules with `@stylistic/eslint-plugin`
- Tab indentation
- Semicolons required
- Interface naming with `I` prefix
- Enums forbidden (use union types or const objects)

## Installation

```bash
npm install @arukenofu/eslint-config eslint -D
```

## Usage

Create `eslint.config.js` in your project root:

```js
import config from '@arukenofu/eslint-config'

export default config
```

### With custom options

```js
import { createConfig } from '@arukenofu/eslint-config'

export default createConfig({
  ignores: ['**/generated/**'],
  files: ['**/*.{vue,ts,tsx}'],
})
```

### Extend with your own rules

```js
import { createConfig } from '@arukenofu/eslint-config'

export default [
  ...createConfig(),
  {
    rules: {
      // your additional rules
    },
  },
]
```

## Peer Dependencies

- `eslint` ^9.0.0

## License

MIT
