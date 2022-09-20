
#葫芦侠：超级轩

#我也是小白，学习当中，每一个代码都是呕心沥血

#白嫖是一件不好的事情


[rewrite_local]


^https:\/\/license\.pdfexpert\.com\/api\/2\.0\/documents\/subscription\/refresh url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/documents.js

[mitm] 

hostname = license.pdfexpert.com

*******************************/


var objc = JSON.parse($response.body);

    objc = 
{"bundleId":"com.readdle.ReaddleDocsIPad","chargingPlatform":"iOS AppStore","receiptId":1505921661000,"originalTransactionId":430001223657482,"inAppStates":[{"type":"subscription","productId":"com.readdle.ReaddleDocsIPad.subscription.month10_allusers","originalTransactionId":430001223657482,"productName":"subscription","isEligibleForIntroPeriod":false,"subscriptionExpirationDate":"01:26 24/09/9999","subscriptionState":"trial","subscriptionAutoRenewStatus":"autoRenewOff","isInGracePeriod":false,"isInBillingRetryPeriod":false,"entitlements":[]},{"type":"custom purchase","productId":"documents6-user","originalTransactionId":"0000","entitlements":[]}],"receiptStatus":"ok","statisticsInfo":{"events":[]}}


$done({body : JSON.stringify(objc)});