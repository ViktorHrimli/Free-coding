export function renderCardUser(imev) {
  console.log(imev);
  const { name, email, phone, position, photo } = imev;
  return ` <li class="ithem__card">
              <img
                class="card"
                src="${photo}"
                alt="${name}"
              />

              <p class="text__card stewart--text">
                ${name}
              </p>

              <p class="text__card stewart--text">
               ${position} ${email}
                <br />
                ${phone}
              </p>
            </li>`;
}
