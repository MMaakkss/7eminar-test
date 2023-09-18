<template>
  <div class="page">
    <section class="filled preview">
      <div class="container">
        <h1>Вища Бучгалтерська Online-Акадумія</h1>
        <h2 class="preview__title">
          Підвищення кваліфікації <br />
          та профперепідготовка для бухгалтерів
        </h2>
        <the-button>Обрати навчання >></the-button>
        <the-slider></the-slider>
        <h3>
          Разом дешевше! Купуйте передплату на Вищу Бухгалтерську
          Online-Академію
          <span> 8 професій за ціною 2 </span>
        </h3>
      </div>
    </section>
    <section class="filled studying">
      <h2 class="studying__title">
        Навчання, яке працює! <br />
        Відкрийте для себе найпопулярніші курси
      </h2>
      <rate-bar />
    </section>
    <section class="price">
      <h2 class="price__title">
        Передплату На Вищу Бухгалтерську Онлайн-Академію
      </h2>
      <h4>Оберіть свій тарифний пакет:</h4>
      <price-table />
      <div class="price__info">
        <p>Оплачуйте пакети <span>частинами без комісії!</span></p>
        <p>
          Натискайте на кнопку <span>Оплатити карткою</span> та оформлюйте
          розстрочку
        </p>
        <p>через PrivatBank або Monobank</p>
      </div>
    </section>
    <section class="feedback filled">
      <div class="container">
        <div class="feedback__form">
          <h4>Залиште заявку, і ми підберемо для вас умови зі знижкою</h4>
          <the-form />
        </div>
        <div class="feedback__info">
          <h4>З передплатою Академії ви отримаєте:</h4>
          <ul class="benefits">
            <div class="benefits__item">
              <div class="label">8+</div>
              <span>професійних курсів</span>
            </div>
            <div class="benefits__item">
              <div class="label">12</div>
              <span>закритих клубних лекцій</span>
            </div>
            <div class="benefits__item">
              <div class="label">48</div>
              <span>нових вебінарів та тренінгів</span>
            </div>
            <div class="benefits__item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="88"
                height="88"
                viewBox="0 0 88 88"
                fill="none"
              >
                <path
                  d="M20.6638 58.6663C10.6685 58.6663 7.33179 51.333 7.33179 43.9997C7.33179 36.6663 10.6685 29.333 20.6638 29.333C33.9995 29.333 53.9975 58.6663 67.3331 58.6663C77.3285 58.6663 80.6651 51.333 80.6651 43.9997C80.6651 36.6663 77.3285 29.333 67.3331 29.333C53.9975 29.333 33.9995 58.6663 20.6638 58.6663V58.6663Z"
                  stroke="#0066CC"
                  stroke-width="7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Безлімітні відповіді на запитання протягом навчання</span>
            </div>
            <div class="benefits__item">
              <div class="label">Тестові та практичні</div>
              <span>завдання зі зворотним зв'язком</span>
            </div>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.page {
  padding: 64px 0 208px;

  section {
    margin-bottom: 104px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (max-width: 810px) {
      margin-bottom: 72px;
    }
  }

  h1 {
    font-weight: 500;
    text-align: center;
    padding-top: 4px;
    margin-bottom: 22px;

    @media (max-width: 600px) {
      margin-bottom: 21px;
    }
  }

  .preview {
    padding-bottom: 48px;

    &__title {
      margin-bottom: 22px;

      @media (max-width: 600px) {
        margin-bottom: 21px;
      }
    }

    .button {
      margin: auto auto 40px;
      line-height: 20px;

      @media (max-width: 600px) {
        margin: auto auto 24px;
      }
    }

    h3 {
      max-width: 890px;
      padding: 0 16px;
      font-family: "e-Ukraine Head";
      font-size: 23px;
      font-weight: 700;
      line-height: 150%;
      text-align: center;
      margin: 40px auto 0;

      span {
        color: var(--blue);
        font-weight: 700;
      }

      @media (max-width: 600px) {
        font-size: 16px;
        margin: 29px auto 0;
      }
    }

    @media (max-width: 600px) {
      padding-bottom: 24px;
    }
  }

  .studying {
    padding: 80px 0;

    &__title {
      margin-bottom: 58px;

      @media (max-width: 980px) {
        margin-bottom: 40px;
      }
    }

    @media (max-width: 980px) {
      padding: 24px 0 50px;
    }
  }

  .price {
    &__title {
      max-width: 922px;
      margin: 0 auto 16px;
    }

    h4 {
      font-size: 21px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 76px;

      @media (max-width: 1020px) {
        margin-bottom: 16px;
      }

      @media (max-width: 600px) {
        font-size: 18px;
      }
    }

    &__info {
      line-height: 150%;
      text-align: center;
      font-weight: 500;
      padding: 0 16px;

      p {
        font-weight: 500;

        span {
          font-weight: 700;
        }

        @media (max-width: 600px) {
          font-size: 16px;
        }
      }
    }
  }

  .feedback {
    padding: 32px 0;

    .container {
      display: flex;
      justify-content: space-between;
      max-width: 1140px;
      gap: 90px;

      @media (max-width: 1120px) {
        flex-direction: column;
        gap: 64px;
      }
    }

    h4 {
      font-family: "e-Ukraine Head";
      font-size: 23px;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 24px;
    }

    &__form {
      width: 100%;
      max-width: 536px;
      padding: 0 24px;

      @media (max-width: 1120px) {
        max-width: unset;
        padding: 0 16px;
      }
    }

    &__info {
      h4 {
        padding: 0 32px;

        @media (max-width: 1120px) {
          padding: 0 16px;
        }
      }

      .benefits {
        display: flex;
        flex-wrap: wrap;
        row-gap: 5px;
        padding: 0 45px;

        &__item {
          flex: 1 1 40%;

          .label {
            font-family: "e-Ukraine Head";
            font-size: 63px;
            color: var(--blue);
            line-height: 150%;
          }

          span {
            display: block;
            max-width: 175px;
          }

          &:last-child {
            .label {
              font-family: "Raleway", sans-serif;
              font-size: 39px;
              font-weight: 700;

              @media (max-width: 600px) {
                font-size: 24px;
              }
            }

            span {
              max-width: unset;
            }
          }

          @media (max-width: 600px) {
            .label {
              font-size: 43px;
            }

            span {
              font-size: 16px;
            }

            svg {
              width: 58px;
              height: 58px;
            }
          }
        }

        @media (max-width: 1120px) {
          gap: 16px;
          padding: 0 16px;
        }
      }
    }
  }

  @media (max-width: 810px) {
    padding: 40px 0 56px;
  }
}
</style>
<script setup lang="ts"></script>
