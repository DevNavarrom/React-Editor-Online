const reservadas = ['SELECT ', 'INSERT ', 'UPDATE ', 'DELETE ', 'CREATE ', 'INTO ', 'FROM ', 'WHERE ', 'ASC ', 'DESC ', 'JOIN ', 'LEFT ', 'LIKE ',
    'LIMIT ', 'VALUE ', 'IN ', 'DEFINER '
];

export function contarCoincidencias(cadena, caracter) {
    var indices = [];
    for (var i = 0; i < cadena.length; i++) {
        if (cadena[i].toLowerCase() === caracter) indices.push(i);
    }
    return indices.length;
}




export function quitarTags(str, styles) {

    str = replaceAll(str, '</div>', '');
    str = replaceAll(str, '</a>', '')
    str = replaceAll(str, '<font color="#17a2b8">', '')
    str = replaceAll(str, '</font>', '')

    for (let style of styles) {

        str = replaceAll(str, `<a style="color:${style.value}">`, '');

    }


    let lines = str.split('<div>');

    return lines;
}
export function clean(str, styles) {

    str = replaceAll(str, '<div>', '');
    str = replaceAll(str, '<br>', '');
    str = replaceAll(str, '</div>', '');
    str = replaceAll(str, '</a>', '')
    str = replaceAll(str, '<font color="#17a2b8">', '')
    str = replaceAll(str, '</font>', '')
    str = replaceAll(str, '&nbsp;', '')

    for (let style of styles) {

        str = replaceAll(str, `<a style="color:${style.value}">`, '');

    }


    return str;
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'gi'), replace);
}


export function formatJson(lines, styles) {

    return comillas(lines, styles);


}


export function formatSQL(lines, styles) {

    let text = comillasSimples(lines, styles);


    for (let reservada of reservadas) {

        text = replaceAll(text, reservada, `<a style="color:${styles[1].value}">${reservada}</a>`);
    }



    return text;


}
export function comillas(lines, style) {

    let text = "";

    let i = 0;


    for (let line of lines) {
        let comillaInicial = false;
        let newLine = "";

        for (let i = 0; i < line.length; i++) {
            let char = line.charAt(i);
            if (char === '"') {

                if (!comillaInicial) {
                    newLine += `<a style="color:${style[0].value}">` + char;
                    comillaInicial = true;
                } else {

                    newLine += char + '</a>';
                    comillaInicial = false;

                }


            } else {

                newLine += char;
            }

        }

        if (comillaInicial) {
            newLine += '</a>';
        }


        if (i !== 0) {
            text += `<div>${newLine}</div>`
        } else {

            text += newLine;

        }


        i++;

    }


    return text;
}
export function comillasSimples(lines, style) {

    let text = "";

    let i = 0;


    for (let line of lines) {
        let comillaInicial = false;
        let newLine = "";

        for (let i = 0; i < line.length; i++) {
            let char = line.charAt(i);
            if (char === "'") {

                if (!comillaInicial) {
                    newLine += `<a style="color:${style[2].value}">` + char;
                    comillaInicial = true;
                } else {

                    newLine += char + '</a>';
                    comillaInicial = false;

                }


            } else {

                newLine += char;
            }

        }

        if (comillaInicial) {
            newLine += '</a>';
        }


        if (i !== 0) {
            text += `<div>${newLine}</div>`
        } else {

            text += newLine;

        }


        i++;

    }


    return text;
}



export function dividirLineasJson(value) {
    let text = value.replace(/{/gi, '{[enter]');
    text = text.replace(/}/gi, '[enter]}');
    text = text.replace(/",/gi, '",[enter]');
    let lines = text.split('[enter]')
    return lines;

}

export function dividirLineasSQL(value) {
    let text = value.replace(/;/gi, ';[enter]');
    let lines = text.split('[enter]')
    return lines;

}