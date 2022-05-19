import useSWR from "swr";
import Layout from "../../components/layout/Layout";
import cache from '../../backend/utils/DB/cache'
import { makeStore } from "../../lib/store";
import {
    getChainValidators,
  getRunningOperationPromises,
} from '../../lib/chainApi';


function Validators() {
  
  //get blocks
  const validators = async () => {
    const store = makeStore();
    const validatorsData = await store.dispatch(getChainValidators.initiate());
    const results =  JSON.parse(JSON.stringify(validatorsData));
    await Promise.all(getRunningOperationPromises());
    return results
  }

  //useSWR handles caching, revalidation, focus tracking, refetching on intervals
  const  { data, error }  = useSWR('/validators', validators, { refreshInterval: 5000 })
   console.log(data, error)

  return (
   <> 
  
  </>
  );
}

export default Validators

Validators.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>
};