// slider.js - Slider Challenge Module
// Author: Deep Dey
// Purpose: Human verification via draggable slider

function sliderChallenge(container, onSuccess) {
  // Create elements
  const wrapper = document.createElement('div');
  wrapper.className = 'slider-wrapper';
  const track = document.createElement('div');
  track.className = 'slider-track';
  const handle = document.createElement('div');
  handle.className = 'slider-handle';
  const label = document.createElement('div');
  label.className = 'slider-label';
  label.textContent = 'Slide to verify';

  wrapper.appendChild(track);
  wrapper.appendChild(handle);
  wrapper.appendChild(label);
  container.appendChild(wrapper);

  // Slider state
  let isDragging = false;
  let startX = 0;

  handle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - handle.offsetLeft;
    label.textContent = 'Sliding…';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    let x = e.clientX - startX;
    x = Math.max(0, Math.min(x, track.offsetWidth - handle.offsetWidth));
    handle.style.left = x + 'px';
    if (x >= track.offsetWidth - handle.offsetWidth) {
      isDragging = false;
      label.textContent = 'Verified ✓';
      onSuccess();
    }
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    if (handle.offsetLeft < track.offsetWidth - handle.offsetWidth) {
      handle.style.left = '0px';
      label.textContent = 'Slide to verify';
    }
    isDragging = false;
  });

  // Touch events for mobile
  handle.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX - handle.offsetLeft;
    label.textContent = 'Sliding…';
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    let x = e.touches[0].clientX - startX;
    x = Math.max(0, Math.min(x, track.offsetWidth - handle.offsetWidth));
    handle.style.left = x + 'px';
    if (x >= track.offsetWidth - handle.offsetWidth) {
      isDragging = false;
      label.textContent = 'Verified ✓';
      onSuccess();
    }
  });

  document.addEventListener('touchend', () => {
    if (!isDragging) return;
    if (handle.offsetLeft < track.offsetWidth - handle.offsetWidth) {
      handle.style.left = '0px';
      label.textContent = 'Slide to verify';
    }
    isDragging = false;
  });
}
