<template>
  <div class="alphabet">
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
        <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
    <div class="alphabet-item">A</div>
  </div>
</template>

<script>
export default {
  neme: "Alphabet",
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl';

.alphabet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  text-align: center;

  .alphabet-item {
    line-height: 0.44rem;
    color: $bgColor;
  }
}
</style>