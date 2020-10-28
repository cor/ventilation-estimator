<template>
  <div class="home">
    <h1>Ventilation Rate Estimator</h1>
    <p>Refer to <a href="https://medium.com/@jjose_19945/how-to-quantify-the-ventilation-rate-of-an-indoor-space-using-a-cheap-co2-monitor-4d8b6d4dab44">this guide</a> when using this tool.</p>
    <div>
      <label for="outdoorsPpm">CO<sub>2</sub> Outdoors = </label>
      <input id="outdoorsPpm" type="number" v-model.number="outdoorsPpm"><span> ppm</span>
    </div>
    <div>
      <label for="indoorsPeakPpm">CO<sub>2</sub> Indoors at peak = </label>
      <input id="indoorsPeakPpm" type="number" v-model.number="indoorsPeakPpm"><span> ppm</span>
    </div>
    <div>
      <p>Excess CO<sub>2</sub> = <b>{{excessPpm()}}</b><span> ppm</span></p>
      <p>Indoors CO<sub>2</sub> at 63% decline = <b>{{Math.floor(declined63Ppm())}}</b> ppm</p>
    </div>
    <div>
      <label for="declined63Time">Time between start and declined to <b>{{Math.floor(declined63Ppm())}}</b> ppm = </label>
      <input id="declined63Time" type="number" v-model.number="declined63Time"><span> H</span>
    </div>
    <div>
      <p>Ventilation rate = <b>{{ ventilationRate() }}</b> <span> H <sup>-1</sup></span></p>
    </div>
  </div>
</template>

<style lang="scss">

.home {
  max-width: 500px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  font-size: 18px;

  background-color: white;
  @media (min-width: 500px) {
    margin: 32px auto;
  }
}

input {
  width: 80px;
  font-weight: bold;
  font-size: 16px;
}
</style>


<script lang="ts">
import { Vue } from "vue-class-component";

export default class Home extends Vue {
  public outdoorsPpm = 0;
  public indoorsPeakPpm = 0;
  public declined63Time = 0;

  excessPpm(): number {
    return this.indoorsPeakPpm - this.outdoorsPpm;
  }

  declined63Ppm(): number {
    const declineTarget = (100-63)/100;
    return this.outdoorsPpm + declineTarget * this.excessPpm();
  }

  ventilationRate(): number {
    const rate = 1 / this.declined63Time
    return Math.round( rate * 1000) / 1000;
  }
}
</script>
