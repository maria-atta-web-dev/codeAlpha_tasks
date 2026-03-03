class Calculator {
    constructor() {
        this.display = document.getElementById('display');
        this.historyEl = document.getElementById('history');
        this.previewEl = document.getElementById('preview');
        
        this.current = '0';
        this.previous = '';
        this.operation = '';
        this.newNumber = false;
        
        this.setupKeyboard();
        this.historyEl.textContent = 'Ready ✓';
    }

    click(value) {
        if (value >= '0' && value <= '9') this.addNumber(value);
        else if (value === '00') this.addDoubleZero();
        else if (value === '.') this.addDecimal();
        else if (value === '+' || value === '-' || value === '*' || value === '/') this.addOperator(value);
        else if (value === '=') this.calculate();
        else if (value === 'C') this.clearAll();
        else if (value === '⌫') this.deleteLast();
        else if (value === '%') this.percentage();
        
        this.buttonEffect(value);
        this.updateScreen();
    }

    addNumber(num) {
        if (this.newNumber) {
            this.current = num;
            this.newNumber = false;
        } else if (this.current === '0') {
            this.current = num;
        } else {
            this.current += num;
        }
        if (this.current.length > 12) this.current = this.current.slice(0, 12);
    }

    addDoubleZero() {
        if (this.newNumber) {
            this.current = '0';
            this.newNumber = false;
        } else if (this.current !== '0') {
            this.current += '00';
        }
        if (this.current.length > 12) this.current = this.current.slice(0, 12);
    }

    addDecimal() {
        if (this.newNumber) {
            this.current = '0.';
            this.newNumber = false;
        } else if (!this.current.includes('.')) {
            this.current += '.';
        }
    }

    addOperator(op) {
        if (this.operation && !this.newNumber) this.calculate();
        
        this.previous = this.current;
        this.operation = op;
        this.newNumber = true;
        
        let symbol = op === '*' ? '×' : op === '/' ? '÷' : op;
        this.previewEl.textContent = this.previous + ' ' + symbol;
    }

    calculate() {
        if (!this.operation || !this.previous) return;

        let result;
        const prev = parseFloat(this.previous);
        const curr = parseFloat(this.current);

        if (isNaN(prev) || isNaN(curr)) return;

        switch(this.operation) {
            case '+': result = prev + curr; break;
            case '-': result = prev - curr; break;
            case '*': result = prev * curr; break;
            case '/': 
                if (curr === 0) {
                    this.display.textContent = 'Error';
                    setTimeout(() => this.clearAll(), 1000);
                    return;
                }
                result = prev / curr; 
                break;
        }

        result = Math.round(result * 100000000) / 100000000;
        let resultStr = result.toString();
        if (resultStr.length > 12) resultStr = result.toExponential(6);

        let symbol = this.operation === '*' ? '×' : this.operation === '/' ? '÷' : this.operation;
        this.historyEl.textContent = `${this.previous} ${symbol} ${this.current} = ${resultStr}`;

        this.current = resultStr;
        this.operation = '';
        this.newNumber = true;
        this.previewEl.textContent = '';
    }

    clearAll() {
        this.current = '0';
        this.previous = '';
        this.operation = '';
        this.newNumber = false;
        this.previewEl.textContent = '';
        this.historyEl.textContent = 'Cleared ✓';
    }

    deleteLast() {
        if (this.current.length > 1) {
            this.current = this.current.slice(0, -1);
        } else {
            this.current = '0';
        }
    }

    percentage() {
        if (this.current !== '0') {
            this.current = (parseFloat(this.current) / 100).toString();
        }
    }

    updateScreen() {
        this.display.textContent = this.current;
    }

    setupKeyboard() {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            
            if (e.key >= '0' && e.key <= '9') this.click(e.key);
            else if (e.key === '+') this.click('+');
            else if (e.key === '-') this.click('-');
            else if (e.key === '*') this.click('*');
            else if (e.key === '/') this.click('/');
            else if (e.key === 'Enter' || e.key === '=') this.click('=');
            else if (e.key === 'Escape') this.click('C');
            else if (e.key === 'Backspace') this.click('⌫');
            else if (e.key === '.') this.click('.');
            else if (e.key === '%') this.click('%');
        });
    }

    buttonEffect(val) {
        document.querySelectorAll('.btn').forEach(btn => {
            if (btn.textContent === val || 
                (val === '*' && btn.textContent === '×') ||
                (val === '/' && btn.textContent === '÷')) {
                
                btn.style.transform = 'translateY(4px)';
                btn.style.boxShadow = '0 1px 0 #95a5a6';
                setTimeout(() => {
                    btn.style.transform = '';
                    btn.style.boxShadow = '';
                }, 100);
            }
        });
    }
}

const calc = new Calculator();