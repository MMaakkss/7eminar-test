<script setup lang="ts">
let date5: number = new Date("10/03/2023").getTime();
let date4: number = new Date("09/15/2023").getTime();
let date3: number = new Date("09/1/2023").getTime();
let date2: number = new Date("08/21/2023").getTime();
let date1: number = new Date("08/03/2023").getTime();
let dateNow: number = new Date().getTime();

let width = ref<string>("0%");

const calculateWidth = (
  firstDate: number,
  secondDate: number,
  startWidth: number,
  sectorWidth: number
): void => {
  const difference = date4 - date5;
  const differenceNow = dateNow - date5;
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  const dayNow = Math.ceil(differenceNow / (1000 * 3600 * 24));
  const perWidth = Math.ceil((dayNow / TotalDays) * 100);

  let currentSectorWidth: number | string = (sectorWidth / 100 * perWidth).toFixed(2);
  currentSectorWidth = sectorWidth - Number(currentSectorWidth);

  width.value = startWidth + currentSectorWidth + "%";
};

if (dateNow <= date1) {
  width.value = "0%";
} else if (dateNow < date2) {
  calculateWidth(date1, date2, 0, 16.5);
} else if (dateNow < date3) {
  calculateWidth(date2, date3, 33.5, 33.5);
} else if (dateNow < date4) {
  calculateWidth(date3, date4, 67, 33.5);
} else if (dateNow <= date5) {
  calculateWidth(date4, date5, 83.5, 16.5);
} else if (dateNow >= date5) {
  width.value = "100%";
}
</script>

<template>
  <div class="rate">
    <div class="rate__labels">
      <div class="rate__label">
        <span>Ціни раннього бронювання</span>
      </div>
      <div class="rate__label">
        <span>Подорожчання на 10%</span>
      </div>
      <div class="rate__label">
        <span>Подорожчання на 15%</span>
      </div>
      <div class="rate__label">
        <span>Можливо квитки вже закінчаться</span>
      </div>
    </div>
    <div class="rate__line">
      <div class="rate__marks">
        <div class="rate__mark" />
        <div class="rate__mark" />
        <div class="rate__mark" />
        <div class="rate__mark" />
      </div>
      <div class="rate__progress" :style="{ width: width }" />
      <div class="rate__today-mark" :style="{ left: width }">
        <span />
      </div>
    </div>
    <div class="rate__dates">
      <div class="rate__date">
        <span>21 серпня</span>
      </div>
      <div class="rate__date">
        <span>1 вересня</span>
      </div>
      <div class="rate__date">
        <span>15 вересня</span>
      </div>
      <div class="rate__date">
        <span>3 жовтня</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rate {
  max-width: 1094px;
  width: 100%;
  margin: auto;
  padding: 0 16px;

  &__labels {
    display: flex;
    margin-bottom: 38px;

    @media (max-width: 980px) {
      flex-direction: column;
      margin: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(50% + 22px);
    }
  }

  &__label {
    font-size: 18px;

    span {
      display: block;
      max-width: 132px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      span {
        text-align: center;
        margin: auto;
      }
    }

    &:last-child span {
      max-width: 145px;
      text-align: end;
      margin-left: auto;
    }

    @media (max-width: 980px) {
      display: flex;
      align-items: flex-end;
      font-size: 16px;

      &:first-child {
        align-items: flex-start;
      }
    }
  }

  &__line {
    height: 6px;
    background-color: var(--grey);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05) inset;
    position: relative;

    @media (max-width: 980px) {
      min-width: 678px;
      transform: rotate(90deg) translateX(50%);
    }
  }

  &__label,
  &__mark,
  &__date {
    &:first-child,
    &:last-child {
      width: 16.5%;
    }

    &:nth-child(2),
    &:nth-child(3) {
      width: 33.5%;
    }
  }

  &__label,
  &__date {
    &:first-child,
    &:last-child {
      @media (max-width: 980px) {
        width: fit-content;
        height: 16.5%;
      }
    }

    &:nth-child(2),
    &:nth-child(3) {
      @media (max-width: 980px) {
        width: fit-content;
        height: 33.5%;
      }
    }
  }

  &__marks {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &__mark {
    position: relative;

    &:first-child,
    &:last-child,
    &:nth-child(2),
    &:nth-child(3) {
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        width: 3px;
        height: 17px;
        background-color: var(--black);
      }
    }

    &:first-child {
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 3px;
        height: 17px;
        background-color: var(--black);
      }
    }
  }

  &__today-mark {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    display: grid;
    place-content: center;
    height: 33px;
    width: 33px;
    border-radius: 100%;
    border: 3px solid var(--black);
    background-color: var(--yellow);

    span {
      width: 13px;
      height: 13px;
      border-radius: 100%;
      background-color: var(--black);
    }
  }

  &__progress {
    position: absolute;
    top: 0;
    left: 3px;
    width: 40%;
    height: 100%;
    background-color: var(--black);
  }

  &__dates {
    display: flex;
    margin-top: 36px;

    @media (max-width: 980px) {
      flex-direction: column;
      margin: 0;
      position: absolute;
      top: 0;
      bottom: 0;
      right: calc(50% + 22px);
    }
  }

  &__date {
    font-size: 18px;

    span {
      display: block;
      width: fit-content;
      font-weight: 700;
      transform: translateX(50%);
      margin-left: auto;

      @media (max-width: 980px) {
        transform: unset;
      }
    }

    &:last-child span {
      transform: unset;
    }

    @media (max-width: 980px) {
      display: flex;
      align-items: flex-end;
      font-size: 16px;

      &:first-child {
        align-items: flex-start;
      }
    }
  }

  @media (max-width: 980px) {
    height: 678px;
    display: flex;
    position: relative;
    justify-content: center;
  }

  @media (max-width: 460px) {
    left: -20px;
  }
}
</style>
