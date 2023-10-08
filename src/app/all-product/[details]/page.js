import CommonCertDetails from '@/Components/CommonDetails';
import { GetSingleProduct, getAllAdminProducts } from '@/services/product';
import React from 'react';

const DetailsPage = async ({ params }) => {

     const id = params.details;
     const SingleData = await GetSingleProduct(id);
     const allData = await getAllAdminProducts();

     return (
          <div>
               <CommonCertDetails item={SingleData?.data} data={allData?.data}> </CommonCertDetails>
          </div>
     );
};

export default DetailsPage;