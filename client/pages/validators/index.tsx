import Layout from "../../components/layout/Layout";
import ValidatorsContent from "../../components/Validators";
import {
  useGetChainValidatorsQuery,
} from '../../lib/chainApi';


function Validators() {
  
  const getValidators =  useGetChainValidatorsQuery()
  const validatorsData = getValidators?.data?.validators?.map((validator: any) => {
   return  validator
  })
  const validatorsDetails = {
    validators: validatorsData
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