import React from 'react'
import ParamsContent from '../../components/Params'
import Layout from "../../components/layout/Layout";


function Params() {
    return (
     <>
      <ParamsContent />
     </>
    )
}

export default Params

Params.getLayout = function getLayout(page: any) {
    return <Layout>{page}</Layout>
  };