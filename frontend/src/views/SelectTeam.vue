<template>
  <tbody>
    <tr v-for="(form, index) in graphicState" :key="form.id">
      <td @click="removeDate(index)"><i class="far fa-trash-alt"></i></td>
      <td>
        <input type="radio" v-model="form.show" />
      </td>
      <td>
        <input
          type="radio"
          name="grp"
          :value="form.id"
          v-model="form.selected"
          @change="onRadioChange(index)"
        />
      </td>
      <td v-on:click="toggleShape(index)">
        {{ form.shape }}
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: "SelectTeam",
  components: {},
  data() {
    return {};
  },

  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
