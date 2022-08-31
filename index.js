import { Response } from "./js/response.js";
import { refs } from "./js/refs.js";
import { renderCardUser } from "./js/render.js";
import { PostsResponse } from "./js/response.js";
const res = new Response({});

function onShowMoreCard() {
  res.getUser().then((data) => {
    const { total_pages, users, page } = data;
    if (total_pages === page) {
      return onShowBtn();
    }
    users.forEach((item) => {
      refs.title.insertAdjacentHTML("beforeend", renderCardUser(item));
    });
  });
}

function onShowBtn() {
  refs.showMoreBtn.classList.add("btn-remove");
}

function onSubmitForm(event) {
  event.preventDefault();
  const resPost = new PostsResponse(event.currentTarget);
  resPost.postUser().then((data) => {
    console.log(data);
  });
}

function validateFormSubmit(event) {
  const { user, email, tel, cheked, file } = event.currentTarget;
  console.log();
  if (
    user.value !== "" &&
    email.value !== "" &&
    tel.value !== "" &&
    cheked.value !== "" &&
    file.files.length !== 0
  ) {
    refs.btnSubmit.disabled = false;
    refs.btnSubmit.classList.remove("btn--disebled");
    refs.uploadFoto.placeholder = `${file.files[0].name}`;
    refs.uploadFoto.classList.add("succsses__load");
  }
}

const onClickField = () => {
  refs.fileField.click();
};

// listener
refs.showMoreBtn.addEventListener("click", onShowMoreCard);
refs.form.addEventListener("submit", onSubmitForm);
refs.form.addEventListener("change", validateFormSubmit);
refs.uploadFoto.addEventListener("click", onClickField);
