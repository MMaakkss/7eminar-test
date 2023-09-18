<script setup lang="ts">
let formError = ref<boolean>(false);
let emailError = ref<boolean>(false);
let phoneError = ref<boolean>(false);

let name = ref<string>("");
let phone = ref<string>("");
let email = ref<string>("");

const submitForm = async (): Promise<void> => {
  if (phoneError.value || emailError.value) {
    return;
  }

  if (!name.value || !phone.value || !email.value) {
    formError.value = true;
    return;
  }

  const body = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };

  formRequest(body)
    .then(() => {
      resetForm();
      alert("success");
    })
    .then(() => resetErrors())
    .catch((error) => {
      resetErrors();
      alert(error.data.message);
    });
};

const resetErrors = (): void => {
  emailError.value = false;
  phoneError.value = false;
  formError.value = false;
};

const resetForm = (): void => {
  email.value = "";
  name.value = "";
  phone.value = "";
};

const formRequest = async (body: Object) => {
  return await $fetch("https://7eminar.ua/api/clients/campaign/test", {
    method: "POST",
    body: body,
  });
};

watch(email, () => {
  emailError.value = useValidate(/^\S+@\S+\.\S+$/, email.value);
});

watch(phone, () => {
  phoneError.value = useValidate(
      /^[0-9]{10}$/,
    phone.value
  );
});
</script>

<template>
  <div class="form">
    <form @submit.prevent="submitForm">
      <div class="form__input">
        <label for="name">Ваше ім’я</label>
        <input
          v-model="name"
          type="text"
          id="name"
          name="name"
          placeholder="Ваше ім’я"
        />
      </div>
      <div class="form__input">
        <label for="name">Номер телефону</label>
        <input
          v-model="phone"
          type="text"
          id="name"
          name="phone"
          placeholder="Введіть Ваш номер телефону"
        />
        <div class="form__error" v-show="phoneError">
          Введіть корректний номер
        </div>
      </div>
      <div class="form__input">
        <label for="name">Ваш e-mail</label>
        <input
          v-model="email"
          type="text"
          id="name"
          name="email"
          placeholder="Введіть Ваш e-mail"
        />
        <div class="form__error" v-show="emailError">
          Введіть корректну пошту
        </div>
      </div>
      <div class="form__submit">
        <the-button>Зареєструватись</the-button>
      </div>
      <div class="form__error req" v-show="formError">
        Всі поля обовʼязкові!
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.form {
  font-size: 16px;

  &__input {
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 16px;

    &:first-child {
      margin-top: 0;
    }

    label {
      line-height: 30px;
    }

    input {
      padding: 24px 15px;
      font-family: "Raleway", sans-serif;
      font-size: 16px;
      border-radius: 32px;
      border: 1px solid var(--black);
      background: var(--grey, #fafafa);

      &::placeholder {
        color: #858585;
      }

      &:focus {
        outline: none;
        border-color: var(--blue);
      }
    }
  }

  &__submit {
    margin-top: 24px;
  }

  &__error {
    font-size: 14px;
    color: rgb(213, 61, 61);

    &.req {
      margin-top: 10px;
    }
  }
}
</style>
