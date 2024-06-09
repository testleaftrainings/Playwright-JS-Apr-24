import { chromium, expect, test } from "@playwright/test";

test(`Test to parse the response`, async({request})=>{
   
    //To create a new incident
    const response = await request.post("https://dev200784.service-now.com//api/now/table/incident",

        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Basic YWRtaW46azZDOC1halVXcVkl"
            },
            data:{
                "short_description": "Created via Playwright"
            }
        })

    //To get the json response
      const responseBody = await response.text();
      console.log(`Text format: ${responseBody}`);

      const parsedJSON = JSON.parse(responseBody);
      console.log(parsedJSON);
    

})

