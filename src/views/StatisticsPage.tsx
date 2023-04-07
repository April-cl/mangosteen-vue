import { defineComponent } from 'vue'
import { Charts } from '../components/statistics/Charts'
import { TimeTabsLayout } from '../layouts/TimeTabsLayout'
import s from './StatisticsPage.module.scss'
export const StatisticsPage = defineComponent({
    setup: (props, context) => {
        return () => (
            <TimeTabsLayout component={Charts} />
            // <div>123</div>
        )
    }
})