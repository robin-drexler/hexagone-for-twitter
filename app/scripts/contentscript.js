let circuitBreaker = 0;

// MutationObserver somehow didn't work 🤷
const timer = setInterval(() => {
  const path = document.querySelector("#hex-hw-shapeclip-clipconfig");
  if (path) {
    path.innerHTML = '<circle cx="50%" cy="50%" r="85"></circle>';
  }
  if (path || circuitBreaker > 1000) {
    clearInterval(timer);
  }

  circuitBreaker++;
}, 50);
