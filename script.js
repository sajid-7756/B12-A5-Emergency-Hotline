function heartCount() {
  let heartCount = parseInt(document.getElementById("heart-count").innerText);
  const heartIcons = document.querySelectorAll(".heart-icon");

  for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
      heartCount++;
      document.getElementById("heart-count").innerText = heartCount;
    });
  }
}
heartCount();

function callButton() {
  const callBtns = document.querySelectorAll(".btn-call");

  for (const callBtn of callBtns) {
    callBtn.addEventListener("click", function () {
      const parent = callBtn.parentElement.parentElement;
      const serviceTitle = parent.querySelector(".service-title").innerText;
      const serviceSubTitle =
        parent.querySelector(".service-subtitle").innerText;
      const serviceNumber = parent.querySelector(".service-number").innerText;
      function callFunc() {
        alert(`📞 Calling ${serviceSubTitle} ${serviceNumber}...`);
      }

      const coinCount = parseInt(
        document.getElementById("coin-count").innerText
      );

      function coinCountFunc() {
        let count = 20;
        document.getElementById("coin-count").innerText = coinCount - count;
      }

      if (coinCount >= 20) {
        callFunc();
        coinCountFunc();
      } else {
        alert("❌ আপনার পর্যাপ্ত কয়েন নেই। কল করতে কমপক্ষে ২০ টি কয়েন লাগবে।");
      }

      function history(serviceTitle, serviceNumber) {
        const currentTime = new Date().toLocaleTimeString();
        const historyContainer = document.getElementById("history-container");

        const newHistory = document.createElement("div");
        newHistory.classList.add(
          "history",
          "flex",
          "justify-between",
          "items-center",
          "p-5",
          "bg-gray-100",
          "rounded-md"
        );

        newHistory.innerHTML = `
            <div>
              <h3 id="history-title" class="font-semibold">${serviceTitle}</h3>
              <p class="text-gray-500">${serviceNumber}</p>
            </div>
            <div>
              <p>${currentTime}</p>
            </div>
        `;
        historyContainer.appendChild(newHistory);
        console.log(serviceTitle, serviceNumber, newHistory, historyContainer);
      }
      history(serviceTitle, serviceNumber);
    });
  }
  const historyContainer = document.getElementById("history-container");
  clearHistory(historyContainer);
}

function copyButton() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  let count = 0;
  for (const copyBtn of copyButtons) {
    copyBtn.addEventListener("click", function () {
      count++;
      document.getElementById("copyCount").innerText = count;
    });
  }
}
copyButton();

function clearHistory(historyContainer) {
  const clearBtn = document.getElementById("clear-history");
  clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
  });
}

callButton();
