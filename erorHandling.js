const Checkumur = (umur) =>{
    if(umur >28){
        throw 'sudah dewasa'
    }
    return 'takut tambah kecewa'
}
try{
    console.log((Checkumur)(40))
}catch(Error){
   console.error("eror",Error)
} finally{
    console.log("ternya mimpi")
}