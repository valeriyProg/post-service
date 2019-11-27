import { HumanClient } from "./human-client";
import { PostCompany } from "./post-company";

let ivan = new HumanClient(
    'human', 'Ivan Ivanov',
    'Khmelnitskiy, Svoboda str. 12/1', 26, '1-2-3-4');
let oleg = new HumanClient(
    'human', 'Oleg Olegovych',
    'Khmelnitskiy, Bandera str. 22/5', 26, '4-22-31-44');

ivan.createPack({
    type: 'box',
    name: 'Box 1',
    weight: '300g',
    price: '$22'
});
ivan.createPack({
    type: 'box',
    name: 'Box 2',
    weight: '400g',
    price: '$42'
});
oleg.createPack({
    type: 'banderol',
    name: 'small banderol',
    weight: '40g',
    price: '$4'
});

const ukrPoshta = new PostCompany(
    '0001', 'Ukraine Post',
    'Kyiv, Shevchenka street, 23', 'Mr. X');
const ukrPostOfficeLviv = ukrPoshta.createOffice({ name: 'UkrPoshta Lviv ', city: 'Lviv', id: '1' });
const ukrPostOfficeKyiv = ukrPoshta.createOffice({ name: 'UkrPoshta Kyiv', city: 'Kyiv', id: '2' });

const novaPoshta = new PostCompany(
    '012081', 'Nova Poshta',
    'Kyiv, Maidan Nezalejnosti, 2', 'Mr. Y');
const novaPoshtaOffice = novaPoshta.createOffice({ name: 'NovaPoshta Kherson ', city: 'Kherson', id: '1' });

//Неявно, по нормальному,  toString викликає  тільки Microsoft Edge, того викликаю явно
console.log(ivan.toString());
console.log(oleg.toString());

console.log("::::::::::TRANSACTION - BEGIN:::::::::");

ukrPostOfficeLviv.showStore();
ukrPostOfficeLviv.sendPackage(ivan, oleg, ukrPostOfficeKyiv, ivan.getPack('Box 1', 'box'));
console.log("::::::::::TRANSACTION - END:::::::::");
// ukrPostOfficeLviv.showTransactionsLog();
ukrPostOfficeLviv.showStore();

console.log(ivan.toString());
console.log("KYIV OFFICE STORE BEFORE GIVE:");

ukrPostOfficeKyiv.showStore();
ukrPostOfficeKyiv.givePackToClient(oleg);
console.log("KYIV OFFICE STORE AFTER GIVING:");

// ukrPostOfficeKyiv.showTransactionsLog();
console.log(oleg.toString());
