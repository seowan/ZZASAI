<template>
  <div id="help-icon">
    <!-- 도움말 아이콘 -->
    <b-icon
      id="help-icon-btn" 
      icon="question-circle-fill" 
      variant="primary" 
      v-b-modal="'help-modal'"
      v-b-popover.hover.top="'도움말을 확인하세요!'"
    ></b-icon>
    <!-- 도움말 modal -->
    <b-modal id="help-modal" size="xl">
      <div id="help-modal-text">
        <h3>[소개]</h3>
        <p>성향검사: 성향을 검사합니다.</p>
        <p>캐치마인드: 그림을 그려서 제시어를 맞추는 게임입니다.</p>
        <p>질문카드: 서로 간의 이야기를 할 수 있습니다.</p>
        <br>
        <h3>[방법]</h3>
        <p>왼쪽의 리스트에서 진행할 순서를 정해서 오른쪽 리스트로 드래그앤드롭하세요!</p>
        <br>
        <h3>[추천코스]</h3>
        <p>추천코스1: 성향 테스트 - 캐치마인드 - 질문카드</p>
        <p>추천코스2: 질문카드 - 성향 테스트 - 캐치마인드</p>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: "HelpIcon",
}
</script>

<style scoped>
#help-icon {
  /* display: flex; */
  position: absolute;
  left: 3%;
  bottom: 3%;
  text-align: left;
}
#help-icon-btn {
  width: 10%;
  height: 10%;
  cursor: pointer;
}

#help-modal-text {
  margin-left: 10%;
}
</style>