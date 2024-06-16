import { chromium } from "@playwright/test";

async function getAccessToken(){
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    const clientID = "3MVG9fe4g9fhX0E5hbGhek7Fp9ijXU30Q2eWnfUpEFvJ1mkEJCNcHmE01luXmSbgA73HgGRy5Ouj3c1IE2SLZ";
    const clientSecret = "0184AC8597512459A6BF96E1F46CB699EAEA1CEC34212BDDF383F28F99CCB376";
    const username = "majay3574@gmail.com";
    const password = "Ajaymichael@8428";
    const grant_type = "password";
    const url = "https://login.salesforce.com/services/oauth2/token";

    const generatingToken = await apiRequestContext.post(url,{

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
    console.log(generatingTokenJSON);
    return{
        accessToken: generatingTokenJSON.access_token,
        inst_Url: generatingTokenJSON.instance_url
    }
}

export {getAccessToken};