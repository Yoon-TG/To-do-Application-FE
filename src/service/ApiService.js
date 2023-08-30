import { API_BASE_URL } from "../app-config";

export function call(api, method, request){
    let options = { //매개변수로 받은 것들로 options 구성
        headers : new Headers({
            "Content-Type" : "application/json",
        }),
        url: API_BASE_URL+api,
        method: method,
    };

    if(request){ 
        //GET method
        options.body=JSON.stringify(request);
    }

    return fetch(options.url, options).then((response) => //url, options을 매개변수로 받아 함수 작성
        response.json().then((json) => {
            if(!response.ok){
                //resposne.ok가 true = 정상적인 응답 / false = 에러 
                //-> 여기서는 !가 붙어있으므로 에러가 난 경우 return 실행
                return Promise.reject(json);
            }
            return json;
        })
        );
}

