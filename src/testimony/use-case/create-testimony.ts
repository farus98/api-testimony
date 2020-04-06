import makeTestimony from '../entity'

export default function makeCreateTestimony ({ testimonyDb}) {
  return async function createTestimony (body){
    console.log('usecase',body)
      try {
        const testimony = makeTestimony(body);
        console.log('res testimony',testimony);

        const checkExist = await testimonyDb.getTestimonyAll({orderId: body.orderId, otherId: body.otherId})

        if(checkExist.length == 0){
          const result = await testimonyDb.createTestimonyDb(body)
          console.log('result',result)
          return result
        }

        else{
          throw new Error('Data Already Exist');
        }
      }

      catch (error) {
        console.log('catch')
        throw new Error(error)
      }


  }
}
