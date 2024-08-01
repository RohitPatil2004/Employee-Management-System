const sessions = new Map(); // In-memory store for session tokens

// Store a session token
function storeSession(userId, token) {
  sessions.set(token, userId);
}

// Retrieve a session userId
function getSession(token) {
  return sessions.get(token);
}

// Remove a session token
function removeSession(token) {
  sessions.delete(token);
}

module.exports = { storeSession, getSession, removeSession };
