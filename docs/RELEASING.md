# Releasing

Publishing is automatic.

1. Bump `version` in `package.json` on the pull request.
2. Merge to `main`.
3. `.github/workflows/npm-publish.yml` typechecks, builds, tests, creates `v<version>` against `main`, and publishes to GitHub Packages.

If that tag or version already exists, the step is skipped. A manual run can pack only by setting `dry_run`.

The package name must stay `@llazyemail/simple-tags`. The registry is `https://npm.pkg.github.com`.
