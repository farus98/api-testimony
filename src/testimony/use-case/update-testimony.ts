export default function  makeUpdateTestimony ({ testimonyDb}) {
  return async function updateTestimony (body) {
    try {
      if(!body.id){
        throw new Error('You must supply an id')
      }

      if(!body.status){
        throw new Error('You must supply an status')
      }

      console.log('usecase',body)
      const result =  testimonyDb.updateTestimonyDb(body);
      console.log('res',result)
      return result;
    }

    catch (error) {
      throw new Error(error);
    }
  }
}
