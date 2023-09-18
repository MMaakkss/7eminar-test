<script setup lang="ts">
const end: Date = new Date("2023-10-03T17:00:00");

let dateHours = ref<string>("00");
let dateMinutes = ref<string>("00");
let dateSeconds = ref<string>("00");

let timer: null | ReturnType<typeof setTimeout> = null;

const getTime = (): void => {
  const now: Date = new Date();
  const distance = end.getTime() - now.getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;

  let hours: number | string = Math.floor(distance / hour);
  let minutes: number | string = Math.floor((distance % hour) / 60000);
  let seconds: number | string = Math.floor((distance % minute) / 1000);

  if (hours < 0 || minutes < 0 || seconds < 0) {
    resetTimer();
    return;
  }

  minutes = minutes > 10 ? minutes : "0" + minutes;
  hours = hours > 10 ? hours : "0" + hours;
  seconds = seconds > 10 ? seconds : "0" + seconds;

  dateHours.value = String(hours);
  dateMinutes.value = String(minutes);
  dateSeconds.value = String(seconds);
};

const resetTimer = (): void => {
  dateHours.value = "00";
  dateMinutes.value = "00";
  dateSeconds.value = "00";

  if (timer) {
    clearInterval(timer);
  }
};

onMounted(() => {
  timer = setInterval(getTime, 1000);
});
</script>

<template>
  <div class="timer">
    <div class="timer__item">
      <span>
        {{ dateHours }}
      </span>
      <span> год </span>
    </div>
    <div>:</div>
    <div class="timer__item">
      <span>
        {{ dateMinutes }}
      </span>
      <span> хв </span>
    </div>
    <div>:</div>
    <div class="timer__item">
      <span>
        {{ dateSeconds }}
      </span>
      <span> сек </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.timer {
  display: flex;
  gap: 7px;
  font-size: 29px;
  color: var(--blue);
  margin-bottom: 14px;

  &__item {
    display: flex;
    align-items: center;
    flex-direction: column;
    opacity: 0.4;

    &:last-child {
      opacity: 1;
    }

    span:last-child {
      font-size: 15px;

      @media (max-width: 1020px) {
        font-size: 16px;
        margin-top: 2px;
      }
    }
  }

  @media (max-width: 1020px) {
    font-size: 30px;
  }
}
</style>
