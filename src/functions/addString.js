import { ref } from '@vue/composition-api';

function useAddString() {
  const hoge = ref('hoge');
  const foo = ref('foo');

  return {
    hoge,
    foo
  };
}

export default {
  setup() {
    const { hoge, foo } = useAddString();
    return {
      hoge,
      foo
    };
  }
};
