<template>
  <div class="form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :labelWidth="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
            >
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[`${item.field}`]"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  placeholder="please select your zone"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="option in item.options"
                    :label="option.title"
                    :value="option.value"
                    :key="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue';
import { IFormItem } from '../types';
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String
    },
    itemStyle: {
      type: Object,
      default: () => ({})
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    }
  },
  emit: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue });
    watch(formData, (newValue) => emit('update:modelValue', newValue), {
      deep: true
    });

    return { formData };
  }
});
</script>

<style scoped>
.form {
  padding: 20px 20px 0 20px;
}
</style>
