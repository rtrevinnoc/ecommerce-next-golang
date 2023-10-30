import { Amplify } from "aws-amplify";

export function initAmplify() {
  Amplify.configure({
    aws_cognito_region: "us-east-2",
    aws_user_pools_id: "us-east-2_uerRyonJi",
    aws_user_pools_web_client_id: "2t4qclt2vkqvrmfh7vvocomq2u",
    aws_cognito_identity_pool_id:
      "us-east-2:72a3b370-9791-437a-bcea-a01fe309bded",
      
  });
}
