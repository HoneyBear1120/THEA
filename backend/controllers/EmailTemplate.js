

exports.OtpEmail = (OTP) =>{
    return otpIs=
  `<!doctype html>
  <html class="email_html" lang="en" style="min-width: 100%;background-color: #f0e0dd;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="format-detection" content="telephone=no">
    <meta name="format-detection" content="date=no">
    <meta name="format-detection" content="address=no">
    <meta name="format-detection" content="email=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="x-apple-disable-message-reformatting">
    <title>Invitation to join MMABetClub</title>
    <style type="text/css">/* Reset */
  .email_body,
  .email_section table,
  .email_section td,
  .email_section a {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%; }
  
  .email_section table,
  .email_section td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt; }
  
  .email_section a,
  .email_section a span,
  .content_section a:visited,
  .content_section a:visited span,
  .email_section address {
    text-decoration: none; }
  
  .email_section img {
    -ms-interpolation-mode: bicubic;
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none;
    -ms-interpolation-mode: bicubic; }
  
  .email_body {
    height: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important; }
  
  .email_html,
  .email_body {
    min-width: 100%; }
  
  /* Grid: Email Wrapper */
  .email_bg {
    font-size: 0;
    text-align: center;
    line-height: 100%; }
  
  /* Grid: Email Section */
  .content_section {
    max-width: 800px;
    Margin: 0 auto; }
  
  .content_section_xs {
    max-width: 416px;
    Margin: 0 auto; }
  
  /* Grid: Row */
  .content_cell,
  .column_row {
    font-size: 0;
    text-align: center; }
  
  .column_row {
    max-width: 624px;
    Margin: 0 auto; }
  
  .column_row:after {
    content: "";
    display: table;
    clear: both; }
  
  /* Grid: Columns */
  .column {
    vertical-align: top; }
  
  .column_cell {
    vertical-align: top; }
  
  .column_inline {
    width: auto;
    Margin: 0 auto;
    clear: both; }
  
  /* Grid: Columns */
  .col_1,
  .col_2,
  .col_3,
  .col_50,
  .col_order,
  .col_order_xs {
    vertical-align: top;
    display: inline-block;
    width: 100%; }
  
  .col_1 {
    max-width: 208px; }
  
  .col_2 {
    max-width: 312px; }
  
  .col_3 {
    max-width: 416px; }
  
  .col_50 {
    max-width: 400px; }
  
  .col_order {
    max-width: 156px; }
  
  /* Typography: Fallback font family  */
  .email_section a,
  .email_section a:visited,
  .email_section p,
  .email_section li,
  .email_section h1,
  .email_section h2,
  .email_section h3,
  .email_section h4,
  .email_section h5,
  .email_section h6 {
    color: inherit;
    font-family: Arial, Helvetica, sans-serif;
    Margin-top: 0px;
    Margin-bottom: 0px;
    word-break: break-word; }
  
  /* Typography: Default Sizes  */
  .email_section p,
  .email_section li {
    font-size: 16px;
    line-height: 26px; }
  
  .email_section .text_lead {
    font-size: 19px;
    line-height: 31px; }
  
  .email_section .text_xs {
    font-size: 14px;
    line-height: 22px; }
  
  /* Typography: Headings  */
  .email_section h1 {
    font-size: 38px;
    line-height: 48px; }
  
  .email_section h2 {
    font-size: 28px;
    line-height: 38px; }
  
  .email_section h3 {
    font-size: 21px;
    line-height: 28px; }
  
  .email_section h4 {
    font-size: 18px;
    line-height: 24px; }
  
  .email_section h5 {
    font-size: 16px;
    line-height: 21px; }
  
  .email_section h6 {
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 1px; }
  
  /* Typography: Bold  */
  .ebutton a,
  .ebutton_xs a,
  .email_section h1,
  .email_section h2,
  .email_section h3,
  .email_section h4,
  .email_section h5,
  .email_section h6,
  .email_section strong {
    font-weight: bold; }
  
  /* Typography: Display  */
  .column_cell .text_display {
    font-weight: lighter;
    color: inherit; }
  
  /* Typography: Buttons  */
  .ebutton td {
    font-size: 16px; }
  
  .ebutton_xs td {
    font-size: 14px; }
  
  /* Colors: Backgrounds */
  .bg_primary {
    background-color: #2376dc; }
  
  .bg_secondary {
    background-color: #e5e9ee; }
  
  .email_html,
  .email_body,
  .bg_light {
    background-color: #f0e0dd; }
  
  .bg_dark {
    background-color: #212121; }
  
  .bg_white {
    background-color: #ffffff; }
  
  .bg_facebook {
    background-color: #3664a2; }
  
  .bg_twitter {
    background-color: #1a8bf0; }
  
  .bg_instagram {
    background-color: #cf2896; }
  
  .bg_youtube {
    background-color: #e62d28; }
  
  .bg_google {
    background-color: #de5347; }
  
  .bg_pinterest {
    background-color: #be2026; }
  
  /* Colors: Text */
  .text_primary,
  .content_cell .text_primary,
  .text_primary span,
  .text_primary a {
    color: #2376dc; }
  
  .text_secondary,
  .content_cell .text_secondary,
  .text_secondary span,
  .text_secondary a {
    color: #959ba0; }
  
  .text_light,
  .content_cell .text_light,
  .text_light span,
  .text_light a {
    color: #f0e0dd; }
  
  .text_dark,
  .content_cell .text_dark,
  .text_dark span,
  .text_dark a {
    color: #333333; }
  
  .text_white,
  .content_cell .text_white,
  .text_white span,
  .text_white a,
  .ebutton a,
  .ebutton span,
  .ebutton_xs a,
  .ebutton_xs span {
    color: #ffffff; }
  
  /* Colors: Border */
  .bt_primary {
    border-top: 4px solid #2376dc; }
  
  .bt_dark {
    border-top: 4px solid #212121; }
  
  .bt_white {
    border-top: 4px solid #ffffff; }
  
  .bb_white {
    border-bottom: 1px solid #ffffff; }
  
  .bg_primary .bb_white,
  .bg_dark .bb_white {
    opacity: .25; }
  
  .bb_light {
    border-bottom: 1px solid #dee0e1; }
  
  .bt_light {
    border-top: 1px solid #dee0e1; }
  
  /* Colors: Shadow */
  .shadow_primary,
  .ebutton .bg_primary:hover,
  .ebutton_xs .bg_primary:hover {
    -webkit-box-shadow: 0 0 12px 0 #2376dc;
    box-shadow: 0 0 12px 0 #2376dc; }
  
  .shadow_dark,
  .ebutton .bg_dark:hover,
  .ebutton_xs .bg_dark:hover {
    -webkit-box-shadow: 0 0 12px 0 #212121;
    box-shadow: 0 0 12px 0 #212121; }
  
  /* Backgrounds: Image Default */
  .bg_center {
    background-repeat: no-repeat;
    background-position: 50% 0; }
  
  /* Extras: Email Summary */
  .email_summary {
    display: none;
    font-size: 1px;
    line-height: 1px;
    max-height: 0px;
    max-width: 0px;
    opacity: 0;
    overflow: hidden; }
  
  /* Rounded Corners */
  .brounded_top {
    border-radius: 4px 4px 0 0; }
  
  .brounded_bottom {
    border-radius: 0 0 4px 4px; }
  
  .brounded_left {
    border-radius: 0 0 0 4px; }
  
  .brounded_right {
    border-radius: 0 0 4px 0; }
  
  .brounded,
  .ebutton td,
  .ebutton_xs td {
    border-radius: 4px; }
  
  .brounded_circle {
    border-radius: 50%; }
  
  /* Text: Alignment */
  .text_center {
    text-align: center; }
  
  .text_center .imgr img {
    margin-left: auto;
    margin-right: auto; }
  
  .text_left {
    text-align: left; }
  
  .text_right {
    text-align: right; }
  
  /* Text: Links */
  .text_del {
    text-decoration: line-through; }
  
  .text_link a {
    text-decoration: underline; }
  
  .text_link .text_adr {
    text-decoration: none; }
  
  /* Padding Utilities */
  .py {
    padding-top: 16px;
    padding-bottom: 16px; }
  
  .py_xs {
    padding-top: 8px;
    padding-bottom: 8px; }
  
  .py_md {
    padding-top: 32px;
    padding-bottom: 32px; }
  
  .py_lg {
    padding-top: 64px;
    padding-bottom: 64px; }
  
  .px {
    padding-left: 16px;
    padding-right: 16px; }
  
  .px_xs {
    padding-left: 8px;
    padding-right: 8px; }
  
  .px_md {
    padding-left: 32px;
    padding-right: 32px; }
  
  .px_lg {
    padding-left: 64px;
    padding-right: 64px; }
  
  .pt {
    padding-top: 16px; }
  
  .pt_xs {
    padding-top: 8px; }
  
  .pt_md {
    padding-top: 32px; }
  
  .pt_lg {
    padding-top: 64px; }
  
  .pb {
    padding-bottom: 16px; }
  
  .pb_xs {
    padding-bottom: 8px; }
  
  .pb_md {
    padding-bottom: 32px; }
  
  .pb_lg {
    padding-bottom: 64px; }
  
  .pl {
    padding-left: 16px; }
  
  .pl_xs {
    padding-left: 8px; }
  
  .pl_lg {
    padding-left: 32px; }
  
  .pr {
    padding-right: 16px; }
  
  .pr_xs {
    padding-right: 8px; }
  
  .pr_lg {
    padding-right: 32px; }
  
  /* Margin Utilities */
  .content_cell .mt_0 {
    margin-top: 0px; }
  
  .content_cell .mt_xs {
    margin-top: 8px; }
  
  .content_cell .mt {
    margin-top: 16px; }
  
  .content_cell .mt_md {
    margin-top: 32px; }
  
  .content_cell .mt_lg {
    margin-top: 64px; }
  
  .content_cell .mb_0 {
    margin-bottom: 0px; }
  
  .content_cell .mb_xs {
    margin-bottom: 8px; }
  
  .content_cell .mb {
    margin-bottom: 16px; }
  
  .content_cell .mb_md {
    margin-bottom: 32px; }
  
  .content_cell .mb_lg {
    margin-bottom: 64px; }
  
  /* Images */
  .content_cell .img_inline,
  .content_cell .img_full {
    clear: both;
    line-height: 100%; }
  
  .content_cell .img_full {
    font-size: 0 !important; }
  
  .img_full img {
    display: block;
    width: 100%;
    Margin: 0px auto;
    height: auto; }
  
  /* Buttons */
  .ebutton td,
  .ebutton_xs td {
    line-height: normal;
    text-align: center;
    font-weight: bold;
    -webkit-transition: box-shadow .25s;
    transition: box-shadow .25s; }
  
  .ebutton[align=center],
  .ebutton_xs[align=center] {
    margin: 0 auto; }
  
  .ebutton td {
    padding: 13px 24px; }
  
  .ebutton_xs td {
    padding: 10px 20px; }
  
  @media only screen {
    /* Web fonts (latin only) */
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 300;
      src: local("Open Sans Light"), local("OpenSans-Light"), url(https://fonts.gstatic.com/s/opensans/v14/DXI1ORHCpsQm3Vp6mXoaTegdm0LZdjqr5-oayXSOefg.woff2) format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      src: local("Open Sans Regular"), local("OpenSans-Regular"), url(https://fonts.gstatic.com/s/opensans/v14/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }
    @font-face {
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      src: local("Open Sans Bold"), local("OpenSans-Bold"), url(https://fonts.gstatic.com/s/opensans/v14/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format("woff2");
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }
    .column_cell a,
    .column_cell p,
    .column_cell li,
    .column_cell h1,
    .column_cell h2,
    .column_cell h3,
    .column_cell h4,
    .column_cell h5,
    .column_cell h6 {
      font-family: "Open Sans", sans-serif !important; }
    .column_cell .text_display {
      font-weight: 300 !important; }
    .column_cell p,
    .column_cell li {
      font-weight: 400 !important; }
    .ebutton a,
    .ebutton span,
    .ebutton_xs a,
    .ebutton_xs span,
    .column_cell h1,
    .column_cell h2,
    .column_cell h3,
    .column_cell h4,
    .column_cell h5,
    .column_cell h6,
    .column_cell strong {
      font-weight: 700 !important; }
    /* Button Enhancement */
    .ebutton td,
    .ebutton_xs td {
      padding: 0 !important; }
    .ebutton a {
      padding: 13px 24px !important; }
    .ebutton_xs a {
      padding: 10px 20px !important; }
    .ebutton a,
    .ebutton_xs a {
      display: block !important; }
    /* Grid Fix */
    .col_50 {
      max-width: 50% !important;
      float: left; } }
  
  @media (max-width: 689px) {
    /* Columns */
    .col_1,
    .col_2,
    .col_3,
    .col_50,
    .col_order {
      display: block !important;
      max-width: 100% !important; }
    /* Content Alignment */
    .mobile_center {
      text-align: center !important; }
    .mobile_center .ebutton,
    .mobile_center .ebutton_xs,
    .mobile_center .column_inline {
      float: none !important;
      margin: 0 auto !important;
      width: auto !important;
      min-width: 0 !important;
      display: inline-block !important; }
    /* Mobile Padding */
    .mob_py {
      padding-top: 16px !important;
      padding-bottom: 16px !important; }
    .mob_py_0 {
      padding-top: 0 !important;
      padding-bottom: 0 !important; }
    .mob_py_md {
      padding-top: 32px !important;
      padding-bottom: 32px !important; }
    .mob_pt_0 {
      padding-top: 0 !important; }
    .mob_pt {
      padding-top: 16px !important; }
    .mob_pb {
      padding-bottom: 16px !important; }
    .mobile_hide {
      max-height: 0 !important;
      display: none !important;
      mso-hide: all !important;
      overflow: hidden !important;
      font-size: 0 !important; }
    /* Rounded Corners */
    .brounded_left {
      border-radius: 0 !important; }
    .brounded_right {
      border-radius: 0 0 4px 4px !important; }
    /* Images */
    .img_inline img {
      width: 100% !important;
      height: auto !important; } }
  </style>
  
  </head>
  <body class="email_body" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;min-width: 100%;background-color: #f0e0dd;height: 100% !important;margin: 0 !important;padding: 0 !important;width: 100% !important;">
    <table class="email_section" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0">    
      <tbody>
        <tr>        
          <td class="email_bg bg_light px py_lg" style="font-size: 0;text-align: center;line-height: 100%;background-color: #f0e0dd;padding-top: 64px;padding-bottom: 64px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
  
            <table class="content_section" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 800px;margin: 0 auto;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
              <tbody>
                <tr>                
                  <td class="content_cell bg_white brounded px py_md" style="font-size: 0;text-align: center;background-color: #ffffff;border-radius: 4px;padding-top: 32px;padding-bottom: 32px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                    <div>
                      <a href=${process.env.URL}><img src="https://theadev-app-assets.s3.amazonaws.com/attachments/file-1638865703626a47f32a0-5737-11ec-a8de-0f71147fd00d.png" alt="dummy" style="max-width:50%; margin: auto;" /></a>
                    </div>
                    <header style="margin-top:20px;"> 
                      <h3 style=" color: #000; font-size : 28px;">Welcome to Thea</h3> 
                    </header>
                    <div class="column_row" style="font-size: 0;text-align: center;max-width: 624px;margin: 0 auto;">
                          <table class="column" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" style="vertical-align: top;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                            <tbody>
                            <tr>
                              <td class="column_cell px py_md text_dark text_center" style="vertical-align: top;color: #333333;text-align: center;padding-top: 0px;padding-bottom: 32px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">                              
                               <table style="width: 100%;">
                                 <tr>
                                   <td>
                                   <p class="mb_md" style="color: inherit;font-family: Open Sans, sans-serif;margin-top: 10px;margin-bottom: 0px;word-break: break-word;font-size: 16px;">Hello,</p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                    <p class="mb_md" style="color: inherit;font-family: Open Sans, sans-serif;margin-top: 10px;margin-bottom: 0px;word-break: break-word;font-size: 16px;">Please use the otp below on Thea website:</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                  <p class="mt mb_xs" style="color: inherit;font-family: Open Sans, sans-serif;margin-top: 16px;margin-bottom: 8px;word-break: break-word;font-size: 28px;font-weight: bolder;"><code> ${OTP} </code></p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                  <p class="mb_md" style="color: inherit;font-family: Open Sans, sans-serif;margin-top: 10px;margin-bottom: 0px;word-break: break-word;font-size: 16px;">If you didn't request this, you can ignore this email.</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                  <p class="mb_md" style="color: inherit;font-family: Open Sans, sans-serif;margin-top: 20px;margin-bottom: 2px;word-break: break-word;font-size: 14px;line-height: 26px; color:#000; font-weight: 500 !important;">Thanks!</p>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                  <p class="mb_md" style="color: inherit;font-family: Open Sans, sans-serif;margin-bottom: 10px;word-break: break-word;font-size: 16px;line-height: 26px; color:#000; font-weight: 600 !important;">Thea Team</p>
                                  </td>
                                </tr>
                                  <td>
                                   </td>
                                 </tr>
                               </table>
                              </td>
                            </tr>
                          </tbody>
                          </table>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  </html>
  `
}


