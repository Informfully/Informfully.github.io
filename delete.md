---
title: Account & Data Deletion Request
editLink: false
lastUpdated: false
---

# Account & Data Deletion Request

At **Informfully**, we value your privacy. If you no longer wish to use our application, you can permanently delete your account and all associated data instantly below.

### What data will be deleted?
* Your user profile information (Name, Email, Account credentials)
* Your app preferences and usage history
* Any analytics and tracking data tied specifically to your user ID

<div class="delete-form-container">
  <h3>Confirm Account Deletion</h3>
  <p>Please enter your credentials to verify your identity and permanently delete your account.</p>

  <form v-if="!formSubmitted" @submit.prevent="handleDelete">
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

    <button type="submit" class="vp-delete-btn">Permanently Delete My Account</button>
  </form>

  <div v-if="message" :class="['message', messageType]">
    {{ message }}
  </div>
</div>

<hr>

<p><em>Note: This action is permanent, takes effect immediately, and cannot be undone. All profile information, app preferences, and tracking metrics will be wiped or fully anonymized.</em></p>

<script setup>
import { ref } from 'vue'

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
.delete-form-container {
  max-width: 500px;
  margin: 24px 0;
  padding: 24px;
  background-color: var(--vp-c-bg-soft, #f6f6f7);
  border-radius: 12px;
  border: 1px solid var(--vp-c-border, #e2e2e3);
}
.delete-form-container h3 {
  margin-top: 0;
  margin-bottom: 8px;
}
.delete-form-container p {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 14px;
  color: var(--vp-c-text-2, #6c6c76);
}
.form-group {
  margin-bottom: 16px;
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
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border, #e2e2e3);
  background-color: var(--vp-c-bg, #ffffff);
  color: var(--vp-c-text-1, #3c3c43);
  font-size: 15px;
  box-sizing: border-box;
}
.form-group input:focus {
  outline: none;
  border-color: var(--vp-c-brand, #3eaf7c);
}
.vp-delete-btn {
  display: inline-block;
  background-color: var(--vp-c-danger-1, #ea4335);
  color: #ffffff !important;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.2s ease;
  margin-top: 8px;
}
.vp-delete-btn:hover {
  background-color: var(--vp-c-danger-2, #c53023);
}
.message {
  margin-top: 16px;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
}
.message.error {
  background-color: rgba(234, 67, 53, 0.1);
  color: var(--vp-c-danger-1, #ea4335);
  border: 1px solid rgba(234, 67, 53, 0.2);
}
.message.info {
  background-color: rgba(62, 175, 124, 0.1);
  color: var(--vp-c-brand, #3eaf7c);
  border: 1px solid rgba(62, 175, 124, 0.2);
}
.message.success {
  background-color: rgba(62, 175, 124, 0.15);
  color: #2e7d32;
  border: 1px solid rgba(62, 175, 124, 0.3);
}
</style>
