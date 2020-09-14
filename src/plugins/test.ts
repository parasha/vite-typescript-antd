import { App, inject } from 'vue';

export function install(app: App, options: any) {
  
  app.provide('i18n', options)

  app.directive('my-directive', {
    mounted(el, binding, vnode, oldVnode) {
      // some logic ...
      console.log('directive mounted:', el, binding)
    }
  })

  app.mixin({
    created() {
      // some logic ...
      // console.log('lifecyle created:', this);
    }
  })
}

export function testPluginFn(){
   const r = inject('i18n');
   console.log('plugin test:', r)
}