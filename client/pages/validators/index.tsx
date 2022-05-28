import Layout from "../../components/layout/Layout";
import {
  useGetChainValidatorsQuery,
} from '../../lib/chainApi';


function Validators() {
  
    const validatorsData =  useGetChainValidatorsQuery()

  const {isLoading, error, data}  =  validatorsData
   console.log(data)

  return (
   <> 
  
  </>
  );
}

export default Validators

Validators.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};