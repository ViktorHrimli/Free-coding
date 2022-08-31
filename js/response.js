// export async function getUser() {
//   const res = await fetch(
//     " https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=6"
//   );
//   const resData = await res.json();
//   return resData;
// }
// export function processingRes(page) {
//   try {
//     getUser();
//   } catch (error) {
//     console.log(error);
//   }
// }
export class Response {
  constructor() {
    this.page = 0;
  }
  async getUser() {
    try {
      this.page += 1;
      const res = await fetch(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.page}&count=6`
      );
      const resData = await res.json();
      return resData;
    } catch (error) {
      console.log(error);
    }
  }
}

export class PostsResponse {
  constructor({ user, email, tel, cheked, file }) {
    this.user = user.value;
    this.email = email.value;
    this.tel = tel.value;
    this.cheked = cheked.value;
    this.file = file.files[0];
  }

  formData = {
    name: this.user,
    email: this.email,
    phone: this.tel,
    position: this.cheked,
    photo: this.file,
  };

  options = {
    method: "POST",
    body: JSON.stringify(this.formData),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Token:
        "eyJpdiI6Ikg4aDZYTmtHNjMwYk9xckduMWkwRHc9PSIsInZhbHVlIjoiTGQ0KzFadnFZVUI5bkJidTNMeFVDMndjZjUrT2h4SCt0Mm16U1FIVkc2c0RZZUNuVXQ5QVlwemcrS293d0FNYkJka0E1d3ljamU5eDJFY21PSHlYSWc9PSIsIm1hYyI6ImYyNWJjNjhiYTI4YjhiNTZhMzhjNWNmZmVkMThhYjFmMjZmZWFlNDk4YmFhZWJjYTY1ZjBhMWY2MWY1MGUxY2MifQ==",
    },
  };
  async postUser() {
    try {
      console.log();
      const userPost = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        this.options
      );
      const dataPost = await userPost.json();
      return dataPost;
    } catch (error) {
      console.log(error);
    }
  }
}
