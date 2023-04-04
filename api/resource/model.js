const db = require("../../data/dbConfig");

async function getResource() {
  return await db("resources");
}

async function addResource(resourceobj) {
  await db("resources").insert(resourceobj);

  const response = await db("resources").where(
    "resource_name",
    resourceobj.resource_name
  );

  return await response[0];
}

module.exports = { addResource, getResource };

//! NOTLAR:
/*
    1.Her db sorgusu aslında bir tablo dönüyor. 
     Tabloyu array olarak tablodaki satırları objeler olarak düşünebilirsin
     Bu nedenle eğer where ile tek satır geleceğini bildiğimiz bir sorgu yapıyorsak
        1.1 ya SORGU[0] diyerek içindeki tek objeyi alırız
        1.2. ya da sorgunun sonuna first() diyerek ilk objeyi alırız

    2.insert ile bir şey eklerken 2 yöntem:
    !Önce ekle sonra ismiyle ara    
        async function addResource(obj) {
    
            await db("resources").insert(obj);

            const response = await db("resources").where("resource_name", obj.resource_name);

            return await response[0];}
    !insert komutu eklenen objenin id sini array içinde döner, ekleyip yeni oluşan id ile arama
        const addResource = async (obj) => {

            const [id] = await db("resources").insert(obj); (köşeli yazmayınca hata vermiyor)

            const response = await db("resources").where({ resource_id: id }).first();
            
            return response;};

*/
