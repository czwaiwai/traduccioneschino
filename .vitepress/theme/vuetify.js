import { createVuetify } from "vuetify"
import * as components from 'vuetify/components'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
export default createVuetify({
    icons: {
        defaultSet: 'mdi'
    },
    components,
    theme: {
        themes: {
            light: {
                colors: {
                    primary: '#1867c0',
                    secondary: '#5cbbf6'
                }
            }
        }
    }
})