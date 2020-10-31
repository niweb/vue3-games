import { watch } from "vue";

type watchDeepFn = (
  ...args: Parameters<typeof watch>
) => ReturnType<typeof watch>;
export const watchDeep: watchDeepFn = (source, cb, options) => {
  return watch(source, cb, {
    ...options,
    deep: true
  });
};
