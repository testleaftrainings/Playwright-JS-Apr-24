import { expect, test } from "@playwright/test";

let accessToken:any;
let instUrl:any;
let id:any;

test(`To generate the access token`, async({request})=>{

    const clientID = "3MVG9fe4g9fhX0E5hbGhek7Fp9ijXU30Q2eWnfUpEFvJ1mkEJCNcHmE01luXmSbgA73HgGRy5Ouj3c1IE2SLZ";
    const clientSecret = "0184AC8597512459A6BF96E1F46CB699EAEA1CEC34212BDDF383F28F99CCB376";
    const username = "majay3574@gmail.com";
    const password = "Ajaymichael@8428";
    const grant_type = "password";
    const url = "https://login.salesforce.com/services/oauth2/token";

   const generatingToken = await request.post(url,
        {
            headers:{
                "Content-Type":"application/x-www-form-urlencoded",
                "Connection": "keep-alive"
            },
            form:{
                "grant_type":grant_type,
                "client_id":clientID,
                "client_secret":clientSecret,
                "username":username,
                "password":password
            }
        })

        const generatingTokenJSON = await generatingToken.json();
        //console.log(generatingTokenJSON);

        //Access Token
        accessToken = generatingTokenJSON.access_token;
        console.log(`Access Token generated: ${accessToken}`);

        //Instance Url
        instUrl = generatingTokenJSON.instance_url;
        console.log(`Instance url: ${instUrl}`);    
        
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