class GenerateDigitalSignature {
	private _alphabet: { [key: string]: string };
	private _transformedText: string = '';
	private _styleCss: string[] = [];
	constructor(
		private text: string,
		private email: string,
		private message: string,
	) {
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

	private set transformedText(transformedText: string) {
		this._transformedText = transformedText;
	}

	private get transformedText() {
		return this._transformedText;
	}

	private get alphabet() {
		return this._alphabet;
	}

	private get style() {
		return this._styleCss;
	}

	perform() {
		const objectTextTransformed = [...this.text].reduce(
			(acc, letter) => {
				const letterToUpperCase = letter.toUpperCase();
				if (!Object.keys(this.alphabet).some((key) => key === letterToUpperCase))
					return acc;
				(this.alphabet[letterToUpperCase] as string)
					.split('\n')
					.forEach((row, index) => {
						if (row === '') {
							acc[index] += '      ';
						}
						acc[index] += row;
					});
				return acc;
			},
			{ '0': '%c', '1': '', '2': '', '3': '', '4': '', '5': '' },
		);
		this.transformedText = Object.values(objectTextTransformed).join('\n');
		this.transformedText += '\n\n';

		this.transformedText += `%c${this.message}\nContato: ${this.email}`;
		return [this.transformedText, ...this.style];
	}
}

export const generateDigitalSignature = (
	text: string,
	email: string,
	message: string,
) => {
	return new GenerateDigitalSignature(text, email, message).perform();
};
