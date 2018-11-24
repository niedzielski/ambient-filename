# TypeScript ambient filenames must differ from implementation

## Installation
`npm i`

## Type check failure
`npm t`

## Execute JavaScript
`npm start`

## Workaround
Rename math.d.ts so that the stem is unique from JavaScript filenames. E.g., math.decl.d.ts.