exports.ResetPwd = (reset_token) => {
  return resetPwdIs = `
  <!doctype html>
<html class="email_html" lang="en" style="min-width: 100%;background-color: #f0e0dd;">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="format-detection" content="date=no">
  <meta name="format-detection" content="address=no">
  <meta name="format-detection" content="email=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>MMABetClub - Forgot Password</title>
	<style type="text/css">/* Reset */
.email_body,
.email_section table,
.email_section td,
.email_section a {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%; }

.email_section table,
.email_section td {
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt; }

.email_section a,
.email_section a span,
.content_section a:visited,
.content_section a:visited span,
.email_section address {
  text-decoration: none; }

.email_section img {
  -ms-interpolation-mode: bicubic;
  border: 0;
  height: auto;
  line-height: 100%;
  outline: none;
  text-decoration: none;
  -ms-interpolation-mode: bicubic; }

.email_body {
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important; }

.email_html,
.email_body {
  min-width: 100%; }

/* Grid: Email Wrapper */
.email_bg {
  font-size: 0;
  text-align: center;
  line-height: 100%; }

/* Grid: Email Section */
.content_section {
  max-width: 800px;
  Margin: 0 auto; }

.content_section_xs {
  max-width: 416px;
  Margin: 0 auto; }

/* Grid: Row */
.content_cell,
.column_row {
  font-size: 0;
  text-align: center; }

.column_row {
  max-width: 624px;
  Margin: 0 auto; }

.column_row:after {
  content: "";
  display: table;
  clear: both; }

/* Grid: Columns */
.column {
  vertical-align: top; }

.column_cell {
  vertical-align: top; }

.column_inline {
  width: auto;
  Margin: 0 auto;
  clear: both; }

/* Grid: Columns */
.col_1,
.col_2,
.col_3,
.col_50,
.col_order,
.col_order_xs {
  vertical-align: top;
  display: inline-block;
  width: 100%; }

.col_1 {
  max-width: 208px; }

.col_2 {
  max-width: 312px; }

.col_3 {
  max-width: 416px; }

.col_50 {
  max-width: 400px; }

.col_order {
  max-width: 156px; }

/* Typography: Fallback font family  */
.email_section a,
.email_section a:visited,
.email_section p,
.email_section li,
.email_section h1,
.email_section h2,
.email_section h3,
.email_section h4,
.email_section h5,
.email_section h6 {
  color: inherit;
  font-family: Arial, Helvetica, sans-serif;
  Margin-top: 0px;
  Margin-bottom: 0px;
  word-break: break-word; }

/* Typography: Default Sizes  */
.email_section p,
.email_section li {
  font-size: 16px;
  line-height: 26px; }

.email_section .text_lead {
  font-size: 19px;
  line-height: 31px; }

.email_section .text_xs {
  font-size: 14px;
  line-height: 22px; }

/* Typography: Headings  */
.email_section h1 {
  font-size: 38px;
  line-height: 48px; }

.email_section h2 {
  font-size: 28px;
  line-height: 38px; }

.email_section h3 {
  font-size: 21px;
  line-height: 28px; }

.email_section h4 {
  font-size: 18px;
  line-height: 24px; }

.email_section h5 {
  font-size: 16px;
  line-height: 21px; }

.email_section h6 {
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  letter-spacing: 1px; }

/* Typography: Bold  */
.ebutton a,
.ebutton_xs a,
.email_section h1,
.email_section h2,
.email_section h3,
.email_section h4,
.email_section h5,
.email_section h6,
.email_section strong {
  font-weight: bold; }

/* Typography: Display  */
.column_cell .text_display {
  font-weight: lighter;
  color: inherit; }

/* Typography: Buttons  */
.ebutton td {
  font-size: 16px; }

.ebutton_xs td {
  font-size: 14px; }

/* Colors: Backgrounds */
.bg_primary {
  background-color: #2376dc; }

.bg_secondary {
  background-color: #e5e9ee; }

.email_html,
.email_body,
.bg_light {
  background-color: #f0e0dd; }

.bg_dark {
  background-color: #212121; }

.bg_white {
  background-color: #ffffff; }

.bg_facebook {
  background-color: #3664a2; }

.bg_twitter {
  background-color: #1a8bf0; }

.bg_instagram {
  background-color: #cf2896; }

.bg_youtube {
  background-color: #e62d28; }

.bg_google {
  background-color: #de5347; }

.bg_pinterest {
  background-color: #be2026; }

/* Colors: Text */
.text_primary,
.content_cell .text_primary,
.text_primary span,
.text_primary a {
  color: #2376dc; }

.text_secondary,
.content_cell .text_secondary,
.text_secondary span,
.text_secondary a {
  color: #959ba0; }

.text_light,
.content_cell .text_light,
.text_light span,
.text_light a {
  color: #f0e0dd; }

.text_dark,
.content_cell .text_dark,
.text_dark span,
.text_dark a {
  color: #333333; }

.text_white,
.content_cell .text_white,
.text_white span,
.text_white a,
.ebutton a,
.ebutton span,
.ebutton_xs a,
.ebutton_xs span {
  color: #ffffff; }

/* Colors: Border */
.bt_primary {
  border-top: 4px solid #2376dc; }

.bt_dark {
  border-top: 4px solid #212121; }

.bt_white {
  border-top: 4px solid #ffffff; }

.bb_white {
  border-bottom: 1px solid #ffffff; }

.bg_primary .bb_white,
.bg_dark .bb_white {
  opacity: .25; }

.bb_light {
  border-bottom: 1px solid #dee0e1; }

.bt_light {
  border-top: 1px solid #dee0e1; }

/* Colors: Shadow */
.shadow_primary,
.ebutton .bg_primary:hover,
.ebutton_xs .bg_primary:hover {
  -webkit-box-shadow: 0 0 12px 0 #2376dc;
  box-shadow: 0 0 12px 0 #2376dc; }

.shadow_dark,
.ebutton .bg_dark:hover,
.ebutton_xs .bg_dark:hover {
  -webkit-box-shadow: 0 0 12px 0 #212121;
  box-shadow: 0 0 12px 0 #212121; }

/* Backgrounds: Image Default */
.bg_center {
  background-repeat: no-repeat;
  background-position: 50% 0; }

/* Extras: Email Summary */
.email_summary {
  display: none;
  font-size: 1px;
  line-height: 1px;
  max-height: 0px;
  max-width: 0px;
  opacity: 0;
  overflow: hidden; }

/* Rounded Corners */
.brounded_top {
  border-radius: 4px 4px 0 0; }

.brounded_bottom {
  border-radius: 0 0 4px 4px; }

.brounded_left {
  border-radius: 0 0 0 4px; }

.brounded_right {
  border-radius: 0 0 4px 0; }

.brounded,
.ebutton td,
.ebutton_xs td {
  border-radius: 4px; }

.brounded_circle {
  border-radius: 50%; }

/* Text: Alignment */
.text_center {
  text-align: center; }

.text_center .imgr img {
  margin-left: auto;
  margin-right: auto; }

.text_left {
  text-align: left; }

.text_right {
  text-align: right; }

/* Text: Links */
.text_del {
  text-decoration: line-through; }

.text_link a {
  text-decoration: underline; }

.text_link .text_adr {
  text-decoration: none; }

/* Padding Utilities */
.py {
  padding-top: 16px;
  padding-bottom: 16px; }

.py_xs {
  padding-top: 8px;
  padding-bottom: 8px; }

.py_md {
  padding-top: 32px;
  padding-bottom: 32px; }

.py_lg {
  padding-top: 64px;
  padding-bottom: 64px; }

.px {
  padding-left: 16px;
  padding-right: 16px; }

.px_xs {
  padding-left: 8px;
  padding-right: 8px; }

.px_md {
  padding-left: 32px;
  padding-right: 32px; }

.px_lg {
  padding-left: 64px;
  padding-right: 64px; }

.pt {
  padding-top: 16px; }

.pt_xs {
  padding-top: 8px; }

.pt_md {
  padding-top: 32px; }

.pt_lg {
  padding-top: 64px; }

.pb {
  padding-bottom: 16px; }

.pb_xs {
  padding-bottom: 8px; }

.pb_md {
  padding-bottom: 32px; }

.pb_lg {
  padding-bottom: 64px; }

.pl {
  padding-left: 16px; }

.pl_xs {
  padding-left: 8px; }

.pl_lg {
  padding-left: 32px; }

.pr {
  padding-right: 16px; }

.pr_xs {
  padding-right: 8px; }

.pr_lg {
  padding-right: 32px; }

/* Margin Utilities */
.content_cell .mt_0 {
  margin-top: 0px; }

.content_cell .mt_xs {
  margin-top: 8px; }

.content_cell .mt {
  margin-top: 16px; }

.content_cell .mt_md {
  margin-top: 32px; }

.content_cell .mt_lg {
  margin-top: 64px; }

.content_cell .mb_0 {
  margin-bottom: 0px; }

.content_cell .mb_xs {
  margin-bottom: 8px; }

.content_cell .mb {
  margin-bottom: 16px; }

.content_cell .mb_md {
  margin-bottom: 32px; }

.content_cell .mb_lg {
  margin-bottom: 64px; }

/* Images */
.content_cell .img_inline,
.content_cell .img_full {
  clear: both;
  line-height: 100%; }

.content_cell .img_full {
  font-size: 0 !important; }

.img_full img {
  display: block;
  width: 100%;
  Margin: 0px auto;
  height: auto; }

/* Buttons */
.ebutton td,
.ebutton_xs td {
  line-height: normal;
  text-align: center;
  font-weight: bold;
  -webkit-transition: box-shadow .25s;
  transition: box-shadow .25s; }

.ebutton[align=center],
.ebutton_xs[align=center] {
  margin: 0 auto; }

.ebutton td {
  padding: 13px 24px; }

.ebutton_xs td {
  padding: 10px 20px; }

@media only screen {
  /* Web fonts (latin only) */
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src: local("Open Sans Light"), local("OpenSans-Light"), url(https://fonts.gstatic.com/s/opensans/v14/DXI1ORHCpsQm3Vp6mXoaTegdm0LZdjqr5-oayXSOefg.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: local("Open Sans Regular"), local("OpenSans-Regular"), url(https://fonts.gstatic.com/s/opensans/v14/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    src: local("Open Sans Bold"), local("OpenSans-Bold"), url(https://fonts.gstatic.com/s/opensans/v14/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format("woff2");
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215; }
  .column_cell a,
  .column_cell p,
  .column_cell li,
  .column_cell h1,
  .column_cell h2,
  .column_cell h3,
  .column_cell h4,
  .column_cell h5,
  .column_cell h6 {
    font-family: "Open Sans", sans-serif !important; }
  .column_cell .text_display {
    font-weight: 300 !important; }
  .column_cell p,
  .column_cell li {
    font-weight: 400 !important; }
  .ebutton a,
  .ebutton span,
  .ebutton_xs a,
  .ebutton_xs span,
  .column_cell h1,
  .column_cell h2,
  .column_cell h3,
  .column_cell h4,
  .column_cell h5,
  .column_cell h6,
  .column_cell strong {
    font-weight: 700 !important; }
  /* Button Enhancement */
  .ebutton td,
  .ebutton_xs td {
    padding: 0 !important; }
  .ebutton a {
    padding: 13px 24px !important; }
  .ebutton_xs a {
    padding: 10px 20px !important; }
  .ebutton a,
  .ebutton_xs a {
    display: block !important; }
  /* Grid Fix */
  .col_50 {
    max-width: 50% !important;
    float: left; } }

@media (max-width: 689px) {
  /* Columns */
  .col_1,
  .col_2,
  .col_3,
  .col_50,
  .col_order {
    display: block !important;
    max-width: 100% !important; }
  /* Content Alignment */
  .mobile_center {
    text-align: center !important; }
  .mobile_center .ebutton,
  .mobile_center .ebutton_xs,
  .mobile_center .column_inline {
    float: none !important;
    margin: 0 auto !important;
    width: auto !important;
    min-width: 0 !important;
    display: inline-block !important; }
  /* Mobile Padding */
  .mob_py {
    padding-top: 16px !important;
    padding-bottom: 16px !important; }
  .mob_py_0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important; }
  .mob_py_md {
    padding-top: 32px !important;
    padding-bottom: 32px !important; }
  .mob_pt_0 {
    padding-top: 0 !important; }
  .mob_pt {
    padding-top: 16px !important; }
  .mob_pb {
    padding-bottom: 16px !important; }
  .mobile_hide {
    max-height: 0 !important;
    display: none !important;
    mso-hide: all !important;
    overflow: hidden !important;
    font-size: 0 !important; }
  /* Rounded Corners */
  .brounded_left {
    border-radius: 0 !important; }
  .brounded_right {
    border-radius: 0 0 4px 4px !important; }
  /* Images */
  .img_inline img {
    width: 100% !important;
    height: auto !important; } }
</style>

</head>
<body class="email_body" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;min-width: 100%;background-color: #f0e0dd;height: 100% !important;margin: 0 !important;padding: 0 !important;width: 100% !important;">
  <!-- preview_text -->
  <!-- <div class="email_summary" style="display: none;font-size: 1px;line-height: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;">Reset your password</div>
  <div class="email_summary" style="display: none;font-size: 1px;line-height: 1px;max-height: 0px;max-width: 0px;opacity: 0;overflow: hidden;">&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div> -->
  <!-- notification_default_icon -->
  <table class="email_section" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tbody>
      <tr>
        <td class="email_bg bg_light px py_lg" style="font-size: 0;text-align: center;line-height: 100%;background-color: #f0e0dd;padding-top: 64px;padding-bottom: 64px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
          <table class="content_section" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 800px;margin: 0 auto;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
            <tbody>
              <tr>
                <td class="content_cell bg_white brounded bt_primary px py_md" style="font-size: 0;text-align: center;background-color: #ffffff;border-radius: 4px;padding-top: 32px;padding-bottom: 32px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                  <!-- <div class="column_row" style="font-size: 0;text-align: center;max-width: 624px;margin: 0 auto;">
                      <div class="col_1" style="vertical-align: top;display: inline-block;width: 100%;max-width: 208px;">
                        <table class="column" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" style="vertical-align: top;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                          <tbody>
                            <tr>
                              <td class="column_cell px py_xs text_primary text_left mobile_center" style="vertical-align: top;color: #2376dc;text-align: left;padding-top: 8px;padding-bottom: 8px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                <p class="img_inline" style="color: inherit;font-family: Arial, Helvetica, sans-serif;margin-top: 0px;margin-bottom: 0px;word-break: break-word;font-size: 16px;line-height: 100%;clear: both; text-align: center;"><a href="#" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;text-decoration: none;color: black;font-family: Arial, Helvetica, sans-serif;margin-top: 0px;margin-bottom: 0px;word-break: break-word;"><h2>Thea</h2></a></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div> -->
                  <!-- <div class="column_row" style="font-size: 0;text-align: center;max-width: 624px;margin: 0 auto;">
                      <div class="col_3" style="vertical-align: top;display: inline-block;width: 100%;max-width: 416px;">
                        <table class="column" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" style="vertical-align: top;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                          <tbody>
                            <tr>
                              <td class="column_cell bb_light" height="5" style="vertical-align: top;border-bottom: 1px solid #dee0e1;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                  </div> -->
                  <div class="column_row" style="font-size: 0;text-align: center;max-width: 624px;margin: 0 auto;">
                        <table class="column" role="presentation" align="center" width="100%" cellspacing="0" cellpadding="0" border="0" style="vertical-align: top;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                          <tbody>
                            <tr>
                              <td class="column_cell px py_md text_dark text_center" style="vertical-align: top;color: #333333;text-align: center;padding-top: 32px;padding-bottom: 32px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                <table class="column column_inline" role="presentation" align="center" cellspacing="0" cellpadding="0" border="0" style="vertical-align: top;width: auto;margin: 0 auto;clear: both;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                  <tbody>
                                    <tr>
                                      <td class="column_cell bg_primary brounded_circle px py text_white text_center" style="vertical-align: top;background-color: #1164ff;color: #ffffff;border-radius: 50%;text-align: center;padding-top: 16px;padding-bottom: 16px;padding-left: 16px;padding-right: 16px;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                                        <p class="img_full" style="color: inherit;Open Sans, sans-serif;margin-top: 0px;margin-bottom: 0px;word-break: break-word;font-size: 0 !important;line-height: 100%;clear: both;"><img src="https://mma-dev-assets.s3.amazonaws.com/emailPics/1632398287639-lock_white.png" width="48" height="48" alt="" style="max-width: 48px;-ms-interpolation-mode: bicubic;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;display: block;width: 100%;margin: 0px auto;"></p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <h3 class="mt mb_xs" style="color: inherit;font-family: Arial, Helvetica, sans-serif;margin-top: 16px;margin-bottom: 8px;word-break: break-word;font-size: 28px;line-height: 38px;">Forgot Your Password?</h3>
                                <p class="text_lead text_secondary mb_md" style="color: #959ba0;font-family: Open Sans, sans-serif;margin-top: 0px;margin-bottom: 32px;word-break: break-word;font-size: 19px;line-height: 31px;">Do not worry. We're here to help. Click on the button below to change the password of your Thea account.</p>
                                
                                <table role="presentation" class="ebutton" align="center" border="0" cellspacing="0" cellpadding="0" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin: 0 auto;">
                                  <tbody>
                                    <tr>
                                      <td class="bg_primary" style="background-color: #1164ff;-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;mso-table-lspace: 0pt;mso-table-rspace: 0pt;font-size: 16px;padding: 13px 24px;border-radius: 4px;line-height: normal;text-align: center;font-weight: bold;-webkit-transition: box-shadow .25s;transition: box-shadow .25s;"><a href="${process.env.URL}ResetPassword/${reset_token}" style="-webkit-text-size-adjust: 100%;-ms-text-size-adjust: 100%;text-decoration: none;color: #ffffff;font-family: Open Sans, sans-serif;margin-top: 0px;margin-bottom: 0px;word-break: break-word;font-weight: bold;"><span style="color: #ffffff;text-decoration: none;">Reset Password</span></a></td>
                                    </tr>
                                  </tbody>
                                </table>
                                <p class="mb_md" style="color: inherit;font-family: Open Sans, sans-serif;margin-top: 30px;margin-bottom: 0px;word-break: break-word;font-size: 16px;line-height: 26px;">If you did not initiate this request, please contact us immidiately at <br/><a href="mailto:helloThea.in">helloThea.in</a></p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>
  `
}

