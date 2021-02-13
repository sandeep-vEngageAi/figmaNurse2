function handleErrors(response) {
    console.log("ERROR", response);
    if (!response.ok) {
    }else if(Array.isArray(response.json()) != true){
      throw Error(response.statusText);
      
    }
    return response;
  }