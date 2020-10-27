<template>
  <div class="home">
    <h1>Ventilation Rate Estimator</h1>
    <div>
      <label for="">CO<sub>2</sub> Outdoors in ppm</label>
      <input type="number" v-model.number="outdoorsPpm"><span>ppm</span>
    </div>
    <div>
      <label for="">CO<sub>2</sub> Indoors at peak in ppm</label>
      <input type="text" v-model.number="indoorsPeakPpm"><span>ppm</span>
    </div>
    <div>
      <p>Excess CO<sub>2</sub>: <b>{{excessPpm()}}</b></p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

// @Options({
//   components: {}
// })

export default class Home extends Vue {
  public outdoorsPpm = 0;
  public indoorsPeakPpm = 0;

  excessPpm(): number {
    return this.indoorsPeakPpm - this.outdoorsPpm;
  }
}
</script>
