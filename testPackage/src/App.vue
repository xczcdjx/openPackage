<script setup lang="ts">
import {ref} from "vue";
import {DynamicForm} from "dynamicformdjx";
import {NaiveUiDynamicForm} from "dynamicformdjx/naiveUi";

const test = ref<{ a: string, b: number, c: number[] }>({
  a: '1111',
  b: 123,
  c: [1, 3, 5]
})
</script>

<template>
  <div>
    <DynamicForm v-model="test"/>
    <naive-ui-dynamic-form v-model="test"
                           :dy-list-configs="{arraySplitSymbol:'-'}"
                           />
    <p>{{ test }}</p>
  </div>
</template>

<style scoped>

</style>
