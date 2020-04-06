export default function makeTestimonyDb({schemaDb}) {
  return Object.freeze({
    getTestimonyByOrderId,
    getTestimonyByOtherId,
    getTestimonyAll,
    getTestimonyFindOne,
    createTestimonyDb,
    updateTestimonyDb
    //deleteTestimony
  })

  async function createTestimonyDb (body) {
    schemaDb.create({...body})
    .then(result => {
      console.log('post', result)
    })
    .catch(error =>{
        console.log(error);
    })
  }

  async function getTestimonyByOrderId (orderId) {
    return new Promise(function(resolve, reject) {
      schemaDb.find(orderId)
      .then(result => {
        console.log(result)
        resolve(result);
      })
      .catch(err =>{
          console.log(err);
          reject(err);
      })
    })
  }

  async function getTestimonyByOtherId ({otherId, type, status}) {
    return new Promise(function(resolve, reject) {
      schemaDb.findOne({otherId, type, status})
      .then(result => {
        console.log(result)
        resolve(result);
      })
      .catch(err =>{
          console.log(err);
          reject(err);
      })
    })
  }

  async function getTestimonyAll (params) {
    return new Promise(function(resolve, reject) {
      schemaDb.find({...params})
      .then(result => {
        console.log(result)
        resolve(result);
      })
      .catch(err =>{
          console.log(err);
          reject(err);
      })
    })
  }

  async function updateTestimonyDb ({ id: _id , status }) {
    schemaDb.updateOne({ _id}, { $set: { status } })
    .then(result => {
      console.log('update',result)
    })
    .catch(err =>{
        console.log(err)
    })
  }

  // async function deleteTestimony ({ id: _id }) {
  //   schemaDb.deleteOne({ _id })
  //   .then(result => {
  //     console.log('update',result)
  //   })
  //   .catch(err =>{
  //       console.log(err)
  //   })
  // }

}
