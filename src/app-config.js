let backendHost;

const hostname = window && window.location && window.location.hostname;

if(hostname === "localhost"){
    backendHost = "http://localhost:8080"; //8080!
}

export const API_BASE_URL = `${backendHost}`; //' 가 아니라 `임!!
