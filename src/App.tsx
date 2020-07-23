import { Component, Vue } from 'vue-property-decorator';
import Calculator from '@/components/Calculator'

import styles from './App.css?module';

@Component
export default class App extends Vue {
  render() {
    return (
      <div id="app" class={styles.page}>
        <Calculator />
      </div>
    )
  }
}