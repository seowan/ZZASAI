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
        <p>1. 블록을 이동하여 순서를 설정하세요!</p>
        <p>2. 설정이 완료되면 방 만들기 버튼을 누르세요!</p>
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

<style>
#help-icon {
  display: flex;
  left: 0;
  bottom: 0;
}
#help-icon-btn {
  width: 3%;
  height: 3%;
  cursor: pointer;
}

#help-modal-text {
  margin-left: 10%;
}
</style>