import { expect, test } from "@playwright/test";
import { getAccessToken } from "./authHelper"

let accessToken: any;
let instUrl: any;
let id: any;

test(`Use access token in the test from the export function getAccessToken`, async()=>{

        const authData = await getAccessToken();
        accessToken = authData.accessToken;
        instUrl = authData.inst_Url;
})

test(`Test to create a new opportunity`, async({request})=>{
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity`;
    const opportunity = await request.post(oppUrl,{
        headers:{
            "Authorization":`Bearer ${accessToken}`,
            "Content-Type":"application/json"
        },
        data:{
            "name" : "Opportunity-Created from Playwright",
            "stageName" : "Value Proposition",
            "closeDate" : "2024-12-31",
        }
    })
    const opp_response = await opportunity.json();
    console.log(opp_response);
    
    //To get the opportunity id
    id = opp_response.id;
    console.log(`Opportunity id: ${id}`);
    

})

test(`Test to update the opportunity`, async({request})=>{
    const update_oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`;
    const update_opportunity = await request.patch(update_oppUrl,{
        headers:{
            "Authorization":`Bearer ${accessToken}`,
            "Content-Type":"application/json"
        },

        data:{
            "Type":"Existing Customer - Upgrade"
        }
       
    })
    //Status code
    const statusCode = update_opportunity.status();
    console.log(statusCode);
    const text = update_opportunity.statusText();
    console.log(text);
    expect(statusCode).toBe(204);
    
   

})

test(`Test to retrieve the updated opportunity`, async({request})=>{
    const update_oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`;
    const update_opportunity = await request.get(update_oppUrl,{
        headers:{
            "Authorization":`Bearer ${accessToken}`,
            "Content-Type":"application/json"
        }       
    })

    const respBody = await update_opportunity.json();
    console.log(respBody);
    
    //Status code
    const statusCode = update_opportunity.status();
    console.log(statusCode);
    const text = update_opportunity.statusText();
    console.log(text);
    expect(statusCode).toBe(200);
    
   

})