declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare type Res = { code: number, data?: any, msg?: string };

declare namespace JSX {
  interface IntrinsicAttributes {
    ['v-if']?: unknown
    ['v-else-if']?: unknown
    ['v-else']?: unknown
    ['v-show']?: unknown
    ['v-html']?: unknown
    ['v-text']?: unknown
    ['v-model']?: unknown
  }
 }

declare module '*.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}