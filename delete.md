---
title: Account & Data Deletion
editLink: false
lastUpdated: false
---

# Account & Data Deletion

At **Informfully**, we respect your right to control your personal data. You can permanently delete your account and request full erasure of all associated data at any time.

<div id="delete-card" class="delete-card">
  <!-- Step 1: Warning & Delete Trigger -->
  <div id="step-1" class="step-panel active">
    <div class="warning-banner">
      <span class="warning-icon">⚠️</span>
      <span class="warning-text">This action is permanent and cannot be undone</span>
    </div>
    <p class="description">
      Deleting your account will immediately revoke your access to the Informfully app. Your profile, username, email, reading lists, preferences, and tracking logs will be permanently erased or irreversibly anonymized in compliance with GDPR guidelines.
    </p>
    <button id="btn-initiate" class="btn btn-danger">Delete My Account</button>
  </div>

  <!-- Step 2: Credentials Form (Hidden initially) -->
  <div id="step-2" class="step-panel">
    <h3>Confirm Identity</h3>
    <p class="description">To finalize the deletion request, please enter your credentials to verify ownership.</p>
    <form id="delete-form" onsubmit="return false;">
      <div class="form-group">
        <label for="email">Username or Email</label>
        <input type="text" id="email" placeholder="Enter your email or username" required />
        <div id="email-error" class="input-error-msg">Username or email is required.</div>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required />
        <div id="password-error" class="input-error-msg">Password is required.</div>
      </div>
      <div class="btn-group">
        <button type="button" id="btn-cancel" class="btn btn-secondary">Cancel</button>
        <button type="submit" id="btn-confirm" class="btn btn-danger">Permanently Delete</button>
      </div>
    </form>
  </div>

  <!-- Step 3: Success Screen (Hidden initially) -->
  <div id="step-3" class="step-panel">
    <div class="success-badge">
      <span class="success-checkmark">✓</span>
    </div>
    <h3>Account Deleted</h3>
    <p class="description" style="text-align: center;">
      Your account and all associated data have been successfully deleted from our records.
    </p>
  </div>

  <!-- Alert Messages -->
  <div id="status-message" class="status-message"></div>
</div>

<script>
if (typeof window !== 'undefined') {
  const initDeletionPage = () => {
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');
    const btnInitiate = document.getElementById('btn-initiate');
    const btnCancel = document.getElementById('btn-cancel');
    const btnConfirm = document.getElementById('btn-confirm');
    const deleteForm = document.getElementById('delete-form');
    const statusMsg = document.getElementById('status-message');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    if (emailInput && emailError) {
      emailInput.addEventListener('input', () => {
        if (emailInput.value.trim().length > 0) {
          emailError.style.display = 'none';
        }
      });
    }

    if (passwordInput && passwordError) {
      passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length > 0) {
          passwordError.style.display = 'none';
        }
      });
    }

    if (btnInitiate) {
      btnInitiate.addEventListener('click', () => {
        if (step1 && step2) {
          step1.classList.remove('active');
          step2.classList.add('active');
        }
      });
    }

    if (btnCancel) {
      btnCancel.addEventListener('click', () => {
        if (step2 && step1) {
          step2.classList.remove('active');
          step1.classList.add('active');
          if (emailInput) emailInput.value = '';
          if (passwordInput) passwordInput.value = '';
          if (emailError) emailError.style.display = 'none';
          if (passwordError) passwordError.style.display = 'none';
          if (btnConfirm) btnConfirm.disabled = false;
          if (statusMsg) statusMsg.style.display = 'none';
        }
      });
    }

    if (deleteForm) {
      deleteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!emailInput || !passwordInput || !statusMsg || !btnConfirm) return;

        const emailVal = emailInput.value.trim();
        const passwordVal = passwordInput.value;

        // Elegant validation check
        if (emailVal.length === 0) {
          if (emailError) emailError.style.display = 'block';
          emailInput.focus();
          return;
        }

        if (passwordVal.length === 0) {
          if (passwordError) passwordError.style.display = 'block';
          passwordInput.focus();
          return;
        }

        statusMsg.innerText = 'Deleting your account...';
        statusMsg.className = 'status-message info';
        statusMsg.style.display = 'block';
        btnConfirm.disabled = true;

        try {
          const response = await fetch('https://ddis-news.ifi.uzh.ch/api/delete-account', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({ email: emailVal, password: passwordVal })
          });

          const data = await response.json();

          if (response.ok && data.success) {
            step2.classList.remove('active');
            step3.classList.add('active');
            statusMsg.style.display = 'none';
          } else {
            statusMsg.innerText = data.error || 'Incorrect email or password. Please try again.';
            statusMsg.className = 'status-message error';
            statusMsg.style.display = 'block';
            btnConfirm.disabled = false;
          }
        } catch (err) {
          statusMsg.innerText = 'Unable to connect to the server. Please check your internet connection or try again later.';
          statusMsg.className = 'status-message error';
          statusMsg.style.display = 'block';
          btnConfirm.disabled = false;
        }
      });
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDeletionPage);
  } else {
    initDeletionPage();
  }
}
</script>

