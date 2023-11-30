# Contributing

Work in progress

## Commit message conventions

Always prefix commit messages with the following categories

### Categories

- `breaking`: anything semver-major
- `new`: anything semver-minor
- `deps`: anything that just deps
- `readme`: anything that's only changing the readme
- `docs`: anything that changes API documentation (more than just the readme)
- `performance`: a refactor (semver-patch) that improves performance (sometimes `Perf`, be consistent with what's in the log already)
- `refactor`: no observable changes (semver-patch)
- `actions`: anything that only changes Github Actions workflows
- `tests`: anything to do with testing, that's not just updating dev deps (sometimes `Test`, but the plural is preferred)
- `lint`: anything that's solely to do with linting - config and/or code changes, eg.
- `meta`: anything to do with project infra not covered by a more specific category: random `package.json` stuff, github config files, etc
- `patch`: anything semver-patch not covered by a more specific category
