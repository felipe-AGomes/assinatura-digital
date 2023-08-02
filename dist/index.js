class GenerateDigitalSignature {
    constructor(text, email, message) {
        this.text = text;
        this.email = email;
        this.message = message;
        this._transformedText = '';
        this._styleCss = [];
        this._alphabet = {
            A: ` █████╗ 
██╔══██╗
███████║
██╔══██║
██║  ██║
╚═╝  ╚═╝`,
            B: `██████╗ 
██╔══██╗
██████╔╝
██╔══██╗
██████╔╝
╚═════╝ `,
            C: ` ██████╗
██╔════╝
██║     
██║     
╚██████╗
 ╚═════╝`,
            D: `██████╗ 
██╔══██╗
██║  ██║
██║  ██║
██████╔╝
╚═════╝ `,
            E: `███████╗
██╔════╝
█████╗  
██╔══╝  
███████╗
╚══════╝`,
            F: `███████╗
██╔════╝
█████╗  
██╔══╝  
██║     
╚═╝     `,
            G: ` ██████╗ 
██╔════╝ 
██║  ███╗
██║   ██║
╚██████╔╝
 ╚═════╝ `,
            H: `██╗  ██╗
██║  ██║
███████║
██╔══██║
██║  ██║
╚═╝  ╚═╝`,
            I: `██╗
██║
██║
██║
██║
╚═╝`,
            J: `     ██╗
	 ██║
	 ██║
██   ██║
╚█████╔╝
 ╚════╝ `,
            K: `██╗  ██╗
██║ ██╔╝
█████╔╝ 
██╔═██╗ 
██║  ██╗
╚═╝  ╚═╝`,
            L: `██╗     
██║     
██║     
██║     
███████╗
╚══════╝`,
            M: `███╗   ███╗
████╗ ████║
██╔████╔██║
██║╚██╔╝██║
██║ ╚═╝ ██║
╚═╝     ╚═╝`,
            N: `███╗   ██╗
████╗  ██║
██╔██╗ ██║
██║╚██╗██║
██║ ╚████║
╚═╝  ╚═══╝`,
            O: ` ██████╗ 
██╔═══██╗
██║   ██║
██║   ██║
╚██████╔╝
 ╚═════╝ `,
            P: `██████╗ 
██╔══██╗
██████╔╝
██╔═══╝ 
██║     
╚═╝     `,
            Q: ` ██████╗ 
██╔═══██╗
██║   ██║
██║▄▄ ██║
╚██████╔╝
 ╚══▀▀═╝ `,
            R: `██████╗ 
██╔══██╗
██████╔╝
██╔══██╗
██║  ██║
╚═╝  ╚═╝`,
            S: `███████╗
██╔════╝
███████╗
╚════██║
███████║
╚══════╝`,
            T: `████████╗
╚══██╔══╝
   ██║   
   ██║   
   ██║   
   ╚═╝   `,
            U: `██╗   ██╗
██║   ██║
██║   ██║
██║   ██║
╚██████╔╝
 ╚═════╝ `,
            V: `██╗   ██╗
██║   ██║
██║   ██║
╚██╗ ██╔╝
 ╚████╔╝ 
  ╚═══╝  `,
            W: `██╗    ██╗
██║    ██║
██║ █╗ ██║
██║███╗██║
╚███╔███╔╝
 ╚══╝╚══╝ `,
            X: `██╗  ██╗
╚██╗██╔╝
 ╚███╔╝ 
 ██╔██╗ 
██╔╝ ██╗
╚═╝  ╚═╝`,
            Y: `██╗   ██╗
╚██╗ ██╔╝
 ╚████╔╝ 
  ╚██╔╝  
   ██║   
   ╚═╝   `,
            Z: `███████╗
╚══███╔╝
  ███╔╝ 
 ███╔╝  
███████╗
╚══════╝`,
            '-': `

█████╗
╚════╝

`,
        };
        this._styleCss = [
            'background: orange; color: white; font-size: 16px;',
            'background: transparent; color: orange',
        ];
    }
    set transformedText(transformedText) {
        this._transformedText = transformedText;
    }
    get transformedText() {
        return this._transformedText;
    }
    get alphabet() {
        return this._alphabet;
    }
    get style() {
        return this._styleCss;
    }
    perform() {
        const objectTextTransformed = [...this.text].reduce((acc, letter) => {
            const letterToUpperCase = letter.toUpperCase();
            if (!Object.keys(this.alphabet).some((key) => key === letterToUpperCase))
                return acc;
            this.alphabet[letterToUpperCase]
                .split('\n')
                .forEach((row, index) => {
                if (row === '') {
                    acc[index] += '      ';
                }
                acc[index] += row;
            });
            return acc;
        }, { '0': '%c', '1': '', '2': '', '3': '', '4': '', '5': '' });
        this.transformedText = Object.values(objectTextTransformed).join('\n');
        this.transformedText += '\n\n';
        this.transformedText += `%c${this.message}\nContato: ${this.email}`;
        return [this.transformedText, ...this.style];
    }
}
export const generateDigitalSignature = (text, email, message) => {
    return new GenerateDigitalSignature(text, email, message).perform();
};