<style scoped>
.delete-card {
  max-width: 480px !important;
  margin: 30px 0 !important;
  background-color: var(--vp-c-bg-soft, #f6f6f7) !important;
  border: 1px solid var(--vp-c-border, #e2e2e3) !important;
  border-radius: 12px !important;
  padding: 30px !important;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04) !important;
  font-family: var(--vp-font-family-base) !important;
  box-sizing: border-box !important;
}

.step-panel {
  display: none !important;
}
.step-panel.active {
  display: block !important;
  animation: fadeIn 0.3s ease-out !important;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.warning-banner {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  background-color: rgba(234, 67, 53, 0.08) !important;
  border: 1px solid rgba(234, 67, 53, 0.15) !important;
  border-radius: 8px !important;
  padding: 12px 16px !important;
  margin-bottom: 20px !important;
}
.warning-icon {
  font-size: 20px !important;
}
.warning-text {
  color: var(--vp-c-danger-1, #ea4335) !important;
  font-weight: 700 !important;
  font-size: 14px !important;
}

.description {
  font-size: 14px !important;
  line-height: 1.6 !important;
  color: var(--vp-c-text-2, #6c6c76) !important;
  margin-bottom: 24px !important;
  margin-top: 0 !important;
}

.form-group {
  margin-bottom: 18px !important;
}
.form-group label {
  display: block !important;
  font-weight: 600 !important;
  margin-bottom: 8px !important;
  font-size: 13px !important;
  color: var(--vp-c-text-1, #3c3c43) !important;
}
.form-group input {
  width: 100% !important;
  padding: 10px 14px !important;
  border-radius: 6px !important;
  border: 1px solid var(--vp-c-border, #e2e2e3) !important;
  background-color: var(--vp-c-bg, #ffffff) !important;
  color: var(--vp-c-text-1, #3c3c43) !important;
  font-size: 14px !important;
  box-sizing: border-box !important;
  transition: border-color 0.2s ease !important;
}
.form-group input:focus {
  outline: none !important;
  border-color: var(--vp-c-brand-1, #3eaf7c) !important;
}

.btn {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 10px 20px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
  border-radius: 6px !important;
  cursor: pointer !important;
  border: none !important;
  transition: all 0.2s ease !important;
  width: 100% !important;
  box-sizing: border-box !important;
  text-decoration: none !important;
}
.btn-danger {
  background-color: var(--vp-c-danger-1, #ea4335) !important;
  color: #ffffff !important;
}
.btn-danger:hover {
  background-color: var(--vp-c-danger-2, #c53023) !important;
}
.btn-danger:disabled {
  opacity: 0.6 !important;
  cursor: not-allowed !important;
}

.btn-group {
  display: flex !important;
  gap: 10px !important;
  margin-top: 24px !important;
}
.btn-secondary {
  background-color: transparent !important;
  border: 1px solid var(--vp-c-border, #e2e2e3) !important;
  color: var(--vp-c-text-1, #3c3c43) !important;
}
.btn-secondary:hover {
  background-color: var(--vp-c-bg-mute, #f1f1f2) !important;
}

.success-badge {
  width: 64px !important;
  height: 64px !important;
  background-color: rgba(46, 125, 50, 0.1) !important;
  border: 2px solid #2e7d32 !important;
  border-radius: 50% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 0 auto 20px auto !important;
}
.success-checkmark {
  font-size: 32px !important;
  color: #2e7d32 !important;
  font-weight: bold !important;
  line-height: 1 !important;
}
.step-panel h3 {
  margin-top: 0 !important;
  margin-bottom: 8px !important;
  font-size: 18px !important;
  font-weight: 700 !important;
  text-align: center !important;
  color: var(--vp-c-text-1, #3c3c43) !important;
}

.status-message {
  display: none;
  margin-top: 15px !important;
  padding: 10px 14px !important;
  border-radius: 6px !important;
  font-size: 13px !important;
  font-weight: 500 !important;
}
.status-message.error {
  background-color: rgba(234, 67, 53, 0.08) !important;
  color: var(--vp-c-danger-1, #ea4335) !important;
  border: 1px solid rgba(234, 67, 53, 0.15) !important;
}
.status-message.info {
  background-color: rgba(62, 175, 124, 0.08) !important;
  color: var(--vp-c-brand-1, #3eaf7c) !important;
  border: 1px solid rgba(62, 175, 124, 0.15) !important;
}

.input-error-msg {
  display: none;
  font-size: 12px !important;
  color: var(--vp-c-danger-1, #ea4335) !important;
  margin-top: 6px !important;
  font-weight: 500 !important;
}
</style>
