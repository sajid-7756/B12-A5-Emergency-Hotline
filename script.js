//Heartcount incresses when heart icon click
function heartCount() {
  let heartCount = document.getElementById("heart-count").innerText;
  const heartIcons = document.querySelectorAll(".heart-icon");

  for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
      heartCount++;
      document.getElementById("heart-count").innerText = heartCount;
    });
  }
}
heartCount();

//call btn function (alert and show the subtitle and number discress coin add to the history section)
function callButton() {
  const callBtns = document.querySelectorAll(".btn-call");
  const historyContainer = document.getElementById("history-container");

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

      const coinCount = document.getElementById("coin-count").innerText;
      function coinCountFunc() {
        let count = 20;
        document.getElementById("coin-count").innerText = coinCount - count;
      }

      if (coinCount >= 20) {
        callFunc();
        coinCountFunc();
        history(serviceTitle, serviceNumber);
        clearHistory(historyContainer);
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
      }
    });
  }
}
callButton();

function clearHistory(historyContainer) {
  const clearBtn = document.getElementById("clear-history");
  clearBtn.addEventListener("click", function () {
    historyContainer.innerHTML = "";
  });
}

function copyButton() {
  const copyButtons = document.querySelectorAll(".copy-btn");
  let count = 0;
  for (const copyBtn of copyButtons) {
    const parent = copyBtn.parentElement.parentElement;
    const serviceNumber = parent.querySelector(".service-number").innerText;
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(serviceNumber).then(function () {
        alert(`নম্বর কপি হয়েছে ${serviceNumber}`);
      });
      count++;
      document.getElementById("copyCount").innerText = count;
    });
  }
}
copyButton();
