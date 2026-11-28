# Contributing

1. Branch from `main`.
2. Keep one change per pull request.
3. Run the loop before opening it:

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

`npm run verify` runs that loop when it is available.

Do not vendor this package into the Postmark repo. Depend on the published version. Do not import Postmark template code from here.
