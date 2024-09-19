import { Pagination } from "@nextui-org/pagination";

function CustomPagination() {
    return ( <div  className="w-full overflow-hidden text-right flex justify-center py-8">


<Pagination key={"secondary"} total={10} initialPage={1} color={"secondary"} />
    </div> );
}

export default CustomPagination;