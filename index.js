import axios from 'axios';





export const getPlacesData=async(type,sw,ne)=>{
    try{
        const {data:{data}}=await axios.get(
          `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`
        , {
   
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude:sw.lng ,
              tr_longitude: ne.lng,
              
            },
            headers: {
              'X-RapidAPI-Key': '4e87ce574emsh38341bd8e316314p1b5021jsn4f6020034936',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;

        // request
    }
    catch(error){
        console.log(error)

    }
}