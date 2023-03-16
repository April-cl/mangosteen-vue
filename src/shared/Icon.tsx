import { defineComponent, PropType } from "vue";

export const Icon = defineComponent({
    props: {
        name: {
            type: String as PropType<'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig'>
        }
    },
    setup: (props, context) => {
        return () => {
            <svg>
                <use xlinkHref={'#' + props.name}></use>
            </svg>
        }
    }
})