# Portfolio repository secret audit

Audit date: 2026-09-13. Read-only examination of the six GitHub repositories supplied by the user. No credentials were tested, changed, rotated, or printed. No remote files or Git history were modified.

SAFE means no suspected real secret was identified within the inspected scope, not a guarantee that a repository or deployment has no security vulnerabilities. REVIEW identifies a committed credential-related value whose deployment use needs confirmation. EXPOSED would identify a probable real secret committed to the repository. No repository was classified EXPOSED.

| Repository | Result | Default-branch commit scanned | Reachable commits | Unique file blobs |
| --- | --- | --- | ---: | ---: |
| applyflow | REVIEW | `d91201fdb0cd833f772827df56d28b176a5e2c62` | 2 | 94 |
| tracebit | SAFE | `99c3d609d43f91fa402a2b7b3ca5953ff73b7ad4` | 4 | 82 |
| clicklens | SAFE | `e9660db8d2ac05267ffc12e14f52264a2838b622` | 2 | 68 |
| cloudrop | SAFE | `63bc59d1050560c8935d86f9ab367145988e6f01` | 9 | 107 |
| evolv | SAFE | `70dee99dacc2f2eeac472845f17ad5aa685dfe88` | 5 | 112 |
| portfolio | SAFE | `5357becedbc1f481401866138e7157a773db37c9` | 8 | 105 |

## ApplyFlow: REVIEW

**Committed fallback administrator password hash.**

- Definition: [`prisma/seed.mjs:6`](https://github.com/Matth-eo/applyflow/blob/d91201fdb0cd833f772827df56d28b176a5e2c62/prisma/seed.mjs#L6).
- Use: [`prisma/seed.mjs:21`](https://github.com/Matth-eo/applyflow/blob/d91201fdb0cd833f772827df56d28b176a5e2c62/prisma/seed.mjs#L21).
- Introduced in commit [`328a1729fbec41fec6932c46efa5ad071c9fc99a`](https://github.com/Matth-eo/applyflow/commit/328a1729fbec41fec6932c46efa5ad071c9fc99a); remains in the scanned HEAD.
- The seed creates an administrator using a fixed bcrypt hash when `ADMIN_SEED_PASSWORD` is absent. The code explicitly describes it as a demo credential. This is an intentional-looking demo fallback, rather than evidence of an accidentally committed production plaintext password, but it deserves review because a real deployment could use the same administrator credential. Repository contents do not establish whether any deployed account uses it. The hash is omitted from this report.
- Review whether this fallback has been used outside an isolated demo. No password guessing, cracking, or login attempts were performed.

Other reviewed candidates are not classified as exposures: `.github/workflows/ci.yml:19` contains the ephemeral CI PostgreSQL password; lines 29?31 configure localhost database URLs and a CI authentication secret. `src/auth.ts:9` contains a timing-equalization dummy hash; lines 20?22 still require an existing user and a valid password, so that hash is not an account credential. `.env.example` contains database placeholders and an empty authentication secret.

## Other repositories

- **Tracebit ? SAFE:** no tracked `.env*` file in reachable history. Password and session-token matches are runtime data, generated values, or test fixtures; no suspected real committed secret found.
- **Clicklens ? SAFE:** tracked `.env.example` contains database and authentication placeholders. `scripts/local-db.mjs:16` generates a local password at runtime rather than committing one. Credential-bearing URLs in `tests/unit.test.ts:26` and `:50` are validation/referrer test inputs. No suspected real secret found.
- **Cloudrop ? SAFE:** no tracked `.env*` file in reachable history. `COGNITO.md:26` uses a client-secret placeholder. `tests/auth.test.mjs:14` and `tests/expiration.test.mjs:28` use mocked test secrets, not identified live Cognito/AWS credentials. No suspected real secret found.
- **evolv ? SAFE:** tracked `.env.example` versions contain database placeholders and empty authentication-secret values. No suspected real secret found.
- **Portfolio ? SAFE:** no tracked `.env*` file in reachable history and no suspected real secret found.

## Coverage and method

Fresh non-shallow mirror clones were kept in a separate temporary audit directory, outside the portfolio source tree. All fetched refs were included (one each for ApplyFlow, Tracebit, Clicklens, evolv and Portfolio; three for Cloudrop), for 30 reachable commits total. No application code from the audited repositories was executed.

[Gitleaks](https://github.com/gitleaks/gitleaks) v8.30.1 was downloaded from its official release and checked against the release SHA-256 checksum. Each mirror was scanned with the default detector rules via an explicit external configuration, `git --log-opts="--all --full-history"`, full redaction, an empty ignore file, inline allow-comment bypass, and encoded-secret decoding enabled. All six history scans completed successfully with zero detector findings. Separate scans of all reachable commit messages also completed with zero findings.

Supplemental inspection enumerated every reachable commit tree and unique blob to check tracked `.env*` files, database URLs, API-key/secret/password assignments, AWS key patterns, private-key markers, password hashes, HTTP credential URLs, credential-container filenames, and `NEXT_PUBLIC_*` identifiers. Candidate locations were manually reviewed with string values redacted. No `NEXT_PUBLIC_*` identifier was found in the fetched file contents; therefore no unsafe value with that prefix was identified. This does not establish that secrets cannot reach a client through some other application path.

History coverage includes deleted files still reachable through fetched commits. It cannot include unreachable/force-pushed-away history, unadvertised or inaccessible refs, server reflogs, other forks, GitHub Actions logs/artifacts, deployment environment settings, or untracked local files. Images and other binary assets were not visually inspected/OCRed for credentials. Secret scanning is pattern-based and is not a complete application security audit.

## Portfolio changes and validation

Added direct GitHub links to the existing selected-project cards, retained their existing project-detail actions, and removed stale source-access notices for the four supplied selected-project repositories. Added evolv and Portfolio using the existing compact cards under Earlier explorations because neither previously had a card. Existing design styles were retained.

TypeScript (`npx tsc --noEmit`), targeted ESLint, and `git diff --check` completed successfully. No secrets or audit scanner output were added to source code.
