import stRequest from "@/service";

export function getPageListData(url:string,queryInfo:any){
    return stRequest.post({
        url:url,
        data:queryInfo
    })
}