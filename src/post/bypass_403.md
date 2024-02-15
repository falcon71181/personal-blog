---
date: "02/10/2023"
title: Bypassing 403 Protection To Get Pagespeed Admin Access
image: https://miro.medium.com/v2/resize:fit:685/1*HryG6Dlh7LSaDX5YwFXHDA.png
description: But should you stop right here🤔? Obviously no😈, always try to break into these restrictions to get sensitive data or access to restricted resource.
---

### How to Bypass 403 Restrictions?

&nbsp;

To bypass 403 restrictions, there are several methods you can try. Here are some commonly used techniques:

&nbsp;

1. **Adding URL Paths**: You can try adding certain paths to the URL or file that is forbidden. Some commonly used paths include:

   - `/*`
   - `/%2f/`
   - `/./`
   - `/`
   - `/*/`

&nbsp;

2. **Adding Headers in Request**: Another method is to add different headers in the request with the value `127.0.0.1`. Some headers that can be used include:

   - `X-Custom-IP-Authorization`
   - `X-Forwarded-For`
   - `X-Forward-For`
   - `X-Remote-IP`
   - `X-Originating-IP`
   - `X-Remote-Addr`
   - `X-Client-IP`
   - `X-Real-IP`

   These headers can sometimes help in bypassing restrictions .

&nbsp;

3. **Changing the Request Method Type**: Changing the method from GET to POST, or vice versa, can also sometimes lead to bypassing the restrictions.

Please note that bypassing 403 restrictions may be illegal or against the terms of service of the website in question. It is important to respect the rules and regulations set by website owners and administrators.

For more information and detailed examples, you can refer to the following resources:

- [GitHub - yunemse48/403bypasser](https://github.com/yunemse48/403bypasser)
- [Infosec Write-ups - 403 Forbidden Bypass Leads to Hall of Fame](https://infosecwriteups.com/403-forbidden-bypass-leads-to-hall-of-fame-ff61ccd0a71e)
- [GitHub - iamj0ker/bypass-403](https://github.com/iamj0ker/bypass-403)

&nbsp;

Remember to always use these techniques responsibly and ethically.
