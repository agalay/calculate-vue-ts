import { Component, Vue } from 'vue-property-decorator';

import styles from './Calculator.css?module';

@Component
export default class TodoForm extends Vue {

    render() {
        return (
            <div>
                <h2 class={styles.capture}>События</h2>

            </div>
        );
    }
}