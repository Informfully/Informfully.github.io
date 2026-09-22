---
title: Account & Data Deletion
editLink: false
lastUpdated: false
---

# Account & Data Deletion

At **Informfully**, we respect your right to control your personal data. You can delete your account and request removal of your data at any time, directly within the mobile app — no separate web request is needed.

## How to delete your account

Open the app, go to **Settings**, and tap **Delete Account**. You'll be asked to confirm with your own **username and password**. This takes effect immediately:

- Your active session is signed out right away, and any future sign-in attempt is blocked.
- Your account and all associated data are deactivated and flagged for removal across every behavioural data collection.
- If you've already deleted the app, you can reinstall it and sign in to delete your account and data the same way.

Data flagged this way is retained only in de-identified form for the research record of the study you participated in, for the retention period described in that study's consent materials and privacy notice, after which it is anonymized or erased.

---

## For researchers: the deletion endpoint

The in-app deletion flow above is backed by an endpoint exposed by the Meteor backend: `POST /api/delete-account`, authenticated by the participant's own **username and password** (not email) and restricted by CORS to the landing page's origin.

- It's a **soft delete** — the account and all of that participant's data across every
  behavioural collection are stamped with a `removedAt` timestamp. Nothing is physically
  removed from the database at this point.
- The participant's active app session is force-logged-out, and any future sign-in attempt is
  blocked with a distinct `410` error (`"This account has been deleted."`), separate from the
  generic blocked-account error.

**Implication for researchers:** a participant who deletes their account this way still appears
in your experiment's data — via the Researcher API, the Data Explorer, or a full export — with
`removedAt` set on their records. Treat `removedAt` as "deactivated," not "absent": exports do
not filter these participants out automatically, so account for this field in your own analysis
if you need to exclude them.
