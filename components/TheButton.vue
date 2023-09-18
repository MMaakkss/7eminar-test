<script setup lang="ts">
interface IProps {
  padding?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  padding: "18px 32px",
});

const style = {
  "--padding": props.padding,
};
</script>

<template>
  <button class="button" :style="style">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  width: fit-content;
  display: block;
  background-color: var(--blue);
  border-radius: 980px;
  padding: var(--padding);
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  transition: 0.2s ease;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--purple);
  }
}
</style>
