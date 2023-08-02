import { generateDigitalSignature } from './GenerateDigitalSignature';

const result = generateDigitalSignature(
	'felipe',
	'falmeidagomes13@gmail.com',
	'Bem-vindo ao meu site! Sinta-se à vontade para explorar e desenvolver com paixão!',
);

console.dir(...result);

// const mensagemDecorada = `
// %c
// 	███████╗███████╗██╗     ██╗██████╗ ███████╗    ██████╗ ███████╗██╗   ██╗
// 	██╔════╝██╔════╝██║     ██║██╔══██╗██╔════╝    ██╔══██╗██╔════╝██║   ██║
// 	█████╗  █████╗  ██║     ██║██████╔╝█████╗█████╗██║  ██║█████╗  ██║   ██║
// 	██╔══╝  ██╔══╝  ██║     ██║██╔═══╝ ██╔══╝╚════╝██║  ██║██╔══╝  ╚██╗ ██╔╝
// 	██║     ███████╗███████╗██║██║     ███████╗    ██████╔╝███████╗ ╚████╔╝
// 	╚═╝     ╚══════╝╚══════╝╚═╝╚═╝     ╚══════╝    ╚═════╝ ╚══════╝  ╚═══╝

// %cBem-vindo ao meu site! Sinta-se à vontade para explorar e desenvolver com paixão!
// Contato: falmeidagomes13@gmail.com
// `;

// console.log(
// 	mensagemDecorada,
// 	'background: orange; color: white; font-size: 16px;',
// 	'background: transparent; color: orange',
// );
