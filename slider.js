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

  // structure: wrapper > track > handle + label
  track.appendChild(handle);
  wrapper.appendChild(track);
  wrapper.appendChild(label);
  container.appendChild(wrapper);

  // Slider state
  let isDragging = false;
  let startX = 0;
  let isVerified = false;

  const maxX = () => track.offsetWidth - handle.offsetWidth;

  const verifySuccess = () => {
    if (isVerified) return;
    isVerified = true;
    label.textContent = 'Verified ✓';
    handle.style.left = maxX() + 'px';
    onSuccess();
  };

  const resetSlider = () => {
    if (isVerified) return;
    handle.style.left = '0px';
    label.textContent = 'Slide to verify';
  };

  // Mouse Events
  handle.addEventListener('mousedown', (e) => {
    if (isVerified) return;
    isDragging = true;
    startX = e.clientX - handle.offsetLeft;
    label.textContent = 'Sliding…';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging || isVerified) return;
    let x = e.clientX - startX;
    x = Math.max(0, Math.min(x, maxX()));
    handle.style.left = x + 'px';
    if (x >= maxX()) verifySuccess();
  });

  document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    if (!isVerified) resetSlider();
  });

  // Touch Events
  handle.addEventListener('touchstart', (e) => {
    if (isVerified) return;
    isDragging = true;
    startX = e.touches[0].clientX - handle.offsetLeft;
    label.textContent = 'Sliding…';
  });

  document.addEventListener('touchmove', (e) => {
    if (!isDragging || isVerified) return;
    let x = e.touches[0].clientX - startX;
    x = Math.max(0, Math.min(x, maxX()));
    handle.style.left = x + 'px';
    if (x >= maxX()) verifySuccess();
  });

  document.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    if (!isVerified) resetSlider();
  });
}
