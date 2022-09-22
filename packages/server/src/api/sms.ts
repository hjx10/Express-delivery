import * as tencentcloud from 'tencentcloud-sdk-nodejs'

import constant from '@/constant'

// Depends on tencentcloud-sdk-nodejs version 4.0.3 or higher
const SmsClient = tencentcloud.sms.v20210111.Client

// 实例化一个认证对象，入参需要传入腾讯云账户secretId，secretKey,此处还需注意密钥对的保密
// 密钥可前往https://console.cloud.tencent.com/cam/capi网站进行获取
// 实例化要请求产品的client对象,clientProfile是可选的
const client = new SmsClient({
  credential: {
    secretId: constant.smsSecretId,
    secretKey: constant.smsSecretKey
  },
  region: 'ap-nanjing',
  profile: {
    httpProfile: {
      endpoint: 'sms.tencentcloudapi.com'
    }
  }
})

export function sendSms(phone: string, code: string) {
  return client.SendSms({
    PhoneNumberSet: ['+86' + phone],
    SmsSdkAppId: constant.SmsSdkAppId,
    SignName: '世纪暮光',
    TemplateId: '477473',
    TemplateParamSet: [code, '5']
  })
}
