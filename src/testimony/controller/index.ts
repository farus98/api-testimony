import {
  createTestimony,
  getDataTestimonyById,
  getDataTestimonyAll,
  updateDataTestimony
} from '../use-case'

import makePostTestimony from './post-testimony'
import makeGetTestimonyById from './get-testimony-by-id'
import makePatchTestimony from './patch-testimony'
import makeGetTestimonyAll from './get-testimony-all'

const postTestimony = makePostTestimony({createTestimony})
const getTestimonyById = makeGetTestimonyById({getDataTestimonyById})
const getTestimonyAll = makeGetTestimonyAll ({getDataTestimonyAll})
const patchTestimony = makePatchTestimony({updateDataTestimony})

const testimonyController =  Object.freeze({
  postTestimony,
  getTestimonyById,
  getTestimonyAll,
  patchTestimony
})

export default  testimonyController
export { postTestimony, getTestimonyById, getTestimonyAll, patchTestimony}
