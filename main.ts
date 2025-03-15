document.getElementById('generate').addEventListener('click', () => {
    const length: number = 12;
       const numbers: boolean = (document.getElementById('numbers') as HTMLInputElement).checked;
    const lowerCase: boolean = (document.getElementById('lowercase') as HTMLInputElement).checked;
    const upperCase: boolean = (document.getElementById('uppercase') as HTMLInputElement).checked;
    const symbols: boolean = (document.getElementById('symbols') as HTMLInputElement).checked;
    const spaces: boolean = (document.getElementById('spaces') as HTMLInputElement).checked;



         const numberChars: string = '0123456789';
         const lowerChars: string = 'abcdefghijklmnopqrstuvwxyz';
         const upperChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const symbolChars: string = '!@#$%^&*()_+-\[]{}<>?/';
        const spaceChar: string = ' ';
 


    let allChars: string = '';
    if(numbers)allChars +=numberChars;
     if(lowerCase)allChars +=lowerChars;
    if(upperCase)  allChars +=upperChars;
    if(symbols) allChars +=symbolChars;
    if (spaces) allChars +=spaceChar;




    if (allChars === '') {
        alert('parametr toplmadi.');
        return;
    }
    let password: string = '';
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    (document.getElementById('password') as HTMLElement).textContent = password;
});


document.getElementById('copy')?.addEventListener('click', () => {
         alert('parol saqlandi.');
    });
;



    