<template>
  <div>
    <b-button v-b-modal.modal-input-number>시작</b-button>
    <b-modal
      id="modal-input-number"
      ref="modal"
      title="팀 나누기"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
      ok-only
    >
      <form ref="form" @submit.stop.prevent="submitTeamNumber">
        <b-form-group
          label="나누려는 팀 수를 입력해주세요"
          invalid-feedback="팀 수를 입력해주세요"
          :state="numberState"
        >
          <b-form-input
            v-model="teamNumber"
            :state="numberState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "Teamdividemodal",
  components: {},
  data() {
    return {
      teamNumber: "",
      numberState: null,
      totalPeople: "",
    };
  },
  mounted() {},
  watch: {
    teamNumber() {
      return (this.teamNumber = this.teamNumber.replace(/[^0-9]/g, ""));
    },
  },
  computed: {
    teams: function() {
      return this.$store.state.teams;
    },
  },
  methods: {
    checkFormValidity() {
      //   const valid = this.$refs.form.checkValidity();
      //   this.numberState = valid;
      if (this.teamNumber >= 1 && this.teamNumber <= 10) {
        // return valid;

        this.$store.commit("CREATE_TEAMNUMBER", this.teamNumber);
        for (var i = 1; i <= this.teamNumber; i++) {
          this.$store.state.teams = i;
        }
        console.log("길이: " + this.$store.state.teams.length);
        this.$router.push({ name: "SelectTeam" });
      } else {
        alert("다시 입력하세요");
      }
    },
    resetModal() {
      this.teamNumber = "";
      this.numberState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.submitTeamNumber();
    },
    submitTeamNumber() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-input-number");
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
