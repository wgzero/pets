import { defineComponent } from 'vue';

interface ButtonProps {
  type: 'primary' | 'dashed' | 'link'
}
const Button = defineComponent({
  setup(props: ButtonProps, { slots }) {
    return () => (
      <button class={'btn', `btn-${props.type}`}>
        {slots.default()}
      </button>
    )
  }
})

export default Button;