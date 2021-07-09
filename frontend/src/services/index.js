import $router from '@/router';
import axios from 'axios';
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
})
Service.interceptors.response.use(
    (response) => {
        console.log('Interceptor', response);
        return response;
    },
    (error) => {
        if(error.response.status == 401){
            console.log("status of?")
            
        }
        //console.error('Interceptor', error.response)
    }
);
let Dogadaji = {
    dodaj_dogadaj(dogadaji){console.log("ulazim u dodaj dogadaj")
        
        return Service.post('/dogadaji', dogadaji);
        
    },
    async salji_dogadaj(){
        let response = await Service.get(`/dogadaji`);
        console.log(response);
        let data = response.data;
        
        data=data.map((doc)=>{
        return {
            id: doc._id,
            imeIgre: doc.imeIgre,
            datum: doc.datum,
            slika: doc.slika,
        }    
        });
        console.log("Podaci data: ",data);
        return data;
    },
    async jedanDogadaj(id){
        console.log("Ulazim???")
        let response = await Service.get(`/dogadaji/${id}`);
        console.log(response);
        let doc = response.data;
        return {
            id: doc._id,
            imeIgre: doc.imeIgre,
            grad: doc.grad,
            datum: doc.datum,
            vrijeme: doc.vrijeme,
            adresa: doc.adresa,
            oprema: doc.oprema,
            slika: doc.slika,
        };
    }, 
};
console.log("nakon errora")
export { Service, Dogadaji }