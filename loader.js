function createHTml(count) {
  return `
    <div class="percentage">${count}%</div>
    <div class="wrapper">
      <div class="loader" style="width: ${count}%"></div>
    </div>
    `;
}

function closer(count, divRoot) {
  if (count >= 89) return;
  count += 1;
  const html = createHTml(count);
  divRoot.innerHTML = html;
  setTimeout(() => {
    closer(count, divRoot);
  }, 90);
}

function createTask() {
  let count = 0;

  const divRoot = document.createElement("div");
  divRoot.classList.add("root");
  document.body.insertAdjacentElement("afterbegin", divRoot);

  closer(count, divRoot);
}

createTask();
