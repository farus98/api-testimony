export default function buildMakeTestimony(){
  return function makeTestimony({
    userId  = 0,
    orderId = 0,
    otherId = 0,
    userName = '',
    type  ='',
    platform = '',
    comments ='',
    rate  = 0,
    like  = 0,
    dislike =0,
    createdTime = Date.now(),
    updateTime = Date.now(),
    status = ''
  } = {}) {

    if (!orderId){
      throw new Error('orderId must be exist')
    }

    if (!otherId){
      throw new Error('otherId must be exist')
    }

    if (!userName){
      throw new Error('userName must be exist')
    }

    if (!type){
      throw new Error('Type must be exist')
    }

    if (!comments){
      throw new Error('Comments must be exist')
    }

    if (!rate){
      throw new Error('rate must be exist')
    }

    return Object.freeze({
      getUserId : () => userId,
      getOrderId : () => orderId,
      getOtherId : () => otherId,
      getuserName: () => userName,
      getType : () => type,
      getPlatform : () => platform,
      getLike : () => like,
      getDislike : () => dislike,
      getComments : () => comments,
      getrate: () => rate,
      getStatus : () => status,
    })
  }
}
