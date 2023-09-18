<script setup lang="ts"></script>

<template>
  <div class="slider-wrap">
    <Swiper
      :modules="[
        SwiperAutoplay,
        SwiperEffectCreative,
        SwiperNavigation,
      ]"
      :slides-per-view="1"
      effect="creative"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :initial-slide="1"
      :creative-effect="{
        prev: {
          translate: ['-100%', 51, 0],
        },
        next: {
          translate: ['100%', 51, 0],
        },
      }"
    >
      <SwiperSlide>
        <div class="slide">
          <img src="@/assets/img/image1.png" alt="image" />
          <div class="slide__info">
            Професії:
            <span>Головбух, Фіндир, HR</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide">
          <img src="@/assets/img/image2.png" alt="image" />
          <div class="slide__info">
            <span>Закриті клубні лекції</span>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div class="slide">
          <img src="@/assets/img/image3.png" alt="image" />
          <div class="slide__info">
            Підвищення кваліфікації:
            <span>ПДВ, ЗП, ЗЕД, ФОП та ін.</span>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    <div class="nav">
      <div class="swiper-button-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
        >
          <path
            d="M22.5356 37.021C30.7356 37.021 37.5356 30.221 37.5356 22.021C37.5356 13.821 30.7356 7.021 22.5356 7.021C14.3356 7.021 7.53564 13.821 7.53564 22.021C7.53564 30.221 14.3356 37.021 22.5356 37.021ZM22.5356 35.021C15.2356 35.021 9.43565 29.221 9.43565 22.021C9.43565 14.821 15.2356 8.92099 22.4356 8.92099C29.6356 8.92099 35.5356 14.721 35.5356 22.021C35.5356 29.221 29.7356 35.021 22.5356 35.021ZM25.3356 29.321C25.6356 29.021 25.6356 28.421 25.3356 28.121L18.9356 22.021L25.3356 15.921C25.7356 15.621 25.6356 15.021 25.3356 14.721C25.0356 14.421 24.4356 14.421 24.1356 14.721L17.6356 20.921C16.9356 21.521 16.9356 22.521 17.6356 23.121L24.1356 29.321C24.4356 29.621 25.0356 29.721 25.3356 29.321Z"
            fill="#232323"
          />
        </svg>
      </div>
      <div class="swiper-button-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="44"
          viewBox="0 0 45 44"
          fill="none"
        >
          <path
            d="M22.5356 37.021C30.7356 37.021 37.5356 30.221 37.5356 22.021C37.5356 13.821 30.7356 7.021 22.5356 7.021C14.3356 7.021 7.53564 13.821 7.53564 22.021C7.53564 30.221 14.3356 37.021 22.5356 37.021ZM22.5356 35.021C15.2356 35.021 9.43565 29.221 9.43565 22.021C9.43565 14.821 15.2356 8.92099 22.4356 8.92099C29.6356 8.92099 35.5356 14.721 35.5356 22.021C35.5356 29.221 29.7356 35.021 22.5356 35.021ZM19.2356 29.321C19.5356 29.621 20.1356 29.621 20.5356 29.321L27.0356 23.121C27.7356 22.521 27.7356 21.521 27.0356 20.921L20.5356 14.721C20.1356 14.321 19.6356 14.321 19.3356 14.721C18.9356 15.021 18.9356 15.621 19.3356 15.921L25.7356 22.021L19.3356 28.121C18.8356 28.421 18.8356 29.021 19.2356 29.321Z"
            fill="#232323"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider-wrap {
  width: 100%;
  margin: auto;

  .slide {
    width: fit-content;
    position: relative;
    margin: auto;

    &__info {
      width: 240px;
      height: 179px;
      position: absolute;
      bottom: 142px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      place-content: center;

      border-radius: 10px;
      background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.12) 0%,
          rgba(255, 255, 255, 0.12) 100%
        ),
        rgba(255, 255, 255, 0.11);
      backdrop-filter: blur(40.774227142333984px);

      font-family: "e-Ukraine Head";
      font-size: 26px;
      color: var(--grey);
      line-height: 150%;
      text-align: center;

      span {
        font-weight: 700;
      }
    }
  }

  .swiper-creative {
    width: 912px;
    padding: 0 302px 51px;

    @media (max-width: 944px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .nav {
    display: none;
    justify-content: center;

    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      position: unset;
      margin: unset;

      &:after {
        display: none;
      }
    }

    @media (max-width: 615px) {
      display: flex;
    }
  }
}
</style>
