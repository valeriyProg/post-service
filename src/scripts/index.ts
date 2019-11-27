import { HumanClient } from "./human-client";
import { Package } from "./package";
import { PostCompany } from "./post-company";
import { PostOffice } from "./post-office";

// let pack = new Package();// let clients = [
//     new HumanClient('human', 'Ivan Ivanov', 'Khmelnitskiy, Svoboda st. 12/1', 26, '1-2-3-4'),
//     new HumanClient('human', 'Ivan Ivanov', 'Khmelnitskiy, Svoboda st. 12/1', 26, '1-2-3-4'),
// ]
let ivan = new HumanClient('human', 'Ivan Ivanov', 'Khmelnitskiy, Svoboda str. 12/1', 26, '1-2-3-4');
let oleg = new HumanClient('human', 'Oleg Olegovych', 'Khmelnitskiy, Bandera str. 22/5', 26, '4-22-31-44');

ivan.createPack({
    type: 'box',
    name: 'Box 1',
    weight: '300g',
    price: '$22'
});
oleg.createPack({
    type: 'banderol',
    name: 'small banderol',
    weight: '40g',
    price: '$4'
});

const ukrPoshta = new PostCompany('0001', 'Ukraine Post', 'Kyiv, Shevchenka street, 23', 'Mr. X');
// ukrPoshta.createOffice(
//     new PostOffice(
//         'UkrPoshta Lviv ', 'Lviv', ukrPoshta, ukrPoshta.id + '1'
//     ));
// const novaPoshta = new PostCompany('012081', 'Nova Poshta', 'Kyiv, Maidan Nezalejnosti, 2', 'Mr. Y');
// novaPoshta.createOffice(
//     new PostOffice(
//         'NovaPoshta Kherson', 'Lherson', novaPoshta, novaPoshta.id + '1'
//     ));
ukrPoshta.createOffice({ name: 'UkrPoshta Lviv ', city: 'Lviv', id: '1' });
const novaPoshta = new PostCompany('012081', 'Nova Poshta', 'Kyiv, Maidan Nezalejnosti, 2', 'Mr. Y');
novaPoshta.createOffice({ name: 'NovaPoshta Kherson ', city: 'Kherson', id: '1' });
console.log(ivan);
console.log(oleg);

console.log(ukrPoshta);
console.log(novaPoshta);