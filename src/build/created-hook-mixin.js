// jshint esversion: 6
export default {
  created() {
    console.log('component created');
  },
  beforeCreate() {
    console.log('component');
  },
  beforeMount() {
    console.log('I am ready to be rendered.!');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
};
