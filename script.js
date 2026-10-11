// ---------- Selections Technologies Meet: form validation + Jitsi integration ----------

const roomInput = document.getElementById('roomName');
const nameInput = document.getElementById('displayName');
const roomError = document.getElementById('roomNameError');
const nameError = document.getElementById('displayNameError');
const joinBtn = document.getElementById('joinBtn');
const joinBtnText = document.getElementById('joinBtnText');

const ROOM_PATTERN = /^[a-zA-Z0-9-]+$/;
const NAME_PATTERN = /^[a-zA-Z\s'.-]+$/;

// Strip invalid characters from the room name as the user types
// (keeps the field usable without letting Jitsi room URLs break).
roomInput.addEventListener('input', () => {
  const cleaned = roomInput.value.replace(/[^a-zA-Z0-9-]/g, '');
  if (cleaned !== roomInput.value) roomInput.value = cleaned;
  liveValidate(roomInput, roomError, validateRoom);
});

nameInput.addEventListener('input', () => liveValidate(nameInput, nameError, validateName));

// Validates on every keystroke once the user has typed something, instead of
// waiting for submit — but withholds the "required" message on an empty,
// untouched field so it doesn't flag errors before the user starts typing.
function liveValidate(input, errorEl, validatorFn) {
  const value = input.value.trim();
  if (!value) { clearError(input, errorEl); return; }
  const message = validatorFn(value);
  if (message) setError(input, errorEl, message);
  else setValid(input, errorEl);
}

function clearError(input, errorEl) {
  input.classList.remove('invalid', 'valid');
  errorEl.textContent = '';
}

function setValid(input, errorEl) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorEl.textContent = '';
}

function setError(input, errorEl, message) {
  input.classList.remove('valid');
  input.classList.add('invalid');
  errorEl.textContent = message;
}

function validateRoom(value) {
  if (!value) return 'Room name is required.';
  if (value.length < 3) return 'Room name must be at least 3 characters.';
  if (value.length > 40) return 'Room name must be under 40 characters.';
  if (!ROOM_PATTERN.test(value)) return 'Only letters, numbers, and hyphens are allowed.';
  return '';
}

function validateName(value) {
  if (!value) return 'Please enter your name.';
  if (value.length < 2) return 'Name must be at least 2 characters.';
  if (value.length > 30) return 'Name must be under 30 characters.';
  if (!NAME_PATTERN.test(value)) return 'Name contains invalid characters.';
  return '';
}

joinBtn.addEventListener('click', () => {
  const room = roomInput.value.trim();
  const name = nameInput.value.trim();

  const roomMsg = validateRoom(room);
  const nameMsg = validateName(name);

  clearError(roomInput, roomError);
  clearError(nameInput, nameError);

  if (roomMsg) setError(roomInput, roomError, roomMsg); else setValid(roomInput, roomError);
  if (nameMsg) setError(nameInput, nameError, nameMsg); else setValid(nameInput, nameError);
  if (roomMsg || nameMsg) return;

  startMeeting(room, name);
});

// Allow pressing Enter in either field to submit
[roomInput, nameInput].forEach((el) => {
  el.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') joinBtn.click();
  });
});

// NOTE: We intentionally do NOT embed meet.jit.si via the iframe/External API.
// Jitsi explicitly disconnects embedded calls after 5 minutes ("embedding
// meet.jit.si is only meant for demo purposes"). Instead, we hand off to
// meet.jit.si directly (full navigation, not an iframe), which has no such
// restriction. The Selections Technologies branding lives on this landing
// page; the call itself runs on Jitsi's own site.
function startMeeting(room, name) {
  joinBtn.disabled = true;
  joinBtnText.textContent = 'Redirecting to your meeting…';

  const roomId = 'SelectionsTechMeet-' + room;
  const jitsiUrl =
    'https://meet.jit.si/' +
    encodeURIComponent(roomId) +
    '#userInfo.displayName=%22' + encodeURIComponent(name) + '%22';

  window.location.href = jitsiUrl;
}

// ---------- Hero typewriter ----------
// Types the brand name into the hero heading on load; skipped in favor of
// static text when the user has requested reduced motion.
function typewriterEffect(el, text, speed) {
  if (!el) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = text;
    return;
  }
  el.textContent = '';
  el.classList.add('typewriter-cursor');
  let i = 0;
  (function tick() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(tick, speed);
    } else {
      el.classList.remove('typewriter-cursor');
    }
  })();
}

typewriterEffect(document.getElementById('brandType'), 'Selections Technologies', 55);
