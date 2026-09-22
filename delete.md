---
title: Account & Data Deletion Request
editLink: false
lastUpdated: false
---

# Account & Data Deletion Request

At **Informfully**, we value your privacy. If you no longer wish to use our application and want your account and associated data permanently deleted, you can submit a request below.

### What data will be deleted?
* Your user profile information (Name, Email, Account credentials)
* Your app preferences and usage history
* Any analytics data tied specifically to your user ID

### How to request deletion
Please click the button below to email our support team. Please send the email using the **same email address** associated with your Informfully account so we can verify ownership.

<a href="mailto:info@informfully.ch?subject=Informfully%20Account%20Deletion%20Request" class="vp-delete-btn">
    Request Data Deletion via Email
</a>

---

*Note: Once processed, this action is permanent and cannot be undone. Deletion requests are typically fulfilled within 7 business days.*

---

## For researchers: the self-service deletion endpoint

Alongside the email-request process above, the Meteor backend also exposes an instant,
self-service deletion endpoint: `POST /api/delete-account`, authenticated by the participant's
own **username and password** (not email) and restricted by CORS to the landing page's origin.

Unlike the manual, support-fulfilled request above, this endpoint takes effect immediately:

- It's a **soft delete** — the account and all of that participant's data across every
  behavioural collection are stamped with a `removedAt` timestamp. Nothing is physically
  removed from the database.
- The participant's active app session is force-logged-out, and any future sign-in attempt is
  blocked with a distinct `410` error (`"This account has been deleted."`), separate from the
  generic blocked-account error.

**Implication for researchers:** a participant who deletes their account this way still appears
in your experiment's data — via the Researcher API, the Data Explorer, or a full export — with
`removedAt` set on their records. Treat `removedAt` as "deactivated," not "absent": exports do
not filter these participants out automatically, so account for this field in your own analysis
if you need to exclude them.

<style scoped>
.vp-delete-btn {
  display: inline-block;
  background-color: var(--vp-c-danger-1, #ea4335);
  color: #ffffff !important;
  padding: 12px 24px;
  text-decoration: none !important;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 16px;
  transition: background-color 0.2s ease;
}
.vp-delete-btn:hover {
  background-color: var(--vp-c-danger-2, #c53023);
  text-decoration: none !important;
}
</style>
