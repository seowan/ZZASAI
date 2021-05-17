<template>
  <div class="hall-card-inner">
    <div class="hall-card-front">
      <img
        src="@/assets/icons/pencil.png"
        alt="Avatar"
        style="width:100px;height:100px;"
      />
    </div>
    <div class="hall-card-back">
      <h2 class="hall-card-text">캐치마인드</h2>
      <TeamDivideModal
        v-if="isModalViewed && adminflag == 1"
        @close-modal="isModalViewed = false"
      />
    </div>
  </div>
</template>

<script>
import TeamDivideModal from "@/components/TeamDivideModal";

export default {
  name: "Drawing",
  components: {
    TeamDivideModal,
  },
  data() {
    return { isModalViewed: true, adminflag: this.$store.state.adminflag };
  },
};
</script>

<style scoped></style>
