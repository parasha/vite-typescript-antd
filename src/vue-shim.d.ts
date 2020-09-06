declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare type Res = { code: number, data?: any, msg?: string };

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