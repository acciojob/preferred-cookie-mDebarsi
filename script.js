//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
  // Retrieve preferences from cookies on page load
  const fontSizeCookie = getCookie('fontSize');
  const fontColorCookie = getCookie('fontColor');

  if (fontSizeCookie) {
    document.getElementById('fontSize').value = fontSizeCookie;
    applyFontSize(fontSizeCookie);
  }

  if (fontColorCookie) {
    document.getElementById('fontColor').value = fontColorCookie;
    applyFontColor(fontColorCookie);
  }
});

function applyPreferences() {
  const fontSize = document.getElementById('fontSize').value;
  const fontColor = document.getElementById('fontColor').value;

  // Set preferences as cookies
  setCookie('fontSize', fontSize, 365);
  setCookie('fontColor', fontColor, 365);

  // Apply preferences
  applyFontSize(fontSize);
  applyFontColor(fontColor);
}

function applyFontSize(fontSize) {
  document.body.style.fontSize = `${fontSize}px`;
}

function applyFontColor(fontColor) {
  document.body.style.color = fontColor;
}

function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

function getCookie(name) {
  const cookieName = `${name}=`;
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }

  return '';
}
