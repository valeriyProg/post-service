import { HumanClient } from "./human-client";
import { Package } from "./package";

// let pack = new Package();
let ivan = new HumanClient('human', 'Ivan Ivanov', 'Khmelnitskiy, Svoboda str. 12/1', 26, '1-2-3-4');
let oleg = new HumanClient('human', 'Oleg Olegovych', 'Khmelnitskiy, Bandera str. 22/5', 26, '4-22-31-44');
ivan.createPack({
    type: 'box',
    name: 'Pack 1',
    weight: '300g',
    price: '$22'
});
// let clients = [
//     new HumanClient('human', 'Ivan Ivanov', 'Khmelnitskiy, Svoboda st. 12/1', 26, '1-2-3-4'),
//     new HumanClient('human', 'Ivan Ivanov', 'Khmelnitskiy, Svoboda st. 12/1', 26, '1-2-3-4'),
// ]