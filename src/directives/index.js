import Vue from 'vue';
Vue.directive('trackHandler', {
    bind: (el, binding, vnode) => {
        el.addEventListener('click',(event)=>{
            trackHandler(binding.value,event);
        },false)
    }
})