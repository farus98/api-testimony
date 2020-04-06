export default function makeGetDataTestimonyById ({ testimonyDb}) {
  return async function getDataTestimonyById (body) {
      try {
        if(!body.otherId) {
          if(!body.orderId && !body.status){
            throw new Error('You must supply an orderId and an status ')
          }

          console.log('usecase', body)
          const result =  await testimonyDb.getTestimonyByOtherId(body);
          console.log('res',result)
          return result;
        }

        else {
          if(!body.otherId ){
            throw new Error('You must supply an orderId')
          }

          if(!body.status){
            throw new Error('You must supply an status')
          }
          console.log('usecase', body)
          const result =  await testimonyDb.getTestimonyByOrderId(body);
          console.log('res',result)
          return result;
        }
        if else{
          throw new Error('You must supply an otherId')
        }
    }


    catch (error) {
      throw new Error(error);
    }
  }
}
