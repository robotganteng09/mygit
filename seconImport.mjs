import { salam,pujian,penjumlahan,perkalian } from "./ImportExport.mjs";

salam()
pujian()
console.log("penjumlahan :" + penjumlahan(2,4))
console.log("perkalian :" + perkalian(9,3))

import * as person from "./ImportExport.mjs"
console.log(person.nama)
console.log(person.nomer)
console.log(person.sekolah)
import { salam as hallo } from "./ImportExport.mjs";
hallo()

//  kombinasi nilai export dan import
import Abel , {artist as beautiful} from "./ImportExport.mjs";
Abel() // default
beautiful() // ini named 