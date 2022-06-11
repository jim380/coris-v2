import Layout from "../../components/layout/Layout";
import ValidatorsContent from "../../components/Validators";
import {
  useGetChainPoolQuery,
  useGetChainValidatorsQuery,
} from '../../lib/chainApi';

function Validators() {
  
  //get all validators data for bonded, unbonded and unbounding
  const getValidators =  useGetChainValidatorsQuery()
  const ValidatorsData = getValidators?.data?.validators?.map((validator: any) => {
   return  validator
  })

  //get total bonded tokens
  const getChainPool = useGetChainPoolQuery()
  const bondedTokensFromPool = getChainPool?.data?.pool?.bonded_tokens
 
  const validatorsDetails = {
    validators: ValidatorsData,
    totalBondedTokens: bondedTokensFromPool
  }

  return (
   <> 
  <ValidatorsContent {...validatorsDetails } />
  </>
  );
}

export default Validators

Validators.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};