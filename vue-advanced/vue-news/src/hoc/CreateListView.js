import ListView from '../views/ListView.vue';
import bus from '../utils/bus.js';

export default function CrateListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리.
    name, // 생선된 컴포넌트를 구분하기 위한 속성, 이것으로 표시되는 것이 하이오더컴포넌트
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then(() => {
          console.log('fetched');
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log(error);
        });      
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}