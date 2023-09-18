<script setup lang="ts"></script>

<template>
  <div class="price-table">
    <div class="column">
      <div class="title">
        <div class="timer-wrap">
          <the-timer />
          <div class="label">
            (для діючих передплатників додаткова знижка 10%)
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Поглиблені професійні курси підвищення кваліфікації
          <span>(8 курсів/рік)</span>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          <div class="label">new</div>
          Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК)
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          <div class="label">new</div>
          Закриті клубні лекції з експертами <span>(1 р./ міс.)</span>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Майстер-класи зі змін у законодавстві <span>(4+ р./міс.)</span>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Безлімітні відповіді на запитання під час онлайн-навчання
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Тестові та практичні завдання зі зворотним зв'язком
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Роздатковий матеріал (корисні файли, брошури, презентації)
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Клуб однодумців у Viber та підтримка куратора
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">Сертифікати після проходження курсів</div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Доступ до
          <span class="bold">Бухгалтерської Відеоплатформи №1:</span>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Відеокурси і вебінари <br />
          <span>(1100+ вже та 20+ щомісяця)</span>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Безлімітні швидкі консультації від експертів (сервіс ОК)
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Бланки та зразки документів <br />
          <span>(2000+ вже та 30+ щомісяця)</span>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">
          Консультант з пошуку та підготовки документів
          <span>(безлімітно, щодня)</span>
        </div>
      </div>
      <div class="row">
        <div class="row__wrap">Калькулятори</div>
      </div>
      <div class="row">
        <div class="row__wrap">Довідники</div>
      </div>
    </div>
    <div class="column">
      <div class="title">
        <div class="notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M1.32333 10.4346L4.6316 13.9128L7.93988 10.4346L9.26318 11.1302L4.6316 15.9998L2.47666e-05 11.1302L1.32333 10.4346Z"
              fill="#232323"
            />
            <path
              d="M1.32333 5.21728L4.6316 8.69555L7.93988 5.21729L9.26318 5.91294L4.6316 10.7825L2.47666e-05 5.91294L1.32333 5.21728Z"
              fill="#232323"
              fill-opacity="0.5"
            />
            <path
              d="M1.32333 -3.64895e-07L4.6316 3.47826L7.93988 -6.08158e-08L9.26318 0.695652L4.6316 5.56522L2.47666e-05 0.695652L1.32333 -3.64895e-07Z"
              fill="#232323"
              fill-opacity="0.1"
            />
          </svg>
          ХІТ ПРОДАЖУ
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
          >
            <path
              d="M1.32333 10.4346L4.6316 13.9128L7.93988 10.4346L9.26318 11.1302L4.6316 15.9998L2.47666e-05 11.1302L1.32333 10.4346Z"
              fill="#232323"
            />
            <path
              d="M1.32333 5.21728L4.6316 8.69555L7.93988 5.21729L9.26318 5.91294L4.6316 10.7825L2.47666e-05 5.91294L1.32333 5.21728Z"
              fill="#232323"
              fill-opacity="0.5"
            />
            <path
              d="M1.32333 -3.64895e-07L4.6316 3.47826L7.93988 -6.08158e-08L9.26318 0.695652L4.6316 5.56522L2.47666e-05 0.695652L1.32333 -3.64895e-07Z"
              fill="#232323"
              fill-opacity="0.1"
            />
          </svg>
        </div>
        <div class="headline">
          СУПЕРПРОФЕСІОНАЛ
          <div class="discount">-75%</div>
        </div>
        <p>
          8 професійних курсів <br />
          за ціною 2
        </p>
        <div class="old-price">1079 грн/міс.</div>
        <div class="current-price">679 грн/міс.</div>
        <the-button padding="16px 40px">Оплатити карткою</the-button>
        <a href="#" class="link">Оплатити частинами</a>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Поглиблені професійні курси підвищення кваліфікації
          <br />
          <span>(8 курсів/рік)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          <div class="label">new</div>
          Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК)
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          <div class="label">new</div>
          Закриті клубні лекції з експертами <span>(1 р./ міс.)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Майстер-класи зі змін у законодавстві <span>(4+ р./міс.)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Безлімітні відповіді на запитання під час онлайн-навчання
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Тестові та практичні завдання зі зворотним зв'язком
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Роздатковий матеріал (корисні файли, брошури, презентації)
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Клуб однодумців у Viber та підтримка куратора
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">Сертифікати після проходження курсів</div>
      </div>
      <div class="row unavailable" v-for="n in 7" :key="n">
        <img src="@/assets/img/x-mark.svg" alt="є" />
      </div>
      <div class="price-block">
        <div class="price">
          <div>
            <div class="old-price">1079 грн/міс.</div>
            <div class="current-price">679 грн/міс.</div>
          </div>
          <div class="discount">-75%</div>
        </div>
        <the-button padding="16px 40px">Оплатити карткою</the-button>
      </div>
    </div>
    <div class="column">
      <div class="title">
        <div class="headline">
          ПРЕМІУМ
          <div class="discount">-75%</div>
        </div>
        <p>8 професійних курсів за ціною 2 +</p>
        <p>Бухгалтерська Відеоплатформа №1</p>
        <div class="old-price">1079 грн/міс.</div>
        <div class="current-price">679 грн/міс.</div>
        <the-button padding="16px 40px">Оплатити карткою</the-button>
        <a href="#" class="link">Оплатити частинами</a>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Поглиблені професійні курси підвищення кваліфікації
          <br />
          <span>(8 курсів/рік)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          <div class="label">new</div>
          Практичні курси автоматизації (робота в BAS, Medoc, Excel, ЕК)
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          <div class="label">new</div>
          Закриті клубні лекції з експертами <span>(1 р./ міс.)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Майстер-класи зі змін у законодавстві <span>(4+ р./міс.)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Безлімітні відповіді на запитання під час онлайн-навчання
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Тестові та практичні завдання зі зворотним зв'язком
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Роздатковий матеріал (корисні файли, брошури, презентації)
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Клуб однодумців у Viber та підтримка куратора
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">Сертифікати після проходження курсів</div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Доступ до
          <span class="bold">Бухгалтерської Відеоплатформи №1:</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Відеокурси і вебінари <br />
          <span>(1100+ вже та 20+ щомісяця)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Безлімітні швидкі консультації від експертів (сервіс ОК)
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Бланки та зразки документів <br />
          <span>(2000+ вже та 30+ щомісяця)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">
          Консультант з пошуку та підготовки документів
          <span>(безлімітно, щодня)</span>
        </div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">Калькулятори</div>
      </div>
      <div class="row">
        <img src="@/assets/img/check.svg" alt="є" />
        <div class="row__info">Довідники</div>
      </div>
      <div class="price-block">
        <div class="price">
          <div>
            <div class="old-price">1079 грн/міс.</div>
            <div class="current-price">679 грн/міс.</div>
          </div>
          <div class="discount">-75%</div>
        </div>
        <the-button padding="16px 40px">Оплатити карткою</the-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.price-table {
  display: flex;
  max-width: 1140px;
  margin: auto auto 22px;

  .column {
    flex: 1;
    border-radius: 18px;

    &:first-child {
      padding-left: 32px;

      .title {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .label {
          max-width: 225px;
          font-size: 15px;
          text-align: center;
          color: #515154;

          @media (max-width: 1020px) {
            display: none;
          }
        }

        @media (max-width: 1020px) {
          margin-bottom: 24px;
        }
      }

      .row {
        justify-content: flex-start;

        &__wrap {
          max-width: 320px;
        }

        @media (max-width: 1020px) {
          display: none;
        }
      }

      @media (max-width: 1020px) {
        padding: 0;
      }
    }

    &:nth-child(2),
    &:last-child {
      max-width: 311px;

      .row {
        align-items: flex-start;
        gap: 8px;
        padding: 0 28px;

        &__info {
          display: none;

          @media (max-width: 1020px) {
            display: block;
          }
        }

        @media (max-width: 1020px) {
          padding: 0 16px;

          img {
            width: 24px;
            height: 24px;
          }
        }
      }

      .title {
        padding: 9px 28px 0;

        @media (max-width: 1020px) {
          padding: 24px 44px 0;

          p br {
            display: none;
          }
        }

        @media (max-width: 360px) {
          padding: 9px 16px 0;
        }
      }

      @media (max-width: 1020px) {
        background-color: #fff;
        max-width: unset;
        margin: 0 16px;
      }
    }

    &:last-child {
      margin-right: 28px;
      border: 2px solid #06c;

      @media (max-width: 1020px) {
        border: none;
      }
    }

    .discount {
      width: fit-content;
      padding: 10px 4px;
      font-family: Inter, sans-serif;
      font-weight: 700;
      font-size: 10px;
      color: #fff;
      border-radius: 100%;
      background-color: var(--blue);
    }

    .old-price {
      color: #979797;
      margin-bottom: 5px;
      margin-top: 12px;
      text-decoration-line: line-through;
    }

    .current-price {
      font-size: 17px;
      font-weight: 700;
      margin-bottom: 12px;
    }

    .button {
      width: 100%;
      margin: 0 auto 12px;
    }

    .title {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 225px;
      font-size: 13px;
      text-align: center;
      margin-bottom: 40px;
      position: relative;

      .timer-wrap {
        width: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 16px;

        @media (max-width: 1020px) {
          width: 100%;
          padding: 0;
        }
      }

      .notification {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 13px;
        width: 100%;
        padding: 5px 0;
        font-weight: 700;
        border-radius: 15px 15px 0 0;
        background: var(--yellow);
        max-width: 254px;
        position: absolute;
        bottom: calc(100% + 2px);

        @media (max-width: 1020px) {
          bottom: 100%;
          left: 0;
          right: 0;
          max-width: unset;
        }
      }

      .headline {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;
        margin-bottom: 4px;
        font-weight: 800;
      }

      p {
        line-height: 150%;
      }

      .link {
        color: #979797;
      }

      @media (max-width: 1020px) {
        height: unset;
        margin-bottom: 24px;
      }
    }

    .row {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 42px;
      padding: 8px 0;
      font-size: 15px;
      border-bottom: 1px solid rgba(35, 35, 35, 0.1);
      margin-bottom: 8px;

      span {
        color: var(--blue);

        .bold {
          font-weight: 700;
        }
      }

      .label {
        display: inline-block;
        padding: 0 5px;
        border-radius: 3px;
        font-weight: 600;
        color: var(--grey);
        text-transform: uppercase;
        background-color: var(--blue);
      }

      @media (max-width: 1020px) {
        height: unset;
        justify-content: flex-start;
        font-size: 16px;
        border: none;
        margin-bottom: 11px;

        &.unavailable {
          display: none;
        }
      }
    }

    .price-block {
      padding: 0 36px 18px;
      margin-top: 40px;

      .price {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 26px;

        .old-price {
          margin-top: 0;
        }
      }

      .button {
        margin: 0;
      }

      @media (max-width: 1020px) {
        padding: 0 44px 24px;
        margin-top: 24px;
      }

      @media (max-width: 360px) {
        padding: 0 16px 24px;
      }
    }

    @media (max-width: 1020px) {
      border-radius: 0;
    }
  }

  @media (max-width: 1020px) {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
