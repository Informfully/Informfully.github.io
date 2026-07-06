---
title: Account & Data Deletion
editLink: false
lastUpdated: false
---

# Account & Data Deletion

At **Informfully**, we respect your right to control your personal data. You can permanently delete your account and request full erasure of all associated data at any time.

<div class="delete-container">
  
  <!-- Step 1: Informational & Initial Trigger -->
  <div v-if="!showForm && !formSubmitted" class="initial-view">
    <div class="warning-header">
      <div class="warning-icon">⚠️</div>
      <h3>This action is permanent and cannot be undone</h3>
    </div>
    
    <p class="warning-details">
      Deleting your account will immediately revoke your access to the Informfully app. The following data will be permanently erased or irreversibly anonymized in compliance with GDPR guidelines:
    </p>
    
    <ul class="data-list">
      <li>Your user profile, username, email, and authentication credentials.</li>
      <li>All app preferences, layout settings, and experiment history.</li>
      <li>Your reading list, bookmark history, and favorites archives.</li>
      <li>All usage analytics, article interaction logs, and tracking metrics.</li>
    </ul>

    <button @click="showForm = true" class="action-btn initiate-btn">
      Delete My Account...
    </button>
  </div>

  <!-- Step 2: Verification Form -->
  <div v-if="showForm && !formSubmitted" class="form-view">
    <div class="form-header">
      <h3>Identity Verification</h3>
      <p>To prevent unauthorized deletions, please confirm your credentials to finalize the process.</p>
    </div>

    <form @submit.prevent="handleDelete">
      <div class="form-group">
        <label for="email">Username or Email</label>
        <input 
          type="text" 
          id="email" 
          v-model="email" 
          placeholder="Enter your email or username" 
          required 
        />
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="Enter your password" 
          required 
        />
      </div>

      <div class="btn-group">
        <button type="button" @click="showForm = false" class="action-btn cancel-btn">
          Cancel
        </button>
        <button type="submit" class="action-btn confirm-btn">
          Confirm Permanent Deletion
        </button>
      </div>
    </form>
  </div>

  <!-- Step 3: Success State -->
  <div v-if="formSubmitted" class="success-view">
    <div class="success-icon">✓</div>
    <h3>Account Successfully Deleted</h3>
    <p>{{ message }}</p>
  </div>

  <!-- In-flight or Error Feedback Messages -->
  <div v-if="message && !formSubmitted" :class="['feedback-message', messageType]">
    <span class="msg-text">{{ message }}</span>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const showForm = ref(false)
const email = ref('')
const password = ref('')
const message = ref('')
const messageType = ref('')
const formSubmitted = ref(false)

const handleDelete = async () => {
  if (!email.value || !password.value) {
    message.value = 'Please enter both email/username and password.'
    messageType.value = 'error'
    return
  }

  message.value = 'Processing deletion...'
  messageType.value = 'info'

  try {
    const response = await fetch('/api/delete-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ email: email.value, password: password.value })
    })

    const data = await response.json()

    if (response.ok && data.success) {
      message.value = 'Your account and all associated data have been permanently deleted.'
      messageType.value = 'success'
      formSubmitted.value = true
      email.value = ''
      password.value = ''
      showForm.value = false
    } else {
      message.value = data.error || 'Failed to delete account. Please check your credentials.'
      messageType.value = 'error'
    }
  } catch (err) {
    message.value = 'An error occurred. Please try again later.'
    messageType.value = 'error'
  }
}
</script>

<style scoped>
.delete-container {
  max-width: 550px;
  margin: 32px 0;
  padding: 28px;
  background-color: var(--vp-c-bg-soft, #f6f6f7);
  border-radius: 16px;
  border: 1px solid var(--vp-c-border, #e2e2e3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  font-family: var(--vp-font-family-base);
  transition: all 0.3s ease;
}

/* Warnings and Typography */
.warning-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.warning-header h3 {
  margin: 0;
  color: var(--vp-c-danger-1, #ea4335);
  font-size: 18px;
  font-weight: 700;
}
.warning-icon {
  font-size: 24px;
}
.warning-details {
  font-size: 14px;
  line-height: 1.6;
  color: var(--vp-c-text-2, #6c6c76);
  margin-bottom: 20px;
}
.data-list {
  padding-left: 20px;
  margin-bottom: 28px;
}
.data-list li {
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-1, #3c3c43);
  margin-bottom: 8px;
}

/* Form Styles */
.form-header h3 {
  margin-top: 0;
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 700;
}
.form-header p {
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 14px;
  color: var(--vp-c-text-2, #6c6c76);
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--vp-c-text-1, #3c3c43);
}
.form-group input {
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-border, #e2e2e3);
  background-color: var(--vp-c-bg, #ffffff);
  color: var(--vp-c-text-1, #3c3c43);
  font-size: 15px;
  box-sizing: border-box;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.form-group input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1, #3eaf7c);
  box-shadow: 0 0 0 3px rgba(62, 175, 124, 0.15);
}

/* Button & Actions Group */
.action-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  box-sizing: border-box;
}
.initiate-btn {
  background-color: var(--vp-c-danger-1, #ea4335);
  color: #ffffff !important;
  width: 100%;
}
.initiate-btn:hover {
  background-color: var(--vp-c-danger-2, #c53023);
  transform: translateY(-1px);
}
.btn-group {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}
.cancel-btn {
  background-color: transparent;
  border: 1px solid var(--vp-c-border, #e2e2e3);
  color: var(--vp-c-text-1, #3c3c43) !important;
  flex: 1;
}
.cancel-btn:hover {
  background-color: var(--vp-c-bg-mute, #f1f1f2);
}
.confirm-btn {
  background-color: var(--vp-c-danger-1, #ea4335);
  color: #ffffff !important;
  flex: 2;
}
.confirm-btn:hover {
  background-color: var(--vp-c-danger-2, #c53023);
  transform: translateY(-1px);
}

/* Feedback & Success states */
.feedback-message {
  margin-top: 20px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
}
.feedback-message.error {
  background-color: rgba(234, 67, 53, 0.1);
  color: var(--vp-c-danger-1, #ea4335);
  border: 1px solid rgba(234, 67, 53, 0.2);
}
.feedback-message.info {
  background-color: rgba(62, 175, 124, 0.1);
  color: var(--vp-c-brand-1, #3eaf7c);
  border: 1px solid rgba(62, 175, 124, 0.2);
}
.success-view {
  text-align: center;
  padding: 20px 0;
}
.success-icon {
  font-size: 48px;
  color: #2e7d32;
  margin-bottom: 16px;
}
.success-view h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 20px;
  color: var(--vp-c-text-1, #3c3c43);
}
.success-view p {
  color: var(--vp-c-text-2, #6c6c76);
  font-size: 15px;
  line-height: 1.5;
}
</style>
