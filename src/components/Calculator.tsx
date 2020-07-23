import { Component, Vue } from 'vue-property-decorator';

import styles from './Calculator.css?module';

@Component
export default class Calculator extends Vue {

    private disable = false;
    public buttons: (string | number)[] = [7, 8, 9, 'C', 4, 5, 6, '+', 1, 2, 3, '-', 0, '=']
    public operation = '';
    public result = '';

    reset(): void {
        this.operation = '';
        this.result = '';
    }

    input(char: string): void {
        this.operation += char;
    }

    calc(): void {
        this.result = '= ' + eval(this.operation);
        this.disable = false;
    }

    handlers(event: { target: HTMLInputElement }): void {
        const target = event.target.textContent;

        if (target) {

            const lastSymbol: string = this.operation.slice(-1);
            const symbolVal = (lastSymbol === '+' || lastSymbol === '-') && (target === '+' || target === '-') ? false : true;

            if (target === 'C') {
                this.reset();
            }

            if (target !== 'C' && target !== '=' && symbolVal) {
                this.input(target)
            }

            if (target === '=' && !(lastSymbol === '+' || lastSymbol === '-')) {
                this.disable = true;
                setTimeout(() => this.calc(), 2000)
            }
        }

    }

    render() {
        return (
            <div class={styles.calculator}>
                <input value={this.operation} type="text" class={styles.operation} readonly />
                <div class={`${styles.display} ${styles.result}`}>{this.result || 0}</div>

                {this.buttons.map(symbol =>
                    <button onclick={this.handlers} class={
                        `${styles.btn} 
                         ${typeof symbol === 'string' ? styles.operator : ''} 
                         ${symbol === 0 ? styles.zero : ''}`
                    } disabled={this.disable}>{symbol}</button>
                )}
            </div>
        );
    }
}