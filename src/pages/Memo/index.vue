<template>
    <div>
        <!-- 当 v-memo 传入空数组，节点只渲染一次，不会更新 -->
        <!-- <div class="list" v-memo="[]"> -->
        <!-- 只有 v-memo 依赖的 flag 变动，节点才会更新渲染 -->
        <div class="list" v-memo="[flag]">
            <div v-for="(item, index) of arr" :key="`item-${index}`">{{item + 1}} / {{arr.length}}</div>
        </div>
        <button @click="onClick">change</button>
    </div>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue';

const arr = reactive<number[]>([]);

const flag = ref(0);

const onClick = () => {
    arr.push(arr.length);
    // 判断 list 节点是否需要更新
    if (isOdd(arr.length)) {
        flag.value = flag.value + 1;
    }
};

const isOdd = number => number % 2 !== 0
</script>
