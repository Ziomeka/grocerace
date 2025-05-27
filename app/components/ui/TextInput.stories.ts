import TextInput from './TextInput.vue'

export default {
  title: 'Button',
  component: TextInput,
}

export const Default = () => ({
  components: { TextInput },
  template: '<TextInput label="Label" />',
})