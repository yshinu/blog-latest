
'use client'
import { getTotal } from '@/action/getPostsAction';
import { Pagination } from '@nextui-org/pagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function CustomPagination() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [total,setTotal] = useState(5)
  const [currentPage,setCurrentPage] = useState(1)
  useEffect(()=>{
    const searchParamPage = +searchParams.get("page")!
    if(Number.isNaN(searchParamPage)){
      setCurrentPage(1)
    }else{
      setCurrentPage(searchParamPage)
    }
    getTotal().then((data)=>{
      setTotal(data)
    })
  },[])
  return (
    <div className={`w-full overflow-hidden text-right flex justify-center py-8  ${total<=5&&"hidden"}`}>
      <Pagination
      
        key={'secondary'}
        total={Math.ceil(total/5)}
        page={currentPage}
        initialPage={1}
        color={'secondary'}
        onChange={(number)=>{
            router.push("/?page="+number,{scroll:false})
        }}
      />
    </div>
  );
}

export default CustomPagination;
