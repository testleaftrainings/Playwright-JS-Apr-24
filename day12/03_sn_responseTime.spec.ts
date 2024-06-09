import { chromium, expect, test } from "@playwright/test";

test(`Test to calculate the respnse time`, async({request})=>{
    const startTime = performance.now();
   
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
      const responseBody = await response.json();
      console.log(responseBody);
      
    //To get the status code
    const apiStatusCode = response.status();
    console.log(`The status code is ${apiStatusCode}`);
    //Assertion
    expect(apiStatusCode,`expecting api status code to be 201`).toBe(201)

    //To get the incident number
    const inc_num = responseBody.result.number;
    console.log(`The incident number: ${inc_num}`);   
    const endTime = performance.now();
    const responseTime = endTime-startTime;
    console.log(`Response Time: ${responseTime}`);

    //Assertion
    expect(responseTime).toBeLessThan(1500);
    

})

