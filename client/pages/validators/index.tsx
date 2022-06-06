import Layout from "../../components/layout/Layout";
import ValidatorsContent from "../../components/Validators";
import {
  useGetChainPoolQuery,
  useGetChainValidatorsQuery,
} from '../../lib/chainApi';

function Validators() {
  
  const getValidators =  useGetChainValidatorsQuery()
  const validatorsData = getValidators?.data?.validators?.map((validator: any) => {
   return  validator
  })

  const getChainPool = useGetChainPoolQuery()
  const bondedTokensFromPool = getChainPool?.data?.pool?.bonded_tokens
 
  const validatorsDetails = {
    validators: validatorsData,
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