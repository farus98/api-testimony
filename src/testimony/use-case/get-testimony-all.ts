export default function makeGetDataTestimonyAll ({ testimonyDb}) {

  return async function getDataTestimonyAll (body) {
    try {

      console.log('usecase', body)
      const result =  await testimonyDb.getTestimonyAll(body);
      console.log('res',result)
      return result;

    } catch (error) {
      throw new Error(error);
    }

  }

}
