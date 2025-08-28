const heartCountEl = document.getElementById("heartCount");

let count = 0;
const heartIcons = document.querySelectorAll(".heart-icon");

heartIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    count++;
    heartCountEl.textContent = count;
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");

  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });

  const coinDisplay = document.getElementById("coinCount");
  let coins = parseInt(coinDisplay.textContent);
  const callButtons = document.querySelectorAll(".call-btn");

  callButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".bg-white");
      const serviceName = card.querySelector("h3").textContent.trim();
      const serviceNumber = card.querySelector("p.text-2xl").textContent.trim();

      if (coins < 20) {
        alert("You don't have enough coins (20 required per call).");
        return;
      }

      coins -= 20;
      coinDisplay.textContent = coins;

      alert(`Calling ${serviceName} at ${serviceNumber}...`);

      const li = document.createElement("li");
      li.className = "flex justify-between";

      const time = new Date().toLocaleTimeString();
      li.innerHTML = `
        <span>${serviceName} (${serviceNumber})</span>
        <span class="text-gray-400">${time}</span>
      `;

      historyList.prepend(li);
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const historyList = document.getElementById("historyList");
  const clearBtn = document.getElementById("clearHistory");

  clearBtn.addEventListener("click", () => {
    historyList.innerHTML = "";
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const navCopyCount = document.getElementById("navCopyCount");

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".cardCopyBtn");
    if (!btn) return;

    const card = btn.closest(".bg-white");
    const hotlineNumber = card.querySelector("p.text-2xl").textContent.trim();

    navigator.clipboard.writeText(hotlineNumber).then(() => {
      alert(`Hotline number ${hotlineNumber} copied!`);
      
      let count = parseInt(navCopyCount.textContent);
      count += 1;
      navCopyCount.textContent = count;
    }).catch(err => {
      alert("Failed to copy number: " + err);
    });
  });
});
