# Certificate files

Drop certificate PDFs here so the **Education → Certifications** links open them
directly (one click, no verification code).

| File to add                        | Certification                                        |
| ---------------------------------- | --------------------------------------------------- |
| `aws-ml-engineer-associate.pdf`    | AWS Certified Machine Learning Engineer (Associate) |

The paths are wired in `src/data/certifications.ts` (`verifyUrl` field). Any
`verifyUrl` ending in `.pdf` shows a "View certificate" link; other URLs (the
Coursera `coursera.org/verify/...` ones) keep the "Verify" label and already
open the credential page directly.

**Better option if you have it:** the AWS badge on Credly has a public URL
(`https://www.credly.com/badges/<id>/public_url`) — that's one click *and*
independently verifiable. If you paste that link, use it as the `verifyUrl`
instead of the PDF and it will show as "Verify".
