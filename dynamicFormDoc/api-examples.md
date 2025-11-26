---
outline: deep
---

# Runtime API Examples

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

## 基本使用

::: code-group

```vue [TypeScript]
<script setup lang="ts">
import { ref } from 'vue'
import { DynamicForm, type dynamicFormRef } from 'dynamicformdjx'

const test = ref<{ a: string; b: number; c: number[] }>({
  a: 'Hello world',
  b: 1314,
  c: [5, 2, 0]
})

const dyRef = ref<dynamicFormRef>()

const setD = () => {
  dyRef.value?.onSet({ test: 'helloWorld' })
}
</script>

<template>
  <p>Base</p>
  <DynamicForm v-model="test" ref="dyRef" />
  <pre>{{ test }}</pre>
  <div>
    <button @click="setD">setD</button>
  </div>
</template>
```

```vue [JavaScript]
<script setup>
import { ref } from 'vue'
import { DynamicForm } from 'dynamicformdjx'

const test = ref({
  a: 'Hello world',
  b: 1314,
  c: [5, 2, 0]
})

const dyRef = ref(null)

const setD = () => {
  dyRef.value?.onSet({ test: 'helloWorld' })
}
</script>

<template>
  <p>Base</p>
  <DynamicForm v-model="test" ref="dyRef" />
  <pre>{{ test }}</pre>
  <div>
    <button @click="setD">setD</button>
  </div>
</template>
```

:::



## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
