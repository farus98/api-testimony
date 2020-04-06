import makeCreateTestimony from './create-testimony'
import makeGetDataTestimonyById from './get-testimony-by-id'
import makeGetDataTestimonyAll from './get-testimony-all'
import makeUpdateTestimony from './update-testimony'
import testimonyDb from '../data-access'

const createTestimony = makeCreateTestimony ({ testimonyDb})
const getDataTestimonyById = makeGetDataTestimonyById ({ testimonyDb})
const getDataTestimonyAll = makeGetDataTestimonyAll ({ testimonyDb})
const updateDataTestimony = makeUpdateTestimony ({ testimonyDb})

const testimonyService = Object.freeze({
  createTestimony,
  getDataTestimonyById,
  getDataTestimonyAll,
  updateDataTestimony
})

export default testimonyService
export {  createTestimony, getDataTestimonyById, getDataTestimonyAll, updateDataTestimony}
